import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class InfoCard extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const changePercentage = this.props.changePercentage;
    let icon;
    if(changePercentage < 0){
        icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red"/>
    }else if(this.props.changePercentage > 0){
        icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green"/>
    }
    return (
        <div class="card bg-light">
            <div class="card-body text-center">
                <h5 class="card-title">{this.props.name}</h5>
                <h2 class="card-subtitle text-muted text-left">&#8377; {this.props.amount}</h2>
                <p class="card-text text-left">
                <div>
                    <b>Change Rate:</b> {changePercentage} % {icon}
                    <br/>
                    <b>Change:</b> {this.props.change}
                </div>
                
                </p>
            </div>
        </div>
    );
  }
}

export default InfoCard;