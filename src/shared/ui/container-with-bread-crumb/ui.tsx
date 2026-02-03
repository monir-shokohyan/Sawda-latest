import { Responsive } from '@shared/hooks/responsive'
import { GradientContainer } from '../containers'
import { Stack, StackProps } from '@mantine/core'
import { GeneralPadding } from '@shared/constants'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { ReactNode } from 'react'

interface Props {
  isSetting?: boolean
  title: string
  children: ReactNode
  pxMobile?: string | StackProps['px']
  pyMobile?: string | StackProps['py']
  px?: typeof GeneralPadding | StackProps['px']
  py?: string | StackProps['py']
  gap?: number
}

const Ui = (Uiprops: Props) => {
  const {
    gap = 0,
    isSetting = false,
    title,
    children,
    px = GeneralPadding,
    py = 'xl',
    pyMobile = 'sm',
    pxMobile = 'sm',
  } = Uiprops

  const { isMobile } = Responsive()
  return (
    <GradientContainer>
      <Stack
        w="100%"
        gap={gap}
        px={isMobile ? pxMobile : px}
        py={isMobile ? pyMobile : py}
      >
        {isSetting && (
          <BreadcrumbsNav
            items={[
              { title: 'Home', href: '/' },
              { title: 'settings' },
              { title },
            ]}
          />
        )}

        {!isSetting && (
          <BreadcrumbsNav items={[{ title: 'Home', href: '/' }, { title }]} />
        )}
        {children}
      </Stack>
    </GradientContainer>
  )
}

export { Ui }
