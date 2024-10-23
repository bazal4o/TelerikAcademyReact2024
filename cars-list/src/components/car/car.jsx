import React, { Component } from "react";
import "./car.css";
class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div key={this.props.id} className="car-item">
        {this.renderContent()}
      </div>
    );
  }
  renderContent() {
    return (
      <span>
        Make: {this.props.make}. Model: {this.props.model}
      </span>
    );
  }
}

export default Car;
