import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import providers from "../providers.json";
import Navbar from "../components/Navbar";
import TakeMoney from "../components/StripeButton";

class Detail extends Component {
  state = {
    provider: []
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getProvider(this.props.match.params.id)
      .then(res => this.setState({ provider: res.data }))
      .catch(err => console.log(err));
  }

    


  render() {
   return (
    <div>
      <Navbar/>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">Provider Info</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">
                More  about {this.state.provider.name} : 
                <p>Kids:  {this.state.provider.kids}</p>
                <p>Job:  {this.state.provider.occupation}</p>
                <p>Hobbies:  {this.state.provider.interests}</p>
            </h1>
            <article>
              <p className="text-center">
               {this.state.provider.location}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
              <p className="text-center">_____________________________</p>
              <p className="text-center" style={{ fontSize: 16 }}>Kidly values the privacy
              of our clients. We don't personally collect any credit information; we leave that
              to a secure third party service.</p>
              <p className="text-center" style={{ fontSize: 16 }}> Please click the 'Pay With Card' button to make a one-time payment to access the Kidly services. </p>
              <p className="text-center">
                <Link to={"/login/" + this.props.match.params.id} className="text-center">
                <TakeMoney
                />
                </Link>
              </p>
          </Col>
        </Row>
        <Row>
          <div style={{ marginTop: "100px" }}>
            <Col size="md-12">
              <Link to="/discover">← Back to Discover</Link>
            </Col>
          </div>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Detail;
