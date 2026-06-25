import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40660&lng=77.86530&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();

    console.log(json);

    const ApiData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (el) => el?.info,
      );

    console.log(ApiData);

    setListOfRestaurant(ApiData || []);
    setFilteredRestaurant(ApiData || []);
  };

  const getTopRes = () => {
    const filteredList = listOfRestaurant.filter(
      (reslist) => Number(reslist?.avgRating) > 4,
    );
    setFilteredRestaurant(filteredList);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        </div>
        <button onClick={getTopRes}>Get Top Restaurant</button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((list) => (
          <Link key={list?.id} to={"/restaurants/" + list?.id}><RestaurantCard resData={list} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
