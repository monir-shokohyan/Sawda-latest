import styled from 'styled-components'

export const SidebarItem = styled.div<{ $isActive?: boolean }>`
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${({ $isActive }) => ($isActive ? '500' : '400')};
  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--mantine-color-primary-light-hover)' : 'transparent'};

  &:hover {
    background-color: var(--mantine-color-primary-light-hover);
  }

  &:active {
    transform: scale(0.98);
  }
`
