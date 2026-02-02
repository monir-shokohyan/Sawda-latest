import { Button, Group, Stack, Text, ColorPicker, ColorPickerProps } from '@mantine/core'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import {
  Controller,
  Control,
  FieldValues,
  Path,
} from 'react-hook-form'

interface FormColorPickerProps<T extends FieldValues> extends Omit
  <ColorPickerProps,
  'value' | 'onChange' | 'error' | 'name'
> {
  control: Control<T>
  name: Path<T>
  label: string
  buttonTitle?: string
  isButton?: boolean
  handleClick?: () => void
  multiple?: boolean
  maxColors?: number
  showSelectedColors?: boolean
}

const FormColorPicker = <T extends FieldValues>({
  control,
  name,
  label,
  buttonTitle,
  isButton = false,
  handleClick,
  multiple = false,
  maxColors = 5,
  showSelectedColors = true,
  ...colorPickerProps
}: FormColorPickerProps<T>) => {
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
            const selectedColors: string[] = multiple 
              ? (Array.isArray(field.value) ? field.value : [])
              : []
            const currentColor = multiple ? (selectedColors[0] || '#000000') : (field.value || '#000000')

            const handleColorChange = (color: string) => {
              if (multiple) {
                if (selectedColors.includes(color)) {
                  // Remove color if already selected
                  field.onChange(selectedColors.filter(c => c !== color))
                } else {
                  // Add color if under max limit
                  if (selectedColors.length < maxColors) {
                    field.onChange([...selectedColors, color])
                  }
                }
              } else {
                field.onChange(color)
              }
            }

            const removeColor = (colorToRemove: string) => {
              if (multiple) {
                field.onChange(selectedColors.filter(c => c !== colorToRemove))
              }
            }

            return (
              <>
                <Stack gap={10}>
                  <ColorPicker
                    {...colorPickerProps}
                    value={currentColor}
                    onChange={handleColorChange}
                    fullWidth
                  />

                  {multiple && showSelectedColors && selectedColors.length > 0 && (
                    <Stack gap={5}>
                      <Text size="xs" c="dimmed">
                        Selected Colors ({selectedColors.length}/{maxColors})
                      </Text>
                      <Group gap={8}>
                        {selectedColors.map((color, index) => (
                          <Group
                            key={index}
                            gap={5}
                            style={{
                              backgroundColor: color,
                              padding: '4px 8px',
                              borderRadius: 4,
                              border: '1px solid #dee2e6',
                              cursor: 'pointer',
                            }}
                            onClick={() => removeColor(color)}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                backgroundColor: color,
                                borderRadius: 3,
                                border: '2px solid white',
                              }}
                            />
                            <Text
                              size="xs"
                              c={getContrastColor(color)}
                              fw={500}
                            >
                              {color.toUpperCase()}
                            </Text>
                            <Text
                              size="xs"
                              c={getContrastColor(color)}
                              style={{ cursor: 'pointer' }}
                            >
                              ✕
                            </Text>
                          </Group>
                        ))}
                      </Group>
                    </Stack>
                  )}

                  {!multiple && showSelectedColors && field.value && (
                    <Group gap={8}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: field.value,
                          borderRadius: 4,
                          border: '1px solid #dee2e6',
                        }}
                      />
                      <Text size="sm" fw={500}>
                        {field.value.toUpperCase()}
                      </Text>
                    </Group>
                  )}
                </Stack>

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

// Helper function to determine text color based on background
const getContrastColor = (hexColor: string): string => {
  const hex = hexColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 128 ? '#000000' : '#FFFFFF'
}

export { FormColorPicker }