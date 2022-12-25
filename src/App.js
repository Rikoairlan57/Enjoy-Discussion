import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddThreadPage from "./pages/AddThreadPage";
import DetailThreadPage from "./pages/DetailThreadPage";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddThreadPage />} />
            <Route path="/threads/:id" element={<DetailThreadPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
