import { Button, Group, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ResText, SInputPassword } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import {
  Controller,
  Control,
  FieldValues,
  Path,
} from 'react-hook-form'

interface FormInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  buttonTitle?: string
  isButton?: boolean
  handleClick?: () => void
}

const FormPasswordInput = <T extends FieldValues>({
  control,
  name,
  label,
  buttonTitle,
  isButton = false,
  handleClick,
}: FormInputProps<T>) => {
    const [visible, { toggle }] = useDisclosure(false);
  return (
    <Group
      align="flex-end"
      mb={20}
    >
      <Stack
        style={{ flex: 1 }}
        gap={3}
      >
        <label>
          <ResText
            fontSize={TypographySize.SemiSmall}
            c="darkText"
          >
            {label}
          </ResText>
        </label>

        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
                <SInputPassword
                    {...field}
                  error={!!error}
                  aria-invalid={!!error}
                  radius={3}
                  defaultValue="secret"
                  visible={visible}
                  onVisibilityChange={toggle}
                />

              {error && (
                <Text
                  c="red"
                  size="xs"
                  mt={4}
                >
                  {error.message}
                </Text>
              )}
            </>
          )}
        />
      </Stack>

      {isButton && (
        <Button
          variant="outline"
          onClick={() => {
            if (!handleClick) return
            handleClick()
          }}
        >
          {buttonTitle}
        </Button>
      )}
    </Group>
  )
}

export { FormPasswordInput }
