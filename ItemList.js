import { useDispatch } from "react-redux";

import { addItem } from "../utils/cartSlice";
const ItemList=({items})=>{
   
    const dispath=useDispatch()
    
    const handleItem=(item)=>{
      dispath(addItem(item))
    }
    return (
          <>
              {items.map((item)=>(
                <div key={item.card.info.id} className="accordion-data">
                     <div className="symbol">
                      
                      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dpventcrozvfni0lqb10" />
                      <button
                       onClick={()=>handleItem(item)}
                       className="btn-symbol">ADD +</button> 
                      <span className="rupee">₹-{item.card.info.price/100} {
                        item.card.info.name}</span>
                    </div> 

                    <p className="acordion-para">{item.card.info.description}</p>
                </div>
              ))}  
              
              </> 
       
    )
}

export default ItemList;