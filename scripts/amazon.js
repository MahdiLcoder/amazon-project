import { cart,AddToCart,AddedMessage } from "../data/cart.js";
import { products } from "../data/products.js";
let productHtml = '';
products.forEach((product)=>{
	productHtml += `
	<section class="products">
            <div>
                <img src="${product.image}" alt="#">
            </div>
            <div>
                ${product.name}
            </div>
            <div class="rating">
                <img src="images/main/rating-${product.rating.stars*10}.png" id="rating">
                <span class="number">
                    ${product.rating.count}
                </span>
            </div>
            <span class="price">
                $${(product.priceCents/100).toFixed(2)}
            </span>
            <div>
			<select name="" id="select" class="js-select-quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>
            ${product.getSizeChartLink()}
             <div class="added">
                &check;Added
            </div>
			<div>            
			<button class="add-button js-add-button"
            data-product-id="${product.id}">
                Add to cart
            </button>
			</div>
        </section>`;
});
document.querySelector('.js-main-container').innerHTML = productHtml;
function UpdateCartQuantity(){
    let TotalQuantity = 0;
        cart.forEach((item) => {
            TotalQuantity += item.quantity;
        });
        document.querySelector('.js-cart-quantity').innerHTML = TotalQuantity;
}
document.querySelectorAll('.js-add-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        AddToCart(productId,button);
        UpdateCartQuantity();
        AddedMessage(button);
    });
});
UpdateCartQuantity();