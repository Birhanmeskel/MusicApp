import React from "react";
import Filter from "./components/Filter";
import MusicForm from "./components/MusicForm";
import MusicList from "./components/MusicList";
import MusicStats from "./components/MusicStats";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎧 Music Library Dashboard</h1>

      <MusicForm />
      <Filter />
      <MusicList />
      <MusicStats />
    </div>
  );
};

export default App;
