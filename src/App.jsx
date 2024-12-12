import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Notifications from "./pages/Notification";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Routes>

        {/* <Route path=" pageName" element={< component name created inside page />} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Notification" element={<Notifications />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
