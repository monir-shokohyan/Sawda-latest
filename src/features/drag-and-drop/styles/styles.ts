import styled from 'styled-components';
import { Dropzone } from '@mantine/dropzone';
import { CloseButton, CloseButtonProps, Flex, FlexProps, SegmentedControl, SegmentedControlProps, Text } from '@mantine/core';

export const Wrapper = styled(Flex)<FlexProps>`
  position: relative;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;
  background-color: var(--mantine-color-primary-light-hover);
  padding: 10px;
`;

export const SDropzone = styled(Dropzone)`
  border-width: 1px;
  padding-bottom: 50px;
  color: var(--mantine-color-bright);
`;

export const Description = styled(Text)`
  text-align: center;
  font-size: var(--mantine-font-size-sm);
  color: var(--mantine-color-dimmed);
  margin-top: var(--mantine-spacing-xs);
`;

export const ImagePreviewWrapper = styled.div`
  margin-top: 20px;
`;

export const ImagePreviewItem = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
  
  &:hover {
    .remove-button, .edit-button {
      opacity: 1;
    }
  }
`;

export const RemoveButton = styled(CloseButton)<CloseButtonProps & {onClick: () => void}>`
  &:hover {
    background-color: var(--mantine-color-primary-light-hover);
  }
`;
export const Segmented = styled(SegmentedControl)<SegmentedControlProps>`
 
 .mantine-SegmentedControl-control[data-active] .mantine-SegmentedControl-label {
    color: var(--mantine-color-lightText-8) !important;
    font-weight: 500;
  }
`;
