import React, { Component } from "react";
import { connect } from "react-redux";

export class DecreaseBtn extends Component {
  render() {
    return (
      <button
        href="#"
        className="btn btn-danger m-1"
        onClick={this.props.handleDecrease}
      >
        Dicrease
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
    handleDecrease: () => dispach({ type: "countDown" }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(DecreaseBtn);
