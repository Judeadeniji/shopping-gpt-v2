import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/nav/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <Header />
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
