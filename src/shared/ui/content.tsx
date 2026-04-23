import { Space } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

export const Content = ({ title, children, ...props }: Props) => {
  const { isMobile } = Responsive()
  return (
    <Space
      {...props}
      style={{
        width: '100%',
        height: '100%',
        marginTop: isMobile ? '0px' : '60px',
        ...props.style,
      }}
    >
      {children}
    </Space>
  )
}
