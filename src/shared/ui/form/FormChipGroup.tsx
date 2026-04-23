import { Group, Stack, Text, Chip, ChipGroupProps } from '@mantine/core'
import { useIsRtlLang } from '@shared/hooks'
import { Paragraph } from '@shared/typography/paragraph'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface FormChipGroupProps<T extends FieldValues> extends Omit<
  ChipGroupProps,
  'value' | 'onChange' | 'name'
> {
  control: Control<T>
  name: Path<T>
  label: string
  options: Array<{ value: string; label: string }>
  mb?: number
}

const FormChipGroup = <T extends FieldValues>({
  control,
  name,
  label,
  options,
  mb = 30,
  ...chipGroupProps
}: FormChipGroupProps<T>) => {
  const { textAlign } = useIsRtlLang()
  return (
    <Group
      align="flex-start"
      mb={mb}
    >
      <Stack
        style={{ flex: 1 }}
        gap={3}
      >
        <label>
          <Paragraph style={{textAlign}}>{label}</Paragraph>
        </label>

        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Chip.Group
                {...chipGroupProps}
                value={field.value}
                onChange={field.onChange}
              >
                <Group mt={5}>
                  {options.map((option) => (
                    <Chip
                      key={option.value}
                      value={option.value}
                      radius={50}
                      variant="outline"
                    >
                      {option.label}
                    </Chip>
                  ))}
                </Group>
              </Chip.Group>

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

export { FormChipGroup }
