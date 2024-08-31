describe('renderOrder function', () => {
  beforeEach(() => {
    // Set up the DOM elements that the function will interact with
    document.body.innerHTML = `
      <div class="order-details-container"></div>
      <div class="date"></div>
    `;
  });

  it('should render the order details', () => {
    // Set up the cart data
    cart = [
      {
        id: 1,
        productId: 1,
        quantity: 2,
        deliveryOptionId: 1
      }
    ];

    // Set up the products data
    products = [
      {
        id: 1,
        name: 'Product 1',
        image: 'image1.jpg'
      }
    ];

    // Set up the delivery options data
    DeleveryOptions = [
      {
        id: 1,
        deleveryOptionDay: 3
      }
    ];

    // Call the renderOrder function
    renderOrder();

    // Expect the order details to be rendered
    expect(document.querySelector('.order-details-container').innerHTML).toContain('Product 1');
    expect(document.querySelector('.order-details-container').innerHTML).toContain('Arriving on:');
    expect(document.querySelector('.date').textContent).toContain('MMMM D');
  });

  it('should update the quantity when the "Buy Again" button is clicked', () => {
    // Set up the cart data
    cart = [
      {
        id: 1,
        productId: 1,
        quantity: 2,
        deliveryOptionId: 1
      }
    ];

    // Set up the products data
    products = [
      {
        id: 1,
        name: 'Product 1',
        image: 'image1.jpg'
      }
    ];

    // Set up the delivery options data
    DeleveryOptions = [
      {
        id: 1,
        deleveryOptionDay: 3
      }
    ];

    // Call the renderOrder function
    renderOrder();

    // Get the "Buy Again" button
    const buyAgainButton = document.querySelector('.buy-again-button');

    // Simulate a click on the "Buy Again" button
    buyAgainButton.click();

    // Expect the quantity to be updated
    expect(cart[0].quantity).toBe(3);
  });

  it('should render the order again after the "Buy Again" button is clicked', () => {
    // Set up the cart data
    cart = [
      {
        id: 1,
        productId: 1,
        quantity: 2,
        deliveryOptionId: 1
      }
    ];

    // Set up the products data
    products = [
      {
        id: 1,
        name: 'Product 1',
        image: 'image1.jpg'
      }
    ];

    // Set up the delivery options data
    DeleveryOptions = [
      {
        id: 1,
        deleveryOptionDay: 3
      }
    ];

    // Call the renderOrder function
    renderOrder();

    // Get the "Buy Again" button
    const buyAgainButton = document.querySelector('.buy-again-button');

    // Simulate a click on the "Buy Again" button
    buyAgainButton.click();

    // Expect the order to be rendered again
    expect(document.querySelector('.order-details-container').innerHTML).toContain('Product 1');
    expect(document.querySelector('.order-details-container').innerHTML).toContain('Arriving on:');
    expect(document.querySelector('.date').textContent).toContain('MMMM D');
  });
});