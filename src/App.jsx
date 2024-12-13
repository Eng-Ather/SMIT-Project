import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Notifications from "./pages/Notification";
import Footer from "./components/Footer";
import Teacher from "./pages/Teacher";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Routes>

        {/* <Route path=" pageName" element={< component name created inside page />} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
          <Route path="/About" element={<About />} />
          <Route path="/Notification" element={<Notifications />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
