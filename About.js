import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import AboutProject from "./AboutProject";
import UserContext from "../utils/UserContext"; 
const propObj = {
  name: "Anand",
  location: "chandigarh",
  city: "Punjab",
  email: "anandkr7808@gmail.com",
};

class About extends React.Component {
  constructor(props){
    super(props);
    console.log("Parent class constructor");
    
  }

  componentDidMount(){
     console.log("parent componentDidMount");
  }


  render() {  
    console.log("parent render");
    return (
      <div>
       
       
        <UserContext.Consumer>
          {({loggedinUser})=> <h1 className="abut-user">Loged In user: {loggedinUser}</h1>}
        </UserContext.Consumer>
       
        <UserClass
          name="Anand"
          email="anandkr7808@gmail.com"
          location="chandigarh"
        /> 
        <AboutProject/>
      </div>
     
    );
  }
}

export default About
