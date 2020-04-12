import React, { Component } from 'react';

class NavLink extends Component {
    render() {
        let { onClick } = this.props;
        return (
            <li key={this.props.key} onClick={onClick} className={"nav-item " + (this.props.isActive ? "active" : "")}>
                <a className="nav-link text-left" href={this.props.key}>{this.props.text}</a>
            </li>
        );
    }
}
export default NavLink;