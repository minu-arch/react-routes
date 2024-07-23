import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About/About";
import Button from "./views/Buttons/Button";
import Cards from "./views/Cards/Cards";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="buttons" element={<Button />} />
          <Route path="cards" element={<Cards />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
