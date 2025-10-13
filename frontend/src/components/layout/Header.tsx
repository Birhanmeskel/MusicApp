import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Row } from '../ui/primitives';
import { colors, spacing } from '../ui/theme';

interface HeaderProps {
  onAddClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  const navigate = useNavigate();
  return (
    <Row as="header" alignItems="center" justifyContent="space-between" p={3} style={{ borderBottom: `1px solid ${colors.border}` }}>
      <Row alignItems="center" gap={spacing(1)}>
        <Box as={Link} to="/" fontWeight={700} fontSize="20px">🎵 MusicApp</Box>
      </Row>
      <Row alignItems="center" gap={spacing(1)}>
  <Button type="button" onClick={onAddClick} aria-label="Add song">＋ Add</Button>
  <Button type="button" variant="ghost" onClick={() => navigate('/stats')}>📊 Stats</Button>
      </Row>
    </Row>
  );
};

export default Header;
