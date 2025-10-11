import axios from 'axios';
import { Music } from '../features/music/types';

const API_URL = 'http://localhost:5000/api';

export const fetchSongs = () => axios.get<Music[]>(`${API_URL}/songs`);

export const addSong = (song: Omit<Music, 'id'>) =>
  axios.post<Music>(`${API_URL}/songs`, song);

export const updateSong = (song: Music) =>
  axios.put<Music>(`${API_URL}/songs/${song.id}`, song);

export const deleteSong = (id: string) =>
  axios.delete<{ message: string }>(`${API_URL}/songs/${id}`);
// export const deleteSong = (id: string) =>
//   axios.delete<{ message: string }>(`${API_URL}/songs/${id}`);

export const fetchStats = () => axios.get(`${API_URL}/stats`);

export const filterSong = (query: string) =>
  axios.get<Music[]>(`${API_URL}/songs`, {
    params: { q: query },
  });