import { MenuDropDown } from '@shared/ui/menu-dropdown'
import { OptionMenuProps } from '../type'
import { useManageOptionModel } from '../model'
import { Button, Text } from '@mantine/core'
import { HModal } from '@shared/styles'

function Ui({ type, id }: OptionMenuProps) {
  const { optionConstant, opened, close, Delete, t } = useManageOptionModel({
    type,
    id,
  })
  return (
    <>
      <MenuDropDown
        showExpandArrow={false}
        options={optionConstant}
        width={180}
        position="bottom"
        clickTrigger={true}
      />
      <HModal
        opened={opened}
        onClose={close}
        title={t('optionMenu.delete')}
        size="md"
        centered
        onClick={(e) => e.stopPropagation()}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Text size="sm">
          {type === 'account'
            ? t('optionMenu.confirmDeleteProfile')
            : t('optionMenu.confirmDeleteProduct')}
        </Text>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
            marginTop: '20px',
          }}
        >
          <Button
            variant="outline"
            onClick={close}
          >
            {t('optionMenu.cancel')}
          </Button>
          <Button
            onClick={Delete}
            color="red"
          >
            {t('optionMenu.delete')}
          </Button>
        </div>
      </HModal>
    </>
  )
}

export { Ui }
