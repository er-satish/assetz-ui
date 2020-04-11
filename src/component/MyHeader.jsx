import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MyHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <div>
        <FontAwesomeIcon icon="hand-holding-usd" color="yellow" size="3x"/>
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">My Assetz</a>
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