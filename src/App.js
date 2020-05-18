import React, { Component } from "react";
import { connect } from "react-redux";
export class App extends Component {
  // state = {
  //   count: 0,
  // };
  // handleIncrease = () => {
  //   this.setState({ count: ++this.state.count });
  // };
  // handleDecrease = () => {
  //   this.setState({ count: --this.state.count });
  // };
  render() {
    return (
      <div className="App container">
        <div className="container mt-4">
          <div className="card text-center">
            <div className="card-header">Counter Card</div>
            <div className="card-body">
              <h1 className="card-title text-bold">{this.props.count}</h1>
              <button
                href="#"
                className="btn btn-success m-1"
                onClick={this.props.handleIncrease}
              >
                Increase
              </button>
              <button
                href="#"
                className="btn btn-danger m-1"
                onClick={this.props.handleDecrease}
              >
                Dicrease
              </button>
            </div>
            <div className="card-footer text-muted">React Redux</div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

let mapDispachToProps = (dispach) => {
  return {
    handleIncrease: () => dispach({ type: "countUp" }),
    handleDecrease: () => dispach({ type: "countDown" }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
