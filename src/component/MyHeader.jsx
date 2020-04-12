import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MyHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalNetworth : null,
      totalNetworthChange : null
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
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <div>
          <FontAwesomeIcon icon="hand-holding-usd" color="yellow" size="3x" />
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">My Assetz</a>
        </div>
        <div className="row">
          <div className="col">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0 text-white" href="#">
              My Networth: <FontAwesomeIcon icon="rupee-sign" color="white" size="1x" />
              <span className="label label-default ml-1">{totalNetworth}</span>
            </a>
          </div>
          <div className="col">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0 text-white" href="#">
              Today's Change: <FontAwesomeIcon icon="rupee-sign" color="white" size="1x" />
              <span className="label label-default ml-1">{totalNetworthChange}</span>
              {icon}
            </a>
          </div>
        </div>
        {/* <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">Sign out</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default MyHeader;