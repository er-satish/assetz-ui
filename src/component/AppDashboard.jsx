import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class AppDashboard extends Component {
    
    render() {
        const { show } = this.props;
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
                    <label>Stocks Latest Nav Date: </label>
                    <span>
                        100.5
                    </span>
                    <label>Mutual Fund Latest Nav Date: </label>
                    <span>
                        100.5
                    </span>
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