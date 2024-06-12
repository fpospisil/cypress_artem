describe('Login test', () => {
  const login = (username, password) => {
    cy.get('input[name = "username"]').type(username)
    cy.get('input[name = "password"]').type(password)
    cy.get('input[type = "submit"]').click()
  }
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });
  it('login', () => {
    login ('karel', '123456')
    cy.url().should('include', 'overview.htm')
    cy.contains('Accounts overview').should('be.visible')
  })
})