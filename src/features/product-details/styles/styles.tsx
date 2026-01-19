import { ActionIcon, ActionIconProps } from "@mantine/core";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const IconWrapper = styled(ActionIcon)< ActionIconProps &{$isOpen: boolean} >`
  transition: transform 0.25s ease;
  transform: rotate(${({ $isOpen }: { $isOpen: boolean }) => ($isOpen ? '180deg' : '0deg')});
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? '5000px' : '0')};
  padding-block: ${({ $isOpen }) => ($isOpen ? '20px' : '0')};
  transition: max-height 0.3s ease-in-out;
`;

