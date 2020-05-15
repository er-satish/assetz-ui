import React, { Component } from 'react';
import InfoCard from './InfoCard';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AssetsSummary from './AssetsSummary';
import * as utils from './Utils';
import GoalsContainer from './GoalsContainer';
import AssetsDetails from './AssetsDetails';
import AppContext from './AppContext';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromDate: utils.yesterdayDate(),
            toDate: utils.todayDate(),
            assetType: null,
            activeTab: "valuation"
        }
        this.selectAssetType = this.selectAssetType.bind(this);
    }

    handleTabChange(eventKey) {
        console.log("tab is changed")
        this.setState({
            activeTab: eventKey
        });
    }

    selectAssetType(assetType) {
        console.log("selectAssetType is called")
        this.setState({
            assetType: assetType
        }, () => this.handleTabChange("details"));
    }

    // componentDidMount(){
    //     console.log("inside componentDidMount for mainContent");
    //     this.setState({
    //         reloadAssetDetails: true
    //     });
    // }  

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
            <AppContext.Consumer>
                {context => (
                    <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-auto px-auto">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                            <h1 className="h2">{this.props.portfolioName}</h1>
                            <div className="form-group mb-md-0">
                                <label >From Date:</label>
                                <input type="date" name="fromDate" max="2099-12-31" value={context.startDate}
                                    min="2020-01-01" onChange={(val) => context.setStartDate(val.target.value)} />
                            </div>
                            <div className="form-group mb-md-0">
                                <label>To Date:
                            <input className="border border-grey" type="date" name="toDate" min="2020-01-01" value={context.endDate}
                                        max="2099-12-31" onChange={(val) => context.setEndDate(val.target.value)} />
                                </label>
                            </div>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group mr-2">
                                    <button className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                            </div>
                        </div>
                        <Tabs activeKey={this.state.activeTab} id="main-tabs" onSelect={(k) => this.handleTabChange(k)} unmountOnExit={true}>
                            <Tab eventKey="valuation" title="Valuation">
                                <div className="card-columns">
                                    {cards}
                                </div>
                                <AssetsSummary assets={assets} selectAssetType={this.selectAssetType.bind(this)} />
                            </Tab>
                            <Tab eventKey="details" title="Details">
                                <AssetsDetails portfolioName={context.portfolioName} assetType={this.state.assetType} startDate={context.startDate} endDate={context.endDate} />
                            </Tab>
                            <Tab eventKey="goal" title="Goal">
                                <GoalsContainer />
                            </Tab>
                        </Tabs>
                    </main>
                )}
            </AppContext.Consumer>
        );
    }
}

export default MainContent;