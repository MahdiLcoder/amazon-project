export let cart;
loadFromStorage();
export function loadFromStorage(){
    cart = JSON.parse(localStorage.getItem('cart'))||[
        {
            productId: "product1",
            quantity: 2,
            deliveryOptionId:'1'
        },{
            productId: "product2",
            quantity: 1,
            deliveryOptionId:'2'
        }
    ];
}
export function saveToStorage(){
    return localStorage.setItem('cart', JSON.stringify(cart));
}
export function AddToCart(productId,button){
    const selectElement = parseInt(button.closest('.products').querySelector('.js-select-quantity').value);
    let productInCart;
    cart.forEach((cartItem)=>{
        if(cartItem.productId === productId){
            productInCart = cartItem;
        }
    })
        if(productInCart){
            productInCart.quantity += selectElement;
        }
        else{
            cart.push({ productId, quantity: selectElement, deliveryOptionId:'1' });
        }
        saveToStorage();
}
export function AddedMessage(button){
    const element = button.closest('.products').querySelector('.added');
        setTimeout(() => {
            element.classList.add('js-added');
        }, 100);
        setTimeout(() => {
            element.classList.remove('js-added');
        }, 2000);
}
export function deleteFromCart(deleteLink){
    cart.forEach((item,index)=>{
        if(item.productId === deleteLink){
          cart.splice(index,1);
        }
      })
      saveToStorage();
}
export function updateItems(){
    let total = 0;
    cart.forEach((item) => {
        total += item.quantity ;})
  const checkout = document.querySelector('.js-middle-section');
  checkout.innerHTML = `
    Checkout (<a class="return-to-home-link"
              href="amazon.html">${total} items</a>)
  `;
  }
export function updateDeleveryIdFromCart(productId,deliveryOptionId){
    cart.forEach((item) => {
        if(item.productId === productId){
          item.deliveryOptionId = deliveryOptionId;
        }
      })
      saveToStorage();

}
export function updateQuantity(updateLink,link){
    const currentQuantity = link.closest('.cart-item-container').querySelector('.quantity-label');
    const newQuantity = parseInt(prompt('Enter the new quantity:'));
    cart.forEach((item) => {
        if (newQuantity > 0 && newQuantity <=10){
            if(item.productId === updateLink){
                item.quantity = newQuantity;
                currentQuantity.innerHTML = newQuantity;
                confirm('Quantity updated successfully');
            }
        }else{
            alert('Quantity must be between 1 and 10');
        }
    })
}