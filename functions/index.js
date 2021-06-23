const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")('sk_test_51J4tchSBB9GRubY7ZnnCRV0cDvmG2uIetWC00CFAeh6EVWEqAGwrPAulgGCkkXvgMWALM4L1HcK5MPvNGUpnh8D700ksFrITBX');


//API

// App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());


//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BBOOMM!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //sub unitof currency
        currency: "usd"
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


//Listen command
exports.api = functions.https.onRequest(app)

//example end point
// http://localhost:5001/e-clone-dac2a/us-central1/api 