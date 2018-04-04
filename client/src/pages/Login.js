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
    provider: []
  };

  componentDidMount() {
    API.getProvider(this.props.match.params.id)
      .then(res => this.setState({ provider: res.data }))
      .catch(err => console.log(err));
  }

    


  render() {
   return (
    <div>
      <Navbar />
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
                <p style={{ color: "darkgreen" }}>Email:  {this.state.provider.email}</p>
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
          <div style={{ marginTop: 100 }}>
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

export default Login;