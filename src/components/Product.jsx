
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {add, remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector( (state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Romoved From Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in
    gap-3 p-4 mt-10 ml-5 outline rounded-xl hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate
        w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img className="w-full h-full" src={post.image} />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
      {
        cart.some( (p) => p.id == post.id) ? 
        (<button
