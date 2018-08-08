import React from "react";
import { connect } from "react-redux";
import { changeStep } from "../redux/actions/step";

const StepManager = ({ value, changeStep }) => (
  <select value={value} onChange={e => changeStep(Number(e.target.value))}>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
  </select>
);

const mapStateToProps = state => ({
  value: state.step
});

const mapDispatchToProps = { changeStep };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepManager);
