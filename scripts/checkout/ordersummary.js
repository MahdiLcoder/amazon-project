import { cart,deleteFromCart,updateItems, updateDeleveryIdFromCart, updateQuantity} from '../../data/cart.js';
import { products } from '../../data/products.js';
import DayJs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { DeleveryOptions } from '../../data/deleveryOptions.js';
import { renderPaymentSummary } from './paymentsummary.js'
export function renderOrderSummary(){
  let productCartSummary = '';
  cart.forEach((item) => {
    let deliveryOptionDay;
    DeleveryOptions.forEach((element)=>{
      if(element.id === item.deliveryOptionId){
      deliveryOptionDay = element.deleveryOptionDay;
      }
    })
    const today = DayJs();
    const deliveryDate = today.add(deliveryOptionDay, 'day');
    const deliveryDateString = deliveryDate.format('dddd, MMMM D');
    const product = products.find((product) => product.id === item.productId);
      productCartSummary += ` 
      <section class="cart-item-container js-${product.id} js-cart-item-container">
              <div class="delivery-date js-delivery-date">
                Delivery date: ${deliveryDateString}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${product.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${product.name}
                  </div>
                  <div class="product-price">
                    $${(product.priceCents / 100).toFixed(2)}
                  </div>
                  <div class="product-quantity js-product-quantity-${product.id}">
                    <span>
                      Quantity: <span class="quantity-label">${item.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary"
                    data-update-link ="${product.id}">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete"
                    data-delete-link ="${product.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deleveryOptionHtml(product,item)}
                </div>
              </div>
      </section>`;
  });

  document.querySelector('.js-order-summary').innerHTML = productCartSummary;
  document.querySelectorAll('.js-delete').forEach((link)=>{
    link.addEventListener('click',()=>{
      const deleteLink = link.getAttribute('data-delete-link');
      deleteFromCart(deleteLink);
      link.closest('.cart-item-container').remove();
      updateItems();
      renderPaymentSummary();
    })
  })
  updateItems();
  document.querySelectorAll('.update-quantity-link').forEach((link) =>{
    link.addEventListener('click',()=>{
      const updateLink = link.getAttribute('data-update-link');
      updateQuantity(updateLink,link);
      renderPaymentSummary();
    })
  })
  function deleveryOptionHtml(product,item){
    let html = '';
    DeleveryOptions.forEach((option) => {
      const today = DayJs();
      const deleveryDay = today.add(option.deleveryOptionDay,'day');
      const deleveryString = deleveryDay.format('dddd, MMMM D');
      const ischecked = option.id === item.deliveryOptionId? 'checked' : '';
      const price = option.priceCents === 0?'free': `$ ${option.priceCents/100}`;
      html += `
      <div class="delivery-option">
        <input type="radio"
        ${ischecked}
        data-product-id='${product.id}'
        data-delivery-option-id='${option.id}'
        data-delivery-day ='${option.deleveryOptionDay}'
          class="delivery-option-input js-delivery-option-input"
          name="delivery-option-${product.id}">
        <div>
          <div class="delivery-option-date">
            ${deleveryString}
          </div>
          <div class="delivery-option-price">
            ${price} -Shipping
          </div>
        </div>
      </div>
      `
    })
    return html;
  }
  document.querySelectorAll('.js-delivery-option-input').forEach((input) => {
    input.addEventListener('click',() =>{
      const {productId,deliveryOptionId} = input.dataset;
      const deliveryDay = parseInt(input.dataset.deliveryDay);
      updateDeleveryIdFromCart(productId,deliveryOptionId);
      updateDeliveryDate(deliveryDay, productId);
      renderPaymentSummary();
    })
  })
  function updateDeliveryDate(deliveryDay, productId) {
    const productContainer = document.querySelector(`.js-${productId}`);
    const deliveryDateElement = productContainer.querySelector('.js-delivery-date');
    const today = DayJs();
    const deliveryDate = today.add(deliveryDay, 'day');
    const deliveryDateString = deliveryDate.format('dddd, MMMM D');

    deliveryDateElement.textContent = `Delivery date: ${deliveryDateString}`;
  }
}