import { count } from "node:console";
import { userInfo } from "node:os";
import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
          userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url: "https://dummy.png"
          }
        };

    }

    async componentDidMount(){
      const data = await fetch("https://api.github.com/users/dipulraj");
      const json = await data.json();

      this.setState({
        userInfo: json,
      });

      console.log(json);
    }

  render() {
    // const {name, city} = this.props;
    const {name, location, avatar_url} = this.state.userInfo;
    debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="user-profile" height={"300px"}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location || "india"}</h3>
        <h4>Contact: @dipulraj390</h4>
      </div>
    );
  }
}

export default UserClass;