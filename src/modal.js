import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      image: "",
      rating: "",
      year: ""

    };
  
  }
  addNewmovie=()=>{
    this.props.addmovie({title:this.state.title,
      image:this.state.image,
      rate:this.state.rating,
      year:this.state.year})
      console.log("movie added")

  }
  handelChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

  }

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Add New Movie
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" name="title" onChange={this.handelChange} />
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name="image" onChange={this.handelChange} />
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name="rating" onChange={this.handelChange} />
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year" onChange={this.handelChange} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary"  onClick={this.addNewmovie}>Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
