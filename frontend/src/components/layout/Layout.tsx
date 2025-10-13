import React, { useState } from 'react';
import SongFormModal from '../../pages/modals/SongFormModal';
import { Container } from './Container.styles';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openAdd, setOpenAdd] = useState(false);
  return (
    <div>
      <Header onAddClick={() => setOpenAdd(true)} />
      <Container>{children}</Container>
      <SongFormModal isOpen={openAdd} onClose={() => setOpenAdd(false)} />
    </div>
  );
};

export default Layout;
