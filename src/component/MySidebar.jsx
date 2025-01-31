import React, { Component } from 'react';
import NavLink from './NavLink';
import AppContext from './AppContext';

class MySidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }

    static getDerivedStateFromProps(props, state) {
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
        //this.props.handlePortfolioChange(portfolioName);
        return portfolioName;
    }

    render() {
        const { links } = this.state;
        return (
            <AppContext.Consumer>
                {context => (
                    <nav className="col-md-2 bg-light sidebar">
                        <div>
                            <ul className="nav flex-column">
                                {links.map((link, i) =>
                                    <NavLink
                                        text={link.text}
                                        isActive={link.isActive}
                                        key={link.index}
                                        onClick={() => context.setPortfolioName(this.handleClick(i))}
                                    />
                                )}
                            </ul>
                        </div>
                    </nav>
                )}
            </AppContext.Consumer>
        );
    }
}

export default MySidebar;