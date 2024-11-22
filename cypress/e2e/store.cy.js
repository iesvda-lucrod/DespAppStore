describe('Online Store', () => {
  it('should load the product page and add product to cart', () => {
      cy.visit('./index.html');  // Replace with your local or deployed URL

      // Verify that the product list is visible
      cy.get('#product-list').should('be.visible');

      // Add the first product to the cart
      cy.get('.product').first().find('button').click();

      // Verify that the cart has 1 item
      cy.get('#cart-summary').should('contain', 'Product ID: 1 - Quantity: 1');
  });
});