import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import CheckApi from "./components/CheckApi";
import MusicList from "./components/MusicList";
import { fetchSongsRequest, fetchStatsRequest } from "./features/music/MusicSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const songs = useSelector((state: RootState) => state.music.songs);
    const stats = useSelector((state: RootState) => state.music.stats);
    const [genreFilter, setGenreFilter] = useState<string>("");

 useEffect(() => {
    dispatch(fetchSongsRequest());
    dispatch(fetchStatsRequest()); // trigger saga to fetch stats
  }, [dispatch]);

     const filteredSongs = genreFilter
    ? songs.filter(
        (song) => song.genre.toLowerCase() === genreFilter.toLowerCase()
      )
    : songs;
  return (
    <div>
      <h2>My Music App</h2>
      <CheckApi/>
      <MusicList songs={filteredSongs} />
    </div>
  );
}

export default App;
