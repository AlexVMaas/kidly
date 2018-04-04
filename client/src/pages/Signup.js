import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import TakeMoney from "../components/StripeButton";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, Radio, FormBtn } from "../components/Form";
import Navbar from "../components/Navbar";

class Signup extends Component {
  state = {
    id: "",
    name: "",
    image: "",
    occupation: "",
    kids: "",
    email: "",
    interests: "",
    location: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.username)
        console.log(this.state.password)
            console.log(this.state.email)
                console.log(this.state.type)
  };

  handleFormSubmit = event => {
    // if (this.state.type == "user") {
      if (this.state.name && this.state.id && this.state.email) {
        API.createUser({
          id: this.state.id,
          name: this.state.name,
          image: this.state.image,
          occupation: this.state.occupation,
          email: this.state.email,
          kids: this.state.kids,
          interests: this.state.interests,
          location: this.state.location
        })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    // }
  };



  render() {
    return (
      <div>
      <Navbar />
      <Container fluid>
        <Row>
          <Col size="md-12" className="text-center">
            <Jumbotron>
              <h1>Please Sign Up</h1>
            </Jumbotron>
            <form style={{ marginLeft: "20%", marginRight: "20%" }}>
              <Input
                value={this.state.id}
                onChange={this.handleInputChange}
                name="id"
                placeholder="Preferred Name (required)"
              />
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="First and Last Name (required)"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="Image URL (required)"
              />
              <Input
                value={this.state.occupation}
                onChange={this.handleInputChange}
                name="occupation"
                placeholder="Occupation"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.kids}
                onChange={this.handleInputChange}
                name="kids"
                placeholder="How many kids do you have?"
              />
              <Input
                value={this.state.interests}
                onChange={this.handleInputChange}
                name="interests"
                placeholder="List any interests"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
              />            

              <FormBtn
                disabled={!(this.state.name && this.state.id && this.state.email)}
                onClick={this.handleFormSubmit}
                to="/discover"
              >
              <Link to="/discover">
                Complete Signup
               </Link> 
              </FormBtn>
            </form>
          </Col>
        </Row>
        
      </Container>
      </div>
    );
  }
}

export default Signup;

// <Row>
//           <Col size="md-12">
//               <p className="text-center">_____________________________</p>
//               <p className="text-center"> Kidly values the privacy
//               of our clients. We don't personally collect any credit information; we leave that
//               to a secure third party service.
//               </p>
//               <p className="text-center"> Please click the 'Pay With Card' button to make a one-time payment to access the Kidly services. </p>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-12">
//             <Link to="/login" style={{ float: "right", marginRight: "20%"}}>
//             <TakeMoney
//             />
//             </Link>
//           </Col>
//         </Row>