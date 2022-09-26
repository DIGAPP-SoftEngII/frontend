import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="app">
      <div className="body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="header">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
