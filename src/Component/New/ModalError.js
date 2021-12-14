import React from "react";
import "./ModalError.css";

const ModalError = (props) => {
  if (!props.show) {
    return null;
  }
  const errorMessage = props.onError;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{errorMessage.type}</h4>
          <button onClick={props.onClose}>&times;</button>
        </div>
        <div className="modal-body">{errorMessage.content}</div>
      </div>
    </div>
  );
};

export default ModalError;
