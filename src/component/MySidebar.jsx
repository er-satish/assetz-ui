import React, { Component } from 'react';
import NavLink from './NavLink';

class MySidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        debugger
        const links = [];
        if (props && props.data && props.data.data && props.data.data.length > 0) {
            for (let i = 0; i < props.data.data.length; i++) {
                var active = false;
                if (props.portfolioName && props.portfolioName === props.data.data[i].portfolioName) {
                    active = true;
                }
                links.push({ index: i, text: props.data.data[i].portfolioName, isActive: active });
            }
        }
        return { links: links };
    }

    handleClick(i) {
        debugger
        const links = this.state.links.slice();
        let portfolioName = "";
        for (var j = 0; j < links.length; j++) {
            if (i === j) {
                links[j].isActive = true;
                portfolioName = links[j].text;
            } else {
                links[j].isActive = false;
            }
        }
        this.setState({
            links: links,
        });
        this.props.handlePortfolioChange(portfolioName);
    }

    render() {
        const { links } = this.state;
        debugger
        return (
            <nav className="col-md-2 bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {links.map((link, i) =>
                            <NavLink
                                text={link.text}
                                isActive={link.isActive}
                                key={link.index}
                                onClick={() => this.handleClick(i)}
                            />
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MySidebar;