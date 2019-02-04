import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TableCell from "./TableCell";
import TableView from "./TableView";
import ModalView from "./ModalView";
import { Row, Col } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dur: 0
    };
  }
  onSubmit = event => {
    event.preventDefault();
    const name = this.name.value;
    const duration = this.duration.value;
    const budget = this.budget.value;

    const info = { name: name, duration: duration, budget: budget };
    const data = [...this.state.data, info];
    this.setState({
      data: data
    });
  };
  allow = event => {
    event.preventDefault();
  };
  drop = event => {
    event.preventDefault();
    event.persist();
    this.setState({ dur: event.dataTransfer.getData("text") });
    // console.log(this.state.dur);
  };
  onDelete = index => {
    this.setState({
      data: [
        ...this.state.data.slice(0, index),
        ...this.state.data.slice(index + 1)
      ]
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Add Projects</h1>
        <hr />
        <div className="row">
          <form className="form-inline" onSubmit={this.onSubmit}>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <input
                type="text"
                className="form-control "
                placeholder="Name"
                ref={input => (this.name = input)}
              />
            </div>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <input
                type="text"
                className="form-control"
                placeholder="duration"
                ref={input => (this.duration = input)}
              />
            </div>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <input
                type="text"
                className="form-control"
                placeholder="budget"
                ref={input => (this.budget = input)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
        <hr />

        <Row>
          <Col md={2} className="colmd3">
            {this.state.data.map((info, index) => (
              <ModalView
                key={index}
                info={info}
                onDelete={() => this.onDelete(index)}
              />
            ))}{" "}
          </Col>
          <Col md={10} onDragOver={this.allow} onDrop={this.drop}>
            <TableView />
            {this.state.data.map((info, index) => (
              <TableCell size={info.duration} size1={this.state.dur} />
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
