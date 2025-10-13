import React, { useState } from 'react';
import SongFormModal from '../../pages/modals/SongFormModal';
import { Box } from '../ui/primitives';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openAdd, setOpenAdd] = useState(false);
  return (
    <Box>
      <Header onAddClick={() => setOpenAdd(true)} />
      <Box maxWidth="1100px" mx="auto" p={3}>
        {children}
      </Box>
      <SongFormModal isOpen={openAdd} onClose={() => setOpenAdd(false)} />
    </Box>
  );
};

export default Layout;
