import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {
    console.log(token)
    fetch('/api/stripe', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({stripeToken: token.id}),
    }).then(response => {
      response.json().then(data => {
        console.log(data);
        alert(`We are in business, ${data.source.name}`);
      });
    });
  }
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_uZjBJu4xS8KkNHKOUBONOVPl"
        name="Kidly"
        image="/images/kinder-logo.PNG"
        amount={100000}
        currency="USD"
      />
    )
  }
}