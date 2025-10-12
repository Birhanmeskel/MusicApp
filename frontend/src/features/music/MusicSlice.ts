import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MusicState, Song, MusicStats } from "./types";

// Initial state
const initialState: MusicState = {
  songs: [],
  stats: null,
  loading: false,
  error: null,
  filter: {},
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    // Fetch Songs
    fetchSongs: (state, action: PayloadAction<{ genre?: string; artist?: string; album?: string } | undefined>) => {
      state.loading = true;
      state.filter = action.payload || {};
    },
    fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    //  Create Song
    addSong: (state, _action: PayloadAction<Song>) => {
      state.loading = true;
    },
    addSongSuccess: (state, action: PayloadAction<Song>) => {
      state.songs.unshift(action.payload);
      state.loading = false;
    },
    addSongFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    //  Update Song
    updateSong: (state, _action: PayloadAction<{ id: string; data: Song }>) => {
      state.loading = true;
    },
    updateSongSuccess: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex((s) => s._id === action.payload._id);
      if (index !== -1) state.songs[index] = action.payload;
      state.loading = false;
    },
    updateSongFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    //  Delete Song
    deleteSong: (state, _action: PayloadAction<string>) => {
      state.loading = true;
    },
    deleteSongSuccess: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.loading = false;
    },
    deleteSongFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    //  Fetch Stats
    fetchStats: (state) => {
      state.loading = true;
    },
    fetchStatsSuccess: (state, action: PayloadAction<MusicStats>) => {
      state.stats = action.payload;
      state.loading = false;
    },
    fetchStatsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSong,
  addSongSuccess,
  addSongFailure,
  updateSong,
  updateSongSuccess,
  updateSongFailure,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailure,
  fetchStats,
  fetchStatsSuccess,
  fetchStatsFailure,
} = musicSlice.actions;

export default musicSlice.reducer;
