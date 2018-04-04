import axios from "axios";

export default {

  getProviders: function() {
    return axios.get("/api/provider");
  },
  
  getProvider: function(id) {
    return axios.get("/api/provider/" + id);
  },
  
  updateUser: function(id, userData) {
    return axios.put("/api/user/" + id, userData);
  },
 
  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  getUser: function(id) {
    return axios.get("/api/user/" + id);
  }

  // login: function(loginData) {
  //   return axios.post("/api/login", loginData);
  // },

  // logout: function(loginData) {
  //   return axios.post("/api/login", loginData);
  // }

//login route for passport
};
