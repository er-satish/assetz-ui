import React, { Component }  from 'react';
import MyHeader from './component/MyHeader';
import Footer from './component/Footer';
import MySidebar from './component/MySidebar';
import MainContent from './component/MainContent';
import './component/fontLibrary';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolioName : "Retirement"
    }
    this.portfolioChange = this.handlePortfolioChange.bind(this);
  }

  handlePortfolioChange(name) {
    debugger;
    this.setState({
        portfolioName: name
    });
  } 

  render() {
    debugger
    const { portfolioName } = this.state;
    return (
      <div className="App">
        <MyHeader />
        <div className="container-fluid">
        <div className="row">
        <MySidebar handlePortfolioChange={this.portfolioChange.bind(this)} />
        <MainContent portfolioName={portfolioName} />
        </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
