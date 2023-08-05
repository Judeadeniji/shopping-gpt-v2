import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/nav/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import imgOne from "./assets/images/img-1.png";
import useFetch from "./hooks/useFetch";
import { useContext, useEffect } from "react";
import { CartNumbersContext } from "./contexts/CartNumbersContext";
import CartItems from "./components/cart-display/CartItems";
import MoreInfo from "./pages/MoreInfo";
function App() {
  const { data } = useFetch("https://fakestoreapi.com/products");
  const { cartOpen } = useContext(CartNumbersContext);

  return (
    <div className="app__container">
      <BrowserRouter>
        <Header />
        <GetToTop />
        <div className="main__container">
          <div className="wrap__tab">
            {data && <img src={imgOne} className="ad__img" />}
          </div>
          {cartOpen === true ? <CartItems /> : <></>}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/product/:id" exact element={<MoreInfo />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// get to top component

export const GetToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);
};
