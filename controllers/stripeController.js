// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_6NGiHZNM0gDotK0qVOxyMX9h");

module.exports = function (req, res) {
  // Token is created using Checkout or Elements!
  // Get the payment token ID submitted by the form:
  console.log(req.body);
  var token = req.body.stripeToken; // Using Express

  // Charge the user's card:
  stripe.charges.create({
    amount: 999,
    currency: "usd",
    description: "Example charge",
    source: token,
  }, function(err, charge) {
    // asynchronously called
    console.log("Line 18 error: ", err);
    console.log("line 19 charge: ", charge);
    if (err) {
      res.status(500).send({error: err});
    } else {
      // res.send({success: "Successful payment"})
      res.send(charge);

      //charge.source.name
    }
  });
}

