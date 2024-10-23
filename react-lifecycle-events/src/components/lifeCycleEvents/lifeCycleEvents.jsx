import React, { Component } from "react";

class LifeCyclesEvents extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      counter: 1,
    };
  }

  //Mounting
  static getDerivedStateFromProps(props, state) {
    //Called right before the render method
    console.log(`getDerivedStateFromProps props: ${props}, state: ${state}`);
    return state;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `shouldComponentUpdte. nextProps: ${nextProps}, nextState: ${nextState}`
    );
    // Preventing re-render
    // return false;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      `getSnapshotBeforeUpdate. prevProps: ${prevProps}, prevState: ${prevState}`
    );
    return { prevProps, prevState };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  handleButtonClick = () => {
    // this.setState({ state: this.state ++ })
    this.setState((state, props) => ({
      counter: state.counter + 1,
    }));
  };

  renderCounter() {
    // if (this.state.counter % 2 === 0) {
    //     return (<div className='font-size-updated'>{this.state.counter}</div>)
    // }
    return <React.Fragment>{this.state.counter}</React.Fragment>;
  }

  render() {
    console.log("render called");
    return (
      <div>
        <h3>Counter Component</h3>
        <div>Current counter: {this.renderCounter()}</div>
        <br />
        <button onClick={this.handleButtonClick}>Increase Counter</button>
      </div>
    );
  }
}

export default LifeCyclesEvents;
