import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

import { getSmurf } from "../actions/index";

const SmurfList = (props) => {
  const { isLoading, smurfArray } = props;
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="listContainer">
      {smurfArray.map((smurf, id) => (
        <Smurf smurf={smurf}  key={id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    smurfArray: state.smurfArray,
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map
//3. Return a Smurf component for each entry in the smurfs list.
//4. Replace the static isLoading variable with the state loading variable.
