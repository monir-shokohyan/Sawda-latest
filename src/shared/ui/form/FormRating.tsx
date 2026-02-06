import { Rating, Stack, Text } from '@mantine/core'
import { Paragraph } from '@shared/typography/paragraph'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface FormRatingProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label?: string
  mb?: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  count?: number
  fractions?: number
  highlightSelectedOnly?: boolean
  readOnly?: boolean
  color?: string
  emptySymbol?: React.ReactNode
  fullSymbol?: React.ReactNode
}

const FormRating = <T extends FieldValues>({
  control,
  name,
  label,
  mb = 20,
  size = 'lg',
  count = 5,
  fractions = 1,
  highlightSelectedOnly = false,
  readOnly = false,
  color,
  emptySymbol,
  fullSymbol,
}: FormRatingProps<T>) => {
  return (
    <Stack
      align="flex-start"
      mb={mb}
      gap={3}
    >
      {label && (
        <label>
          <Paragraph>{label}</Paragraph>
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Rating
              {...field}
              size={size}
              count={count}
              fractions={fractions}
              highlightSelectedOnly={highlightSelectedOnly}
              readOnly={readOnly}
              color={color}
              emptySymbol={emptySymbol}
              fullSymbol={fullSymbol}
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
  )
}

export { FormRating }
