describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('checks the page loads correctly and Dark is present', () => {
    cy.dataCy('dark').should('contain.text', 'Dark')
  })

  it('toggles the theme from dark to light', () => {
    cy.dataCy('theme-toggle').click()
    cy.get('body').should('have.class', 'chakra-ui-light')
  })
})
