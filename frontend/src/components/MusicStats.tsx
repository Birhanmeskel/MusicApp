import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { fetchStats } from "../features/music/MusicSlice";
import { Box, Card, Row } from "./ui/primitives";

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
    <Card p={3} mt={4}>
      <Box as="h2" m={0} mb={3} fontSize="20px">📊 Music Statistics</Box>
      <Row gap="30px" flexWrap="wrap" mb={3}>
        <Box><strong>Total Songs:</strong> {stats.totalSongs}</Box>
        <Box><strong>Artists:</strong> {stats.totalArtists}</Box>
        <Box><strong>Albums:</strong> {stats.totalAlbums}</Box>
        <Box><strong>Genres:</strong> {stats.totalGenres}</Box>
      </Row>
      <Box as="h3" mt={0}>🎼 Songs by Genre</Box>
      <ul>
        {stats.genres.map((g) => (
          <li key={g._id}>
            {g._id || "Unknown"} — {g.count} songs
          </li>
        ))}
      </ul>
      <Box as="h3">🎤 Songs per Artist</Box>
      <ul>
        {stats.artists.map((artist) => (
          <li key={artist._id}>
            {artist._id} — {artist.totalSongs} songs ({artist.albums.length} albums)
          </li>
        ))}
      </ul>
      <Box as="h3">💿 Songs per Album</Box>
      <ul>
        {stats.albums.map((album) => (
          <li key={album._id}>
            {album._id} — {album.songs} songs
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MusicStats;
