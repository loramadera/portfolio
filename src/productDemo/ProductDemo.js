import React, { useEffect, useState } from "react";

import { Navigation } from '../Navigation.js';
import { Footer } from '../Footer.js';
import './ProductDemo.css';
import '../common/styles/spacing.css';
import '../common/styles/sitetypography.css';
import Http from '../common/Http.js';

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

  function GetProductsInCart() {
    Http.Go('POST', 'getProductsByIds', { 'productIds': productIdsInCart })
      .then((res) => res.json())
      .then((res) => {
        setProductsInCart(res.products);
      });
  }

  function AddToCart(productId) {
    // Do not add if already in cart.
    let found = 0;
    for (let ii = 0; ii < productIdsInCart.length; ii++) {
      if (productId === productIdsInCart[ii]) {
        found = 1;
        break;
      }
    }
    if (!found) {
      productIdsInCart.push(productId);
      setProductIdsInCart(productIdsInCart);
    }
    GetProductsInCart();
  }

  function RemoveFromCart(productId) {
    for (let ii = 0; ii < productIdsInCart.length; ii++) {
      if (productId === productIdsInCart[ii]) {
        productIdsInCart.splice(ii, 1);
        setProductIdsInCart(productIdsInCart);
        GetProductsInCart();
        break;
      }
    }
  }

  function Products() {
    return products.map((product, index) => {
      return (
        <div key={index} className='product'>
          <div>{product.name} (${product.price})</div>
          <div><img src={product.imageUrl} className='product-image' /></div>
          <div>
            <button onClick={(e) => DeleteProduct(product._id)}>Delete</button>
          </div>
          <div>
            <button onClick={(e) => AddToCart(product._id)}>Add to Cart</button>
          </div>
        </div>
      );
    });
  }

  function ProductsInCart() {
    return productsInCart.map((product, index) => {
      return (
        <div key={index} className='product'>
          <div>{product.name} (${product.price})</div>
          <div><img src={product.imageUrl} className='product-image' /></div>
          <div>
            <button onClick={(e) => RemoveFromCart(product._id)}>Remove from Cart</button>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <div>
        <input type='text' name='searchText' placeholder='Search for products' onKeyUp={ OnChangeFormValsSearch } />
      </div>
      <Products />
      <div>
        <div>
          <input name='name' placeholder='Name' onBlur={ OnChangeFormVals } />
        </div>
        <div>
          <input name='imageUrl' placeholder='Image URL' onBlur={ OnChangeFormVals } />
        </div>
        <div>
          <input name='price' placeholder='Price' onBlur={ OnChangeFormVals } />
        </div>
        <div>
          <button onClick={SaveProduct}>Save Product</button>
        </div>
      </div>
      <ProductsInCart />
    </div>
  );

}

export { ProductDemo }
