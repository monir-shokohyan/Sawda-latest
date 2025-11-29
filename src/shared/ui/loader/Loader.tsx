import { Spin } from 'antd'

const Loader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spin size="large" />
    </div>
  )
}

export { Loader }
