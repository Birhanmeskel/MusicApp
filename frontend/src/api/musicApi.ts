import axios from "axios";
import { MusicStats, Song } from "../features/music/types";

// Base API URL
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://music-app-backend-r3mq.onrender.com/api";

// SONGS API
export const getSongs = async (filters?: {
  genre?: string;
  artist?: string;
  album?: string;
}): Promise<Song[]> => {
  const params = new URLSearchParams();

  if (filters?.genre) params.append("genre", filters.genre);
  if (filters?.artist) params.append("artist", filters.artist);
  if (filters?.album) params.append("album", filters.album);

  const response = await axios.get(`${API_BASE_URL}/songs?${params.toString()}`);
  return response.data;
};

export const createSong = async (song: Song): Promise<Song> => {
  const response = await axios.post(`${API_BASE_URL}/songs`, song);
  return response.data;
};

export const updateSong = async (id: string, song: Song): Promise<Song> => {
  const response = await axios.put(`${API_BASE_URL}/songs/${id}`, song);
  return response.data;
};

export const deleteSong = async (id: string): Promise<{ message: string }> => {
  const response = await axios.delete(`${API_BASE_URL}/songs/${id}`);
  return response.data;
};

// STATS API
export const getMusicStats = async (): Promise<MusicStats> => {
  const response = await axios.get(`${API_BASE_URL}/stats`);
  return response.data;
};
