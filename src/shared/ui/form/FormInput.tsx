import { Button, Group, Stack, Text } from '@mantine/core'
import { ResText, SInput } from '@shared/styles'
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
}

const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  buttonTitle,
  isButton = false,
  handleClick,
}: FormInputProps<T>) => {
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
            fontSize={14}
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
              <SInput
                {...field}
                error={!!error}
                aria-invalid={!!error}
                radius={3}
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
