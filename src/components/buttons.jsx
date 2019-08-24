import React, {Fragment} from "react";
import {MDBBtn} from "mdbreact";


// <i className="far fa-heart"></i>
const Like = (props) => {
  let classes;
  props.liked === true ? classes = "far fa-heart fa-heart fa-2x" : classes = "fas fa-heart fa-2x";
  return (
    <MDBBtn rounded outline color="danger" onClick={props.handleLike} size="sm"><i className={classes}>{""}</i></MDBBtn>
  );
};

export default Like;