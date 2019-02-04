import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

class ModalView extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <div
          className="card "
          onClick={this.handleShow}
          draggable="true"
          onDragStart={e => {
            e.dataTransfer.setData("text", this.props.info.duration);
            e.persist();
          }}
        >
          <div className="card-body myCard">
            <p className="card-title">{this.props.info.name}</p>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12 ">
              <div className="card mb-3">
                <div className="card-body">
                  <p className="card-title">
                    <span>Name: </span>
                    {this.props.info.name}
                  </p>
                  <p className="card-text">
                    <span>duration: </span>
                    {this.props.info.duration}
                  </p>
                  <p className="card-text">
                    <span>budget: </span>
                    {this.props.info.budget}
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              type="button"
              className="btn btn-primary"
              onClick={event => {
                this.props.onDelete();
                this.handleClose();
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
ModalView.propTypes = {
  onDelete: PropTypes.func.isRequired,
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired
  })
};

export default ModalView;
