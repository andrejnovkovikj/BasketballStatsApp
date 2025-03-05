import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/NavBar/Navbar.jsx";
import ListTeams from "./components/Teams/ListTeams.jsx";
import About from "./components/About/About.jsx";
import DetailsForTeam from "./components/Teams/DetailsForTeam.jsx";
import ListPlayers from "./components/Players/ListPlayers.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teams" element={<ListTeams />} />
                <Route path="/players" element={<ListPlayers />} />

                <Route path="/about" element={<About />} />
                <Route path="/teams/:teamId" element={<DetailsForTeam />} />

            </Routes>
        </Router>
    );
}

export default App;
