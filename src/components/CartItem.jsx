
import {MdOutlineDelete} from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";



const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed!");

  }

  return (
    <div>

      <div className="flex gap-4 p-4 mt-10 ml-5">

        <div className="h-[200px] w-[180px]">
          <img className="w-full h-full px-2" src={item.image}/>
        </div>

        <div className="w-80 pl-3">
          <h1 className="text-gray-700 font-semibold text-lg
        w-full mt-1">{item.title}</h1>
          <h1 className="w-full text-gray-400 font-normal text-[15px]">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
          <div className="flex justify-between mt-10">
            <p className="text-green-600 font-semibold text-lg">${item.price}</p>
            <div onClick={removeFromCart}>
              <MdOutlineDelete className="bg-red-300 w-9 h-9 rounded-full m-auto px-2 py-2"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
