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

class AssetsSummary extends Component {

  handleRowSelect(assetType) {
    console.log("clicked on:"+assetType)
    this.props.selectAssetType(assetType);
  };

  render() {
    let details = [];
    if (this.props.assets && this.props.assets.details) {
      details = this.props.assets.details;
    }
    const columns = [
      {
        dataField: 'assetType',
        text: 'Asset Type',
        sort: true,
        align: "left"
      }, {
        dataField: 'currentValuation',
        text: 'Current Valuation',
        formatter: moneyFormatter,
        sort: true,
        align: "left"
      }, {
        dataField: 'amountInvested',
        text: 'Amount Invested',
        formatter: moneyFormatter,
        sort: true,
        align: "left"
      },
      {
        dataField: 'gainLoss',
        text: 'Gain/Loss',
        sort: true,
        formatter: lossGainFormatter,
        align: "left"
      },
      {
        dataField: 'gainLossPercentage',
        text: 'Gain/Loss %',
        sort: true,
        formatter: percentFormatter,
        align: "left"
      },
      {
        dataField: 'totalNotionalGainLoss',
        text: 'Total Notional Gain/Loss',
        formatter: lossGainFormatter,
        sort: true,
        align: "left"
      },
      {
        dataField: 'totalRealizedGainLoss',
        text: 'Total Realized Gain/Loss',
        formatter: lossGainFormatter,
        sort: true,
        align: "left"
      }
    ];

    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        this.handleRowSelect(row.assetType);
      }
    };

    return (
      <div>
        <h2 className="text-left">Assets Summary</h2>
        <BootstrapTable keyField="assetType" wrapperClasses="table-responsive text-nowrap" data={details} columns={columns} rowEvents={ rowEvents } />
      </div>
    );
  }
}

export default AssetsSummary;