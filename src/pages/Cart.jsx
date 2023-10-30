
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

  return (
      <div className="w-screen">

      {
        cart.length > 0 ? 
        (
          <div className="flex w-11/12 max-w-6xl p-2 mx-auto gap-7">
            <div>
              {
                cart.map( (item,index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                } )
              }
            </div>
            <div className="flex flex-col w-80 h-80 justify-between mt-12 mb-6 gap-20">
              <div className="flex flex-col gap-2">
                <div className="mt-12">
                <div className="text-xl font-semibold text-green-700 uppercase">Your Cart</div>
                <div className="text-3xl font-bold text-green-700 uppercase">Summary</div>
                </div>
                <p>
                  <span className="text-lg font-semibold text-green-900">Total Items: {cart.length}</span>
                </p>
              </div>
