import { Button, Group, Stack, Text, Progress } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ResText, SInputPassword } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { ReactNode, useMemo } from 'react'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface FormInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  buttonTitle?: string
  isButton?: boolean
  handleClick?: () => void
  leftSection?: ReactNode
  placeholder?: string
  mb?: number
  showStrength?: boolean
  maxLength?: number
}

const calculatePasswordStrength = (
  password: string,
  maxLength: number = 8,
): number => {
  if (!password) return 0

  const length = Math.min(password.length, maxLength)
  const strength = (length / maxLength) * 10

  return Math.round(strength)
}

const FormPasswordInput = <T extends FieldValues>({
  control,
  name,
  label,
  buttonTitle,
  isButton = false,
  handleClick,
  leftSection,
  placeholder,
  mb = 20,
  showStrength = false,
  maxLength = 8,
}: FormInputProps<T>) => {
  const [visible, { toggle }] = useDisclosure(false)

  return (
    <Group
      align="flex-end"
      mb={mb}
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
          render={({ field, fieldState: { error } }) => {
            const strength = useMemo(
              () => calculatePasswordStrength(field.value || '', maxLength),
              [field.value, maxLength],
            )

            const progressValue = (strength / 10) * 100

            return (
              <>
                <SInputPassword
                  {...field}
                  error={!!error}
                  aria-invalid={!!error}
                  radius={3}
                  visible={visible}
                  onVisibilityChange={toggle}
                  leftSection={leftSection}
                  placeholder={placeholder}
                  maxLength={maxLength}
                />

                {showStrength && field.value && (
                  <Progress
                    styles={{ section: { transitionDuration: '600ms' } }}
                    value={progressValue}
                    color={
                      strength > 9 ? 'teal' : strength > 5 ? 'yellow' : 'red'
                    }
                    size={4}
                    mt={4}
                    aria-label="Password strength indicator"
                    animated
                  />
                )}

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
            )
          }}
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
