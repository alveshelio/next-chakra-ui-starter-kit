describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Checks the page loads correctly and Dark is present', () => {
    cy.dataCy('dark').should('contain.text', 'Dark')
  })

  it('Toggles the theme from dark to light', () => {
    cy.dataCy('toggle-theme').click()
    cy.get('body').should('have.class', 'chakra-ui-light')
  })

  it("Doesn't display the Toggle Menu Icon", () => {
    cy.viewport(1200, 823)
    cy.dataCy('toggle-menu').should('have.css', 'display', 'none')
  })

  it('Toggles the menu', () => {
    cy.viewport(411, 823)
    cy.dataCy('toggle-menu').click()
    cy.dataCy('links').should('have.css', 'display', 'flex')
  })
})
