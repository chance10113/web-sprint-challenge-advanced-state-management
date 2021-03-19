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
import { getSmurfs } from "./actions";

class App extends Component {
  componentDidMount() {
    const { getSmurfs } = this.props;
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

const mapDispatchToProps = { getSmurfs };

export default connect(null, mapDispatchToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
