import { useDispatch } from "react-redux";
import { CDN_URL2 } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12 p-4 h-30">
            <img
              className="w-full rounded-lg h-full"
              src={CDN_URL2 + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
            <button
              className="px-3 py-1 bg-white shadow-2xl relative bottom-9 left-9 rounded-sm cursor-pointer"
              onClick={() => handleAddItem(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
