import React, { Component } from "react";
import System from "../components/system"

class MySystem extends Component {
  state = {
    systemData: [],
    lastUpdate: ""
  };
  componentDidMount() {
    fetch("https://165zgyhu94.execute-api.us-east-1.amazonaws.com/dev/system")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ systemData: data.system, lastUpdate:data.date});
      console.log(data)
    })
    .catch(console.log);
  }

  render() {
    return <System systemData={this.state.systemData} lastUpdate={this.state.lastUpdate}/>;
  }
}

export default MySystem;
