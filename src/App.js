import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Pictures from './components/Pictures/Pictures';
import Picture from './components/Pictures/Picture/Picture';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
                <ul>
                    <li>
                      <NavLink
                        to="/"
                      >Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/pics"
                      >Pictures</NavLink>
                    </li>
                </ul>
            </nav>
            </header>
          <Switch>
            <Route path="/pics" component={Pictures} />
            <Route path="/pic/:id" component={Picture} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
