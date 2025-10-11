import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Music } from '../features/music/types';


interface Props {
  songs: Music[];
}

const MusicList: React.FC<Props> = ({ songs }) => {
  const loading = useSelector((state: RootState) => state.music.loading);
  const error = useSelector((state: RootState) => state.music.error);

  if (loading) return <p>Loading songs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Songs List</h2>
      {songs.length === 0 ? (
        <p>No songs available.</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              {song.title} - {song.artist} ({song.genre})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default MusicList