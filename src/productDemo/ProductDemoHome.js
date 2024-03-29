import React, { useEffect, useState } from "react";

import { ProductDemoNav } from './ProductDemoNav.js';
import { ProductDemoFooter } from './ProductDemoFooter.js';

import './ProductDemo.css';
import '../common/styles/flexbox.css';
import '../common/styles/spacing.css';
import '../common/styles/sitetypography.css';
import Http from '../common/Http.js';
import ProductCartService from './ProductCartService.js';

import imgOne from './Images/t7.jpg';
import imgTwo from './Images/t8.jpg';
import imgThree from './Images/t9.jpg';

function ProductDemoHome() {
  const [products, setProducts] = useState([]);
  const [productIdsInCart, setProductIdsInCart] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [formValsSearch, setFormValsSearch] = useState({ 'searchText': '' });
  const [formVals, setFormVals] = useState({ 'name': '', 'imageUrl': '', 'price': 0 });

  useEffect(() => {
    SearchProducts();
  }, [])

  function OnChangeFormVals(evt) {
    let value = evt.target.value;
    setFormVals((formVals) => {
      formVals[evt.target.name] = value;
      return formVals;
    });
  }

  function OnChangeFormValsSearch(evt) {
    let value = evt.target.value;
    setFormValsSearch((formValsSearch) => {
      formValsSearch[evt.target.name] = value;
      return formValsSearch;
    });
    SearchProducts();
  }

  function SearchProducts() {
    Http.Go('POST', 'searchProducts', formValsSearch)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  }

  function DeleteProduct(productId) {
    Http.Go('POST', 'deleteProduct', { 'productId': productId })
      .then((res) => res.json())
      .then((res) => {
        SearchProducts();
      });
  }

  function SaveProduct() {
    Http.Go('POST', 'saveProduct', { 'product': formVals })
      .then((res) => res.json())
      .then((res) => {
        SearchProducts();
      });
  }

  function AddToCart(productId) {
    ProductCartService.AddProductIdToCart(productId);
    setProductIdsInCart(ProductCartService.GetProductIdsInCart());
    // // Do not add if already in cart.
    // let found = 0;
    // for (let ii = 0; ii < productIdsInCart.length; ii++) {
    //   if (productId === productIdsInCart[ii]) {
    //     found = 1;
    //     break;
    //   }
    // }
    // if (!found) {
    //   productIdsInCart.push(productId);
    //   setProductIdsInCart(productIdsInCart);
    // }
    // GetProductsInCart();
  }

  function RemoveFromCart(productId) {
    ProductCartService.RemoveProductIdFromCart(productId);
    setProductIdsInCart(ProductCartService.GetProductIdsInCart());
    // for (let ii = 0; ii < productIdsInCart.length; ii++) {
    //   if (productId === productIdsInCart[ii]) {
    //     productIdsInCart.splice(ii, 1);
    //     setProductIdsInCart(productIdsInCart);
    //     GetProductsInCart();
    //     break;
    //   }
    // }
  }

  function Products() {
    return products.map((product, index) => {
      const productInCart = ProductCartService.IsProductIdInCart(product._id);
      const htmlCart = productInCart ? <button onClick={(e) => RemoveFromCart(product._id)}>Remove from Cart</button> :
        <button onClick={(e) => AddToCart(product._id)}>Add to Cart</button>;
      return (
        <div key={index} className='product'>
          <div>{product.name} (${product.price})</div>
          <div className='product-image-div'><img src={product.imageUrl} className='product-image' /></div>
          <div className='flexbox'>
            <div>
              { htmlCart }
            </div>
            <div className='flex1'>&nbsp;</div>
            <div>
              <button onClick={(e) => DeleteProduct(product._id)}>Delete</button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className='product-demo product-body'>
      <link rel="stylesheet" href="https://use.typekit.net/guv2awx.css"></link>
      <ProductDemoNav />
      <div>
        <h1 className='product-logo top-medium center-align blue'>Azure Terrariums</h1>
        <p className='product-secondary margins-extra blue'>Azure Terrarriums are a touch of custom fantasy for your home. Got a terrarium inspiration you’d love to bring to life? You’re in the right place! Browse our pre-selected terrariums or enter your inspiration for one. All terrariums are hand-crafted in unique or custom styles featuring a variety of biomes, cryptids, and containers. Just input your inspiration in the Creation page and the price you’d be willing to pay for it. Then check out - your order is submitted!</p>
      </div>
      <div className='flexbox margins-extra center-align top-medium'>  
          <img className='img-azure flex1' src= {imgOne} width='100%'></img>
          <img className='img-azure flex1' src= {imgTwo} width='100%'></img>
          <img className='img-azure flex1' src= {imgThree} width='100%'></img>
      </div>
      
      <div className='mobile'>
        <ProductDemoFooter />
      </div>
    </div>
  );

}

export { ProductDemoHome }
