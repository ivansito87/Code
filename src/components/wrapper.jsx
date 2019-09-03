import React, {Component} from 'react';
import Counter from "./counterComponent";
import {MDBContainer} from "mdbreact";
import JumbotronPage from "./jumbotron";
import TablePage from "./tableContainer";
import FooterPage from "./footer";
import Counters from "./counters";
import "../../src/index.css";

class PanelPage extends Component {

  state = {
    isOpen: false,
    count: 0,

  };

  handleCount = () => {
    this.setState({count: this.state.count + 1}, () => {
    })
  };

  render() {


    return (
      <React.Fragment>
        <Counter countState={this.state.count}/>
        <MDBContainer>
          <JumbotronPage handleCount={this.handleCount}/>
          <Counters />
          <TablePage />
        </MDBContainer>
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default PanelPage;