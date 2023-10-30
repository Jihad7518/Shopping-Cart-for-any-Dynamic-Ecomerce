
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Cart = () => {

  const {cart} = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0) );
  }, [cart])
