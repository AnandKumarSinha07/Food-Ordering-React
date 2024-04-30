import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const CartLink=()=>{

    const cartItems=useSelector((state)=> state.cart.items)

    const dispath=useDispatch();

    const handleclear=()=>{
        dispath(clearCart());
    }
    return(
        <div className="cartLink">
            <h1>Cart</h1>

             {cartItems.length==0 && <h1 className="no-item-cart">Cart is empty Oops ☹️ </h1>}
             <img src="https://cdn-icons-png.flaticon.com/128/10423/10423297.png"/>
          
            <div className="item-cart">
                <ItemList items={cartItems}/>
            </div>

            <button
             onClick={handleclear}
             className="btn-cart">Clear Cart</button>

        </div>
    )
}

export default CartLink;