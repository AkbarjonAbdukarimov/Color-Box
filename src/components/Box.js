import React, { Component } from "react";
import "./box.css";
class Box extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    this.props.remove(this.props.id);
  }
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: `${this.props.color}`,
          }}
        ></div>
        <button onClick={this.removeItem}>Remove</button>
      </div>
    );
  }
}
export default Box;
