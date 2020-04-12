import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class InfoCard extends Component {
    render() {
        const changePercentage = this.props.changePercentage;
        let icon;
        if (changePercentage < 0) {
            icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red" />
        } else if (this.props.changePercentage > 0) {
            icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green" />
        }

        const formattedAmount = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 2 }).format(this.props.amount)
        return (
            <div className="card bg-light">
                <div className="card-body text-left">
                    <h5 className="card-title">{this.props.name}</h5>
                    <h2 className="card-subtitle text-muted text-left">&#8377; {formattedAmount}</h2>
                    <div className="card-text text-left">
                        <p>
                            <b>Change Rate:</b> {changePercentage} % {icon}
                            <br />
                            <b>Change:</b> {this.props.change}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoCard;