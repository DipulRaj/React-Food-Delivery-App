import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h3 className="font-bold text-2xl">Cart</h3>

      <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-xl cursor-pointer">
        Clear Cart
      </button>

      {cartItems.length === 0 && <h1>Cart is empty Please add somethings.</h1>}

      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
