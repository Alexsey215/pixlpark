const express = require("express");
const cors = require("cors");
const PORT = 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`server starting`)
})

app.get('/orders', (req, res) => {
    res.json({
        message: "hello from server"
    })
})