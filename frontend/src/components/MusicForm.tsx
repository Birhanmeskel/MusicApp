import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addSong, updateSong } from "../features/music/MusicSlice";
import { Song } from "../features/music/types";
import { Box, Button, Col, Input } from "./ui/primitives";

interface Props {
  editSong?: Song | null;
  onFinish?: () => void; // Optional callback when form completes (for closing modals, etc.)
}

const MusicForm: React.FC<Props> = ({ editSong = null, onFinish }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.music);

  const [formData, setFormData] = useState<Song>(editSong || { title: "", artist: "", album: "", genre: "" });

  // Keep form in sync with incoming editSong
  useEffect(() => {
    if (editSong) {
      setFormData({
        title: editSong.title || "",
        artist: editSong.artist || "",
        album: editSong.album || "",
        genre: editSong.genre || "",
        _id: editSong._id,
      });
    } else {
      setFormData({ title: "", artist: "", album: "", genre: "" });
    }
  }, [editSong]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.artist) {
      alert("Title and Artist are required!");
      return;
    }

    if (editSong && editSong._id) {
      dispatch(updateSong({ id: editSong._id, data: formData }));
    } else {
      dispatch(addSong(formData));
    }

    setFormData({ title: "", artist: "", album: "", genre: "" });
    if (onFinish) onFinish();
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Col gap="10px" maxWidth="480px">
        <Box as="h2" m={0}>{editSong ? "✏️ Edit Song" : "➕ Add New Song"}</Box>
        <Input type="text" name="title" placeholder="Song Title" value={formData.title} onChange={handleChange} />
        <Input type="text" name="artist" placeholder="Artist" value={formData.artist} onChange={handleChange} />
        <Input type="text" name="album" placeholder="Album" value={formData.album} onChange={handleChange} />
        <Input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
        <Button type="submit">{loading ? "Saving..." : editSong ? "Update Song" : "Add Song"}</Button>
      </Col>
    </Box>
  );
};

export default MusicForm;
