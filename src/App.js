import React, {useState, useEffect} from 'react';
//import axios from "axios";
import addtheBoth from "./util/finalConvert.js";

function Api(){
  const [btx, newBtx] = useState(null);
  const [th, newTH] = useState(null);
  const [cd, newCD] = useState(null);
  const [rp, newRP] = useState(null);
  useEffect(()=>{
    async function getApi (){
      try{
        const dt = await addtheBoth();
        //comma separator funct for digits greater than 4
        newBtx(dt.finalBtc);
        //newTH(dt.data.tether.usd);
        newCD(dt.finalAda);
        newRP(dt.finalXrp);
      }
      catch (error) {
        console.error(error)
      }; 
    };
    setInterval(()=>{
      getApi()
    }, 7000)
  });
  
  return(
    <div>
      <head><nav></nav></head>
      <body><p>coin prices in real time</p>
      <div>
        <table>
          <tr>
           <td>data</td>
           <td>price</td>
          </tr>
          <tr>
          <td>bitcoin</td>
          <td>NGN{btx}</td>
          </tr>
          <tr>
          <td>cardano</td>
           <td>NGN{cd}</td>
          </tr>
          <tr>
          <td>ripple</td>
           <td>NGN{rp}</td>
          </tr>
        </table>
      </div></body>
      <footer></footer>
      
    </div>
    
  );
};

export default Api;