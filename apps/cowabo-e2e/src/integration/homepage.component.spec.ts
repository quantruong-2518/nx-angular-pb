describe('cowabo', () => {
  beforeEach(() => cy.visit('/iframe.html?id=homepagecomponent--primary'));
  it('should render the component', () => {
    cy.get('cowabo-homepage').should('exist');
  });
});
