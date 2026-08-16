import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import StartProject from "./pages/StartProject";
import AboutPage from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/work"
          element={<Work />}
        />

        <Route
          path="/work/:id"
          element={<ProjectDetail />}
        />

        <Route
          path="/start-project"
          element={<StartProject />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/services"
          element={<Services />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;