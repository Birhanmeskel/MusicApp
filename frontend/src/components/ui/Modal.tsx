import React from 'react';
import { Box, Button, Card, Row } from './primitives';
import { colors, spacing } from './theme';

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  footer?: React.ReactNode;
  width?: number | string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, footer, width = 520, children }) => {
  if (!isOpen) return null;
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="rgba(0,0,0,0.5)"
      zIndex={1000}
      p={3}
    >
      <Card role="dialog" aria-modal="true" style={{ width: '100%', maxWidth: width }}>
        <Row alignItems="center" justifyContent="space-between" p={3} borderBottom={`1px solid ${colors.border}`}>
          <Box as="h3" m={0} fontSize="18px">{title}</Box>
          <Button variant="ghost" onClick={onClose} aria-label="Close">✕</Button>
        </Row>
        <Box p={3}>{children}</Box>
        {footer !== undefined ? (
          <Row p={3} gap={spacing(1)} justifyContent="flex-end" borderTop={`1px solid ${colors.border}`}>
            {footer}
          </Row>
        ) : null}
      </Card>
    </Box>
  );
};

export default Modal;
