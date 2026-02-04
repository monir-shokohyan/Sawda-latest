import { Button, ButtonProps } from '@mantine/core'
import { ReactNode } from 'react'

const TriggerButton = ({
  content = 'All Categories',
  props,
}: {
  content: string | ReactNode
  props: ButtonProps
}) => {
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
