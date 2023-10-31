
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector( (state) => state);
  return (
    <div>
