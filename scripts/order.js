import { cart , saveToStorage} from '../data/cart.js'
import { products } from '../data/products.js';
import { DeleveryOptions } from '../data/deleveryOptions.js';
import DayJs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
function renderOrder() {
  let orderHtml ='';
  let date;
  cart.forEach(cartItem => {
      let deliveryOptionDay;
      DeleveryOptions.forEach((element)=>{
        if(element.id === cartItem.deliveryOptionId){
        deliveryOptionDay = element.deleveryOptionDay;
        }
      })
      const today = DayJs();
      const deliveryDate = today.add(deliveryOptionDay, 'day');
      const deliveryDateString = deliveryDate.format('MMMM D');
      date = today.format('MMMM D')
      const product = products.find(product => product.id === cartItem.productId);
      orderHtml += `
              <section class="order-details-grid" >
                <div class="product-image-container">
                <img src="${product.image}">
              </div>

              <div class="product-details">
                <div class="product-name">
                  ${product.name}
                </div>
                <div class="product-delivery-date">
                  Arriving on: ${deliveryDateString}
                </div>
                <div class="product-quantity js-product-quantity">
                  Quantity: ${cartItem.quantity}
                </div>
                <button class="buy-again-button js-buy-again-button-${product.id} button-primary"
                data-product-id="${product.id}">
                  <img class="buy-again-icon" src="images/main/buy-again.png">
                  <span class="buy-again-message js-buy-again-message">Buy it again</span>
                </button>
              </div>

              <div class="product-actions">
                <a href="tracking.html">
                  <button class="track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>
              </section>
    `
  });
  document.querySelector('.order-details-container').innerHTML = orderHtml;
  document.querySelector('.date').textContent = date;
  document.querySelectorAll('.buy-again-button').forEach(buy => {
    buy.addEventListener('click',()=>{
      
      const productId = buy.getAttribute('data-product-id');
      updateQuantityFromOrder(productId);
      renderOrder();
      document.querySelector(`.js-buy-again-button-${productId}`).innerHTML = 'Added';
      setTimeout(()=>{
      document.querySelector(`.js-buy-again-button-${productId}`).innerHTML = 'Buy it again';
      },1000)
    })
  })
  function updateQuantityFromOrder(productId) {
    cart.forEach(cartItem => {
      cartItem.productId === productId
        ? cartItem.quantity += 1 :"";
    })
    saveToStorage() 
  }
}
renderOrder();