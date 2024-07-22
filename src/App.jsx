import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About/About";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="cardspace1" element={<CardSpace1 />} />
          <Route path="cardspace2" element={<CardSpace2 />} />
          <Route path="cardspace3" element={<CardSpace3 />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
