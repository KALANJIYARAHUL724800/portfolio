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
  }).then(res => {
    const token = res.data.token; // backend return JWT
    localStorage.setItem("token", token); // save token
    return res;
  });
};

const contactAll = () => {
  return axios.get(`${CONTACT_URL}`);
}

const handleLogout = ()=>{
  localStorage.removeItem("token");
  window.location.href = "/home";
}

export default { sendContactForm, adminForm, contactAll, handleLogout };
