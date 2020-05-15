import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as utils from './Utils';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import AppDashboard from './AppDashboard';
import AppContext from './AppContext';

class MyHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalNetworth: null,
      totalNetworthChange: null,
      totalInvestment: null,
      show: false
    }
    this.closeAppStatus = this.closeAppStatus.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { data } = props;
    let totalNetworth = null;
    let totalNetworthChange = null;
    let totalInvestment = null;
    if (data && data.total) {
      totalNetworth = data.total.totalNetworth;
      totalNetworthChange = data.total.totalNetworthChange;
      totalInvestment = data.total.totalInvestment;
    }
    return { totalNetworth: totalNetworth, totalNetworthChange: totalNetworthChange, totalInvestment: totalInvestment };
  }

  closeAppStatus() {
    this.setState({
      show: false
    });
  }

  showAppStatus() {
    this.setState({
      show: true
    });
  }


  render() {
    const { totalNetworth, totalNetworthChange, totalInvestment, show } = this.state;
    let icon;
    if (totalNetworthChange < 0) {
      icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red" className="ml-1" />
    } else if (totalNetworthChange > 0) {
      icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green" className="ml-1" />
    }
    const formattedTotalNetworth = utils.formatMoneyInShortFormat(totalNetworth)
    const formattedTotalInvestment = utils.formatMoneyInShortFormat(totalInvestment)
    const formattedTotalNetworthChange = utils.formatMoneyInShortFormat(totalNetworthChange)

    return (
      <AppContext.Consumer>
        {context => (
          <nav className="navbar navbar-dark sticky-top bg-dark col-md-12">
            <div className="row">
              <div className="col">
                <span className="navbar-brand  text-white">
                  My Networth: <FontAwesomeIcon icon="rupee-sign" color="white" size="1x" />
                  <span className="label label-default ml-1">{formattedTotalNetworth}</span>
                </span>
              </div>
              <div className="col">
                <span className="navbar-brand  text-white">
                  Today's Change: <FontAwesomeIcon icon="rupee-sign" color="white" size="1x" />
                  <span className="label label-default ml-1">{formattedTotalNetworthChange}</span>
                  {icon}
                </span>
              </div>
              <div className="col">
                <span className="navbar-brand  text-white">
                  Total Investment: <FontAwesomeIcon icon="rupee-sign" color="white" size="1x" />
                  <span className="label label-default ml-1">{formattedTotalInvestment}</span>
                </span>
              </div>
              <div className="col">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="consolidated-view">
                    Consolidated View
                </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Stocks</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Mutual Funds</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Fixed Assets</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col">
                <Button onClick={() => this.showAppStatus()} variant="outline-success">My Bills</Button>
                <AppDashboard show={show} closeAppStatus={this.closeAppStatus.bind(this)} />
              </div>
            </div>

          </nav>
        )}
      </AppContext.Consumer>
    );
  }
}
export default MyHeader;