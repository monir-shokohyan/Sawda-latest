import { ResText } from '@shared/styles'
import { ReactNode } from 'react'
import styled from 'styled-components'

export const InfoBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px;
  background-color: var(--mantine-color-textPrimary-light-hover);
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 12px;
`

interface DetailsProps {
  icon: ReactNode;
  text: string;
  title: string;
}

const Details = ({ icon, text, title }: DetailsProps) => {
  return (
    <>
      <ResText
        fontSize={18}
        c="darkText"
      >
        {title}
      </ResText>
      <InfoBox>
        {icon}
        <span>{text}</span>
      </InfoBox>
    </>
  )
}

export { Details }
