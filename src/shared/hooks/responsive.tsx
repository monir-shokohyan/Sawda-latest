import { useMediaQuery } from '@mantine/hooks'

const Responsive = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1024px)')

  return {
    isMobile,
    isTablet,
  }
}

export { Responsive }
