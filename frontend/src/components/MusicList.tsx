import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { deleteSong, fetchSongs } from "../features/music/MusicSlice";
import { Song } from "../features/music/types";
import ConfirmModal from "../pages/modals/ConfirmModal";
import SongFormModal from "../pages/modals/SongFormModal";
import { Box, Button, Card, Row } from "./ui/primitives";

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
    <Box mt={3}>
      <Box as="h2" m={0} mb={2}>🎶 Song List</Box>
      {songs.length === 0 ? (
        <p>No songs found.</p>
      ) : (
        <Box as="ul" p={0} m={0} style={{ listStyle: "none" }}>
          {songs.map((song) => (
            <Box as="li" key={song._id} mb={2}>
              <Card p={2}>
                <Row alignItems="center" justifyContent="space-between" gap="8px" flexWrap="wrap">
                  <Box>
                    <Box as="strong">{song.title}</Box> — {song.artist}
                    <br />
                    <Box as="small">Album: {song.album || 'N/A'} | Genre: {song.genre || 'Unknown'}</Box>
                  </Box>
                  <Row gap="8px">
                    <Button type="button" onClick={() => { setEditingSong(song); setOpenEdit(true); }}>Edit</Button>
                    <Button type="button" variant="danger" onClick={() => setToDelete(song)}>Delete</Button>
                  </Row>
                </Row>
              </Card>
            </Box>
          ))}
        </Box>
      )}
      <SongFormModal isOpen={openEdit} onClose={() => { setOpenEdit(false); setEditingSong(null); }} editId={editingSong?._id} />
      <ConfirmModal
        isOpen={!!toDelete}
        onClose={() => setToDelete(null)}
        onConfirm={() => { if (toDelete?._id) dispatch(deleteSong(toDelete._id)); setToDelete(null); }}
        title="Delete this song?"
        description={`Are you sure you want to delete "${toDelete?.title}" by ${toDelete?.artist}?`}
      />
    </Box>
  );
};

export default MusicList;
