import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function lossGainFormatter(cell, row) {
  let icon;
  const formattedAmount = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 2 }).format(cell)
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
  const formattedAmount = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 2 }).format(cell)
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
        formatter: moneyFormatter
      },
      {
        dataField: 'totalRealizedGainLoss',
        text: 'Total Realized Gain/Loss',
        formatter: moneyFormatter
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

// isGainOrLoss = (amount) => {
//   let icon;
//   if(changePercentage < 0){
//       icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red"/>
//   }else if(this.props.changePercentage > 0){
//       icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green"/>
//   }
// }  

export default AssetsSummary;