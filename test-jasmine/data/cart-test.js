import { cart , AddToCart , loadFromStorage } from "../../data/cart.js";
describe("test suite: addToCart", ()=>{
	it("adds an exiting product in the cart", ()=>{
		spyOn(localStorage, "setItem")
		spyOn(localStorage, "getItem").and.callFake(()=>{
			return JSON.stringify([{
				productId : "product1",
				quantity : 1,
				deliveryOptionId:'1'
			}]);
		loadFromStorage();
		AddToCart('product1');
		expect(cart.length).toEqual(1);
		expect(localStorage.setItem).toHaveBeenCalledTimes(1);
		expect(cart[0].productId).toEqual('product1');
		expect(cart[0].quantity).toEqual(2);
		});
		
	})
	it("adds a new product in the cart", ()=>{
		spyOn(localStorage, "setItem")
		spyOn(localStorage, "getItem").and.callFake(()=>{
			return JSON.stringify([]);
		});
		loadFromStorage();
		AddToCart('product1');
		expect(cart.length).toEqual(1);
		expect(localStorage.setItem).toHaveBeenCalledTimes(1);
		expect(cart[0].productId).toEqual('product1');
		expect(cart[0].quantity).toEqual(1);
	})
})