import React, { Component } from "react";

import "./cars.css";
import Car from "../car/car";

class Cars extends Component {
  render() {
    return <div className="cars-container">{this.renderCars()}</div>;
  }
  renderCars() {
    if (this.props.cars && this.props.cars.length) {
      return this.props.cars.map((car, index) => (
        <Car key={index} make={car.make} model={car.model} />
      ));
    }
    return <h5>No cars available</h5>;
  }
}

export default Cars;
