import { useEffect, useState } from "react";
import { MENU_API } from "./contants";

const useRestaurantMenu = () => { 
   
  const [resInfo,setResinfo]=useState(null);

  useEffect(() => {
      fetchData();
  }, []);


  const fetchData= async()=> {
   
    const data = await fetch(MENU_API);
    const response=await data.json();
    setResinfo(response.data);
  };

  return resInfo;

}
export default useRestaurantMenu;
