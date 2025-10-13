import styled from '@emotion/styled';
import React from 'react';
import { colors, spacing } from './theme';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  padding: 24px;
`;

const Dialog = styled.div`
  width: 100%;
  max-width: 520px;
  background: ${colors.panel};
  border: 1px solid ${colors.border};
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
`;

const DialogHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${colors.border};
`;

const DialogBody = styled.div`
  padding: 16px;
`;

const DialogFoot = styled.div`
  display: flex;
  gap: ${spacing(1)};
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid ${colors.border};
`;

const GhostBtn = styled.button`
  background: transparent;
  color: ${colors.text};
  border: 1px solid ${colors.border};
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
`;

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
    <Overlay>
      <Dialog role="dialog" aria-modal="true" style={{ maxWidth: width }}>
        <DialogHead>
          <h3 style={{ margin: 0, fontSize: 18 }}>{title}</h3>
          <GhostBtn type="button" onClick={onClose} aria-label="Close">✕</GhostBtn>
        </DialogHead>
        <DialogBody>{children}</DialogBody>
        {footer !== undefined ? (
          <DialogFoot>{footer}</DialogFoot>
        ) : null}
      </Dialog>
    </Overlay>
  );
};

export default Modal;
