import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Actions
import {
  fetchSmurfLoading,
  fetchSmurfSuccess,
  fetchSmurfFailure,
  addSmurf,
  editError,
  getSmurf,
} from "./actions/index";

class App extends Component {
  componentDidMount() {
    console.log("Component Did Mount")
    getSmurf();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

export default connect(
  fetchSmurfLoading,
  fetchSmurfSuccess,
  fetchSmurfFailure,
  addSmurf,
  editError,
  getSmurf
)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
