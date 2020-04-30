if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  const removeCartItemBtns = document.querySelectorAll('.removeCartItem-btn');

  for (let i = 0; i < removeCartItemBtns.length; i++) {
    let button = removeCartItemBtns[i];
    button.addEventListener('click', removeCartItem);
  }

  const quantityInputs = document.querySelectorAll('.cartItem-quantity');
  for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];

    input.addEventListener('change', quantityChanged);
  }

  const addToCartBtns = document.querySelectorAll('.addToCart-btn');
  for (let i = 0; i < addToCartBtns.length; i++) {
    const btn = addToCartBtns[i];
    btn.addEventListener('click', addToCartClicked);
  }
}

function removeCartItem(e) {
  const btnClicked = e.target;
  btnClicked.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(e) {
  // const input = e.target
  updateCartTotal();
}

function addToCartClicked(e) {
  const btn = e.target;
  const cartItem = btn.parentElement.parentElement.parentElement;
  const name = cartItem.querySelector('.product-name').innerText;
  const price = cartItem.querySelector('.product-price').innerText;
  const imgSrc = cartItem.querySelector('.cart-image').src;
  addItemToCart(name, price, imgSrc);   
}

function addItemToCart(name, price, imgSrc) {
  const cartRow = document.createElement('div');
  cartRow.innerText = name;
  const cartContent = document.querySelector('.cart-items-section');
  cartContent.append(cartRow);
}






function updateCartTotal() {
  const cartItemContainer = document.querySelector('.cart-items');
  const cartItems = cartItemContainer.querySelectorAll('.cart-product');
  let total = 0;
  let subtotal = 0;
  let unitPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const priceElement = cartItem.querySelector('.cartItem-price');
    const quantityElement = cartItem.querySelector('.cartItem-quantity');
    const price = parseFloat(priceElement.innerText.replace('$', ''));
    const quantity = quantityElement.options[quantityElement.selectedIndex].value;
    const shipping = parseFloat(document.querySelector('.shipping').innerText.replace('$', ''));
    //   const unitPrice = cartit

    subtotal += price * quantity;
    total += price * quantity + shipping;
  }

  total = Math.round(total * 100) / 100;
  subtotal = Math.round(subtotal * 100) / 100;

  document.querySelector('.subtotal-price').innerText = '$' + subtotal;
  document.querySelector('.allProduct-price').innerText = '$' + total;

  //   document.querySelector('.cartItem-price').innerText = subtotal;
}
