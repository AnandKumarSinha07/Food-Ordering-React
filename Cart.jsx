import { Link } from "react-router-dom";


const Cart=()=>{
    return(
        <div className="cart-component">
            <img className="cart-img" src="https://savour-bite.vercel.app/assets/add-to-cart-DFuWRHj1.png" width={450}/>
            <h3 >Your Cart is Empty</h3>
            <p>Looks like you have not added anything to your cart. Go ahead & explore items in menu.</p>
            <button 
             className="cart-btn"><Link to="/items">Add items</Link></button>
        </div>
    )
    
}
export default Cart;