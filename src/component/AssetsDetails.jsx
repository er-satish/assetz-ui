import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as utils from './Utils'

function lossGainFormatter(cell, row) {
    let icon;
    const formattedAmount = utils.formatMoney(cell)
    if (cell < 0) {
        icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red" />
    } else if (cell > 0) {
        icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green" />
    }
    return (
        <span>{formattedAmount} {icon}</span>

    );
}

function moneyFormatter(cell, row) {
    const formattedAmount = utils.formatMoney(cell)
    return (
        <span>{formattedAmount} </span>
    );
}

function percentFormatter(cell, row) {
    let icon;
    const formattedPer = utils.formatNum(cell)
    if (cell < 0) {
        icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red" />
    } else if (cell > 0) {
        icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green" />
    }
    return (
        <span>{formattedPer} % {icon}</span>
    );
}



class AssetsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            startDate: utils.yesterdayDate(),
            endDate: utils.todayDate()
        }
    }

    fetchServiceData() {
        // const data = JSON.parse(utils.mockAppStatusService());
        // console.log(data)
        // this.setState({
        //     data: data
        // });
        //uncomment below in production.
        console.log("fetch service in assets details called");
        const { assetType, portfolioName } = this.props;
        if (assetType && assetType != null && portfolioName && portfolioName != null) {
            fetch('http://192.168.0.112:8080/assets/types/' + assetType + '/portfolios/' + portfolioName + '?startDate=' + this.state.startDate + "&endDate=" + this.state.endDate)
                .then(res => res.json())
                .then((data) => {
                    this.setState({ data: data })
                })
                .catch(console.log)
        }

    }

    componentDidMount() {
        console.log("inside componentDidMount for assets details");
        debugger
        if (this.props.reloadAssetDetails && this.props.reloadAssetDetails === true) {
            this.fetchServiceData();
        }
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
                formatter: moneyFormatter,
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
                formatter: lossGainFormatter,
                sort: true,
                align: "left"
            }, {
                dataField: 'navChangePercent',
                text: 'Nav Change %',
                formatter: percentFormatter,
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
                formatter: moneyFormatter,
                align: "left"
            },
            {
                dataField: 'investedAmt',
                text: 'Amount Invested',
                formatter: moneyFormatter,
                sort: true,
                align: "left"
            },
            {
                dataField: 'currentValuation',
                text: 'Current Valuation',
                formatter: moneyFormatter,
                sort: true,
                align: "left"
            },

            {
                dataField: 'gainLoss',
                text: 'Gain/Loss',
                sort: true,
                formatter: lossGainFormatter,
                sort: true,
                align: "left"
            },
            {
                dataField: 'gainLossPercent',
                text: 'Gain/Loss %',
                sort: true,
                formatter: percentFormatter,
                align: "left"
            },
            {
                dataField: 'notionalGainLoss',
                text: 'Notional Gain/Loss',
                formatter: lossGainFormatter,
                sort: true,
                align: "left"
            },
            {
                dataField: 'notionalGainLossPercent',
                text: 'Notional Gain/Loss %',
                formatter: percentFormatter,
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