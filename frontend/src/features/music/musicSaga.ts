import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchSongs,
  addSong,
  updateSong,
  deleteSong,
  fetchStats,
  filterSong
} from "../../api/musicApi";


import {
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
} from "./MusicSlice";

function* fetchSongsSaga(){
  try {
    const { data } = yield call(fetchSongs);
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    // yield put(fetchSongsFailure(error.message));
    console.error(error);
  }
}

function* addSongSaga(action: ReturnType<typeof addSongRequest>) {
  try {
    const { data } = yield call(addSong, action.payload);
    yield put(addSongSuccess(data));
  } catch (error: any) {
    console.error(error);
  }
}

function* updateSongSaga(action: ReturnType<typeof updateSongRequest>) {
  try {
    const { data } = yield call(updateSong, action.payload);
    yield put(updateSongSuccess(data));
  } catch (error: any) {
    console.error(error);
  }
}

function* deleteSongSaga(action: ReturnType<typeof deleteSongRequest>) {
  try {
    yield call(deleteSong, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error: any) {
    console.error(error);
  }
}

function* fetchStatsSaga() {
  try {
    const { data } = yield call(fetchStats);
    yield put(fetchStatsSuccess(data));
  } catch (error: any) {
    console.error(error);
  }
}

function* filterSongSaga(action: ReturnType<typeof filterSongRequest>) {
  try {
    const { data } = yield call(filterSong, action.payload);
    yield put(filterSongSuccess(data));
  } catch (error: any) {
    console.error(error);
  }
}

export function* musicSaga() {
  yield takeEvery(fetchSongsRequest.type, fetchSongsSaga);
  yield takeEvery(addSongRequest.type, addSongSaga);
  yield takeEvery(updateSongRequest.type, updateSongSaga);
  yield takeEvery(deleteSongRequest.type, deleteSongSaga);
  yield takeEvery(fetchStatsRequest.type, fetchStatsSaga);
  yield takeEvery(filterSongRequest.type, filterSongSaga);
}