import React, { Component } from "react";
import Card from "../components/Card";
import Alert from "../components/Alert";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import Navbar from "../components/Navbar";


class Discover extends Component {
  state = {
    providers:[],
    matches: [],
    title: "",
    author: "",
    synopsis: ""   
  };

 componentDidMount() {
   this.loadProviders();
  };

  loadProviders = () => {
     API.getProviders()
      .then(res =>
       this.setState({ providers: res.data })
      )
      .catch(err => console.log(err));
  };



  removeProvider = id => {
    const providers = this.state.providers.filter (provider => provider.id !== id);
    this.setState({ providers });
  };

  deleteMatch = id => {
    console.log(this.state.matches)
    console.log(id)

    const matches = this.state.matches.filter (provider => provider.id === !id);
    this.setState({ matches });

  };


  saveMatch = id => {
    const matches = this.state.providers.filter (provider => provider.id === id);
    this.setState({ matches });
    const providers = this.state.providers.filter (provider => provider.id !== id);
    this.setState({ providers });
    

    console.log(id)

  };

  render() {
    return (
      <div>
      <Navbar/>
      <Container fluid>
        <Row>
         <Col size="md-6">
          <Jumbotron>
            <h1 className="text-center">Providers</h1>
            <h3 className="text-center">
              Thumbs up on any providers you'd like to contact!
            </h3>
          </Jumbotron>               
        <h1 className="text-center">

        {this.state.providers.map(provider => (
            <Card
              removeProvider={this.removeProvider}
              saveMatch={this.saveMatch}
              name={provider.id}
              id={provider.id}
              key={provider.id}
              image={provider.image}
              occupation={provider.occupation}
              location={provider.location}
              kids={provider.kids}
              interests={provider.interests}
            />
     ))}

        </h1>

        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay!  Would you like to contact this provider?
        </Alert>

        </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1 className="text-center">My Favorites</h1>
            </Jumbotron>
            
            {this.state.matches.length ? (
        <h1 className="text-center">
        {this.state.matches.map(match => (
          <div>          
            <Card
            removeProvider={this.removeProvider}
            name={match.id}
            id={match.id}
            key={match.id}
            image={match.image}
            occupation={match.occupation}
            location={match.location}
            interests={match.interests}
            />
            <Link to={"/discover/" + match._id}>
              <strong>
                {match.id} from {match.location}
              </strong>
            </Link>
            <DeleteBtn onClick={() => this.deleteMatch(match.id)} />
          </div>
        ))}             
        </h1>              
            ) : (
              <h3>No Matches to Display</h3>
            )}
          </Col>        
        </Row>
      </Container>
      </div>
    );
   }
};  


export default Discover;

