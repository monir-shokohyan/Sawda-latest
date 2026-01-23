import { Checkbox, Group, Stack, Text } from '@mantine/core'
import { ResText } from '@shared/styles' // keep SInput if you still use it elsewhere
import { TypographySize } from '@shared/typography'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface FormCheckboxProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  description?: string
  disabled?: boolean
}

export function FormCheckbox<T extends FieldValues>({
  control,
  name,
  label,
  description,
  disabled = false,
}: FormCheckboxProps<T>) {
  return (
    <Group
      align="flex-start"
      mb={20}
      wrap="nowrap"
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Stack
            style={{ flex: 1 }}
            gap={3}
            justify="center"
          >
            <Checkbox
              checked={!!value}
              onChange={(e) => onChange(e.currentTarget.checked)}
              label={
                <ResText
                  fontSize={TypographySize.SemiSmall}
                  c="darkText"
                >
                  {label}
                </ResText>
              }
              description={description}
              error={!!error}
              disabled={disabled}
              radius="sm"
              size="sm"
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
          </Stack>
        )}
      />
    </Group>
  )
}
