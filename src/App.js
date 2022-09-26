import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import "./App.css";
import Register from "./Pages/Register/Register";
import Establishments from "./Pages/Establishments/Establishments";

function App() {
  return (
    <div className="app">
      <div className="body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/establishments" element={<Establishments />} />
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
