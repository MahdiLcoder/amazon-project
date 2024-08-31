// product.spec.js

// Import necessary classes and products
const { Product, Clothing, products } = require('./your-file-path'); // Update the file path

// Jasmine test suite for the Product class
describe('Product', () => {
  let product;

  beforeEach(() => {
    product = new Product({
      id: 'testId',
      image: 'testImage.jpg',
      name: 'Test Product',
      rating: { stars: 4, count: 100 },
      priceCents: 999,
    });
  });

  it('should create a Product instance with correct properties', () => {
    expect(product.id).toBe('testId');
    expect(product.name).toBe('Test Product');
    expect(product.getSizeChartLink()).toBe('');
  });
});

// Jasmine test suite for the Clothing class
describe('Clothing', () => {
  let clothing;

  beforeEach(() => {
    clothing = new Clothing({
      id: 'testId',
      image: 'testImage.jpg',
      name: 'Test Clothing',
      rating: { stars: 3, count: 50 },
      priceCents: 1299,
      sizeChartLink: 'testSizeChartLink.jpg',
    });
  });

  it('should create a Clothing instance with correct properties', () => {
    expect(clothing.id).toBe('testId');
    expect(clothing.name).toBe('Test Clothing');
    expect(clothing.getSizeChartLink()).toBe('<a href="testSizeChartLink.jpg" target="_blanck">sizeCharLink</a>');
  });
});

// Jasmine test suite for the products array
describe('products', () => {
  it('should contain instances of Product and Clothing classes', () => {
    products.forEach((product) => {
      if (product instanceof Clothing) {
        expect(product.sizeChartLink).toBeDefined();
      }
    });
  });
});
