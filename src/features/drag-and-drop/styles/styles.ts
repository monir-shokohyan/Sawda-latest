import styled from 'styled-components'
import { Dropzone } from '@mantine/dropzone'
import {
  CloseButton,
  CloseButtonProps,
  Flex,
  FlexProps,
  SegmentedControl,
  SegmentedControlProps,
  Text,
} from '@mantine/core'

export const Wrapper = styled(Flex)<FlexProps>`
  position: relative;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;
  background-color: var(--mantine-color-primary-light-hover);
  padding: 10px;
`

export const SDropzone = styled(Dropzone)`
  border-width: 1px;
  padding-bottom: 50px;
  color: var(--mantine-color-bright);
`

export const Description = styled(Text)`
  text-align: center;
  font-size: var(--mantine-font-size-sm);
  color: var(--mantine-color-dimmed);
  margin-top: var(--mantine-spacing-xs);
`

export const ImagePreviewWrapper = styled.div`
  margin-top: 20px;
`

export const ImagePreviewItem = styled.div<{$isDark: boolean}>`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
  box-shadow: ${({$isDark}) => $isDark ? 'none' : '  rgba(0, 0, 0, 0.2) 0px 15px 25px -4px,rgba(0, 0, 0, 0.1) 0px -3px 4px -1px inset,rgba(255, 255, 255, 0.3) 0px -10px 15px -1px,rgba(255, 255, 255, 0.2) 0px 3px 4px -1px inset,rgba(255, 255, 255, 0.1) 0px 0px 5px 1px inset,rgba(255, 255, 255, 0.2) 0px 20px 30px 0px inset;'};
  &:hover {
    .remove-button,
    .edit-button {
      opacity: 1;
    }
  }
`

export const RemoveButton = styled(CloseButton)<
  CloseButtonProps & { onClick: () => void }
>`
  &:hover {
    background-color: var(--mantine-color-primary-light-hover);
  }
`
export const Segmented = styled(SegmentedControl)<SegmentedControlProps>`
  .mantine-SegmentedControl-control[data-active]
    .mantine-SegmentedControl-label {
    color: var(--mantine-color-lightText-8) !important;
    font-weight: 500;
  }
`
export const CropContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: var(--mantine-color-background-9) !important;
`

export const Controls = styled.div`
  padding: 16px;
`
