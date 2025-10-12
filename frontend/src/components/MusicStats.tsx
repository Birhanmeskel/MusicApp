import React from 'react';

interface Props {
  stats: any;
}

const MusicStats: React.FC<Props> = ({ stats }) => {
  if (!stats) return null;
  console.log(stats)
  return (
    <div>
      <h2>Music Statistics</h2>
      <p>Total Songs: {stats.totalSongs}</p>
      <p>Total Artists: {stats.totalArtists}</p>
      <p>Total Albums: {stats.totalAlbums}</p>
      <p>Total Genres: {stats.totalGenres}</p>
    </div>
  );
}

export default MusicStats