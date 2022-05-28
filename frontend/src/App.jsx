import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useSelector } from "react-redux";


const App = () => {
  const user=useSelector((state)=>state.user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products/:category" element={<ProductList />}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="/carts" element={<Cart />}/>
      
      <Route path="/register" element={user? <Home/>:<Register />}/>
      <Route path="/login" element={ user? <Home />:<Login />}/>
    </Routes>
  )
}

export default App