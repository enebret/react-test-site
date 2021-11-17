const axios = require('axios');
const url = "https://api1.binance.com/api/v3/avgPrice?symbol=";
//const ticks = "XRPUSDT";
const ticks = ["BTCUSDT", "USDTNGN", "ADAUSDT", "XRPUSDT"];

async function getBtc () {
  try{
    const returnedPrice = await axios.get(url+"BTCUSDT");
    const rd = await parseInt(returnedPrice.data.price);
    //const df = await rd * naira;
    return rd
    //console.log(rd) 
  }
  catch(error) {
    console.log (error)
  }
}

module.exports = getBtc;
//nT
//getBtc();
