import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as utils from './Utils'
import Button from 'react-bootstrap/Button'
import AppDashboard from './AppDashboard';

class MyHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalNetworth: null,
      totalNetworthChange: null,
      show: false
    }
    this.closeAppStatus = this.closeAppStatus.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { data } = props;
    let totalNetworth = null;
    let totalNetworthChange = null;
    if (data && data.total) {
      totalNetworth = data.total.totalNetworth;
      totalNetworthChange = data.total.totalNetworthChange;
    }
    return { totalNetworth: totalNetworth, totalNetworthChange: totalNetworthChange };
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
    const { totalNetworth, totalNetworthChange, show } = this.state;
    let icon;
    if (totalNetworthChange < 0) {
      icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red" className="ml-1" />
    } else if (totalNetworthChange > 0) {
      icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green" className="ml-1" />
    }
    const formattedTotalNetworth = utils.formatMoney(totalNetworth)
    const formattedTotalNetworthChange = utils.formatMoney(totalNetworthChange)

    return (
      <nav className="navbar navbar-dark sticky-top bg-dark col-md-12">
        <div className="row">
          <div className="col">
            <FontAwesomeIcon icon="hand-holding-usd" color="yellow" size="3x" />
            <span className="navbar-brand ">My Assetz</span >
          </div>
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
            <Button onClick={() => this.showAppStatus()} variant="outline-success">App Status!</Button>
            <AppDashboard show={show} closeAppStatus={this.closeAppStatus.bind(this)}/>
          </div>
        </div>

      </nav>
    );
  }
}
export default MyHeader;