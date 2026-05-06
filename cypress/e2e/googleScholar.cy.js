Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Pesquisa Bing', () => {

  it('Pesquisar tema e validar resultados', () => {

    cy.visit('https://www.bing.com')

    cy.get('textarea[name="q"], input[name="q"]')
      .type('uso da inteligência artificial na medicina{enter}')

    cy.get('#b_results')
      .should('be.visible')

    cy.wait(2000)

    cy.screenshot('resultado-pesquisa-bing')

  })

})