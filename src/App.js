import { Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Magazine from "./components/Magazine";
import Portfolio from "./components/Portfolio";
import Poster from "./components/Poster";
import Novels from "./components/Novels";
import Broachers from "./components/Broachers";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Magazine" element={<Magazine />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Poster" element={<Poster />} />
        <Route path="/Novels" element={<Novels />} />
        <Route path="/Broachers" element={<Broachers />} />
      </Routes>
    </div>
  );
}

export default App;
