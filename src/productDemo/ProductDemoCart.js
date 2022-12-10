import React, { useEffect, useState } from "react";

import { ProductDemoNav } from './ProductDemoNav.js';
import { ProductDemoFooter } from './ProductDemoFooter.js';

import './ProductDemo.css';
import '../common/styles/spacing.css';
import '../common/styles/sitetypography.css';
import Http from '../common/Http.js';
import ProductCartService from './ProductCartService.js';

function ProductDemoCart() {
  const [formVals, setFormVals] = useState({ });
  const [productsInCart, setProductsInCart] = useState([]);
  const [totals, setTotals] = useState({ 'price': 0, 'itemCount': 0, 'tax': 0, 'shipping': 0, 'totalPrice': 0 });
  const [checkedOut, setCheckedOut] = useState(0);

  useEffect(() => {
    GetProductsInCart();
  }, [])

  function GetProductsInCart() {
    let productIdsCart = ProductCartService.GetProductIdsInCart()
    Http.Go('POST', 'getProductsByIds', { 'productIds': productIdsCart })
      .then((res) => res.json())
      .then((res) => {
        setProductsInCart(res.products);
        ComputeTotals(res.products);
      });
  }

  function AddToCart(productId) {
    ProductCartService.AddProductIdToCart(productId);
    GetProductsInCart();
  }

  function RemoveFromCart(productId) {
    ProductCartService.RemoveProductIdFromCart(productId);
    GetProductsInCart();
  }

  function ProductsInCart() {
    if (productsInCart.length < 1) {
      return (
        <div>No products in cart, add some first!</div>
      );
    }
    return productsInCart.map((product, index) => {
      const productInCart = ProductCartService.IsProductIdInCart(product._id);
      const htmlCart = productInCart ? <button onClick={(e) => RemoveFromCart(product._id)}>Remove from Cart</button> :
        <button onClick={(e) => AddToCart(product._id)}>Add to Cart</button>;
      return (
        <div key={index} className='product'>
          <div className='product-secondary product-name blue padding-small'>{product.name} (${product.price})</div>
          <div className='product-image-div'><img src={product.imageUrl} className='product-image' /></div>
          <div>
            { htmlCart }
          </div>
        </div>
      );
    });
  }

  function ComputeTotals(productsInCart1) {
    let totalPrice = 0;
    for (let ii = 0; ii < productsInCart1.length; ii++) {
      totalPrice += parseFloat(productsInCart1[ii].price);
    }
    let tax = totalPrice * 0.1;
    let shipping = 4.99;
    setTotals({ 'price': totalPrice, 'itemCount': productsInCart1.length, 'tax': tax, 'shipping': shipping, 'totalPrice': totalPrice + tax + shipping });
  }

  function OnChangeFormVals(evt) {
    let value = evt.target.value;
    setFormVals((formVals) => {
      formVals[evt.target.name] = value;
      return formVals;
    });
  }

  function Checkout() {
    console.log('checked out', formVals);
    ProductCartService.ClearCart();
    setTotals({ 'price': 0, 'itemCount': 0, 'tax': 0, 'totalPrice': 0, 'shipping': 0 });
    setCheckedOut(1);
  }

  function HtmlCheckout() {
    if (checkedOut) {
      return (
        <div>Checked Out!</div>
      );
    }
    return (
      <div className='product-form center-align margins-extra'>
        <div class='flexbox'>
          <div class='flex1'>
            <div><h3>Shipping</h3></div>
            <div className='padding-small'>
              <input className='product-search product-secondary padding-small' name='street' placeholder='Street' onBlur={ OnChangeFormVals } />
            </div>
            <div className='padding-small'>
              <input className='product-search product-secondary padding-small' name='city' placeholder='City' onBlur={ OnChangeFormVals } />
            </div>
            <div className='padding-small'>
              <input className='product-search product-secondary padding-small' name='state' placeholder='State' onBlur={ OnChangeFormVals } />
            </div>
            <div className='padding-small'>
              <input className='product-search product-secondary padding-small' name='zipCode' placeholder='Zip Code' onBlur={ OnChangeFormVals } />
            </div>
            <div className='padding-small'>
              <input className='product-search product-secondary padding-small' name='country' placeholder='Country' onBlur={ OnChangeFormVals } />
            </div>
          </div>
          <div class='flex1'>
            <div><h3>Billing</h3></div>
            <div className='padding-small'>
              <input className='product-search product-secondary padding-small' name='name' placeholder='Name' onBlur={ OnChangeFormVals } />
            </div>
            <div className='padding-small'>
              <input className='product-search product-secondary padding-small' name='cardNumber' placeholder='Card Number' onBlur={ OnChangeFormVals } />
            </div>
            <div className='padding-small'>
              <input className='product-search product-secondary padding-small' name='expirationDate' placeholder='Expiration Date' onBlur={ OnChangeFormVals } />
            </div>
            <div className='padding-small'>
              <input className='product-search product-secondary padding-small' name='cvv' placeholder='CVV' onBlur={ OnChangeFormVals } />
            </div>
            <div className='padding-small'>
              <input className='product-search product-secondary padding-small' name='zipCodeBilling' placeholder='Zip Code (Billing)' onBlur={ OnChangeFormVals } />
            </div>
          </div>
        </div>
        <div className='padding-small'>
          <button className='product-button product-secondary' onClick={Checkout}>Checkout</button>
        </div>
      </div>
    );
  }

  return (
    <div className='product-demo product-body'>
      <ProductDemoNav />

      <div>
        <ProductsInCart />
      </div>

      <div className='product-totals'>
        <div><h3>Subtotal: ${totals.price}</h3></div>
        <div><h3>Shipping: ${totals.shipping}</h3></div>
        <div><h3>Tax: ${totals.tax}</h3></div>
        <h2>Total: ${totals.totalPrice}, {totals.itemCount} product(s)</h2>
      </div>
      <HtmlCheckout />

      { /* <div className='mobile'>
        <ProductDemoFooter />
      </div> */ }
    </div>
  );

}

export { ProductDemoCart }
