describe('cowabo', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('cowabo-nx-welcome').should('exist');
  });
});
