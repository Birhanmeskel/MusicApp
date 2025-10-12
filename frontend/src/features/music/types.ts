// Song data model
export interface Song {
  _id?: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  createdAt?: string;
  updatedAt?: string;
} 

// Music statistics model
export interface MusicStats {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  genres: { _id: string; count: number }[];
  artists: {
    _id: string;
    totalSongs: number;
    albums: string[];
  }[];
  albums: { _id: string; songs: number }[];
}

// State for Redux
export interface MusicState {
  songs: Song[];
  stats: MusicStats | null;
  loading: boolean;
  error: string | null;
  filter: {
    genre?: string;
    artist?: string;
    album?: string;
  };
}
