import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
      <div>
        <h1>This is about page!!</h1>
        <UserClass name={"Dipul Raj Sharma"} city={"Motihari(Bihar)"} />
      </div>
    );
  }
}

export default About;
