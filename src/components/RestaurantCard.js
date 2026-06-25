const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img
          alt="res-image"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/" + resData.cloudinaryImageId}
        />
      </div>

      <div className="res-content-container">
        <h3>{resData.name}</h3>

        <div>
          <h3>
            {"⭐" + resData.avgRating + " . " + resData.sla.slaString}
          </h3>
        </div>

        <p>{resData.cuisines.slice(0, 4).join(", ")}</p>
        <p>{resData.areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;