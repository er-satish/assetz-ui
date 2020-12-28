import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BootstrapTable from 'react-bootstrap-table-next';
import * as utils from './Utils';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import { authHeader } from './helpers/AuthHeader';


class AppDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    fetchServiceData() {
        fetch(utils.getHostName() + utils.getPort() +'/bills',{
            method: 'GET',
            headers: authHeader()
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ data: data })
            })
            .catch(console.log)
        // const data = JSON.parse(utils.mockAppStatusService());
        // console.log(data)
        // this.setState({
        //     data: data
        // });
        //uncomment below in production.
    }

    componentDidMount() {
        this.fetchServiceData();
    }

    saveData() {
        console.log("save is called..");
        console.log(this.state.data);
        let user = JSON.parse(localStorage.getItem('user'));
        fetch(utils.getHostName() + utils.getPort() + '/bills', {
            method: 'PUT',
            body: JSON.stringify(this.state.data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + user.authdata
            }
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ data: data })
            }).catch(err => err);
    }

    render() {
        let { data } = this.state;
        const columns = [
            {
                dataField: 'id',
                hidden: true
            },
            {
                dataField: 'bank',
                text: 'Bank Name',
                sort: true,
                align: "left"
            },
            {
                dataField: 'billDt',
                text: 'Statement Date',
                sort: true,
                align: "left"
            }, {
                dataField: 'dueDt',
                text: 'Due Date',
                sort: true,
                align: "left",
                editor: {
                    type: Type.DATE
                }
            }, {
                dataField: 'dueAmt',
                text: 'Due Amount',
                sort: true,
                align: "left"
            },
            {
                dataField: 'paidAmt',
                text: 'Paid Amount',
                sort: true,
                align: "left"
            },
            {
                dataField: 'paidDt',
                text: 'Paid Date',
                sort: true,
                align: "left",
                editor: {
                    type: Type.DATE
                }
            }
        ];

        const { show } = this.props;
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

                <Modal size="lg" show={show} onHide={() => this.props.closeAppStatus()} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Credit Card Bill Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <p>
                            <label class="text-primary">Stocks Nav Date:</label>
                            <label class="text-success"> {stocksNavSyncDt}</label>
                        </p>
                        <p>
                            <label class="text-primary">Mutual Funds Nav Date:</label>
                            <label class="text-success"> {mfNavSyncDt} </label>
                        </p> */}

                        <BootstrapTable keyField="id" wrapperClasses="table-responsive text-nowrap" data={data} columns={columns}
                            cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.saveData()}>
                            Save
                        </Button>
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