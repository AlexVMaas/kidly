import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import providers from "../providers.json";
import Navbar from "../components/Navbar";
import TakeMoney from "../components/StripeButton";

class Login extends Component {
  state = {
    // providers,
    provider: []
    // provider: providers.filter(provider => provider.id == this.props.match.params.id)[0]
    
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
              <h1>
                More  about {this.state.provider.name} : 
                <p>Email:  {this.state.provider.email}</p>
                <p>Kids:  {this.state.provider.kids}</p>
                <p>Job:  {this.state.provider.occupation}</p>
                <p>Hobbies:  {this.state.provider.interests}</p>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <p>
               {this.state.provider.location}
              
               
              </p>
            </article>
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/discover">← Back to Discover</Link>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Login;