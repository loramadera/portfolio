import React, { useEffect, useState } from "react";

import { ProductDemoNav } from './ProductDemoNav.js';
import { ProductDemoFooter } from './ProductDemoFooter.js';

import './ProductDemo.css';
import '../common/styles/spacing.css';
import '../common/styles/sitetypography.css';
import Http from '../common/Http.js';
import ProductCartService from './ProductCartService.js';

function ProductDemoCheckout() {
  // const [formVals, setFormVals] = useState({ });
  // const [productsInCart, setProductsInCart] = useState([]);
  // const [totals, setTotals] = useState({ 'price': 0, 'itemCount': 0 });
  // const [checkedOut, setCheckedOut] = useState(0);

  // useEffect(() => {
  //   GetProductsInCart();
  // }, [])

  // function GetProductsInCart() {
  //   let productIdsCart = ProductCartService.GetProductIdsInCart()
  //   Http.Go('POST', 'getProductsByIds', { 'productIds': productIdsCart })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setProductsInCart(res.products);
  //       ComputeTotals(res.products);
  //     });
  // }

  // function ComputeTotals(productsInCart1) {
  //   let totalPrice = 0;
  //   for (let ii = 0; ii < productsInCart1.length; ii++) {
  //     totalPrice += parseFloat(productsInCart1[ii].price);
  //   }
  //   setTotals({ 'price': totalPrice, 'itemCount': productsInCart1.length });
  // }

  // function OnChangeFormVals(evt) {
  //   let value = evt.target.value;
  //   setFormVals((formVals) => {
  //     formVals[evt.target.name] = value;
  //     return formVals;
  //   });
  // }

  // function Checkout() {
  //   console.log('checked out', formVals);
  //   ProductCartService.ClearCart();
  //   setTotals({ 'price': 0, 'itemCount': 0 });
  //   setCheckedOut(1);
  // }

  // function HtmlCheckout() {
  //   if (checkedOut) {
  //     return (
  //       <div>Checked Out!</div>
  //     );
  //   }
  //   return (
  //     <div>
  //       <div>
  //         <input type='text' name='street' placeholder='Street' onBlur={ OnChangeFormVals } />
  //       </div>
  //       <div>
  //         <input name='city' placeholder='City' onBlur={ OnChangeFormVals } />
  //       </div>
  //       <div>
  //         <input name='state' placeholder='State' onBlur={ OnChangeFormVals } />
  //       </div>
  //       <div>
  //         <input name='zipCode' placeholder='Zip Code' onBlur={ OnChangeFormVals } />
  //       </div>
  //       <div>
  //         <input name='country' placeholder='Country' onBlur={ OnChangeFormVals } />
  //       </div>
  //       <div>
  //         <input name='name' placeholder='Name' onBlur={ OnChangeFormVals } />
  //       </div>
  //       <div>
  //         <input name='cardNumber' placeholder='Card Number' onBlur={ OnChangeFormVals } />
  //       </div>
  //       <div>
  //         <input name='expirationDate' placeholder='Expiration Date' onBlur={ OnChangeFormVals } />
  //       </div>
  //       <div>
  //         <input name='cvv' placeholder='CVV' onBlur={ OnChangeFormVals } />
  //       </div>
  //       <div>
  //         <input name='zipCodeBilling' placeholder='Zip Code' onBlur={ OnChangeFormVals } />
  //       </div>
  //       <div>
  //         <button onClick={Checkout}>Checkout</button>
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className='product-demo product-body'>
  //     <ProductDemoNav />

  //     <div>Checkout</div>
  //     <div>Total: ${totals.price}, {totals.itemCount} products</div>
  //     <HtmlCheckout />
  //   </div>
  // );
  return (
    <div>Checkout</div>
  );

}

export { ProductDemoCheckout }
