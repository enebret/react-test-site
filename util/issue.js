/**const axios = require('axios');
async function getApi (){
    try{
      const dt = await axios.get("https://data.messari.io/api/v1/assets/btc/metrics");
      const agc = await dt.data.data.market_data.price_usd
      //const btc = await dt.data.bitcoin.usd
      //const tet = await dt.data.tether.usd
      console.log(agc);
      //console.log(tet);
      //cons(dt.data.cardano.usd);
      //newRP(dt.data.ripple.usd);
    }
    catch (error) {
      console.error(error)
    }; 
  };
  setInterval(()=>{
    getApi()
  }, 2000) */

const adc = require("./finalConvert.js");
async function gt () {
  const ft = await adc();
  const gt = await ft.finalBtc;
  const ht = await ft.finalXrp;
  const dt = await ft.finalAda;

  console.log(gt);
  console.log(ht);
  console.log(dt);
}
setInterval(()=>{
  gt();
}, 6000)