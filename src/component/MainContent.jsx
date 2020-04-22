import React, { Component } from 'react';
import InfoCard from './InfoCard';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AssetsSummary from './AssetsSummary';
import * as utils from './Utils';
import GoalsContainer from './GoalsContainer';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromDate: utils.yesterdayDate(),
            toDate: utils.todayDate()
        }
    }


    handlePeriodChange(fromDate, toDate) {
        const startDate = fromDate != null ? fromDate : this.state.fromDate;
        const endDate = toDate != null ? toDate : this.state.toDate;
        this.setState({
            fromDate: startDate,
            toDate: endDate
        });
        if (startDate != null && startDate != "" && endDate != null && endDate != "") {
            this.props.handlePeriodChange(startDate, endDate);
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
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-auto px-auto">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 className="h2">{this.props.portfolioName}</h1>
                    <div className="form-group mb-md-0">
                        <label >From Date:</label>
                        <input type="date" name="fromDate" max="2099-12-31" value={this.state.fromDate}
                            min="2020-01-01" onChange={(val) => this.handlePeriodChange(val.target.value, null)} />
                    </div>
                    <div className="form-group mb-md-0">
                        <label>To Date:
                            <input className="border border-grey" type="date" name="toDate" min="2020-01-01" value={this.state.toDate}
                                max="2099-12-31" onChange={(val) => this.handlePeriodChange(null, val.target.value)} />
                        </label>
                    </div>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button className="btn btn-sm btn-outline-secondary">Share</button>
                            <button className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                    </div>
                </div>
                <Tabs defaultActiveKey="valuation" id="uncontrolled-tab-example">
                    <Tab eventKey="valuation" title="Valuation">
                        <div className="card-columns">
                            {cards}
                        </div>
                        <AssetsSummary assets={assets} />
                    </Tab>
                    <Tab eventKey="goal" title="Goal">
                        <GoalsContainer />
                    </Tab>
                </Tabs>
            </main>
        );
    }
}

export default MainContent;