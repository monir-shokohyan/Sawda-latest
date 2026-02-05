import { MenuDropDown } from '@shared/ui/menu-dropdown'
import { OptionMenuProps } from '../type'
import { useManageOptionModel } from '../model'
import { Button, Text } from '@mantine/core'
import { HModal } from '@shared/styles'

function Ui({ type, id }: OptionMenuProps) {
  const { optionConstant, opened, close, Delete } = useManageOptionModel({
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
      />
      <HModal
        opened={opened}
        onClose={close}
        title={`Delete your ${type}`}
        size="md"
        centered
        onClick={(e) => e.stopPropagation()}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Text size="sm">
          Are you sure you want to delete your{' '}
          {type === 'account'
            ? 'profile? This action is destructive and you will have to contact support to restore your data.'
            : 'product ?'}
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
            Cancel
          </Button>
          <Button
            onClick={Delete}
            color="red"
          >
            Delete
          </Button>
        </div>
      </HModal>
    </>
  )
}

export { Ui }
