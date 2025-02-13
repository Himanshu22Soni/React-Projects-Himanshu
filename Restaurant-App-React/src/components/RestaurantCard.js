const RestaurantCard = (props) => {
  // Destructuring the props coming.
  if (!props) return <p>Loading...</p>;
  const { resImage, resName, cuisine, eta, rating, costForTwo } = props.resList;
  return (
    <div className="res-card">
      <img className="res-logo" alt="Restaurant Image" src={resImage} />
      <h3>{resName}</h3>
      <h5>{cuisine}</h5>
      <h4 id="eta-resCard">{eta}</h4>
      <h4>₹{costForTwo} for two</h4>
      <h4>Rating : {rating}⭐</h4>
    </div>
  );
};

export default RestaurantCard;
