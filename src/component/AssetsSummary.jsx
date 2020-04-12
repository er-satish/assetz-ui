import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function lossGainFormatter(cell, row) {
  let icon;
  if(cell < 0){
      icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red"/>
  }else if(cell > 0){
      icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green"/>
  }
  return (
    <span>{ cell } {icon}</span>
    
  );
}

class AssetsSummary extends Component {

  render() {
    // const assets = [
    //   {
    //     assetType: "Stock",
    //     currentValuation: "100.00",
    //     amountInvested: "100.00",
    //     gainLoss:"100980.00",
    //     gainLossPercentage:"10.00",
    //     totalNotionalGainLoss:"2,343,34,345",
    //     totalRealizedGainLoss:"2,343,34,345"

    //   },
    //   {
    //     assetType: "Mutual Fund",
    //     currentValuation: "100.00",
    //     amountInvested: "100.00",
    //     gainLoss:"-10,05,660.00",
    //     gainLossPercentage:"-5.00"
    //   }
    // ];
    let details = [];
    if(this.props.assets && this.props.assets.details){
      details = this.props.assets.details;
    }
    const columns = [
      {
        dataField: 'assetType',
        text: 'Asset Type',
        sort: true
      }, {
        dataField: 'currentValuation',
        text: 'Current Valuation'
      }, {
        dataField: 'amountInvested',
        text: 'Amount Invested'
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
        text: 'Total Notional Gain/Loss'
      },
      {
        dataField: 'totalRealizedGainLoss',
        text: 'Total Realized Gain/Loss'
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