import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Music } from "./types"

interface MusicState {
  songs: Music[];
  loading: boolean;
  error: string | null;
  stats: any;
}

const initialState: MusicState = {
  songs: [],
  loading: false,
  error: null,
  stats: null,
};

export const musicSlice = createSlice({

 name: "music",
  initialState, 
  reducers:{
    fetchSongsRequest: (state) => {
      state.loading = true;
    },
    fetchSongsSuccess: (state, action: PayloadAction<Music[]>) => {
      state.loading = false;
      state.songs = action.payload;
      state.error = null;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    // ADD SONG
    addSongRequest: (state, action: PayloadAction<Omit<Music, "id">>) => {},

    addSongSuccess: (state, action: PayloadAction<Music>) => {
      state.songs.push(action.payload);
    },
    updateSongRequest: (state, action: PayloadAction<Music>) => {},

    updateSongSuccess: (state, action: PayloadAction<Music>) => {
      const idx = state.songs.findIndex((s) => s.id === action.payload.id);
      if (idx >= 0) state.songs[idx] = action.payload;
    },

     // DELETE SONG
    deleteSongRequest: (state, action: PayloadAction<string>) => {},
    deleteSongSuccess: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((s) => s.id !== action.payload);
    },

      // STATS
    fetchStatsRequest: (state) => {},
    fetchStatsSuccess: (state, action: PayloadAction<any>) => {
      state.stats = action.payload;
    },

    // FILTER SONG
    filterSongRequest: (state, action: PayloadAction<string>) => {},
    filterSongSuccess: (state, action: PayloadAction<Music[]>) => {
      state.songs = action.payload;
    },


  }

})

export const {
   fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  updateSongRequest,
  updateSongSuccess,
  deleteSongRequest,
  deleteSongSuccess,
  fetchStatsRequest,
  fetchStatsSuccess,
  filterSongRequest,
  filterSongSuccess,
}= musicSlice.actions;

export default musicSlice.reducer;