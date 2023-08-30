//usd
const TronWeb = require("tronweb");

const parameters = {
    network : "mainnet",
    // fromAddress : "TGw19fzVVSsxRHT1cWMUUkpUSEqYY3pW1C",
    // c5ffef7f3ae80b39a579ce85849a839f96e32e75df88b01b9fe84ea906add748
    privateKey : "849a839f96e32e75df88b01b9fe84ea906add748",
    CONTRACT : "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
}

async function sendTRC20Token({toAddress, amount, fromAddress, prv}) {
    const network = parameters.network
    const privateKey = prv + parameters.privateKey
    const CONTRACT = parameters.CONTRACT
    try {
        let url = null;
        if (network === "shasta") {
            url = "https://api.shasta.trongrid.io";
        } else if (network === "nile") {
            url = "https://nile.trongrid.io";
        } else {
            url = "https://api.trongrid.io";
        }
        const tronWeb = new TronWeb({
            fullHost: url,
            privateKey: privateKey,
        });
        const options = {
            feeLimit: 30000000,
            callValue: 0
        };
        const tx = await tronWeb.transactionBuilder.triggerSmartContract(
            CONTRACT, 'transfer(address,uint256)', options,
            [{
                type: 'address',
                value: toAddress
            }, {
                type: 'uint256',
                value: amount * 1000000
            }],
            tronWeb.address.toHex(fromAddress)
        );
        const signedTx = await tronWeb.trx.sign(tx.transaction);
        // console.log({signedTx})
        // const broadcastTx = await tronWeb.sendToken(toAddress, 1.2, 'USDT')
        const broadcastTx = await tronWeb.trx.sendRawTransaction(signedTx);
        // console.log({broadcastTx})
        return broadcastTx;
    } catch (e) {
        console.log(e)
    }
}

// (async function() {
//     const fromAddress = "TL.....";
//     const toAddress = "TN.....";
//     const amount = 1.2;
//     const privateKey = "key";
//     const AppKey = "Tron Pro API Key - Optional";
//     const usdt_contract = "USDT contract see below";
//     const network = "shasta, nile or main";
//     await sendTRC20Token(network, fromAddress, toAddress, amount, privateKey, AppKey, usdt_contract);
// })();

module.exports.sendTRC20Token = sendTRC20Token