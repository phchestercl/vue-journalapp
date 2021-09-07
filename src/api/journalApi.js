import axios from 'axios'
const journalApi = axios.create({
    //baseUrl:'http://ec2-18-208-13-150.compute-1.amazonaws.com:8080/xrt/v1/wrko/',
    baseURL:'https://dev.migaragedigital.cl/xrt/v1',
    //baseURL:'https://vue-demos-bf730-default-rtdb.firebaseio.com/'

})


export default journalApi