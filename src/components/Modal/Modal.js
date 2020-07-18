import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const Modal = (props) => {
  return (
    <Backdrop>
      <div className='Modal'>{props.children}</div>
    </Backdrop>
  );
};

export default Modal;
