import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as utils from './Utils'

class InfoCard extends Component {
    render() {
        const changePercentage = this.props.changePercentage;
        let icon;
        if (changePercentage < 0) {
            icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red" />
        } else if (this.props.changePercentage > 0) {
            icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green" />
        }

        const formattedAmount = utils.formatMoney(this.props.amount)
        const formattedChangePercentage = utils.formatNum(changePercentage)
        const formattedChange = utils.formatMoney(this.props.change)
        return (
            <div className="card bg-light">
                <div className="card-body text-left">
                    <h5 className="card-title">{this.props.name}</h5>
                    <h2 className="card-subtitle text-muted text-left">{formattedAmount}</h2>
                    <div className="card-text text-left">
                        <p>
                            <b>Change Rate:</b> {formattedChangePercentage} % {icon}
                            <br />
                            <b>Change:</b> {formattedChange}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoCard;