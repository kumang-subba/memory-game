/* eslint-disable react/prop-types */
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function GameLost({ showModal, handleClose, gameScore }) {
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{gameScore === 12 ? "YOU WIN" : "YOU LOSE"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your score: {gameScore} </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GameLost;
