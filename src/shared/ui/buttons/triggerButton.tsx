import { Button } from '@mantine/core'
import { ReactNode } from 'react'

const TriggerButton = ({
  content = 'All Categories',
}: {
  content: string | ReactNode
}) => {
  return (
    <Button
      variant="transparent"
      color="textPrimary"
      px={0}
    >
      {content}
    </Button>
  )
}

export { TriggerButton }
