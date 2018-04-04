import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';


class Landing extends React.Component {

    // super(props);
    state={
        redirectToReferrerG: false,
        redirectToReferrerF: false,
        userId: "",
        email: "",
        img: ""
    };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
    render() {

const route = () => {
 
    window.location = "/Discover";

};
    const responseFacebook = (response) => {
        

        if(!this.state.redirectToReferrerF){
        this.setState({redirectToReferrerF:false});
       
      }
this.setState({redirectToReferrerF:true});
      if(this.state.redirectToReferrerF){
        this.setState({redirectToReferrerF:false});
        route();
      }
    };
    const responseGoogle = (response) => {
    this.setState({redirectToReferrerG:true});
   
      // console.log(response);

      if(this.state.redirectToReferrerG){
        this.setState({redirectToReferrerG:false});
        route();
      }
      
    };
    const responseGoogle2 = (response) => {
        this.setState({redirectToReferrerG:false});
    console.log("404 Error Not Logged In");
      
    };

return (
  <div>
    <Hero>
      <h1>Kidly</h1>
      <h2>Families taking care of families.</h2>
      <GoogleLogin style= {{ backgroundColor: "green", color: "white", borderRadius: 50}}
          clientId="282281420844-o33h199b158o9qfh6mf5kvh7d86mt1ad.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle2}
      />      
      <Col size="md-12">
      <img src="images/kinder-logo.PNG" style={{ borderRadius: 50, marginTop: 10 }} />
      </Col>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12" className="text-center" style={{ color: "green" }}>
          <p>Welcome to Kidly. Our mission is to bring affordable child care to families in need; We believe
          that the best care for a child is from a parent. Therefore, Kidly provides a resource
          for families to search, save, and contact families offering child care support from their home,
          enriching the upbringing and diverse experiences of Kidly kids.
           </p>
        </Col>
      </Row>
    </Container>
  </div>
);
}
}

export default Landing;
