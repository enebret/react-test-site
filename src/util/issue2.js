import React, {useState, useEffect} from 'react';
import axios from "axios";

function Api(){
  const [btx, newBtx] = useState(null);
  const [th, newTH] = useState(null);
  const [cd, newCD] = useState(null);
  const [rp, newRP] = useState(null);
  useEffect(()=>{
    async function getApi (){
      try{
        const dt = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Ccardano%2Cripple&vs_currencies=USD");
        newBtx(dt.data.bitcoin.usd);
        newTH(dt.data.tether.usd);
        newCD(dt.data.cardano.usd);
        newRP(dt.data.ripple.usd);
      }
      catch (error) {
        console.error(error)
      }; 
    };
    setInterval(()=>{
      getApi()
    }, 2000)
  });
  
  return(
    <div>
      <p>coin prices in real time</p>
      <div>
        <table>
          <tr>
           <td>data</td>
           <td>price</td>
          </tr>
          <tr>
          <td>bitcoin</td>
          <td>NGN {btx}</td>
          </tr>
          <tr>
          <td>tether</td>
           <td>{th}</td>
          </tr>
          <tr>
          <td>cardano</td>
           <td>{cd}</td>
          </tr>
          <tr>
          <td>ripple</td>
           <td>{rp}</td>
          </tr>
        </table>
      </div>
    </div>
    
  );
};

export default Api;;
async function test () {
    await getNaira();

}
test()
