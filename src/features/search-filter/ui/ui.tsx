import React from 'react';
import styled from 'styled-components';
import { FiSearch, FiMic } from 'react-icons/fi';
import { ActionIcon, Button, Flex, FlexProps, Input } from '@mantine/core';
import { VerticalBorder } from '@shared/styles';
import { MdOutlineManageSearch } from 'react-icons/md';
import { useMediaQuery } from '@mantine/hooks';

const InputContainer = styled(Flex)<FlexProps>`
  height: 42px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
  outline: 1px solid var(--mantine-color-primary-6);
  outline-offset: -1px;
`;

const Ui = () => {
      const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <InputContainer justify="center" align="center" bg="primary" pl={isMobile ? '5px' : '20px'}>
     {isMobile && (
        <ActionIcon size="input-md">
            <MdOutlineManageSearch size={18} />
        </ActionIcon>
        )}
        
      <Input
        type="text"
        placeholder="Search"
        size="md"
        w={{ base: '70vw', sm: '70vw', md: '40vw' , lg: '40vw' }}
        radius={0}
      />
        <ActionIcon size="input-md">
            <FiSearch size={13} />
        </ActionIcon>
      <VerticalBorder />
        <ActionIcon size="input-md">
            <FiMic size={13} />
        </ActionIcon>
    </InputContainer>
  );
};

export  { Ui };