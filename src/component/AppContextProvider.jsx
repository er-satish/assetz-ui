import React, { Component } from 'react';
import AppContext from './AppContext';
import * as utils from './Utils'

class AppContextProvider extends Component {
    state = {
        startDate: utils.yesterdayDate(),
        endDate: utils.todayDate(),
        assetzSummaryData: {},
        portfolioName: "Retirement"
    };

    componentDidMount() {
        console.log("App.js componentDidMount called");
        this.fetchServiceData();
    }

    fetchServiceData() {
        // const data = JSON.parse(utils.mockAssetzService());
        // console.log(data)
        // this.setState({
        //   data: data
        // });
        //uncomment below in production.
        debugger
        console.log("fetch assetz summary data service called");
        fetch(utils.getHostName() + utils.getPort() + '/assets?startDate=' + this.state.startDate + "&endDate=" + this.state.endDate)
            .then(res => res.json())
            .then((data) => {
                this.setState({ assetzSummaryData: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    startDate: this.state.startDate,
                    assetzSummaryData: this.state.assetzSummaryData,
                    portfolioName: this.state.portfolioName,
                    endDate: this.state.endDate,

                    setStartDate: startDate => {
                        console.log("startDate changed to:" + startDate)
                        this.setState({
                            startDate: startDate
                        }, () => { this.fetchServiceData() });
                    },

                    setEndDate: endDate => {
                        console.log("endDate changed to:" + endDate)
                        this.setState({
                            endDate: endDate
                        }, () => { this.fetchServiceData() });
                    },

                    setPortfolioName: portfolioName => {
                        console.log("portfolioName changed to:" + portfolioName)
                        this.setState({
                            portfolioName: portfolioName
                        });
                    },
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppContextProvider;