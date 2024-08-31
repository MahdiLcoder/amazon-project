import { cart } from '../data/cart.js';
import { products } from '../data/products.js';
import { DeleveryOptions } from '../data/deleveryOptions.js';
import DayJs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let trackingHtml = cart.map(cartItem => {
  const product = products.find(product => product.id === cartItem.productId);

  if (!product) {
    return ''; 
  }
  DeleveryOptions.forEach((element)=>{
    if(element.id === cartItem.deliveryOptionId){
    product.deleveryOptionDay = element.deleveryOptionDay;
    }
  })
  const today = DayJs();
  const deliveryDate = today.add(product.deleveryOptionDay, 'day');
  const deliveryDateString = deliveryDate.format('dddd, MMMM D');
  return `
    <div class="delivery-date"">
            Arriving on : ${deliveryDateString}
          </div>
  
          <div class="product-info">
            ${product.name}
          </div>
  
          <div class="product-info">
            Quantity: ${cartItem.quantity}
          </div>
  
          <img class="product-image" src="${product.image}">
  
          <div class="progress-labels-container">
            <div class="progress-label">
              Preparing
            </div>
            <div class="progress-label current-status">
              Shipped
            </div>
            <div class="progress-label">
              Delivered
            </div>
          </div>
  
          <div class="progress-bar-container" style="margin-bottom: 40px;">
            <div class="progress-bar"></div>
          </div>
  `;
}).join('');

document.querySelector('.order-tracking-details').innerHTML = trackingHtml;
