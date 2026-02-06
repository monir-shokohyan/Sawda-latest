import {
  Button,
  Group,
  InputProps,
  Stack,
  Text,
  TextInputProps,
} from '@mantine/core'
import { SInput } from '@shared/styles'
import { Paragraph } from '@shared/typography/paragraph'
import { ReactNode } from 'react'
import {
  Controller,
  Control,
  FieldValues,
  Path,
  FieldError,
} from 'react-hook-form'

interface FormInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  buttonTitle?: string
  isButton?: boolean
  handleClick?: () => void
  mb?: number
  placeholder?: string
  leftSection?: ReactNode
  type?: TextInputProps['type']
}

const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  buttonTitle,
  isButton = false,
  handleClick,
  mb = 20,
  placeholder,
  leftSection,
  type = 'text',
}: FormInputProps<T>) => {
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
           <Paragraph>
                  {label}
                </Paragraph>
        </label>

        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <SInput
                {...field}
                error={!!error}
                aria-invalid={!!error}
                radius={3}
                placeholder={placeholder}
                leftSection={leftSection}
                type={type}
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

export { FormInput }
