import React, {Component} from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';

class ModalPage extends Component {

  render() {
    return (
      <MDBContainer>
        {/*<MDBBtn color="primary" onClick={this.props.toggleFnc}>MDBModal</MDBBtn>*/}
        <MDBModal isOpen={this.props.modal14} centered>
          <MDBModalHeader toggle={this.props.toggleFnc}>There are no more movies to show</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggleModal}>Close</MDBBtn>
            {/*<MDBBtn color="primary">Save changes</MDBBtn>*/}
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;