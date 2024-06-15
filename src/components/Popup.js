import React, { useState } from "react";
import { PopupContainer, PopupInner, Button } from "./PopupElements.js";
import { IoMdClose } from "react-icons/io";

function Popup(props) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.setTrigger(false);
      setClosing(false);
    }, 300);
  };

  return props.trigger ? (
    <PopupContainer closing={closing} onClick={handleClose}>
      <PopupInner closing={closing} onClick={(e) => e.stopPropagation()}>
        <Button onClick={handleClose}>
          <IoMdClose className="close" />
        </Button>
        {props.children}
      </PopupInner>
    </PopupContainer>
  ) : null;
}

export default Popup;
