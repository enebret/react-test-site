const axios = require('axios');
const url = "https://api3.binance.com/api/v3/avgPrice?symbol=";
//const ticks = "XRPUSDT";
const ticks = ["BTCUSDT", "USDTNGN", "ADAUSDT", "XRPUSDT"];


async function getBtc () {
  try{
    const returnedPrice = await axios.get(url+"BTCUSDT");
    const rd = await parseInt(returnedPrice.data.price);
    
    return rd
    //console.log(df) 
  }
  catch(error) {
    console.log (error)
  }
}

module.exports = getBtc;
//nT
//getBtc();
