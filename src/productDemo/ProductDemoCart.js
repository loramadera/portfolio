import React, { useEffect, useState } from "react";

import { ProductDemoNav } from './ProductDemoNav.js';

import './ProductDemo.css';
import '../common/styles/spacing.css';
import '../common/styles/sitetypography.css';
import Http from '../common/Http.js';
import ProductCartService from './ProductCartService.js';

function ProductDemoCart() {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    GetProductsInCart();
  }, [])

  function GetProductsInCart() {
    let productIdsCart = ProductCartService.GetProductIdsInCart()
    Http.Go('POST', 'getProductsByIds', { 'productIds': productIdsCart })
      .then((res) => res.json())
      .then((res) => {
        setProductsInCart(res.products);
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
          <div>{product.name} (${product.price})</div>
          <div className='product-image-div'><img src={product.imageUrl} className='product-image' /></div>
          <div>
            { htmlCart }
          </div>
        </div>
      );
    });
  }

  return (
    <div className='product-demo product-body'>
      <ProductDemoNav />

      <div>
        <ProductsInCart />
      </div>
    </div>
  );

}

export { ProductDemoCart }
