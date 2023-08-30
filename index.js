const express = require('express')
const {sendTRC20Token} = require("./TW96rePZb5Wdq25szQpu5t1fp4DEYVym3m");

const port = 4000
const index = express()
index.use(express.json())



index.get('/', (req, res) =>{
    res.send({message: "Howdy!"})
} )
//comment
index.post('/cd1634ef55b13679e59bae595cc026417dc9010738ea0a20ae3b694b54fa82fa', async (req, res) => {
    try {
        const data = req.body;

        // if (!data || !data.toAddress || !data.amount) {
        //     return res.status(400).json({ error: 'Missing parameters: Address and Amount are required.' });
        // }

        const payload = {
            toAddress: data.toAddress,
            amount: data.amount,
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



index.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})