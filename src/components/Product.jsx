
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
