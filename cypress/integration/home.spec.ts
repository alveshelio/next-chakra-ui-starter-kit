describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('checks the page loads correctly and Dark is present', () => {
    cy.get('h1').should('contain.text', 'Dark')
  })
})
