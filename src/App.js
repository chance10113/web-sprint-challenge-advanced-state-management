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
  fetchSmurfsLoading,
  fetchSmurfsSuccess,
  fetchSmurfsFailure,
  getSmurfs,
} from "./actions";

class App extends Component {
  componentDidMount() {
    getSmurfs();
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

export default connect(null, {
  fetchSmurfsLoading,
  fetchSmurfsSuccess,
  fetchSmurfsFailure,
  getSmurfs,
})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
