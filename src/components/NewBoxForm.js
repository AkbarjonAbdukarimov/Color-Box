import React, { Component } from "react";
class NewBoxFoprm extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "", width: "", height: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.create(this.state);
    this.setState({ color: " ", width: " ", height: " " });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="color">Color</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="color"
            id="color"
            value={this.state.color}
          />
          <label htmlFor="width">Width</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="width"
            id="width"
            value={this.state.width}
          />
          <label htmlFor="height">Height</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="height"
            id="height"
            value={this.state.height}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
export default NewBoxFoprm;
