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
      data: null
    }
    this.portfolioChange = this.handlePortfolioChange.bind(this);
  }

  handlePortfolioChange(name) {
    this.setState({
      portfolioName: name
    });
  }

  componentDidMount() {
    fetch('http://192.168.0.105:8080/assets')
      .then(res => res.json())
      .then((data) => {
        this.setState({ data: data })
      })
      .catch(console.log)
  }

  render() {
    const { portfolioName, data } = this.state;
    return (
      <div className="App">
        <MyHeader data={data} />
        <div className="container-fluid">
          <div className="row">
            <MySidebar data={data} handlePortfolioChange={this.portfolioChange.bind(this)} />
            <MainContent portfolioName={portfolioName} data={data} />
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
