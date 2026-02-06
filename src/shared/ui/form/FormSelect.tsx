import { Group, Stack, Text } from '@mantine/core'
import { Select, SelectProps } from '@mantine/core'
import { Paragraph } from '@shared/typography/paragraph'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface FormSelectProps<T extends FieldValues> extends Omit<
  SelectProps,
  'value' | 'onChange' | 'error' | 'name'
> {
  control: Control<T>
  name: Path<T>
  label: string
  mb?: number
}

const FormSelect = <T extends FieldValues>({
  control,
  name,
  label,
  mb = 30,
  ...selectProps
}: FormSelectProps<T>) => {
  return (
    <Group
      align="flex-end"
      mb={mb}
      style={{ flex: 1 }}
      miw={300}
    >
      <Stack
        style={{ flex: 1 }}
        gap={3}
      >
        <label>
          <Paragraph>{label}</Paragraph>
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
                comboboxProps={{
                  transitionProps: { transition: 'fade-down', duration: 400 },
                  position: 'bottom-start',
                  middlewares: { flip: true, shift: true },
                  withinPortal: true,
                }}
                nothingFoundMessage="Nothing found"
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
