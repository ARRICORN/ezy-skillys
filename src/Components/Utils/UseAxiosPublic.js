import axios from "axios"

export const apiUrl = 'http://localhost:3000/api';
const axiosPublic = axios.create({
    baseURL: apiUrl,
    // withCredentials : true,
})
function UseAxiosPublic() {
  return (
    axiosPublic
  )
}

export default UseAxiosPublic;