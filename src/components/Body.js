import RestaurantCard, {withPromotedLevel} from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);


  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLevel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40660&lng=77.86530&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();

    const ApiData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (el) => el?.info,
      );

    setListOfRestaurant(ApiData || []);
    setFilteredRestaurant(ApiData || []);
  };

  const getTopRes = () => {
    const filteredList = listOfRestaurant.filter(
      (reslist) => Number(reslist?.avgRating) > 4,
    );
    setFilteredRestaurant(filteredList);
  };

  const {loggedInUser, setUserName} = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-btn">
        <div className="m-4 p-4">
          <input className="border border-solid border-black px-1 py-1"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="ml-2 px-4 py-1.5 bg-green-100 cursor-pointer rounded-sm"
            onClick={() => {
              const filteredRes = listOfRestaurant.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>

          <button onClick={getTopRes} className="ml-5 px-4 py-1.5 bg-gray-100 cursor-pointer rounded-sm">Get Top Restaurant</button>

          <label className="ml-5">User Name: </label>
          <input className="border border-black px-1 py-1 ml-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />

        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {filteredRestaurant.map((list) => (
          <Link key={list?.id} to={"/restaurants/" + list?.id}>
            {list?.promoted?<RestaurantCardPromoted resData={list}/>:<RestaurantCard resData={list} /> }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
