import { MdKeyboardArrowDown } from 'react-icons/md';
import styled from 'styled-components';
import { CSSProperties } from 'react';

const ArrowWrapper = styled.div<{
  $isOpen: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  transition: transform 0.25s ease-in-out;
  
  &:hover {
    opacity: 0.85;
  }
`;

interface ExpandArrowProps {
  isOpen: boolean;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export const ExpandArrow = ({
  isOpen,
  size = 20,
  color = 'currentColor',
  className,
  style,
}: ExpandArrowProps) => {
  return (
    <ArrowWrapper
      $isOpen={isOpen}
      className={className}
      style={{
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        ...style,
      }}
    >
      <MdKeyboardArrowDown size={size} color={color} />
    </ArrowWrapper>
  );
};