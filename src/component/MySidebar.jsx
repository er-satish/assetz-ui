import React, { Component } from 'react';
import NavLink from './NavLink';

class MySidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          links: [
            {key: "0", text: "Retirement", isActive: true},
            {key: "1", text: "Near Future", isActive: false},
            {key: "2", text: "Emergency Fund", isActive: false},
          ]
        }
      }

    handleClick(i) {
        debugger;
        const links = this.state.links.slice();
        let portfolioName = "";
        for (const j in links) {
            if(i == j){
                links[j].isActive =  true;
                portfolioName = links[j].text;
            }else{
                links[j].isActive =  false;
            }
        }
        this.setState({
            links: links,
        });
        this.props.handlePortfolioChange(portfolioName);    
      }  

    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {/* <li className="nav-item">
                            <a className="nav-link active" href="#">Retirement <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Near Future</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Emergency Fund</a>
                        </li> */}
                        {this.state.links.map((link, i) =>
                            <NavLink
                                text={link.text}
                                isActive={link.isActive}
                                key={link.key}
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