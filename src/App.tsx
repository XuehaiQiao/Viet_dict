import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import SoundPage from "./components/SoundPage";
import {
  loadJsonFile,
  storeJsonToLocalStorage,
  loadJsonFromLocalStorage,
} from "./utils/jsonUtils";

export interface NavbarProps {
  clickEffect: boolean;
  setClickEffect: (page: boolean) => void;
}

function App() {
  const [clickEffect, setClickEffect] = useState(false);

  loadJsonFile("/sound_word_1k.json").then((data) => {
    Object.entries(data).map(([key, value]) => {
      storeJsonToLocalStorage(key, value);
    });
  });

  return (
    <>
      <NavBar clickEffect={clickEffect} setClickEffect={setClickEffect} />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ListGroup clickEffect={clickEffect} />} />
            <Route path="/soundPage/:id" element={<SoundPage />} />
            <Route
              path="/listGroup"
              element={<ListGroup clickEffect={clickEffect} />}
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
