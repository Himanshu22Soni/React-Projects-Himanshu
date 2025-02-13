import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);
  const [filterRestaurant, setFilterRestaurant] = useState(resData);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1209186&lng=72.8979434&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
  //   );

  //   const json = await data.json();
  //   console.log(
  //     // json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
  //     json
  //   );
  // };

  const searchBtn = () => {
    console.log("Search button clicked");
    const filteredListOfRestaurants = listOfRestaurants.filter((res) =>
      res.resName.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilterRestaurant(filteredListOfRestaurants);
  };

  return (
    <div className="body">
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={searchBtn}>Find</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              //Filtering the data on the basis of rating greater than 4 using map function.
              let filteredList = listOfRestaurants.filter(
                (res) => res.rating > 4
              );
              //Sorting that filtered list using sort function.
              filteredList = filteredList.sort((a, b) => b.rating - a.rating);
              setFilterRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      {/* <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filtering the data on the basis of rating greater than 4 using map function.
            let filteredList = listOfRestaurants.filter(
              (res) => res.rating > 4
            );
            //Sorting that filtered list using sort function.
            filteredList = filteredList.sort((a, b) => b.rating - a.rating);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div> */}
      <div className="res-container">
        {filterRestaurant.map((restaurants) => (
          <RestaurantCard key={restaurants.id} resList={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
