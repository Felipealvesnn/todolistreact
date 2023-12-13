import React from 'react';

const CheckoutForm = () => {
  return (
    <>
      <style>
        {`
          #form-checkout {
            display: flex;
            flex-direction: column;
            max-width: 600px;
          }

          .container {
            height: 18px;
            display: inline-block;
            border: 1px solid rgb(118, 118, 118);
            border-radius: 2px;
            padding: 1px 2px;
          }
        `}
      </style>
      <form id="form-checkout">
        <div id="form-checkout__cardNumber" className="container"></div>
        <div id="form-checkout__expirationDate" className="container"></div>
        <div id="form-checkout__securityCode" className="container"></div>
        <input type="text" id="form-checkout__cardholderName" />
        <select id="form-checkout__issuer"></select>
        <select id="form-checkout__installments"></select>
        <select id="form-checkout__identificationType"></select>
        <input type="text" id="form-checkout__identificationNumber" />
        <input type="email" id="form-checkout__cardholderEmail" />

        <button type="submit" id="form-checkout__submit">Pagar</button>
        <progress value="0" className="progress-bar">Carregando...</progress>
      </form>
    </>
  );
}

export default CheckoutForm;
