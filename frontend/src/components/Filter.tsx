import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../features/music/MusicSlice";

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ genre: "", artist: "", album: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    dispatch(fetchSongs(filters));
  };

  const handleReset = () => {
    setFilters({ genre: "", artist: "", album: "" });
    dispatch(fetchSongs({}));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>🎚️ Filter Songs</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          name="genre"
          value={filters.genre}
          onChange={handleChange}
          placeholder="Genre"
        />
        <input
          name="artist"
          value={filters.artist}
          onChange={handleChange}
          placeholder="Artist"
        />
        <input
          name="album"
          value={filters.album}
          onChange={handleChange}
          placeholder="Album"
        />
        <button onClick={handleFilter}>Apply</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Filter;
