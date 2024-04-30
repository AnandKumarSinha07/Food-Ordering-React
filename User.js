import { useState } from "react";
const User = ({ data }) => {
    
    const [count,setCount]=useState(0);
    const [count2]=useState(1);
    
    const { name, location, email } = data;

    return (
        <div className="user-card">
            <h1>count:{count}</h1>
            <h2>count2:{count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {email}</h4>
        </div>
    );
};

export default User;
