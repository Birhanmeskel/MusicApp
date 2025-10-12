import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { fetchStats } from "../features/music/MusicSlice";

const MusicStats: React.FC = () => {
  const dispatch = useDispatch();
  const { stats, loading, error } = useSelector((state: RootState) => state.music);

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  if (loading && !stats) return <p>Loading statistics...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!stats) return <p>No statistics available.</p>;

  return (
    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fafafa",
      }}
    >
      <h2>📊 Music Statistics</h2>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginBottom: "20px" }}>
        <div><strong>Total Songs:</strong> {stats.totalSongs}</div>
        <div><strong>Artists:</strong> {stats.totalArtists}</div>
        <div><strong>Albums:</strong> {stats.totalAlbums}</div>
        <div><strong>Genres:</strong> {stats.totalGenres}</div>
      </div>

      <h3>🎼 Songs by Genre</h3>
      <ul>
        {stats.genres.map((g) => (
          <li key={g._id}>
            {g._id || "Unknown"} — {g.count} songs
          </li>
        ))}
      </ul>

      <h3>🎤 Songs per Artist</h3>
      <ul>
        {stats.artists.map((artist) => (
          <li key={artist._id}>
            {artist._id} — {artist.totalSongs} songs ({artist.albums.length} albums)
          </li>
        ))}
      </ul>

      <h3>💿 Songs per Album</h3>
      <ul>
        {stats.albums.map((album) => (
          <li key={album._id}>
            {album._id} — {album.songs} songs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicStats;
