import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../features/music/MusicSlice";
import { Col, FilterCard, Row, Title } from "./Filter.styles";
import { Button } from "./ui/Button.styles";
import { Input } from "./ui/Input.styles";

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
    <FilterCard>
      <Title>🎚️ Filter Songs</Title>
      <Row>
        <Col><Input name="genre" value={filters.genre} onChange={handleChange} placeholder="Genre" /></Col>
        <Col><Input name="artist" value={filters.artist} onChange={handleChange} placeholder="Artist" /></Col>
        <Col><Input name="album" value={filters.album} onChange={handleChange} placeholder="Album" /></Col>
        <Button onClick={handleFilter}>Apply</Button>
        <Button variant="ghost" onClick={handleReset}>Reset</Button>
      </Row>
    </FilterCard>
  );
};

export default Filter;
