const axios = require('axios');
async function getApi () {
   try{
       const find = await axios.get("https://api.coingecko.com/api/v3/ping");
       console.log(find.data.gecko_says);
   }
   catch(error){
     console.error(error);
   }
}

getApi();