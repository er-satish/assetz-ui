import React, { Component } from 'react';
import MyHeader from './MyHeader';
import Footer from './Footer';
import MySidebar from './MySidebar';
import MainContent from './MainContent';
import AppContextProvider from './AppContextProvider';
import AppContext from './AppContext';
import './fontLibrary';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolioName: "Retirement"
    }
  }

  render() {
    return (
      <AppContextProvider>
        <div className="App container-fluid">
          <AppContext.Consumer>
            {context => (
              <div>
                <div className="row">
                  <MyHeader data={context.assetzSummaryData} />
                </div>
                <div className="row">
                  <MySidebar portfolioName={context.portfolioName} data={context.assetzSummaryData}  />
                  <MainContent portfolioName={context.portfolioName} data={context.assetzSummaryData} />
                </div>
              </div>
            )}
          </AppContext.Consumer>
          <Footer />

        </div>
      </AppContextProvider>
    );
  }
}

export default Home;
