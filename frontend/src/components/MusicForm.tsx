import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addSong, updateSong } from "../features/music/MusicSlice";
import { Song } from "../features/music/types";

interface Props {
  editSong?: Song | null;
  onFinish?: () => void; // Optional callback when form completes (for closing modals, etc.)
}

const MusicForm: React.FC<Props> = ({ editSong = null, onFinish }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.music);

  const [formData, setFormData] = useState<Song>(
    editSong || { title: "", artist: "", album: "", genre: "" }
  );

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
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
        marginBottom: "30px",
      }}
    >
      <h2>{editSong ? "✏️ Edit Song" : "➕ Add New Song"}</h2>

      <input
        type="text"
        name="title"
        placeholder="Song Title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="artist"
        placeholder="Artist"
        value={formData.artist}
        onChange={handleChange}
      />

      <input
        type="text"
        name="album"
        placeholder="Album"
        value={formData.album}
        onChange={handleChange}
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
      />

      <button
        type="submit"
        style={{
          backgroundColor: "#2ecc71",
          border: "none",
          color: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {loading ? "Saving..." : editSong ? "Update Song" : "Add Song"}
      </button>
    </form>
  );
};

export default MusicForm;
