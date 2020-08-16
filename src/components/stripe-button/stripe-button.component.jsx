import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
    console.log(token);
    alert("Payment is successful");
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HGiQUDOHP25NEl0jeZbjOu2XwVCxvujKtksm3Owyx87BOUUYwosJ9xtf0IY4t1ZppmMXGfmwwrUMFtxmNvz0hgD00FQBarAmZ';

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            Image='https://svgshare.com/i.CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export  default StripeCheckoutButton;