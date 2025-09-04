import axios from "axios";
function getHomeDetails()
{
  return axios.get("https://backend-portfolio-6g6d.onrender.com/api/home")
    .then(response => {
      return response.data;
    })
    .catch(error => console.error('Error:', error));
}
export default getHomeDetails;