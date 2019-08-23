import React, {Component} from 'react';
import Counter from "./counterComponent";
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBContainer, MDBJumbotron} from "mdbreact";
import JumbotronPage from "./jumbotron";
import TablePage from "./table";
import FooterPage from "./footer";

class PanelPage extends Component {

  state = {
    isOpen: false,
    count: 0,

  };

  handleCount = () => {
    this.setState({count: this.state.count + 1}, () => {
      console.log(" count in Jumbotron page ", this.state.count);
    } )
  };

  render() {


    return (
      <MDBContainer>
        <Counter countState={this.state.count}/>
        <JumbotronPage handleCount={this.handleCount}/>
        <TablePage />
        {/*<MDBCardGroup column>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag="h5">
                Panel title that wraps to a new line
              </MDBCardTitle>
              <MDBCardText>
                This is a longer panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard color="primary-color" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat.
              </p>
              <footer className="blockquote-footer">
                <small className="text-white">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </MDBCard>

          <MDBCard className="text-center">
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="text-right p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </MDBCard>

          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>*/}
        <FooterPage />
      </MDBContainer>
    );
  }
}

export default PanelPage;