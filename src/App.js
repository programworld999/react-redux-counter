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
        <div className="container mt-5">
          <div className="card text-center shadow-lg rounded">
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
            <div className="container col-6 p-4">
              {this.props.history.map((el) => (
                <div className="card shadow" key={el.id}>
                  <div className="card-body">
                    <span className="float-left">{el.count}</span>
                    <button
                      className="btn btn-outline-warning float-right"
                      onClick={() => this.props.deltItem(el.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer text-muted bg-dark">React Redux</div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    count: state.count,
    history: state.history,
  };
};

let mapDispachToProps = (dispach) => {
  return {
    handleIncrease: () => dispach({ type: "countUp", value: 10 }),
    handleDecrease: () => dispach({ type: "countDown", value: 5 }),
    deltItem: (id) => dispach({ type: "dltItem", id: id }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
