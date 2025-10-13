import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button.styles';
import { HeaderBar, HeaderGroup } from './Header.styles';

interface HeaderProps {
  onAddClick: () => void;
}



const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  const navigate = useNavigate();
  return (
    <HeaderBar>
      <HeaderGroup>
        <Link to="/" style={{ fontWeight: 700, fontSize: 20 }}>🎵 MusicApp</Link>
      </HeaderGroup>
      <HeaderGroup>
        <Button type="button" onClick={onAddClick} aria-label="Add song">＋ Add</Button>
        <Button type="button" variant="ghost" onClick={() => navigate('/stats')}>📊 Stats</Button>
      </HeaderGroup>
    </HeaderBar>
  );
};

export default Header;
