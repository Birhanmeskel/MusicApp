import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { fetchSongs, deleteSong } from "../features/music/MusicSlice";
import { Song } from "../features/music/types";
import MusicForm from "./MusicForm";

const MusicList: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, loading, error, filter } = useSelector((state: RootState) => state.music);

  const [editingSong, setEditingSong] = useState<Song | null>(null);

  useEffect(() => {
    dispatch(fetchSongs(filter));
  }, [dispatch, filter]);

  if (loading) return <p>Loading songs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🎶 Song List</h2>

      {/* Conditional render for edit form */}
      {editingSong && (
        <div style={{ marginBottom: "20px" }}>
          <MusicForm editSong={editingSong} onFinish={() => setEditingSong(null)} />
        </div>
      )}

      {songs.length === 0 ? (
        <p>No songs found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {songs.map((song) => (
            <li
              key={song._id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <strong>{song.title}</strong> — {song.artist}
                <br />
                <small>
                  Album: {song.album || "N/A"} | Genre: {song.genre || "Unknown"}
                </small>
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => setEditingSong(song)}
                  style={{
                    background: "#3498db",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => dispatch(deleteSong(song._id!))}
                  style={{
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MusicList;
