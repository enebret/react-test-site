const naira = require("./getNaira.js");
const btc = require("./getBtc.js");
const xtc = require("./getXrp.js");
const atc = require("./getAda.js");
async function addtheBoth () {
    try{
        const result = [];
        result.push(await naira());
        result.push(await btc());
        result.push(await xtc());
        result.push(await atc());
        const btcPriceconverted = await result[0] * result[1];
        const xrpPriceconverted = await result[0] * result[2];
        const adaPriceconverted = await result[0] * result[3];
        const finalBtc = await btcPriceconverted.toString();
        const finalXrp = await xrpPriceconverted.toFixed(2);
        const finalAda = await adaPriceconverted.toFixed(2);
        return {finalBtc, finalXrp, finalAda}
        /**console.log(finalBtc);
        console.log(finalXrp);
        console.log(finalAda); */
    }
    catch(error){
        console.log(errror)
    }
}
module.exports = addtheBoth;
/**setInterval(() => {
    addtheBoth()
}, 2000); */