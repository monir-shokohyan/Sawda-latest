import { Group, Stack, Text } from '@mantine/core'
import { Select, SelectProps } from '@mantine/core'
import { ResText } from '@shared/styles'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface FormSelectProps<T extends FieldValues> extends Omit<
  SelectProps,
  'value' | 'onChange' | 'error' | 'name'
> {
  control: Control<T>
  name: Path<T>
  label: string
}

const FormSelect = <T extends FieldValues>({
  control,
  name,
  label,
  ...selectProps
}: FormSelectProps<T>) => {
  return (
    <Group
      align="flex-end"
      mb={30}
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
              <Select
                {...field}
                {...selectProps}
                error={!!error}
                aria-invalid={!!error}
                value={field.value ?? null}
                onChange={(value) => field.onChange(value)}
                classNames={{
                  option: 'select-option',
                }}
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
    </Group>
  )
}

export { FormSelect }
