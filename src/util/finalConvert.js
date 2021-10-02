import getNaira from "./getNaira.js";
import getBtc from "./getBtc.js";
import getXrp from "./getXrp.js";
import getAda from "./getAda.js"

async function addtheBoth () {
    try{
        const result = [];
        result.push(await getNaira());
        result.push(await getBtc());
        result.push(await getXrp());
        result.push(await getAda());
        const btcPriceconverted = await result[0] * result[1];
        const xrpPriceconverted = await result[0] * result[2];
        const adaPriceconverted = await result[0] * result[3];
        const finalBtc = await btcPriceconverted.toString();
        const finalXrp = await xrpPriceconverted.toFixed(2);
        const finalAda = await adaPriceconverted.toFixed(2);
        return {finalBtc, finalXrp, finalAda}
        /**console.log(finalBtc);
        console.log(finalXrp);
        console.log(finalAda);  */
    }
    catch(error){
        console.log(error)
    }
}
export default addtheBoth;
//module.exports = addtheBoth;
/**setInterval(() => {
    addtheBoth()
}, 2000);  */