import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../features/music/MusicSlice";
import { Box, Button, Card, Input, Row } from "./ui/primitives";

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
    <Card p={3} mb={3}>
      <Box as="h2" m={0} mb={2} fontSize="18px">🎚️ Filter Songs</Box>
      <Row gap="10px" flexWrap="wrap">
        <Box flex="1 1 200px"><Input name="genre" value={filters.genre} onChange={handleChange} placeholder="Genre" /></Box>
        <Box flex="1 1 200px"><Input name="artist" value={filters.artist} onChange={handleChange} placeholder="Artist" /></Box>
        <Box flex="1 1 200px"><Input name="album" value={filters.album} onChange={handleChange} placeholder="Album" /></Box>
        <Button onClick={handleFilter}>Apply</Button>
        <Button variant="ghost" onClick={handleReset}>Reset</Button>
      </Row>
    </Card>
  );
};

export default Filter;
