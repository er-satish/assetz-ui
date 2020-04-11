import React, { Component } from 'react';

class MySidebar extends Component {
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Retirement <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Near Future</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Emergency Fund</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MySidebar;