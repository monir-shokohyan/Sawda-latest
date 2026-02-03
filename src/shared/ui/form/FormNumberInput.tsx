import {
  Button,
  Group,
  Stack,
  Text,
  NumberInput,
  NumberInputProps,
} from '@mantine/core'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface FormNumberInputProps<T extends FieldValues> extends Omit<
  NumberInputProps,
  'name' | 'value' | 'onChange' | 'error'
> {
  control: Control<T>
  name: Path<T>
  label: string
  buttonTitle?: string
  isButton?: boolean
  handleClick?: () => void
  mb?: number
}

const FormNumberInput = <T extends FieldValues>({
  control,
  name,
  label,
  buttonTitle,
  isButton = false,
  handleClick,
  prefix,
  suffix,
  decimalScale = 0,
  thousandSeparator = ',',
  min,
  max,
  placeholder,
  hideControls = true,
  mb = 20,
  rightSection = null,
  leftSection = null,
  rightSectionWidth,
  ...restProps
}: FormNumberInputProps<T>) => {
  return (
    <Group
      align="flex-end"
      mb={mb}
      w="100%"
    >
      <Stack
        style={{ flex: 1 }}
        gap={3}
        w="100%"
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
          render={({ field, fieldState: { error } }) => (
            <>
              <NumberInput
                {...field}
                error={!!error}
                aria-invalid={!!error}
                radius={3}
                prefix={prefix}
                suffix={suffix}
                decimalScale={decimalScale}
                fixedDecimalScale={decimalScale > 0}
                thousandSeparator={thousandSeparator}
                min={min}
                max={max}
                placeholder={placeholder}
                hideControls={hideControls}
                value={field.value ?? ''}
                onChange={(value) => field.onChange(value)}
                rightSection={rightSection}
                leftSection={leftSection}
                rightSectionWidth={rightSectionWidth}
                w="100%"
                {...restProps}
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

export { FormNumberInput }
