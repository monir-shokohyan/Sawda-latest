import { Button, Group, Stack, Text, Textarea } from '@mantine/core'
import { ResText } from '@shared/styles' // assuming SInput not needed here
import { TypographySize } from '@shared/typography'
import {
  Controller,
  Control,
  FieldValues,
  Path,
  useWatch,
} from 'react-hook-form'
import styled from 'styled-components'

interface FormTextareaProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
  maxLength?: number
  buttonTitle?: string
  isButton?: boolean
  handleClick?: () => void
  mb?: number
  rows?: number
}

const CharCounter = styled.div`
  text-align: right;
  font-size: 12px;
  color: #666;
  margin-top: 5px;
  user-select: none;
`

const FormTextarea = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = '',
  maxLength = 400,
  buttonTitle,
  isButton = false,
  handleClick,
  mb = 30,
  rows= 8,
}: FormTextareaProps<T>) => {
  const value = useWatch({
    control,
    name: name as Path<T>,
  }) as string | undefined

  const currentLength = value?.length || 0

  return (
    <Group
      align="flex-end"
      mb={mb}
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
          render={({ field, fieldState: { error } }) => (
            <>
              <Textarea
                {...field}
                placeholder={placeholder}
                minRows={4}
                maxRows={16}
                rows={rows}
                maxLength={maxLength}
                error={!!error}
                aria-invalid={!!error}
                onChange={(e) => {
                  field.onChange(e)
                }}
                radius={3}
              />

              <CharCounter>
                {currentLength}/{maxLength}
              </CharCounter>

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
          onChange={() => handleClick?.()}
        >
          {buttonTitle}
        </Button>
      )}
    </Group>
  )
}

export { FormTextarea }
