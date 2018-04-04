import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Detail from "./pages/Detail";
// import providers from "./providers.json";


const App = () => (
  <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/signup" component={Signup} />                    
        <Route exact path="/discover/:id" component={Detail} />
        <Route exact path="/login/:id" component={Login} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
