import React from 'react';
import Modal from '../../components/ui/Modal';
import { Button, Row } from '../../components/ui/primitives';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

const ConfirmModal: React.FC<Props> = ({ isOpen, onClose, onConfirm, title = 'Are you sure?', description = 'This action cannot be undone.' }) => {
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <Row gap="8px">
          <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
          <Button type="button" variant="danger" onClick={onConfirm}>Confirm</Button>
        </Row>
      }
    >
      <p>{description}</p>
    </Modal>
  );
};

export default ConfirmModal;
