import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";
// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Actions
import {
  fetchSmurfLoading,
  fetchSmurfSuccess,
  fetchSmurfFailure,
  getSmurf,
} from "./actions/index";

class App extends Component {
  componentDidMount() {
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
  getSmurf
)(App);
