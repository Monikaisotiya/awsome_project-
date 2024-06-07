import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Aslogin from "./Pages/LOGIN/Aslogin";
import Aswhome from "./Pages/HOME/Aswhome";
import Shoplisting from "./Pages/Shop/Shoplisting";
import Aboutus from "./Pages/About/Aboutus";
import Productlist from "./Pages/Product/Productlist";
import Contactus from "./Pages/contact/Contactus";
import Cart from "./Pages/CART/Cart";
import Checkout from "./Pages/CART/Checkout";
import Checkout_shiping from "./Pages/CART/Checkout_shiping";
import Campare from "./Pages/CART/Campare";
import Checkout_payment from "./Pages/CART/Checkout_payment";
import Wishlist_header from "./Pages/wishlist/Wishlist_header";
import Create_account from "./Pages/LOGIN/Create_account";
import Faqs from "./Pages/Footer_infor/Faqs";
import Order_return from "./Pages/Footer_infor/Order_return";
import Search from "./Pages/Footer_infor/Search";
import Privacy_Policy from "./Pages/Footer_help/Privacy_Policy";
import Shopping_details from "./Pages/Footer_help/Shopping_details";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Aslogin />} />
        <Route path="/Home" element={<Aswhome />} />
        <Route path="/shoplist" element={<Shoplisting />} />
        <Route path="/About" element={<Aboutus />} />
        <Route path="/product" element={<Productlist />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Shiping" element={<Checkout_shiping />} />
        <Route path="/Campare" element={<Campare />} />
        <Route path="/Payment" element={<Checkout_payment />} />
        <Route path="/Wishlist" element={<Wishlist_header />} />
        <Route path="/Create" element={<Create_account />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/OrderReturn" element={<Order_return />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Privacy" element={<Privacy_Policy />} />
        <Route path="/Shopping" element={<Shopping_details />} />
      </Routes>
    </div>
  );
}

export default App;
