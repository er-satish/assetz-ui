import React, { Component } from 'react';
import InfoCard from './InfoCard';
import AssetsSummary from './AssetsSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { data } = this.props;
        let assets = {};
        if (data && data.data && data.data.length > 0) {
            for (let i = 0; i < data.data.length; i++) {
                if (this.props.portfolioName && this.props.portfolioName === data.data[i].portfolioName) {
                    assets = data.data[i].assets;
                }
            }
        }
        let cardsData = [];
        const cards = []
        if (assets && assets.highlights) {
            cardsData = assets.highlights;
        }

        for (const [index, value] of cardsData.entries()) {
            cards.push(<InfoCard key={index} name={value.name} amount={value.amount} changePercentage={value.changePercentage} change={value.change} />)
        }

        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 className="h2">{this.props.portfolioName}</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button className="btn btn-sm btn-outline-secondary">Share</button>
                            <button className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <select className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <option selected value="today">Today</option>
                            <option value="this-week">This Week</option>
                            <option value="this-month">This Month</option>
                            <option value="this-year">This Year</option>
                        </select>
                    </div>
                </div>

                <div className="card-columns">
                    {cards}
                </div>

                <AssetsSummary assets={assets} />
            </main>
        );
    }
}

export default MainContent;