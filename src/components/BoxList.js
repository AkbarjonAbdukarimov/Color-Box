import React, { Component } from "react";
import NewBoxFoprm from "./NewBoxForm";
import Box from "./Box";
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxList: [1, 2, 3],
    };
    this.addBox = this.addBox.bind(this);
  }
  addBox(box) {
    this.setState((st) => ({
      boxList: [...st.boxList, box],
    }));
  }
  render() {
    return (
      <div>
        <NewBoxFoprm />
        {this.state.boxList.map((box) => (
          <Box />
        ))}
      </div>
    );
  }
}
export default BoxList;
