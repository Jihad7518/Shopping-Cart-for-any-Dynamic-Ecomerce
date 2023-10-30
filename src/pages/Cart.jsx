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

              <div className="flex flex-col gap-4 mt-10 pt-10">
                <p className="text-lg font-semibold text-green-900">Total Amount: <span className="text-lg font-bold text-green-950">${totalAmount}</span></p>
                <button
                className="text-white w-full rounded-md font-semibold bg-green-600
        text-[17px] p-2 px-3 py-3 uppercase hover:bg-green-900
        transition duration-300 ease-in"
        >CheckOut</button>
              </div>
            </div>
          </div>
        ) :
        (<div className="w-[100vw] h-[100vh]">

         <div className="flex flex-col gap-5 text-3xl h-full justify-center items-center">
         <div className="w-100 h-100">
          <h1 className="text-green-700 text-lg font-bold">Your Cart is Empty</h1>
          </div>

          <div>
          <Link to={"/"}>
              <button className="text-white w-80 rounded-md font-semibold bg-green-600
         p-2 px-3 py-3 uppercase hover:bg-green-900
        transition duration-300 ease-in text-lg">
                Shop Now
              </button>
          </Link>
          </div>
         </div>
        </div>)
      }

      </div>
    );
};

export default Cart;
