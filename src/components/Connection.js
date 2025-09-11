// Connection.js
import axios from "axios";

const CONTACT_URL = "https://backend-portfolio-6g6d.onrender.com/api/contact"; // insert the contact API endpoint
const ADMIN_URL = "https://backend-portfolio-6g6d.onrender.com/api/admin";//https://backend-portfolio-6g6d.onrender.com/api/admin
//Contact Data send
const sendContactForm = (val) => {
  return axios.post(`${CONTACT_URL}`, {
    userName: val.userName,
    email: val.email,
    message: val.message
  });
};

//Admin form Data send
const adminForm = (val) => {
  return axios.post(`${ADMIN_URL}`, {
    username: val.username,
    password: val.password
  });
};

const getHomeDetails = () => {
  return axios.get("https://backend-portfolio-6g6d.onrender.com/api/home", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
};

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/home";
};


const contactAll = () => {
  return axios.get(`${CONTACT_URL}`);
}

export default { sendContactForm, adminForm, contactAll, handleLogout, getHomeDetails };
