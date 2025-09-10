import axios from "axios";
function getHomeDetails()
{//http://localhost:8080/api/home https://backend-portfolio-6g6d.onrender.com/api/home 
  return axios.get("https://backend-portfolio-6g6d.onrender.com")
    .then(response => {
      return response.data;
    })
    .catch(error => console.error('Error:', error));
}
export default getHomeDetails;