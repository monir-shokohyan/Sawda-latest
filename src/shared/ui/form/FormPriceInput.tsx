import { Button, Group, Stack, Text, NumberInput, Select } from '@mantine/core'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'
import { useState } from 'react'
import { Paragraph } from '@shared/typography/paragraph'
import { useIsRtlLang } from '@shared/hooks'
import { useTranslation } from 'react-i18next'

type CurrencyType = 'AFN' | 'USD'

interface CurrencyConfig {
  symbol: string
  decimalScale: number
  label: string
}

interface FormPriceInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  buttonTitle?: string
  isButton?: boolean
  handleClick?: () => void
  defaultCurrency?: CurrencyType
  min?: number
  max?: number
  placeholder?: string
  showCurrencySelector?: boolean
  mb?: number
}

const FormPriceInput = <T extends FieldValues>({
  control,
  name,
  label,
  buttonTitle,
  isButton = false,
  handleClick,
  defaultCurrency = 'AFN',
  min = 0,
  max,
  placeholder,
  showCurrencySelector = true,
  mb = 20,
}: FormPriceInputProps<T>) => {
  const { t } = useTranslation()
  const CURRENCY_CONFIG = {
  AFN: {
    symbol: '؋',
    decimalScale: 2,
    label: 'currency.afn',
  },
  USD: {
    symbol: '$',
    decimalScale: 2,
    label: 'currency.usd',
  },
}
  const [selectedCurrency, setSelectedCurrency] =
    useState<CurrencyType>(defaultCurrency)
  const currencyConfig = CURRENCY_CONFIG[selectedCurrency]

  const currencyOptions = (Object.entries(CURRENCY_CONFIG) as [CurrencyType, CurrencyConfig][]).map(
  ([key, config]) => ({
    value: key,
    label: t(config.label as any),
  }),
)
  const { textAlign } = useIsRtlLang()

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
          <Paragraph style={{textAlign}}>{label}</Paragraph>
        </label>

        <Group
          gap={8}
          wrap="nowrap"
          align="stretch"
        >
          {showCurrencySelector ? (
            <Select
              value={selectedCurrency}
              onChange={(value) => setSelectedCurrency(value as CurrencyType)}
              data={currencyOptions}
              radius={3}
              w={110}
              comboboxProps={{
                transitionProps: { transition: 'fade-down', duration: 400 },
                position: 'bottom-start',
                offset: 5,
              }}
              styles={{
                input: {
                  fontWeight: 500,
                  textAlign: 'center',
                },
              }}
            />
          ) : (
            <Group
              style={{
                border: '1px solid #ced4da',
                borderRadius: 3,
                padding: '6px 12px',
                minWidth: 80,
              }}
              justify="center"
            >
              <Text
                size="sm"
                fw={500}
              >
                {selectedCurrency}
              </Text>
            </Group>
          )}

          <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Stack
                gap={0}
                style={{ flex: 1 }}
              >
                <NumberInput
                  {...field}
                  error={!!error}
                  aria-invalid={!!error}
                  radius={3}
                  decimalScale={currencyConfig.decimalScale}
                  fixedDecimalScale
                  thousandSeparator=","
                  min={min}
                  max={max}
                  placeholder={placeholder}
                  hideControls
                  value={field.value ?? ''}
                  onChange={(value) => field.onChange(value)}
                  suffix={` ${currencyConfig.symbol}`}
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

export { FormPriceInput }
