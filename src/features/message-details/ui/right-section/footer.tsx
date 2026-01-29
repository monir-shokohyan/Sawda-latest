import { StickyPaper } from '@features/message-details/styles'
import { RightFooterProps, AttachedFile } from '@features/message-details/types'
import {
  ActionIcon,
  Group,
  TextInput,
  FileButton,
  Tooltip,
  Text,
  Progress,
  Modal,
  Stack,
  Button,
  Box,
} from '@mantine/core'
import { MdSend, MdImage, MdMic, MdStop, MdClose } from 'react-icons/md'
import { useState, useRef, useEffect } from 'react'
import { notifications } from '@mantine/notifications'
import imageCompression from 'browser-image-compression'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB in bytes
const MAX_FILES = 4

const Footer = ({
  inputValue,
  setInputValue,
  handleSendMessage,
  handleKeyPress,
}: RightFooterProps) => {
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([])
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [showRecordModal, setShowRecordModal] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current)
      }
      attachedFiles.forEach((attached) => {
        if (attached.preview) {
          URL.revokeObjectURL(attached.preview)
        }
      })
    }
  }, [attachedFiles])

  const getFileType = (file: File): AttachedFile['type'] => {
    if (file.type.startsWith('image/')) return 'image'
    if (file.type.startsWith('audio/')) return 'audio'
    return 'other'
  }

  const compressImage = async (file: File): Promise<File> => {
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      }

      const compressedFile = await imageCompression(file, options)

      const originalSize = (file.size / 1024 / 1024).toFixed(2)
      const compressedSize = (compressedFile.size / 1024 / 1024).toFixed(2)

      notifications.show({
        title: 'Image Compressed',
        message: `Reduced from ${originalSize}MB to ${compressedSize}MB`,
        color: 'green',
      })

      return compressedFile
    } catch (error) {
      notifications.show({
        title: 'Compression Failed',
        message: 'Using original image',
        color: 'yellow',
      })
      return file
    }
  }

  const validateFile = (file: File): boolean => {
    if (file.size > MAX_FILE_SIZE) {
      notifications.show({
        title: 'File Too Large',
        message: `${file.name} exceeds 5MB limit (${(file.size / 1024 / 1024).toFixed(2)}MB)`,
        color: 'red',
      })
      return false
    }
    return true
  }

  const handleFileSelect = async (files: File | File[] | null) => {
    const fileArray = Array.isArray(files) ? files : files ? [files] : []

    // Check file limit
    if (attachedFiles.length + fileArray.length > MAX_FILES) {
      notifications.show({
        title: 'Too Many Files',
        message: `You can only attach up to ${MAX_FILES} files`,
        color: 'orange',
      })
      return
    }

    const validFiles: File[] = []

    for (const file of fileArray) {
      if (file?.type.startsWith('image/')) {
        try {
          const compressed = await compressImage(file)
          validFiles.push(compressed)
        } catch (error) {
          validFiles.push(file)
        }
      }
    }

    const currentLength = attachedFiles.length

    const newAttachedFiles: AttachedFile[] = validFiles.map((file) => {
      const fileType = getFileType(file)
      const attached: AttachedFile = {
        file,
        type: fileType,
        uploadProgress: 0,
      }

      // Create preview for images
      if (fileType === 'image') {
        attached.preview = URL.createObjectURL(file)
      }

      return attached
    })

    setAttachedFiles((prev) => {
      const updated = [...prev, ...newAttachedFiles]
      return updated
    })

    // Simulate upload progress for each new file
    newAttachedFiles.forEach((_, index) => {
      const actualIndex = currentLength + index
      simulateUpload(actualIndex)
    })
  }

  const simulateUpload = (fileIndex: number) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setAttachedFiles((prev) => {
        const updated = [...prev]
        if (updated[fileIndex]) {
          updated[fileIndex] = {
            ...updated[fileIndex],
            uploadProgress: progress,
          }
        }
        return updated
      })

      if (progress >= 100) {
        clearInterval(interval)
      }
    }, 200)
  }

  const handleRemoveFile = (index: number) => {
    setAttachedFiles((prev) => {
      const newFiles = [...prev]
      if (newFiles[index].preview) {
        URL.revokeObjectURL(newFiles[index].preview!)
      }
      newFiles.splice(index, 1)
      return newFiles
    })
  }

  const startRecording = async () => {
    if (attachedFiles.length >= MAX_FILES) {
      notifications.show({
        title: 'File Limit Reached',
        message: `You can only attach up to ${MAX_FILES} files`,
        color: 'orange',
      })
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/webm',
        })
        const audioFile = new File(
          [audioBlob],
          `recording-${Date.now()}.webm`,
          {
            type: 'audio/webm',
          },
        )

        if (validateFile(audioFile)) {
          const attached: AttachedFile = {
            file: audioFile,
            type: 'audio',
            uploadProgress: 0,
          }

          setAttachedFiles((prev) => {
            const currentLength = prev.length
            setTimeout(() => simulateUpload(currentLength), 0)
            return [...prev, attached]
          })
        }

        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
      setShowRecordModal(true)
      setRecordingTime(0)

      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    } catch (error) {
      notifications.show({
        title: 'Microphone Access Denied',
        message: 'Please allow microphone access to record audio',
        color: 'red',
      })
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      setShowRecordModal(false)

      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current)
      }
    }
  }

  const cancelRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      setShowRecordModal(false)
      audioChunksRef.current = []

      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current)
      }

      if (mediaRecorderRef.current.stream) {
        mediaRecorderRef.current.stream
          .getTracks()
          .forEach((track) => track.stop())
      }
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSend = () => {
    if (inputValue.trim() || attachedFiles.length > 0) {
      handleSendMessage(attachedFiles)

      attachedFiles.forEach((attached) => {
        if (attached.preview) {
          URL.revokeObjectURL(attached.preview)
        }
      })

      setAttachedFiles([])
    }
  }

  const handleKeyPressWithFiles = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <StickyPaper type="footer">
        {/* File Previews */}
        {attachedFiles.length > 0 && (
          <Group
            gap="xs"
            mb="xs"
            wrap="wrap"
          >
            {attachedFiles.map((attached, index) => (
              <div
                key={`${attached.file.name}-${index}`}
                style={{ position: 'relative', width: 80 }}
              >
                <Tooltip label={attached.file.name}>
                  <div>
                    {attached.type === 'image' && attached.preview ? (
                      <img
                        src={attached.preview}
                        alt={attached.file.name}
                        style={{
                          width: 80,
                          height: 80,
                          objectFit: 'cover',
                          borderRadius: 8,
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 8,
                          backgroundColor: 'var(--mantine-color-primary-1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          gap: 4,
                        }}
                      >
                        <MdMic
                          size={32}
                          color="var(--mantine-color-primary-6)"
                        />
                        <Text
                          size="xs"
                          c="primary"
                          fw={500}
                        >
                          Audio
                        </Text>
                      </div>
                    )}

                    {/* Upload Progress */}
                    {attached.uploadProgress !== undefined &&
                      attached.uploadProgress < 100 && (
                        <Progress
                          value={attached.uploadProgress}
                          size="xs"
                          radius="xl"
                          style={{
                            position: 'absolute',
                            bottom: 5,
                            left: 5,
                            right: 25,
                          }}
                        />
                      )}

                    <ActionIcon
                      size="xs"
                      radius="xl"
                      color="red"
                      variant="filled"
                      style={{
                        position: 'absolute',
                        top: -5,
                        right: -5,
                      }}
                      onClick={() => handleRemoveFile(index)}
                    >
                      <MdClose size={14} />
                    </ActionIcon>
                  </div>
                </Tooltip>

                <Text
                  size="xs"
                  ta="center"
                  mt={4}
                  c="dimmed"
                >
                  {(attached.file.size / 1024).toFixed(0)} KB
                </Text>
              </div>
            ))}
          </Group>
        )}

        <Group
          gap="xs"
          wrap="nowrap"
        >
          {/* Image Upload Button */}
          <Box style={{ position: 'relative' }}>
            <FileButton
              onChange={handleFileSelect}
              accept="image/*"
              multiple
            >
              {(props) => (
                <Tooltip label="Attach images">
                  <ActionIcon
                    size="lg"
                    radius="xl"
                    variant="subtle"
                    color="primary"
                    disabled={attachedFiles.length >= MAX_FILES}
                    {...props}
                  >
                    <MdImage size={22} />
                  </ActionIcon>
                </Tooltip>
              )}
            </FileButton>
          </Box>

          {/* Voice Recording Button */}
          <Tooltip label="Record voice message">
            <ActionIcon
              size="lg"
              radius="xl"
              variant="subtle"
              color={isRecording ? 'red' : 'primary'}
              onClick={isRecording ? stopRecording : startRecording}
              disabled={attachedFiles.length >= MAX_FILES}
            >
              {isRecording ? <MdStop size={22} /> : <MdMic size={22} />}
            </ActionIcon>
          </Tooltip>

          <TextInput
            placeholder="Aa"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPressWithFiles}
            style={{ flex: 1 }}
            radius="xl"
            size="md"
            styles={{
              input: {
                border: 'none',
                backgroundColor: 'var(--mantine-color-gray-1)',
              },
            }}
          />

          <ActionIcon
            size="lg"
            radius="xl"
            color="primary"
            variant="filled"
            onClick={handleSend}
            disabled={!inputValue.trim() && attachedFiles.length === 0}
          >
            <MdSend size={20} />
          </ActionIcon>
        </Group>
      </StickyPaper>

      {/* Recording Modal */}
      <Modal
        opened={showRecordModal}
        onClose={cancelRecording}
        title="Recording Voice Message"
        centered
        size="sm"
      >
        <Stack
          align="center"
          gap="lg"
          py="md"
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundColor: 'var(--mantine-color-red-1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          >
            <MdMic
              size={50}
              color="var(--mantine-color-red-6)"
            />
          </div>

          <Text
            size="xl"
            fw={700}
          >
            {formatTime(recordingTime)}
          </Text>

          <Group gap="md">
            <Button
              variant="outline"
              color="gray"
              onClick={cancelRecording}
              leftSection={<MdClose size={18} />}
            >
              Cancel
            </Button>
            <Button
              color="red"
              leftSection={<MdStop size={18} />}
              onClick={stopRecording}
            >
              Stop & Send
            </Button>
          </Group>
        </Stack>
      </Modal>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  )
}

export { Footer }
