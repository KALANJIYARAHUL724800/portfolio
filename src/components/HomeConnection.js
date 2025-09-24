import axios from "axios";
function getHomeDetails(){
  return axios.get("https://backend-0gnm.onrender.com/api/home")
    .then(response => {
      return response.data;
    })
    .catch(error => console.error('Error:', error));
}
export default getHomeDetails;