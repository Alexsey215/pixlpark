const express = require("express");
const cors = require("cors");
const sha1 = require('js-sha1');
const { default: axios } = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.listen(PORT, () => {
    console.log(`server starting`)
})

async function getOrdersData() {
    try {
        const responseRequestToken = await axios.get('http://api.pixlpark.com/oauth/requesttoken');
        const requestToken = responseRequestToken.data.RequestToken;

        const responseAccessToken = await axios.get('http://api.pixlpark.com/oauth/accesstoken', {
            params: {
                oauth_token: requestToken,
                grant_type: 'api',
                username: '38cd79b5f2b2486d86f562e3c43034f8',
                password: sha1(requestToken + '8e49ff607b1f46e1a5e8f6ad5d312a80')
            }
        })
        const accessToken = responseAccessToken.data.AccessToken;

        const responseOrdersData = await axios.get('http://api.pixlpark.com/orders', {
            params: {
                oauth_token: accessToken,
                take: 10,
            }
        })
        return responseOrdersData.data.Result;
    } catch (e) {
        console.log(e);
    }
}

let ordersData = [];
getOrdersData().then((data) => ordersData = data)

app.get('/orders', (req, res) => {
    res.json({
        body: ordersData
    })
})