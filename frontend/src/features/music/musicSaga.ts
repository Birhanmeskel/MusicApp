import toast from "react-hot-toast";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  addSong,
  addSongFailure,
  addSongSuccess,
  deleteSong,
  deleteSongFailure,
  deleteSongSuccess,
  fetchSongs,
  fetchSongsFailure,
  fetchSongsSuccess,
  fetchStats,
  fetchStatsFailure,
  fetchStatsSuccess,
  updateSong,
  updateSongFailure,
  updateSongSuccess,
} from "./MusicSlice";

import {
  createSong,
  deleteSong as deleteSongApi,
  getMusicStats,
  getSongs,
  updateSong as updateSongApi,
} from "../../api/musicApi";

import { PayloadAction } from "@reduxjs/toolkit";
import { Song } from "./types";

// Fetch Songs
function* fetchSongsWorker(action: PayloadAction<{ genre?: string; artist?: string; album?: string } | undefined>): any {
  try {
    const songs = yield call(getSongs, action.payload);
    yield put(fetchSongsSuccess(songs));
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));
    toast.error("Failed to load songs");
  }
}

// Add Song
function* addSongWorker(action: PayloadAction<Song>): any {
  try {
    const newSong = yield call(createSong, action.payload);
    yield put(addSongSuccess(newSong));
     toast.success("Song added successfully");
    yield put(fetchSongs({}));
    yield put(fetchStats());
  } catch (error: any) {
    yield put(addSongFailure(error.message));
    toast.error("Failed to add song");
  }
  
}

//  Update Song
function* updateSongWorker(action: PayloadAction<{ id: string; data: Song }>): any {
  try {
    const updated = yield call(updateSongApi, action.payload.id, action.payload.data);
    yield put(updateSongSuccess(updated));
    toast.success("Song updated successfully");
    yield put(fetchSongs({}));
    yield put(fetchStats());
  } catch (error: any) {
    yield put(updateSongFailure(error.message));
    toast.error("Failed to update song");
  }
}

// Delete Song
function* deleteSongWorker(action: PayloadAction<string>): any {
  try {
    yield call(deleteSongApi, action.payload);
    yield put(deleteSongSuccess(action.payload));
    toast.success("Song deleted successfully");
    // Auto-refresh list & stats
    yield put(fetchSongs({}));
    yield put(fetchStats());
  } catch (error: any) {
    yield put(deleteSongFailure(error.message));
    toast.error("Failed to delete song");
  }
}

//  Fetch Stats
function* fetchStatsWorker(): any {
  try {
    const stats = yield call(getMusicStats);
    yield put(fetchStatsSuccess(stats));
  } catch (error: any) {
    yield put(fetchStatsFailure(error.message));
  }
}

//  Watcher Saga
export default function* musicSaga() {
  yield takeLatest(fetchSongs.type, fetchSongsWorker);
  yield takeLatest(addSong.type, addSongWorker);
  yield takeLatest(updateSong.type, updateSongWorker);
  yield takeLatest(deleteSong.type, deleteSongWorker);
  yield takeLatest(fetchStats.type, fetchStatsWorker);
}
