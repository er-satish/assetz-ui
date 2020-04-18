import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as utils from './Utils'

class MyHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalNetworth: null,
      totalNetworthChange: null
    }
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


  render() {
    const { totalNetworth, totalNetworthChange } = this.state;
    let icon;
    if (totalNetworthChange < 0) {
      icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red" className="ml-1" />
    } else if (totalNetworthChange > 0) {
      icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green" className="ml-1" />
    }
    const formattedTotalNetworth = utils.formatMoney(totalNetworth)
    const formattedTotalNetworthChange = utils.formatMoney(totalNetworthChange)

    return (
      <nav className="navbar navbar-dark sticky-top bg-dark">
        <div className="row">
          <div className="col">
            <FontAwesomeIcon icon="hand-holding-usd" color="yellow" size="3x" />
            <a className="navbar-brand " href="#">My Assetz</a>
          </div>
          <div className="col">
            <a className="navbar-brand  text-white" href="#">
              My Networth: <FontAwesomeIcon icon="rupee-sign" color="white" size="1x" />
              <span className="label label-default ml-1">{formattedTotalNetworth}</span>
            </a>
          </div>
          <div className="col">
            <a className="navbar-brand  text-white" href="#">
              Today's Change: <FontAwesomeIcon icon="rupee-sign" color="white" size="1x" />
              <span className="label label-default ml-1">{formattedTotalNetworthChange}</span>
              {icon}
            </a>
          </div>
        </div>

      </nav>
    );
  }
}
export default MyHeader;