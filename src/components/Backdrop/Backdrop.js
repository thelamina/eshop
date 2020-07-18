import React, { useState } from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  const [show, setShow] = useState(true);
  return <div className='Backdrop'>{props.children}</div>;
};

export default Backdrop;
