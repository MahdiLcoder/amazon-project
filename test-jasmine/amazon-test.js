describe('Cart functionality', () => {
	let mockProduct = {
			id: 1,
			name: 'Test Product',
			priceCents: 1000,
			rating: {
					stars: 4,
					count: 100
			}
	};

	let mockButton = document.createElement('button');
	mockButton.setAttribute('data-product-id', '1');

	beforeEach(() => {
			// Setup
			sinon.stub(products, 'forEach').callsFake((callback) => {
					callback(mockProduct);
			});

			// Simulate the HTML container
			document.body.innerHTML = '<div class="js-main-container"></div>';
	});

	afterEach(() => {
			// Teardown
			products.forEach.restore();
	});

	it('should add a product to cart when AddToCart is called', () => {
			AddToCart(mockProduct.id, mockButton);

			expect(cart.length).toBe(1);
	});

	it('should update the cart quantity when a product is added to the cart', () => {
			AddToCart(mockProduct.id, mockButton);
			
			UpdateCartQuantity();

			expect(document.querySelector('.js-cart-quantity').innerHTML).toBe('1'); // Assuming the markup shows the total quantity directly
	});

	it('should display added message when a product is added to cart', () => {
			AddedMessage(mockButton);
			
			expect(document.querySelector('.added').innerHTML.trim()).toBe('&check;Added');
	});

	// Add more test cases as needed
});

