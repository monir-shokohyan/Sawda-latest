import { ModalProps, useMantineTheme } from '@mantine/core';
import { ReactNode } from 'react';
import { Logo } from '../logo';
import { HModal } from '@shared/styles';

interface BaseModalProps extends Omit<ModalProps, 'opened' | 'onClose' | 'children'> {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
  showLogo?: boolean;
  customTitle?: ReactNode;
  showOverlay?: boolean
}

const Ui = ({
  opened,
  onClose,
  children,
  showLogo = true,
  customTitle,
  title,
  centered = true,
  showOverlay= false,
  transitionProps = { transition: 'fade-down', duration: 200 },
  ...props
}: BaseModalProps) => {
  const modalTitle = customTitle || (showLogo ? <Logo /> : title);
  const theme = useMantineTheme()

  return (
    <HModal
      opened={opened}
      onClose={onClose}
      title={modalTitle}
      centered={centered}
      transitionProps={transitionProps}
      {...props}
      styles={{
        content :{
          background: showOverlay ? "transparent" : theme.colors.background[8],
          paddingTop: showOverlay ? '50px' : '0px'
        },
        header :{
          display: showOverlay ? "none" : "flex",
        }
      }}
    >
      {children}
    </HModal>
  );
};

export { Ui }