import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Gantt from './components/Gantt';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div>
        <Navbar dark color="#F5F5F5">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
