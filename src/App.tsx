import React from "react";
import { Routes, Route } from "react-router-dom";
import MainView from "./pages/MainView";
import CreatePlayer from "./pages/CreatePlayer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#2B2A33" }}>
      <Routes>
        <Route path="/game" element={<MainView />} />
        <Route
          path="/"
          element={
            <CreatePlayer/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
