import React, { Component } from "react";
import { connect } from "react-redux";

export class IncreaseBtn extends Component {
  render() {
    return (
      <button
        href="#"
        className="btn btn-success m-1"
        onClick={this.props.handleIncrease}
      >
        Increase
      </button>
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
  };
};

export default connect(mapStateToProps, mapDispachToProps)(IncreaseBtn);
