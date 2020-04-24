import React, { Component } from 'react';
import MyHeader from './component/MyHeader';
import Footer from './component/Footer';
import MySidebar from './component/MySidebar';
import MainContent from './component/MainContent';
import AppContextProvider from './component/AppContextProvider';
import AppContext from './component/AppContext';
import './component/fontLibrary';

class App extends Component {

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

export default App;
