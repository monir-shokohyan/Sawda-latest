import { HTMLAttributes } from 'react'
import { Space } from 'antd'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

export const Content = ({ title, children, ...props }: Props) => {
  return (
    <Space
      {...props}
      style={{
        width: '100%',
        height: '100%',
        ...props.style,
      }}
    >
      {children}
    </Space>
  )
}
