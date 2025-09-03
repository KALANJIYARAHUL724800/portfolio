import axios from "axios";
function getHomeDetails()
{
  return axios.get("http://localhost:8080/api/home")
    .then(response => {
      return response.data;
    })
    .catch(error => console.error('Error:', error));
}
export default getHomeDetails;