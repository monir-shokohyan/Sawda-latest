import { RecordModalProps } from '@features/message-details/types'
import { Button, Group, Modal, Stack, Text } from '@mantine/core'
import { HModal } from '@shared/styles'
import { MdClose, MdMic, MdStop } from 'react-icons/md'

const RecordModal = ({
  showRecordModal,
  cancelRecording,
  recordingTime,
  stopRecording,
}: RecordModalProps) => {
  return (
    <>
      <HModal
        opened={showRecordModal}
        onClose={cancelRecording}
        centered
        size="sm"
        withCloseButton={false}
        transitionProps={{ transition: 'fade', duration: 200 }}

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
            {recordingTime}
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
      </HModal>

      <style>
        {`
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
          `}
      </style>
    </>
  )
}

export { RecordModal }
