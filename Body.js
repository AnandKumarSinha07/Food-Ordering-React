import RestaurantCard, { ModifyRestaurantCard } from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  
  const [listofResturants, setlistofResturants] = useState(restaurantList);
  const [searchText, setserchText] = useState("");
  const [filteresturant, setFilteresturant] = useState([]);

  const Labelcard = ModifyRestaurantCard(RestaurantCard);
  const { loggedinUser, setuserName } = useContext(UserContext);

  console.log("Body rendering");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Fis-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING%26lat=28.7040592%26lng=77.1024901"
    );

    const response = await data.json();
    console.log(response);

    setFilteresturant(listofResturants);
  }

  const online = useOnlineStatus();
  if (online === false)
    return (
      <>
        <h1>"Sorry Babe check your internet conncection"</h1>
        <p>PLAY GAME</p>
        <p>Which Food are You: </p>
        <button></button>
      </>
    );

  if (filteresturant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            className="search"
            placeholder="Enter Resturant"
            type="text"
            value={searchText}
            onChange={(e) => {
              setserchText(e.target.value);
            }}
          />

          <button
            className="searchBtn"
            onClick={() => {
              console.log(searchText);

              const filterRes = listofResturants.filter((res) =>
                res.data.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteresturant(filterRes);
            }}
          >
            search
          </button>
        </div>

         <button
          className="filter-btn"
          onClick={() => {
            const filterList = listofResturants.filter(
              (res) => (res.data.rating = true)
            );
            setFilteresturant(filterList);
          }}
        >
          Veg Only
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listofResturants.filter(
              (res) => res.data.rating<3.1
            );
            setFilteresturant(filterList);
          }}
        >
          Rating
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listofResturants.filter(
              (res) => res.data.price >= 400
            );
            setFilteresturant(filterList);
          }}
        >
          Price above 400
        </button>

        <button
          className="fast-delivery"
          onClick={() => {
            const time = listofResturants.filter(
              (res) => res.data.deliveryTime <= 30
            );
            setFilteresturant(time);
          }}
        >
          Fast Delivery
        </button>

        {/* <div className="user-search">
          <label></label>
          <input
            value={loggedinUser}
            onChange={(e) => setuserName(e.target.value)}
          ></input>
        </div> */}
        
      </div>

      <div className="res-container">
        {filteresturant.map((restaurant) => (
          <Link to="/restaurant">
            {restaurant.data.promoted ? (
              <Labelcard resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
