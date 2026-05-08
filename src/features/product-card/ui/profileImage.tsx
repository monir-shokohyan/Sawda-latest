import { useState } from 'react'
import { Avatar, Modal, Image, Tooltip } from '@mantine/core'

function ProfileImage({ src, size }: { src: string; size: string }) {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Tooltip
        label="View photo"
        withArrow
      >
        <Avatar
          src={src}
          radius="50%"
          style={{ cursor: 'pointer' }}
          size={size}
          onClick={(e) => {
            e.stopPropagation()
            setOpened(true)
          }}
        />
      </Tooltip>

      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false)
        }}
        transitionProps={{ transition: 'fade-down', duration: 200 }}
        centered
        size="lg"
        title="Profile Photo"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          fit="contain"
          alt="Profile"
        />
      </Modal>
    </>
  )
}
export { ProfileImage }
