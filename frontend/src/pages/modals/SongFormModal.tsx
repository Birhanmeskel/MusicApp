import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import MusicForm from '../../components/MusicForm';
import Modal from '../../components/ui/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  editId?: string | null;
}

const SongFormModal: React.FC<Props> = ({ isOpen, onClose, editId }) => {
  const song = useSelector((s: RootState) => s.music.songs.find(x => x._id === editId) || null);
  return (
    <Modal title={editId ? 'Edit Song' : 'Add Song'} isOpen={isOpen} onClose={onClose}>
      <MusicForm editSong={song || undefined} onFinish={onClose} />
    </Modal>
  );
};

export default SongFormModal;
