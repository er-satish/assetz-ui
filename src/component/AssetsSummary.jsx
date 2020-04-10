import React, { Component } from 'react';

class AssetsSummary extends Component {
  render() {
    return (
      <div>
        <h2>Assets Summary</h2>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th>Asset Type</th>
                <th>Current Valuation</th>
                <th>Amount Invested</th>
                <th>Gain/Loss</th>
                <th>Total Notional Gain/Loss</th>
                <th>Total Realized Gain/Loss</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stocks</td>
                <td>1000.00</td>
                <td>900.00</td>
                <td>100.00</td>
                <td>100.00</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Stocks</td>
                <td>1000.00</td>
                <td>900.00</td>
                <td>100.00</td>
                <td>100.00</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Stocks</td>
                <td>1000.00</td>
                <td>900.00</td>
                <td>100.00</td>
                <td>100.00</td>
                <td>0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AssetsSummary;