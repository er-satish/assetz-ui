import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './component/Home';
import AnalysisContainer from './component/AnalysisContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolioName: "Retirement"
    }
  }


  render() {
    const Navigation = () => {
      return (
        <div className="navbar navbar-dark sticky-top bg-dark">
          <div className="col">
            <FontAwesomeIcon icon="hand-holding-usd" color="yellow" size="3x" />
            <span className="navbar-brand ">My Assetz</span >
          </div>
          <NavLink className="nav-link ml-auto" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/analysis">Analysis</NavLink>
        </div>
      );
    }
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/analysis" component={AnalysisContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
