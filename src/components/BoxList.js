import React, { Component } from "react";
import NewBoxFoprm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxList: [],
    };
    this.addBox = this.addBox.bind(this);
    this.remove = this.remove.bind(this);
  }
  addBox(box) {
    const newBox = { ...box, id: uuidv4() };

    this.setState((st) => ({
      boxList: [...st.boxList, newBox],
    }));
  }
  remove(id) {
    this.setState({
      boxList: this.state.boxList.filter((box) => box.id !== id),
    });
  }
  render() {
    return (
      <div>
        <NewBoxFoprm create={this.addBox} />
        <div
          style={{
            display: "flex",
            justifyContent: "evenly",
            alignItems: "center",
          }}
        >
          {this.state.boxList.map((box) => (
            <Box
              key={box.id}
              id={box.id}
              color={box.color}
              width={box.width}
              height={box.height}
              remove={this.remove}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default BoxList;
