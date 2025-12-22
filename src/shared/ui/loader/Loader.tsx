import { LoadingOverlay } from "@mantine/core"

const Loader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoadingOverlay />
    </div>
  )
}

export { Loader }
