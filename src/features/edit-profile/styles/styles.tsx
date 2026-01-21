import { Center, CenterProps } from '@mantine/core'
import { FaUser } from 'react-icons/fa'
import styled from 'styled-components'

export const SCenter = styled(Center)<CenterProps>`
  border-radius: 5px;
  transform: translate(-50%, 0%);
  overflow: hidden;
  box-shadow:
    rgba(0, 0, 0, 0.2) 2px 2px 8px,
    rgba(255, 255, 255, 0.2) -2px -2px 8px,
    rgba(255, 255, 255, 0.3) 2px 2px 4px inset,
    rgba(0, 0, 0, 0.3) -2px -2px 4px inset;
`
///////////////////////////////edit profile
export const ProfilePhotoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`

export const ProfilePhoto = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PhotoIcon = styled(FaUser)`
  font-size: 40px;
  color: white;
`

export const PhotoInfo = styled.div`
  flex: 1;
`

export const UploadButton = styled.label`
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: var(--mantine-color-textPrimary-light-hover);
  }

  input {
    display: none;
  }
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  background-color: transparent;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: var(--mantine-color-textPrimary-light-hover);
  }
`

export const SaveButton = styled.button`
  padding: 10px 24px;
  background-color: #4263eb;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #3651d4;
  }
`

export const LinkText = styled.span`
  color: #4263eb;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`
