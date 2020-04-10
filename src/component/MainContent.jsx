import React, { Component } from 'react';
import InfoCard from './InfoCard';
import AssetsSummary from './AssetsSummary';

class MainContent extends Component {
    render() {
        return (
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 class="h2">Portfolio Performance</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group mr-2">
                            <button class="btn btn-sm btn-outline-secondary">Share</button>
                            <button class="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>
                            This week
                        </button>
                    </div>
                </div>

                <div class="card-columns">
                    <InfoCard name="My Networth" amount="15,000,00" changePercentage="10.0" change="10,000"/>
                    <InfoCard name="Stocks" amount="15,000,00" changePercentage="-10.0" change="10,000"/>
                    <InfoCard name="Mutual Fund" amount="15,000,00" changePercentage="8.0" change="10,000"/>
                </div>

                <AssetsSummary />
            </main>
        );
    }
}

export default MainContent;