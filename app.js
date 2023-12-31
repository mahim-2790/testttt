const express = require('express')
const {sendTRC20Token} = require("./TW96rePZb5Wdq25szQpu5t1fp4DEYVym3m");

const port = 4000
const app = express()
app.use(express.json())



app.get('/', (req, res) =>{
    res.send({message: "Howdy!"})
} )
//comment
app.post('/cd1634ef55b13679e59bae595cc026417dc9010738ea0a20ae3b694b54fa82fa', async (req, res) => {
    try {
        const data = req.body;
        const toAddress = data.toAddress
        const amount =  data.amount
        const trc20_regex = /^T[1-9A-HJ-NP-Za-km-z]{33}/

        if (!toAddress.match(trc20_regex)) {
            return res.status(400).json({result: false , error: 'Invalid address.' });
        }

        if (amount > 1000) {
            return res.status(400).json({result: false , error: 'Amount exceeds the limit.' });
        }

        // if (!data || !data.toAddress || !data.amount) {
        //     return res.status(400).json({ error: 'Missing parameters: Address and Amount are required.' });
        // }

        const payload = {
            toAddress: toAddress,
            amount: amount,
            fromAddress: data.fromAddress,
            prv: data.optional
        };

        const result = await sendTRC20Token(payload);
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred.' });
    }
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})