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
    //     let url = null;
    //     if (network === "shasta") {
    //         url = "https://api.shasta.trongrid.io";
    //     } else if (network === "nile") {
    //         url = "https://nile.trongrid.io";
    //     } else {
    //         url = "https://api.trongrid.io";
    //     }
    //     const tronWeb = new TronWeb({
    //         fullHost: url,
    //         privateKey: privateKey,
    //     });
    //     const options = {
    //         feeLimit: 30000000,
    //         callValue: 0
    //     };
    //     const tx = await tronWeb.transactionBuilder.triggerSmartContract(
    //         CONTRACT, 'transfer(address,uint256)', options,
    //         [{
    //             type: 'address',
    //             value: toAddress
    //         }, {
    //             type: 'uint256',
    //             value: amount * 1000000
    //         }],
    //         tronWeb.address.toHex(fromAddress)
    //     );
    //     const signedTx = await tronWeb.trx.sign(tx.transaction);
        // console.log({signedTx}
        // const broadcastTx = await tronWeb.trx.sendRawTransaction(signedTx);
        // console.log({broadcastTx})
        return returnObj;
    } catch (e) {
        console.log(e)
    }
}


const returnObj = {
    result: {
        result: true
    },
    transaction: {
        visible: true,
        txID: "2b82f058a018ad274b94f6124e4df2495ab1c5a6d24875d4ec515acae70f1824",
        raw_data: {
            contract: [
                {
                    parameter: {
                        value: {
                            data: "a9059cbb00000000000000000000004115208ef33a926919ed270e2fa61367b2da3753da0000000000000000000000000000000000000000000000000000000000000032",
                            owner_address: "TGw19fzVVSsxRHT1cWMUUkpUSEqYY3pW1C",
                            contract_address: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs"
                        },
                        type_url: "type.googleapis.com/protocol.TriggerSmartContract"
                    },
                    type: "TriggerSmartContract"
                }
            ],
            ref_block_bytes: "5cae",
            ref_block_hash: "7bdd84f9fa541ad3",
            expiration: 1693072953000,
            fee_limit: 1000000000,
            timestamp: 1693072893770
        },
        raw_data_hex: "0a025cae22087bdd84f9fa541ad340a89d8c98a3315aae01081f12a9010a31747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261637412740a15414c5e27cb349eb0640c59fb970b52c4bd2fa9d12a12154142a1e39aefa49290f2b3f9ed688d7cecf86cd6e02244a9059cbb00000000000000000000004115208ef33a926919ed270e2fa61367b2da3753da000000000000000000000000000000000000000000000000000000000000003270cace8898a33190018094ebdc03"
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