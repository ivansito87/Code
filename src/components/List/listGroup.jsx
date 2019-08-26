import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import "./style.css";

const MyListGroup = props => {

  const {items, textProperty, valueProperty, onItemSelect, selectedItem} = props;

  return (
    <MDBContainer>
      <MDBListGroup className="mx-auto z-depth-1-half active">
        {items.map(item =>
          <MDBListGroupItem {...selectedItem === item && {active: true}}
                            key={item[valueProperty]}
                            color="primary"
                            onClick={() => onItemSelect(item)}
                            className=""
                            hover
          >
            {item[textProperty]}
          </MDBListGroupItem>)}
      </MDBListGroup>
    </MDBContainer>

  );
};

MyListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default MyListGroup;