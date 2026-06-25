import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;


    const {name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="menu">
            <h3>{name}</h3>

            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

            <h4>Menu</h4>
            <ul>
                {
                    itemCards.map((item)=>(
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs. "}
                            {item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default RestaurantMenu;