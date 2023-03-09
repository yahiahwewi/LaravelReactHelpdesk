import axios from "axios"


const axiosClient = axios.create({

baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`


});

axiosClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('ACCESS_TOKEN')
config.headers.Authorization=`Bearer ${token}`

return config;
})


axiosClient.interceptors.response.use((response)=>{ 
return response;


},

(error)=>{
const{response}=error;
if (response.status === 401) {
    localStorage.removeItem('ACCESS_TOKEN')
    console.log("removed !!!!!!!!");
    // window.location.reload();
  } else if (response.status === 404) {
    console.log(error);  }

  throw error;


  },
  axiosClient.setCookie = () => {
    return axios.get('/set-cookie');

})


export default axiosClient;
