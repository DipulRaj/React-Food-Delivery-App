const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-1 w-[300] bg-gray-100 h-[350] rounded-sm">
      <div className="h-[60%] rounded-sm" >
        <img className="h-[99%] w-[99%] rounded-sm"
          alt="res-image"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/" + resData?.cloudinaryImageId}
        />
      </div>

      <div className="px-3 py-2">
        <h3 className="py-1 font-bold text-[16px]" >{resData?.name}</h3>

        <div>
          <h3>
            {"⭐" + resData?.avgRating + " . " + resData.sla.slaString}
          </h3>
        </div>

        <p>{resData?.cuisines.slice(0, 4).join(", ")}</p>
        <p>{resData?.areaName}</p>
        <p>{resData?.costForTwo}</p>
      </div>
    </div>
  );
};

// {High order component}

export const withPromotedLevel = (RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;