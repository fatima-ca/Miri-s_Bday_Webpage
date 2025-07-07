import NavBar from "./components/NavBar";
import Playlist from "./pages/Playlist";
import Remains from "./pages/Remains";
import Letter from "./pages/Letter";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/remains" element={<Remains />} />
          <Route path="/letter" element={<Letter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}