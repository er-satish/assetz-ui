import React, { Component } from 'react';
import MyHeader from './component/MyHeader';
import Footer from './component/Footer';
import MySidebar from './component/MySidebar';
import MainContent from './component/MainContent';
import './component/fontLibrary';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolioName: "Retirement",
      valuationPeriod: "TODAY",
      data: null
    }
    this.portfolioChange = this.handlePortfolioChange.bind(this);
    this.handlePeriodChange = this.handlePeriodChange.bind(this);
  }

  handlePortfolioChange(name) {
    debugger
    this.setState({
      portfolioName: name
    });
  }

  handlePeriodChange(value) {
    debugger
    this.setState({
      valuationPeriod: value
    },
      () => this.fetchServiceData());

  }

  fetchServiceData() {
    fetch('http://192.168.0.112:8080/assets?valuationPeriod=' + this.state.valuationPeriod)
      .then(res => res.json())
      .then((data) => {
        this.setState({ data: data })
      })
      .catch(console.log)
  }

  componentDidMount() {
    this.fetchServiceData();
  }

  render() {
    const { portfolioName, data } = this.state;
    return (
      <div className="App container-fluid">
        <div>
          <div className="row">
            <MyHeader data={data} />
          </div>
          <div className="row">
            <MySidebar portfolioName={portfolioName} data={data} handlePortfolioChange={this.portfolioChange.bind(this)} />
            <MainContent portfolioName={portfolioName} data={data} handlePeriodChange={this.handlePeriodChange.bind(this)} />
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
