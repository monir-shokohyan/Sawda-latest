import { ReactNode } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Center, Loader, Group } from '@mantine/core'

type InfiniteScrollWrapperProps = {
  children: ReactNode
  dataLength: number
  next: () => void
  hasMore: boolean
  loader?: ReactNode
  scrollableTarget?: string
  scrollThreshold?: number | string
  className?: string
  style?: React.CSSProperties
  endMessage?: ReactNode
  /**
   * @default false
   */
  inverse?: boolean
  height?: string | number
  size?: 'lg' | 'md' | 'sm'
  bg?: string
}

export function InfiniteScrollWrapper({
  children,
  dataLength,
  next,
  hasMore,
  loader,
  scrollableTarget,
  scrollThreshold = 0.8,
  className,
  style,
  endMessage,
  inverse = false,
  size = 'md',
  bg = 'background.9',
}: InfiniteScrollWrapperProps) {
  const defaultLoader = (
    <Center
      py={size === 'md' ? 'xl' : 'sm'}
      bg={bg}
    >
      <Loader
        color="primary"
        size={size}
      />
    </Center>
  )

  const defaultEndMessage = (
    <Center
      py={size === 'md' ? 'xl' : 'sm'}
      bg={bg}
    >
      <Group>
        <span style={{ color: 'var(--mantine-color-dimmed)' }}>
          You've reached the end
        </span>
      </Group>
    </Center>
  )

  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={next}
      hasMore={hasMore}
      loader={loader ?? defaultLoader}
      scrollableTarget={scrollableTarget}
      scrollThreshold={scrollThreshold}
      inverse={inverse}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        ...style,
      }}
      className={className}
      endMessage={endMessage ?? (hasMore ? null : defaultEndMessage)}
    >
      {children}
    </InfiniteScroll>
  )
}
