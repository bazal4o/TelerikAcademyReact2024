import React, { Component } from "react";
class StateCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue", year: 2000 });

    // this.setState({ year: this.state.year + 1})
    this.setState((state, props) => {
      return {
        year: state.year + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
                  
        </p>
        <button type="button" onClick={this.changeColor}>
          Change car specs
        </button>
      </div>
    );
  }
}

export default StateCar;
