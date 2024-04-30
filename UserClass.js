import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state={
                userInfo:{
                    name:"dummy",
                    location:"usa",
                },
        }

       
        //console.log("child class constructor");
     
    }

    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/AnandKumarSinha07");
        const response= await data.json();

        this.setState({
            userInfo:response,
        })
        console.log(response);  
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    componentWillUnmount(){
        console.log("component will unammount");
    }
 
   
    render() {

      console.log("child component render");  
     
      const{name,avatar_url}=this.state.userInfo;

        return (
            <div className="user-card">
                
               <div className="container">
                 <img src={avatar_url} width={300} />
               </div>
               <div className="info">

                <h2>Name: {name}</h2>
                   <h3>Location:chandigarh</h3>
                   <h4>Followers:10</h4>
                   <p>Frontend developer 🍁I enjoy reading books, coding, playing chess, and occasionally watching anime. 💢 Interested in open-source & web development.</p>
                   
                </div>
            </div>
        );
    }
}

export default UserClass;
    