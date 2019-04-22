import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      menu: "closed"
    };
  }
  handleClick = () => {
    console.log(this.state);
    if (this.state.menu === "open") {
      this.setState({
        menu: "closed"
      });
    } else {
      this.setState({
        menu: "open"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Start Bootstrap</h1>
          <img
            onClick={this.handleClick}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtUngqGf4V9uR6Cg1C0_BoQketMBPX4CjluEGM49iLzOHcyiM"
            alt="hamburger"
          />
        </nav>
        <div className={"top-menu-" + this.state.menu}>
          <div>
            <h6>Services</h6>
            <h6>Portfolio</h6>
            <h6>About</h6>
            <h6>Team</h6>
            <h6>Contact</h6>{" "}
          </div>
        </div>
        <main className="mainHeight">
          <h1 className="welcome">Welcome To Our Studio!</h1>
          <h1 className="nice">It's Nice To Meet You</h1>
          <button className="tell">Tell Me More</button>
        </main>
      </div>
    );
  }
}

export default App;
