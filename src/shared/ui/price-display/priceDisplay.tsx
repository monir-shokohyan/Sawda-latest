import { Group, Stack } from '@mantine/core'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { Props } from './type'

const Ui = ({
  amount,
  currency = 'USD',
  size = 'xl',
  mb = 0,
}: Props) => {
  const formatPrice = (value: number, curr: 'USD' | 'AFN') => {
    const formatted = value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    return curr === 'USD' ? formatted : formatted
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          fontSize: TypographySize.SemiSmall,
          iconSize: 14,
        }
      case 'md':
        return {
          fontSize: TypographySize.Normal,
          iconSize: 18,
        }
      case 'md':
         return {
          fontSize: TypographySize.Large,
          iconSize: 22,
        }
      case 'xl':
      default:
        return {
          fontSize: 36,
          iconSize: 36,
        }
    }
  }

  const styles = getSizeStyles()
  const currencySymbol = currency === 'USD' ? '$' : 'AF'

  return (
    <Stack gap={4} mb={mb}>
      <Group gap={6} wrap="nowrap" align="baseline">
        <ResText
          c="darkText"
          fontSize={styles.fontSize}
          fw={700}
          style={{
            letterSpacing: '0.3px',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {currency === 'USD' && <sup>{currencySymbol}</sup>}
          {formatPrice(amount, currency)}
          {currency === 'AFN' && ` ${currencySymbol}`}
        </ResText>
      </Group>
    </Stack>
  )
}

export { Ui }