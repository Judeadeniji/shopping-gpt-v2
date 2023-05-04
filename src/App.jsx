import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/nav/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Tab from "./components/tab/Tab";
import imgOne from "./assets/images/img-1.png";
import useFetch from "./hooks/useFetch";

function App() {
  const { data } = useFetch("https://fakestoreapi.com/products");
  return (
    <div className="app__container">
      <BrowserRouter>
        <Header />
        <div className="main__container">
          <div className="wrap__tab">
            <Tab />
            {data && <img src={imgOne} className="ad__img" />}
          </div>
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
