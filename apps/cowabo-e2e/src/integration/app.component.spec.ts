describe('cowabo', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('cowabo-root').should('exist');
  });
});
