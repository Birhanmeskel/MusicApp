import React from 'react';
import Filter from '../components/Filter';
import MusicList from '../components/MusicList';

const HomePage: React.FC = () => {
  return (
    <>
      <Filter />
      <MusicList />
    </>
  );
};

export default HomePage;
