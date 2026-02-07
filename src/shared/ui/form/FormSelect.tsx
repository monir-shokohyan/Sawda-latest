import { Group, Stack, Text } from '@mantine/core'
import { Select, SelectProps } from '@mantine/core'
import { Paragraph } from '@shared/typography/paragraph'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'
import { useState } from 'react'
import { ExpandArrow } from '../expandArrow'

interface FormSelectProps<T extends FieldValues> extends Omit<
  SelectProps,
  'value' | 'onChange' | 'error' | 'name'
> {
  control: Control<T>
  name: Path<T>
  label?: string
  mb?: number
  shape?: 'default' | 'pill'
}

const FormSelect = <T extends FieldValues>({
  control,
  name,
  label,
  mb = 30,
  shape = 'default',
  ...selectProps
}: FormSelectProps<T>) => {
  const isPill = shape === 'pill'
  const [dropdownOpened, setDropdownOpened] = useState(false)

  return (
    <Group
      align="flex-end"
      mb={isPill ? 0 : mb}
      style={{ flex: isPill ? 'unset' : 1 }}
      miw={isPill ? 'auto' : 300}
    >
      <Stack
        style={{ flex: isPill ? 'unset' : 1 }}
        gap={3}
      >
        {label && !isPill && (
          <label>
            <Paragraph>{label}</Paragraph>
          </label>
        )}

        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => {
            const hasValue =
              field.value !== null &&
              field.value !== undefined &&
              field.value !== ''

            return (
              <>
                <Select
                  {...field}
                  {...selectProps}
                  error={!!error}
                  aria-invalid={!!error}
                  value={field.value || null}
                  onChange={(value) => field.onChange(value)}
                  classNames={{
                    option: 'select-option',
                  }}
                  radius={isPill ? 'xl' : 3}
                  size={isPill ? 'sm' : selectProps.size}
                  styles={
                    isPill
                      ? {
                          root: {
                            width: 'max-content',
                          },
                          wrapper: {
                            width: 'max-content',
                          },
                          input: {
                            borderRadius: '50px',
                            paddingLeft: selectProps.leftSection
                              ? '40px'
                              : '16px',
                            paddingRight: '32px',
                            fontWeight: 500,
                            width: '7rem',
                            borderColor: hasValue
                              ? 'var(--mantine-color-blue-filled)'
                              : undefined,
                            borderWidth: hasValue ? '2px' : '1px',
                          },
                          section: {
                            marginLeft: '12px',
                          },
                        }
                      : undefined
                  }
                  rightSection={
                    <ExpandArrow
                      size={20}
                      isOpen={dropdownOpened}
                    />
                  }
                  onDropdownOpen={() => setDropdownOpened(true)}
                  onDropdownClose={() => setDropdownOpened(false)}
                  comboboxProps={{
                    transitionProps: { transition: 'fade-down', duration: 400 },
                    position: 'bottom-start',
                    middlewares: { flip: true, shift: true },
                    withinPortal: true,
                    width: isPill ? 'auto' : undefined,
                  }}
                  nothingFoundMessage="Nothing found"
                />

                {error && !isPill && (
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
    </Group>
  )
}

export { FormSelect }
