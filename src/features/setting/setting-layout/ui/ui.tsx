import { Flex } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { SettingList } from './settingList'
import { SettingLayout } from '../types'
import { ContainerWithBreadCrumb } from '@shared/ui/container-with-bread-crumb'

function Ui({ children, title, isSetting = true }: SettingLayout) {
  const { isMobile } = Responsive()

  return (
    <ContainerWithBreadCrumb
      title={title}
      isSetting
      pxMobile="0px"
    >
      <Flex>
        {!isMobile && isSetting && <SettingList />}
        {children}
      </Flex>
    </ContainerWithBreadCrumb>
  )
}

export { Ui }
