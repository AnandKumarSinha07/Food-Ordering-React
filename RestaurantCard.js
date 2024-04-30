import { useState } from "react";
import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => { 
    const { resData } = props;
    //const [additem,setAdditem]=useState(0);
    //const [showItem,setshowItem]=useState(false);
  
    
   
    return (
      <div className="res-card" >
       <div className="res-card-img">
            <img
            className="res-logo"
            alt="res-logo"
            src={resData.data.cloudinaryImageId}
          />
      </div>

       <div className="card-item">
        <h3 className="res-name">{resData.data.name}</h3>
        <h4 className="res-cuisine">{resData.data.cuisines.join(",")}</h4>
        <h4 className="res-rating">{resData.data.rating}<img src="https://img.icons8.com/?size=100&id=7856&format=png" className="star"/></h4>
        <h4 className="res-time">{resData.data.deliveryTime}mins only</h4>
        <div className="card-btn">
        {/* <button 
        className="card-btn"
        onClick={()=>{
          console.log("Item added")
          setAdditem(additem+1);
          
        }}
        >Add Item {additem} Total={200*additem} 
        </button> */}

        {/* <button
        className="sec-btn"
        onClick={()=>{
          if(additem>0)
          setAdditem(additem-1)
        }}>

         Remove item {additem}
         
        </button> */}
        </div>
        </div>  

    
      </div>
    );
};  
  
 
//HIGHER ORDER COMPONENT

// input - RestaurantCard -> ModifyRestaurantCard
export const ModifyRestaurantCard=(RestaurantCard)=>{
  return(props)=>{
    return(
       <div className="label">
          <label>promoted</label> 
          <RestaurantCard {...props}/>
       </div>
    )
  }
};
export default RestaurantCard;  


