import React, { Component } from "react";
import "./box.css";
class Box extends Component {
  constructor(props) {
    super(props);
    this.removeBox = this.removeBox.bind(this);
  }
  removeBox() {}
  render() {
    return (
      <div>
        <div className="box"></div>
      </div>
    );
  }
}
export default Box;
