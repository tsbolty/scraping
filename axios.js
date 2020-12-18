// USING THE AXIOS PACKAGE. RETURNS BASICALLY THE SAME THING AS FETCH
const axios = require("axios")

axios.get('https://www.rtd-denver.com/app/nextride/stop/34236').then(response =>{
  console.log(response)
})