import  {useState}  from "react";
import ItemList from "./ItemList";


const RestaurantCategories=({data})=>{

    const [showItem,setshowItem]=useState(false);
    const handleClick=()=>{
        console.log("clicked");
        setshowItem(!showItem);
    }
    
    // console.log("everything is data",data)
    return(
         
               <div className="acordion-box" >
                   <div className="acordion-header" >
                   <span className="acordion-title" onClick={handleClick}>{data.title}-({data.itemCards.length})</span>
                   <span className="acc-symbol">🔽</span> 
                   {showItem && <ItemList items={data.itemCards}/>}
                   </div>
             </div>
               
    )
}
export default RestaurantCategories;