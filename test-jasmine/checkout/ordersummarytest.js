import { renderOrderSummary } from "../../scripts/checkout/ordersummary.js";
import { loadFromStorage } from "../../data/cart.js";

describe("test suite: renderOrderSummary", () => {
	it("display the cart", () => {
		// Setting up the container element for order summary
		document.querySelector(".js-test-container").innerHTML = `<div class="js-order-summary"></div>`;
		const productid1 = "product1";
		// Mocking the return value of localStorage.getItem
		spyOn(localStorage, "getItem").and.callFake(() => {
			return JSON.stringify([{
				productId: "product1",
				quantity: 1,
				deliveryOptionId: '1'
			}]);
		});

		// Calling the function to load data from localStorage
		loadFromStorage();

		// Now you can call the function to render order summary
		renderOrderSummary();

		expect(
			Document.querySelectorAll(".js-cart-item-container").length
		).toEqual(1);
		expect(
			Document.querySelectorAll(`js-product-quantity-${productid1}`).innerText
		).toContain('quantity:2');
		
	});
});
