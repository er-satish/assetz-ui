import React, { Component }  from 'react';
import MyHeader from './component/MyHeader';
import Footer from './component/Footer';
import MySidebar from './component/MySidebar';
import MainContent from './component/MainContent';
import './component/fontLibrary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <div className="container-fluid">
        <div className="row">
        <MySidebar />
        <MainContent />
        </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
