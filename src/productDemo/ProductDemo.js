import React, { useEffect, useState } from "react";

import { ProductDemoNav } from './ProductDemoNav.js';
import { ProductDemoFooter } from './ProductDemoFooter.js';

import './ProductDemo.css';
import '../common/styles/flexbox.css';
import '../common/styles/spacing.css';
import '../common/styles/sitetypography.css';
import Http from '../common/Http.js';
import ProductCartService from './ProductCartService.js';

function ProductDemo() {
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
          <div className='product-secondary product-name blue padding-small'>{product.name} (${product.price})</div>
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
      <ProductDemoNav />
      
      <div>
        <h1 className='product-logo top-medium center-align blue'>Azure Terrariums</h1>
      </div>

      <div className='product-creation margins-extra'>
        <h2 className='product-primary center-align blue top-medium'>Product & Creation Instructions</h2>
        <p className='product-secondary margins-extra blue bottom-medium'>In the "Products" section, view the pre-added products. In the "Create Your Own" section below it, add one of your own! Be sure to include a terrarium example that inspires you. State your price when you add your item, then add to your cart to send your order to us.</p>
      </div>

       <div className='margins-large'>
        <h2 className='product-primary-2 center-align blue top-medium'>Products</h2>
      </div>

      <div className='center-align'>
        <input type='text' className='product-search product-secondary' name='searchText' placeholder='Search for products' onKeyUp={ OnChangeFormValsSearch } />
      </div>
      
      <div className='products'>
        <Products />
      </div>
      
       <div className='margins-extra'>
        <h2 className='product-primary-2 center-align blue top-medium'>Create Your Own</h2>
      </div>

      <div className='product-form center-align margins-extra'>
        <div className='padding-small'>
          <input name='name' className='product-search product-secondary padding-small' placeholder='Name' onBlur={ OnChangeFormVals } />
        </div>
        <div className='padding-small'>
          <input name='imageUrl' className='product-search product-secondary padding-small' placeholder='Image URL' onBlur={ OnChangeFormVals } />
        </div>
        <div className='padding-small'>
          <input name='price' className='product-search product-secondary padding-small' placeholder='Price' onBlur={ OnChangeFormVals } />
        </div>
        <div className='padding-small'>
          <button className='product-button product-secondary' onClick={SaveProduct}>Save Product</button>
        </div>
      </div>

      <div className='mobile'>
        <ProductDemoFooter />
      </div>  
    </div>
  );

}

export { ProductDemo }
