import { Button, Group, PinInput, Stack, Text } from '@mantine/core'
import { ResText, SButton } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { useEffect, useState } from 'react'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface FormPinInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  buttonTitle?: string
  isButton?: boolean
  handleClick?: () => void
  mb?: number
  length?: number
  type?: 'alphanumeric' | 'number'
  mask?: boolean
  placeholder?: string
  oneTimeCode?: boolean
  resendTimer?: number
}

const FormPinInput = <T extends FieldValues>({
  control,
  name,
  label,
  buttonTitle = 'Resend',
  isButton = false,
  handleClick,
  mb = 20,
  length = 6,
  type = 'number',
  mask = false,
  placeholder,
  oneTimeCode = false,
  resendTimer = 60,
}: FormPinInputProps<T>) => {
  const [timeLeft, setTimeLeft] = useState(resendTimer)
  const [isTimerActive, setIsTimerActive] = useState(isButton)

  useEffect(() => {
    if (!isTimerActive || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsTimerActive(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isTimerActive, timeLeft])

  const handleResendClick = () => {
    if (!handleClick) return
    handleClick()
    setTimeLeft(resendTimer)
    setIsTimerActive(true)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <Stack
      align="center"
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
              <PinInput
                {...field}
                length={length}
                type={type}
                mask={mask}
                placeholder={placeholder}
                oneTimeCode={oneTimeCode}
                error={!!error}
                aria-invalid={!!error}
                size="lg"
              />

              {error && (
                <Text
                  c="red"
                  size="xs"
                  mt={4}
                >
                  {error.message}fsdkjfslkdfj
                </Text>
              )}
            </>
          )}
        />
      </Stack>

      <ResText
        fontSize={TypographySize.SemiSmall}
        c="dimmed"
      >
        Didn't recieve code ?
      </ResText>

      {isButton && (
        <SButton
          variant="outline"
          onClick={handleResendClick}
          disabled={isTimerActive}
        >
          {isTimerActive ? formatTime(timeLeft) : buttonTitle}
        </SButton>
      )}
    </Stack>
  )
}

export { FormPinInput }
