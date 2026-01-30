import { Avatar } from '@mantine/core'

const AvatarMessage = ({ src }: { src: string }) => {
  return (
    <Avatar
      size={28}
      radius="xl"
      style={{
        background: 'linear-gradient(135deg, #0084ff 0%, #0073e6 100%)',
        flexShrink: 0,
      }}
      src={src}
    />
  )
}

export { AvatarMessage }
