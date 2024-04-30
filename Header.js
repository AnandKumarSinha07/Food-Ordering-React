import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
   
   const online=useOnlineStatus();  
   const [button,setButton]=useState("Login");
   const {loggedinUser}=useContext(UserContext);
   console.log("Loged in user",loggedinUser);
   const cart=useSelector((store)=>store.cart.items);
   console.log("cart",cart)

    return (
      <div className="header">
  
        <div className="logo-container">
         <h3>Food heaven</h3>
        </div>
  
        <div className="nav-item">
          <ul className="list-items">
            <li className="item-online">Online{online?"✅":"😓"}</li>
            <li className="item-1"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/cartLink">Cart- [{cart.length}]</Link></li>

            <button className="login" onClick={()=>{
              button==="Login"? setButton("Logout"):setButton("Login")
            }}>
            {button}
            
            </button>
            {/* <li className="user-login">User: {loggedinUser}</li> */}
          </ul>
        </div>
  
      </div>
    );
};

export default Header;
