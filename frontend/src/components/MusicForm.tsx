import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addSongRequest } from "../features/music/MusicSlice";
import { Music } from "../features/music/types";

const MusicForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch request action; saga will call the API and trigger success action
    dispatch(addSongRequest({
       title,
        artist,
         album,
          genre 
        } as Omit<Music, "id">));
    // Clear form fields
    setTitle("");
    setArtist("");
    setAlbum("");
    setGenre("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Song</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        placeholder="Album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
      />
      <input
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <button type="submit">Add Song</button>
    </form>
  );
}

export default MusicForm;