
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategories from './RestaurantCategories';

const RestaurantMenu = () => {
 
   
   const resInfo=useRestaurantMenu();

   if(resInfo===null)return <Shimmer/>;

    console.log("card",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    ((c)=>
      c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
   //console.log("categories",categories);
   

   return (
      
        
        <>
         <div className='menu-box'>

           <h1>Icecream</h1>
           <p>4.1 (100+ ratings)</p>
           <a href=''>Asian</a>
           <p>Very Far (14.2 kms) | Additional delivery fee will apply</p>
         </div>

         {categories.map((category)=>( 
            <RestaurantCategories data={category?.card?.card}/>
         ))}
         
         </>
      
   );
}

export default RestaurantMenu;
