import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as utils from './Utils'

class AppDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    fetchServiceData() {
        const data = JSON.parse(utils.mockAppStatusService());
        console.log(data)
        this.setState({
            data: data
        });
        //uncomment below in production.
        // fetch('http://192.168.0.112:8080/assets?startDate=' + this.state.startDate + "&endDate=" + this.state.endDate)
        //   .then(res => res.json())
        //   .then((data) => {
        //     this.setState({ data: data })
        //   })
        //   .catch(console.log)
    }

    componentDidMount() {
        this.fetchServiceData();
    }

    render() {
        const { show } = this.props;
        let stocksNavSyncDt = null;
        let mfNavSyncDt = null;
        const { data } = this.state;
        if (data && data.data) {
            stocksNavSyncDt = data.data.stocksNavSyncDt;
            mfNavSyncDt = data.data.mfNavSyncDt;
        }

        debugger
        return (
            <div>
                {/* <Alert show={show} variant="success">
                    <Alert.Heading>Application Status</Alert.Heading>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                        fermentum.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => this.props.closeAppStatus()} variant="outline-success">
                            Close me!
                        </Button>
                    </div>
                </Alert> */}

                <Modal show={show} onHide={() => this.props.closeAppStatus()} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Application Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            <label class="text-primary">Stocks Nav Date:</label>
                            <label class="text-success"> {stocksNavSyncDt}</label>
                        </p>
                        <p>
                            <label class="text-primary">Mutual Funds Nav Date:</label>
                            <label class="text-success"> {mfNavSyncDt} </label>
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.closeAppStatus()}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default AppDashboard;