import React, { Component } from 'react';

class NavLink extends Component {
    render() {
        let { onClick } = this.props;
        return (
            <li key={this.props.index} onClick={onClick}>
                <span className={"nav-link text-left cursor-pointer " + (this.props.isActive ? "active" : "")}>
                    {this.props.text}
                </span>
            </li>
        );
    }
}
export default NavLink;


