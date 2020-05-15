import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as utils from './Utils';
import BootstrapTable from 'react-bootstrap-table-next';

class GridCard extends Component {

    render() {
        let { cardData } = this.props;
        const columns = [
            {
                dataField: 'schemeName',
                text: 'Scheme',
                sort: true,
                align: "left"
            }, 
            {
                dataField: 'navChangePercent',
                text: 'Nav Change %',
                formatter: utils.percentFormatter,
                sort: true,
                align: "left"
            },
            {
                dataField: 'lastNav',
                text: 'Last Nav',
                formatter: utils.moneyFormatter,
                sort: true,
                align: "left"
            },
            {
                dataField: 'navChange',
                text: 'Nav Change',
                formatter: utils.lossGainFormatter,
                sort: true,
                align: "left"
            }, 
            {
                dataField: 'lastNavDt',
                text: 'Last Nav Date',
                sort: true,
                align: "left"
            }
        ];

        return (
            <div className="card bg-light">
                <Card>
                    <Card.Title className="text-center">{cardData.name}</Card.Title>
                    <Card.Body>
                        <div className="row">
                            <div className="col form-group mb-md-0">
                                <label>From Date:</label>
                                {/* <input type="date" name="fromDate" max="2099-12-31" value=""
                                    min="2020-01-01" onChange={(val) => { }} /> */}
                                    <label className="ml-1">{cardData.fromDate}</label>
                            </div>
                            <div className="col form-group mb-md-0">
                                <label>To Date:</label>
                                {/* <input className="border border-grey" type="date" name="toDate" min="2020-01-01" value=""
                                    max="2099-12-31" onChange={(val) => { }} /> */}
                                    <label className="ml-1">{cardData.toDate}</label>
                            </div>
                        </div>

                        <div className="card-text text-left">
                            <div>
                                <BootstrapTable wrapperClasses="table-responsive text-nowrap" keyField='assetType' data={cardData.details} columns={columns} />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default GridCard;