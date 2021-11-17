import React, {useState, useEffect} from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
//import Nav from 'react-bootstrap/Nav';
import './App.css';
function Api(){
  const [btx, newBtx] = useState(null);
  const [th, newTH] = useState(null);
  const [cd, newCD] = useState(null);
  const [rp, newRP] = useState(null);

  const [bc, newBC] = useState(null);
  const [tc, newTC] = useState(null);
  const [cc, newCC] = useState(null);
  const [rc, newRC] = useState(null);
  useEffect(()=>{
    async function getApi (){
      try{
        const dt = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Ccardano%2Cripple&vs_currencies=NGN");
        newBtx(dt.data.bitcoin.ngn);
        newTH(dt.data.tether.ngn);
        newCD(dt.data.cardano.ngn);
        newRP(dt.data.ripple.ngn);

        const bt = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,tether,cardano,ripple&vs_currencies=ngn&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=true');
        const agc = await bt.data.bitcoin.ngn_24h_change;
        const tgc = await bt.data.tether.ngn_24h_change;
        const cgc = await bt.data.cardano.ngn_24h_change;
        const rgc = await bt.data.ripple.ngn_24h_change;

        const vgc = await parseFloat(agc);
        //const abc = await vgc * 100;
        const dbc = vgc.toPrecision(2);

        const tvc = await parseFloat(tgc);
        //const tbc = await tvc * 100;
        const tbk = tvc.toPrecision(2);
        const tby = Number(tbk)

        const cvc = await parseFloat(cgc);
        //const cbc = await cvc * 100;
        const cbk = cvc.toPrecision(2);

        const rvc = await parseFloat(rgc);
        //const rbc = await rvc * 100;
        const rbk = rvc.toPrecision(2);
        newBC(dbc);
        newTC(tby);
        newCC(cbk);
        newRC(rbk);
        //const tt = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=ngn&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=true');
        
        
        

        //const ct = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=ngn&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=true');
        
        
        
        
        //const rt = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=ngn&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=true');
        
       
        
        
        
        /**if () */
      }
      catch (error) {
        console.error(error)
      }; 
    };
    setInterval(()=>{
      getApi()
    }, 100)
  });
  
  return(
    <div>
      <head></head>
      <body>
        <header></header>
          <nav></nav>
       <container fluid="sm">
       <p class="name">coin prices in real time</p>
          
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
          <tr>
           <th>#</th>
           <th></th>
           <th>coin</th>
           <th>price</th>
           <th>24hr price change</th>
          </tr>
          </thead>
         <tbody>
         <tr>
           <td>1</td>
           <td><img src = {"https://api.coinicons.net/icon/" + "BTC" + "/32x32"} alt = {"bitcoin icon"} /></td>
          <td>bitcoin</td>
          <td>NGN {btx}</td>
          <td>{bc>0?<td style={{color: "green"}}>{bc}%</td>:<td style={{color: "red"}}>{bc}%</td>}</td>
          </tr>
          <tr>
          <td>2</td>
          <td><img src = {"https://api.coinicons.net/icon/" + "USDT" + "/32x32"} alt = {"tether icon"} /></td>
          <td>tether</td>
           <td>NGN {th}</td>
           <td>{tc>0?<td style={{color: "green"}}>{tc}%</td>:<td style={{color: "red"}}>{tc}%</td>}</td>
          </tr>
          <tr>
          <td>3</td>
          <td><img src = {"https://api.coinicons.net/icon/" + "ADA" + "/32x32"} alt = {"cardano icon"} /></td>
          <td>cardano</td>
           <td>NGN {cd}</td>
           <td>{cc>0?<td style={{color: "green"}}>{cc}%</td>:<td style={{color: "red"}}>{cc}%</td>}</td>
          </tr>
          <tr>
          <td>4</td>
          <td><img src = {"https://api.coinicons.net/icon/" + "XRP" + "/32x32"} alt = {"ripple icon"} /></td>
          <td>ripple</td>
           <td>NGN {rp}</td>
           <td>{rc>0?<td style={{color: "green"}}>{rc}%</td>:<td style={{color: "red"}}>{rc}%</td>}</td>
          </tr>
         </tbody>
        </Table>
      </div>
       </container>
      </body>
      <footer></footer>
      
    </div>
    
  );
};

export default Api;