import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Navbar from "./components/Navbar/Navbar.jsX";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/LeftSidebar" element={<LeftSidebar />} />
          <Route path="/PropertyDetails" element={<PropertyDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
