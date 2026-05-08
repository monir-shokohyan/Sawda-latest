import { useState } from 'react'
import { Avatar, Tooltip } from '@mantine/core'
import { Lightbox } from '@mantine-bites/lightbox';

function ProfileImage({ src, size }: { src: string; size: string }) {
  const [opened, setOpened] = useState(false)
  const profileImage = [{
    src: src,
    alt: "profile image"
  }]

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

        <Lightbox
          images={profileImage}
          opened={opened}
          onClose={() => setOpened(false)}
          onClick={(e)=>e.stopPropagation()}
          withControls={false}
          withThumbnails={false}
          withCounter={false}
        />

    </>
  )
}
export { ProfileImage }
