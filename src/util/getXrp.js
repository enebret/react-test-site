import axios from "axios";
const url = "https://api3.binance.com/api/v3/avgPrice?symbol=";

async function getXrp () {
    try{
      const returnedPrice = await axios.get(url+"XRPUSDT");
      const rd = await parseFloat(returnedPrice.data.price);
      const fd = await rd.toFixed(2)
      const pd = await Number(fd)
      return pd
      //console.log(pd) 
    }
    catch(error) {
      console.log (error)
    }
  }
  export default getXrp;
 /** setInterval(() => {
    getXrp();
  }, 2000);  */
  //module.exports = getXrp;