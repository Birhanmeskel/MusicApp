import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { deleteSong, fetchSongs } from "../features/music/MusicSlice";
import { Song } from "../features/music/types";
import ConfirmModal from "../pages/modals/ConfirmModal";
import SongFormModal from "../pages/modals/SongFormModal";
import { Actions, ItemRow, List, ListItem, ListTitle, ListWrap } from "./MusicList.styles";
import { Button } from "./ui/Button.styles";
import { Card } from "./ui/Card.styles";

const MusicList: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, loading, error, filter } = useSelector((state: RootState) => state.music);

  const [editingSong, setEditingSong] = useState<Song | null>(null);
  const [toDelete, setToDelete] = useState<Song | null>(null);
  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {
    dispatch(fetchSongs(filter));
  }, [dispatch, filter]);

  if (loading) return <p>Loading songs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ListWrap>
      <ListTitle>🎶 Song List</ListTitle>
      {songs.length === 0 ? (
        <p>No songs found.</p>
      ) : (
        <List>
          {songs.map((song) => (
            <ListItem key={song._id}>
              <Card style={{ padding: 12 }}>
                <ItemRow>
                  <div>
                    <strong>{song.title}</strong> — {song.artist}
                    <br />
                    <small>Album: {song.album || 'N/A'} | Genre: {song.genre || 'Unknown'}</small>
                  </div>
                  <Actions>
                    <Button type="button" onClick={() => { setEditingSong(song); setOpenEdit(true); }}>Edit</Button>
                    <Button type="button" variant="danger" onClick={() => setToDelete(song)}>Delete</Button>
                  </Actions>
                </ItemRow>
              </Card>
            </ListItem>
          ))}
        </List>
      )}
      <SongFormModal isOpen={openEdit} onClose={() => { setOpenEdit(false); setEditingSong(null); }} editId={editingSong?._id} />
      <ConfirmModal
        isOpen={!!toDelete}
        onClose={() => setToDelete(null)}
        onConfirm={() => { if (toDelete?._id) dispatch(deleteSong(toDelete._id)); setToDelete(null); }}
        title="Delete this song?"
        description={`Are you sure you want to delete "${toDelete?.title}" by ${toDelete?.artist}?`}
      />
    </ListWrap>
  );
};

export default MusicList;
