//const axios = require('axios');
import axios from "axios";
const url = "https://api1.binance.com/api/v3/avgPrice?symbol=";

 async function getNaira () {
  try{
    const returnedNaira = await axios.get(url+"USDTNGN");
    const pd = await parseInt(returnedNaira.data.price);
    return pd;
    //console.log(pd)
  }
  catch(error){console.log(error)}
}

export default getNaira;
//module.exports = getNaira;


