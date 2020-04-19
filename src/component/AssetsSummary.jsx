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

class AssetsSummary extends Component {

  render() {
    let details = [];
    if (this.props.assets && this.props.assets.details) {
      details = this.props.assets.details;
    }
    const columns = [
      {
        dataField: 'assetType',
        text: 'Asset Type',
        sort: true
      }, {
        dataField: 'currentValuation',
        text: 'Current Valuation',
        formatter: moneyFormatter
      }, {
        dataField: 'amountInvested',
        text: 'Amount Invested',
        formatter: moneyFormatter
      },
      {
        dataField: 'gainLoss',
        text: 'Gain/Loss',
        sort: true,
        formatter: lossGainFormatter
      },
      {
        dataField: 'gainLossPercentage',
        text: 'Gain/Loss %',
        sort: true,
        formatter: lossGainFormatter
      },
      {
        dataField: 'totalNotionalGainLoss',
        text: 'Total Notional Gain/Loss',
        formatter: lossGainFormatter
      },
      {
        dataField: 'totalRealizedGainLoss',
        text: 'Total Realized Gain/Loss',
        formatter: lossGainFormatter
      }
    ];

    return (
      <div>
        <h2 className="text-left">Assets Summary</h2>
        <BootstrapTable wrapperClasses="table-responsive" keyField='assetType' data={details} columns={columns} />
      </div>
    );
  }
}

export default AssetsSummary;