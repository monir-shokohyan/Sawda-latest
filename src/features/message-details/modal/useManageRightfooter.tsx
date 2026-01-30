import { notifications } from '@mantine/notifications'
import React, { useEffect, useRef, useState } from 'react'
import { AttachedFile, RightFooterProps } from '../types'
import imageCompression from 'browser-image-compression'

const useManageRightfooter = ({
  inputValue,
  handleSendMessage,
}: RightFooterProps) => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB in bytes
  const MAX_FILES = 4
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
    mediaRecorderRef.current.onstop = null
    
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
    
    setRecordingTime(0)
  }
}
console.log(attachedFiles);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSend = () => {
    if (inputValue?.trim() || attachedFiles.length > 0) {
      handleSendMessage?.(attachedFiles)

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

  return {
    attachedFiles,
    handleRemoveFile,
    handleFileSelect,
    isRecording,
    stopRecording,
    startRecording,
    handleKeyPressWithFiles,
    handleSend,
    formatTime,
    showRecordModal,
    recordingTime,
    MAX_FILES,
    MAX_FILE_SIZE,
    cancelRecording,
  }
}

export { useManageRightfooter }
