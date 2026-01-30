import { StickyPaper } from '@features/message-details/styles'
import { RightFooterProps } from '@features/message-details/types'
import {
  ActionIcon,
  Group,
  TextInput,
  FileButton,
  Tooltip,
  Text,
  Progress,
  Box,
  Stack,
  Image,
} from '@mantine/core'
import { MdSend, MdImage, MdMic, MdStop, MdClose } from 'react-icons/md'
import { RecordModal } from './recordModal'
import { useManageRightfooter } from '@features/message-details/modal'

const Footer = ({
  inputValue,
  setInputValue,
  handleSendMessage,
}: RightFooterProps) => {
  const {
    attachedFiles,
    handleFileSelect,
    handleKeyPressWithFiles,
    handleRemoveFile,
    handleSend,
    isRecording,
    startRecording,
    stopRecording,
    formatTime,
    showRecordModal,
    MAX_FILES,
    recordingTime,
    cancelRecording,
  } = useManageRightfooter({ inputValue, handleSendMessage })
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
              <Stack
                key={`${attached.file.name}-${index}`}
                pos="relative"
                w={80}
                h={90}
                align="center"
                gap={5}
              >
                <Tooltip label={attached.file.name}>
                  <div>
                    {attached.type === 'image' && attached.preview ? (
                      <Image
                        src={attached.preview}
                        alt={attached.file.name}
                        style={{
                          width: 60,
                          height: 60,
                          objectFit: 'cover',
                          borderRadius: 8,
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 8,
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
              </Stack>
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
            onChange={(e) => setInputValue?.(e.target.value)}
            onKeyPress={handleKeyPressWithFiles}
            style={{ flex: 1 }}
            radius="xl"
            size="md"
            styles={{
              input: {
                border: 'none',
                backgroundColor: 'var(--mantine-color-background-9)',
              },
            }}
          />

          <ActionIcon
            size="lg"
            radius="xl"
            color="primary"
            variant="filled"
            onClick={handleSend}
            disabled={!inputValue?.trim() && attachedFiles.length === 0}
          >
            <MdSend size={20} />
          </ActionIcon>
        </Group>
      </StickyPaper>

      {/* Recording Modal */}
      <RecordModal
        recordingTime={formatTime(recordingTime)}
        showRecordModal={showRecordModal}
        stopRecording={stopRecording}
        cancelRecording={cancelRecording}
      />
    </>
  )
}

export { Footer }
