import React, { Component } from "react";
import Card from "../components/Card";
import Alert from "../components/Alert";
// import providers from "../providers.json";
// import Wrapper from "../components/Wrapper";
// import CardBtn from "../components/CardBtn";
// import ProviderCard from "../components/ProviderCard";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import Navbar from "../components/Navbar";


class Discover extends Component {
  state = {
   // providers,
    providers:[],
    matches: [],
    title: "",
    author: "",
    synopsis: ""   
  };

 componentDidMount() {
   this.loadProviders();
   // this.loadUser();  
  };

  loadProviders = () => {
     API.getProviders()
      .then(res =>
       this.setState({ providers: res.data })
      )
      .catch(err => console.log(err));
  };

// When passport returns a match, can it send user to discovery/:id(user)

  // loadUser = () => {
  //   API.getUser()
  //     .then(res =>
  //       this.setState({ matches: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };


  removeProvider = id => {
    const providers = this.state.providers.filter (provider => provider.id !== id);
    this.setState({ providers });
  };

  deleteMatch = id => {
    console.log(this.state.matches)
    console.log(id)

    const matches = this.state.matches.filter (provider => provider.id === !id);
    this.setState({ matches });

    // const providers = this.state.providers.filter (provider => provider.id === id);
    // this.setState({ providers });   

    // console.log(matches)
    // console.log(id)
    // API.deleteMatch(id)
    //   .then(res => this.loadMatches())
    //   .catch(err => console.log(err));
  };

  // loadNextProvider = () => {
  //   this.setState({ providers });
  //   // .catch(err => console.log(err));
  // };

  saveMatch = id => {
    const matches = this.state.providers.filter (provider => provider.id === id);
    this.setState({ matches });
    const providers = this.state.providers.filter (provider => provider.id !== id);
    this.setState({ providers });
    
    // const btnType = event.target.attributes.getNamedItem("data-value").value;
    
    // const newState = { ...this.state };

    console.log(id)
    // console.log(newState)

   //  if (btnType === "pick") {
      
   // // ++++++++++++++++++++++++++++++add to kinderdb user saved "matches" 

   //    API.saveMatch({
   //      title: this.state.title,
   //    })
   //      .then(res => this.loadBooks())
   //      .catch(err => console.log(err));
   //  }
  };

  //   handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };


  // };


           // {this.state.providers.length ? (
              //             ))}) : (
              // <h3>No Matches to Display</h3> 
              // )}


  render() {
    return (
      <div>
      <Navbar/>
      <Container fluid>
        <Row>
         <Col size="md-6">
          <Jumbotron>
            <h1 className="text-center">Provider List</h1>
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
              <h1 className="text-center">My Favorites List</h1>
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
              // <List>
              //   {this.state.matches.map(match => (
              //     <ListItem key={match.id}>
              //       <Link to={"/matches/" + match.id}>
              //         <strong>
              //           {match.name} by {match.location}
              //         </strong>
              //       </Link>
              //       <DeleteBtn onClick={() => this.deleteMatch(match.id)} />
              //     </ListItem>
              //   ))}
              // </List>
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

