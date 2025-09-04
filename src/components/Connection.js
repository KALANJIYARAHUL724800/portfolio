// Connection.js
import axios from "axios";

const BASE_URL = "https://backend-portfolio-6g6d.onrender.com/api/contact"; // insert the contact API endpoint

const sendContactForm = (val) => {
  return axios.post(`${BASE_URL}`, {
    userName: val.userName,
    email: val.email,
    message: val.message
  });
};

export default sendContactForm;
