function AddProductIdToCart(productId) {
	let productIdsCart = GetProductIdsInCart();
	// Do not add if already in cart.
	if (!IsProductIdInCart(productId)) {
    productIdsCart.push(productId);
    SetProductIdsInCart(productIdsCart);
  }
}

function RemoveProductIdFromCart(productId) {
	let productIdsCart = GetProductIdsInCart();
	for (let ii = 0; ii < productIdsCart.length; ii++) {
	  if (productId === productIdsCart[ii]) {
	    productIdsCart.splice(ii, 1);
	    SetProductIdsInCart(productIdsCart);
	    break;
	  }
	}
}

function GetProductIdsInCart() {
	let productIdsCart = localStorage.getItem('productIdsCart');
	productIdsCart = JSON.parse(productIdsCart);
	if (!Array.isArray(productIdsCart)) {
		productIdsCart = [];
	}
	return productIdsCart;
}

function SetProductIdsInCart(productIdsCart) {
	localStorage.setItem('productIdsCart', JSON.stringify(productIdsCart));
}

function IsProductIdInCart(productId, productIdsCart = null) {
	if (!productIdsCart) {
		productIdsCart = GetProductIdsInCart();
	}
	let found = 0;
  for (let ii = 0; ii < productIdsCart.length; ii++) {
    if (productId === productIdsCart[ii]) {
      found = 1;
      break;
    }
  }
  return found;
}

function ClearCart() {
	SetProductIdsInCart([]);
}

const ProductCartService = {
	AddProductIdToCart,
	RemoveProductIdFromCart,
	GetProductIdsInCart,
	// SetProductIdsInCart,
	IsProductIdInCart,
	ClearCart,
};
export default ProductCartService;
