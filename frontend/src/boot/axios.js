import Vue from "vue";
import axios from "axios";

const API_URL = process.env.DEV
  ? "http://localhost:5001"
  : "https://virtualcollege-corebackend.herokuapp.com";
// const API_URL = "https://virtualcollege-corebackend.herokuapp.com";
axios.defaults.baseURL = API_URL;

Vue.prototype.$axios = axios;
