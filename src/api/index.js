import axios from 'axios'

const API_URL='https://5adc8779b80f490014fb883a.mockapi.io';

export default function CallApi(endpoint,method='GET',body){
    return axios({
        method,
        url:`${API_URL}/${endpoint}`,
        data:body
    }).catch(err=>{
        console.log(err);
    })
}