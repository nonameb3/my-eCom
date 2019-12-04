require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// ==== router ====
router.post("/payment", async (req, res) => {
  try {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "USD"
    };

    const response = await stripe.charges.create(body);
    return res.status(200).send({ success: response });
  } catch (ex) {
    console.log(ex);
    return res.status(500).send({ message: ex.message });
  }
});

module.exports = router;
