import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { ReactNode } from 'react'
import styled from 'styled-components'

export const InfoBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px;
  background-color: var(--mantine-color-primary-light-hover);
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 12px;
`

interface DetailsProps {
  icon?: ReactNode
  text?: string
  title: string
  allowBox?: boolean
}

const Details = ({ icon, text, title, allowBox = true }: DetailsProps) => {
  return (
    <>
      <ResText
        fontSize={TypographySize.Normal}
        c="darkText"
      >
        {title}
      </ResText>
      {allowBox && (
        <InfoBox>
          {icon}
          <span>{text}</span>
        </InfoBox>
      )}
    </>
  )
}

export { Details }
