import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/nav/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
