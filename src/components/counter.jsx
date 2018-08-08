import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions/counter";

const Counter = ({ value, step, increment, decrement }) => (
  <div className="counter">
    <div className="value">{value}</div>
    <div className="actions">
      <button className="btn" onClick={() => increment(step)}>
        &#43;
      </button>
      <button className="btn" onClick={() => decrement(step)}>
        &#8722;
      </button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  value: state.counterValue,
  step: state.step
});

const mapDispatchToProps = {
  increment,
  decrement
};

// const mapDispatchToProps = dispatch => ({
//   onIncrement: val => dispatch(increment(val)),
//   onDecrement: val => dispatch(decrement(val))
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
