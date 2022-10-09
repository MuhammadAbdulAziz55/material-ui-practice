import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Tour from "./components/pages/Tour";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:id" element={<Tour></Tour>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
