import React, { Component } from "react";
export class Demo extends Component {
  constructor(props) {
    super(props);
    console.log("calling Demo3 constructor");
    this.state = { name: "", count: 0 };
    this.click = this.click.bind(this);
  }
  click() {
    this.setState((pState) => ({ ...pState, count: pState.count + 1 }));
  }
  render() {
    console.log("calling render...");
    return (
      <div>
        <br></br>
        <h3>Life Cycle</h3>

        <button className="button" onClick={this.click}>
          click{this.state.count}
        </button>
        {/* <LifeCycleMethods count={this.state.count}></LifeCycleMethods> */}
        {this.state.count < 5 && (
          <LifeCycleMethods count={this.state.count}></LifeCycleMethods>
        )}
      </div>
    );
  }
}
export class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    console.log("calling constructor");
  }
  render() {
    console.log("calling render...");
    return <div>LifeCycleMethods -{this.props.count}</div>;
  }
  componentWillMount() {
    console.log("calling componentWillMount");
  }
  componentDidMount() {
    console.log("calling componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("calling shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("calling componentDidUpdate");
  }
  componentDidCatch() {
    console.log("calling componentDidCatch");
  }
  componentWillUnmount() {
    console.log("calling componentWillUnMount");
  }
}

export default LifeCycleMethods;
