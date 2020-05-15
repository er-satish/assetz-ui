import React, { Component } from 'react';
import * as utils from './Utils';
import Footer from './Footer';
import GridCard from './GridCard';

class AnalysisContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardsData: []
        }

    }


    fetchServiceData() {
        //uncomment below in production.
        fetch('http://192.168.0.112:8080/analysis')
            .then(res => res.json())
            .then((data) => {
                this.setState({ cardsData: data.cardsData })
            })
            .catch(console.log)
        // const data = JSON.parse(utils.mockAnalysisService());
        // console.log(data)
        // this.setState({
        //     cardsData: data.cardsData
        // });
    }

    componentDidMount() {
        this.fetchServiceData();
    }

    render() {
        const cards = [];
        const { cardsData } = this.state;
        for (const [index, value] of cardsData.entries()) {
            cards.push(<GridCard key={index} cardData={value} />)
        }
        return (
            
            <div>
                <div className="card-columns">
                    {cards}
                </div>
                <div>
                <Footer />
                </div>
            </div>
        );
    }
}

export default AnalysisContainer;