import axios from "axios";

export function get(url) { 
  return axios
    .get(url,{
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.data.message)
}