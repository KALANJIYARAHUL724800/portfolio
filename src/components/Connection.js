// Connection.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/contact"; // insert the contact API endpoint

const sendContactForm = (val) => {
  return axios.post(`${BASE_URL}`, {
    userName: val.userName,
    email: val.email,
    message: val.message
  });
};

export default sendContactForm;
