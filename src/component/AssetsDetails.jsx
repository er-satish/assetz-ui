import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as utils from './Utils'

class AssetsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            activePortfolioName: null
        };
    }

    fetchServiceData() {
        // const data = JSON.parse(utils.mockAppStatusService());
        // console.log(data)
        // this.setState({
        //     data: data
        // });
        //uncomment below in production.
        console.log("fetch service in assets details called");
        const { assetType, portfolioName, startDate, endDate } = this.props;
        debugger
        if (assetType && assetType != null && portfolioName && portfolioName != null) {
            fetch(utils.getHostName() + utils.getPort() + '/assets/types/' + assetType + '/portfolios/' + portfolioName + '?startDate=' + startDate + "&endDate=" + endDate)
                .then(res => res.json())
                .then((data) => {
                    this.setState({ data: data })
                })
                .catch(console.log)
        }
    }

    componentDidMount() {
        console.log("inside componentDidMount for assets details");
        this.fetchServiceData();
    }

    render() {
        const { data } = this.state;
        let details = [];
        if (data && data.data) {
            details = data.data;
        }
        const columns = [
            {
                dataField: 'schemeName',
                text: 'Scheme',
                sort: true,
                align: "left"
            }, {
                dataField: 'lastNav',
                text: 'Last Nav',
                formatter: utils.moneyFormatter,
                sort: true,
                align: "left"
            }, {
                dataField: 'lastNavDt',
                text: 'Last Nav Date',
                sort: true,
                align: "left"
            },
            {
                dataField: 'navChange',
                text: 'Nav Change',
                formatter: utils.lossGainFormatter,
                sort: true,
                align: "left"
            }, {
                dataField: 'navChangePercent',
                text: 'Nav Change %',
                formatter: utils.percentFormatter,
                sort: true,
                align: "left"
            },
            {
                dataField: 'units',
                text: 'Units',
                sort: true,
                align: "left"
            },
            {
                dataField: 'avgCost',
                text: 'Avg Cost',
                sort: true,
                formatter: utils.moneyFormatter,
                align: "left"
            },
            {
                dataField: 'investedAmt',
                text: 'Amount Invested',
                formatter: utils.moneyFormatter,
                sort: true,
                align: "left"
            },
            {
                dataField: 'currentValuation',
                text: 'Current Valuation',
                formatter: utils.moneyFormatter,
                sort: true,
                align: "left"
            },

            {
                dataField: 'gainLoss',
                text: 'Gain/Loss',
                sort: true,
                formatter: utils.lossGainFormatter,
                align: "left"
            },
            {
                dataField: 'gainLossPercent',
                text: 'Gain/Loss %',
                sort: true,
                formatter: utils.percentFormatter,
                align: "left"
            },
            {
                dataField: 'notionalGainLoss',
                text: 'Notional Gain/Loss',
                formatter: utils.lossGainFormatter,
                sort: true,
                align: "left"
            },
            {
                dataField: 'notionalGainLossPercent',
                text: 'Notional Gain/Loss %',
                formatter: utils.percentFormatter,
                sort: true,
                align: "left"
            }
        ];

        return (
            <div>
                <h2 className="text-left">Assets Breakdown</h2>
                <BootstrapTable wrapperClasses="table-responsive text-nowrap" keyField='assetType' data={details} columns={columns} />
            </div>
        );
    }
}

export default AssetsDetails;