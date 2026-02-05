import { Button, ButtonProps } from '@mantine/core'
import { ReactNode } from 'react'

interface PropsType extends ButtonProps {
  content: ReactNode
}

const TriggerButton = ({ content = 'All Categories', ...props }: PropsType) => {
  return (
    <Button
      variant="transparent"
      color="textPrimary"
      px={0}
      {...props}
    >
      {content}
    </Button>
  )
}

export { TriggerButton }
