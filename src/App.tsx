import { Routes, Route } from "react-router-dom";
import MainView from "./pages/MainView";
import CreatePlayer from "./pages/CreatePlayer";
import { useState } from "react";
import React from "react";

function App() {
  const [nickName, setNickName] = useState("");
  return (
    <div className="App" style={{ backgroundColor: "#2B2A33" }}>
      <Routes>
        <Route path="/game" element={<MainView nickName={nickName} />} />
        <Route
          path="/"
          element={
            <CreatePlayer nickName={nickName} setNickName={setNickName} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
