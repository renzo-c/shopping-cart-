import express from 'express';
// import 'dotenv/config';
// require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("This is a test of end point");
});

app.listen(PORT, () => {
    console.log("Environment variables set: ", process.env.SECRET_TEST);
    console.log(`Express server listening on port ${PORT}`)
})
