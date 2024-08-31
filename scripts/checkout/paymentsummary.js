import { products } from "../../data/products.js";
import { cart } from "../../data/cart.js";
import { DeleveryOptions } from "../../data/deleveryOptions.js";
export function renderPaymentSummary(){
	let priceCents = 0;
	let priceShipping = 0;
	let payHtml = '';
	cart.forEach(item => {
		const product = products.find((product) => product.id === item.productId);
		const deliveryOption = DeleveryOptions.find((Option) => Option.id === item.deliveryOptionId)
		priceCents += product.priceCents * item.quantity;
		priceShipping += deliveryOption.priceCents ;
	});
	const totalBeforeTax = priceCents + priceShipping;
	const estimatedTax = totalBeforeTax * 0.1;
	const orderTotal = totalBeforeTax + estimatedTax ;
	payHtml += `
			<div class="payment-summary-title">
				Order Summary
			</div>

			<div class="payment-summary-row">
			<div>Items (3):</div>
			<div class="payment-summary-money">$${(priceCents/100).toFixed(2)}</div>
			</div>

			<div class="payment-summary-row">
			<div>Shipping &amp; handling:</div>
			<div class="payment-summary-money">$${(priceShipping/100).toFixed(2)}</div>
			</div>

			<div class="payment-summary-row subtotal-row">
			<div>Total before tax:</div>
			<div class="payment-summary-money">$${(totalBeforeTax/100).toFixed(2)}</div>
			</div>

			<div class="payment-summary-row">
			<div>Estimated tax (10%):</div>
			<div class="payment-summary-money">$${(estimatedTax/100).toFixed(2)}</div>
			</div>

			<div class="payment-summary-row total-row">
			<div>Order total:</div>
			<div class="payment-summary-money">$${(orderTotal/100).toFixed(2)}</div>
			</div>
			<div class="paypal">
			<div>Use PayPal</div>
			<div><input type="checkbox"></div>
			</div>

			<button class="place-order-button button-primary">
				<a href="Orders.html">
					Place your order
				</a>
			</button>

	`;
	document.querySelector('.js-payment-summary').innerHTML = payHtml;
}