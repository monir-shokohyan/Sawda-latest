import { Button, Group, Stack, Text, Slider, SliderProps } from '@mantine/core'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import {
  Controller,
  Control,
  FieldValues,
  Path,
} from 'react-hook-form'

interface FormSliderProps<T extends FieldValues> extends Omit
  <SliderProps,
  'value' | 'onChange' | 'error' | 'name'
> {
  control: Control<T>
  name: Path<T>
  label: string
  buttonTitle?: string
  isButton?: boolean
  handleClick?: () => void
  showValue?: boolean
  valuePrefix?: string
  valueSuffix?: string
  mb?: number
}

const FormSlider = <T extends FieldValues>({
  control,
  name,
  label,
  buttonTitle,
  isButton = false,
  handleClick,
  showValue = true,
  valuePrefix = '',
  valueSuffix = '',
  mb=30,
  ...sliderProps
}: FormSliderProps<T>) => {
  return (
    <Group
      align="flex-end"
      mb={mb}
    >
      <Stack
        style={{ flex: 1 }}
        gap={3}
      >
        <Group justify="space-between" mb={5}>
          <label>
            <ResText
              fontSize={TypographySize.SemiSmall}
              c="darkText"
            >
              {label}
            </ResText>
          </label>

          {showValue && (
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <Text size="sm" fw={500} c="dimmed">
                  {valuePrefix}{field.value ?? 0}{valueSuffix}
                </Text>
              )}
            />
          )}
        </Group>

        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Slider
                {...field}
                {...sliderProps}
                value={field.value ?? 0}
                onChange={(value) => field.onChange(value)}
                styles={{
                  track: {
                    cursor: 'pointer',
                  },
                  thumb: {
                    cursor: 'grab',
                  },
                }}
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

export { FormSlider }