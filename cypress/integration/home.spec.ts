describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('checks the page loads correctly and Dark is present', () => {
    cy.dataCy('dark').should('contain.text', 'Dark')
  })
})
