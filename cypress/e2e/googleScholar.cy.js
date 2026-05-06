describe('Pesquisa Bing', () => {

  it('Pesquisar tema e validar resultados', () => {

    // Acessa o Bing
    cy.visit('https://www.bing.com')

    // Pesquisa o tema
    cy.get('textarea[name="q"], input[name="q"]')
      .type('uso da inteligência artificial na medicina{enter}')

    // Valida se os resultados apareceram
    cy.get('#b_results')
      .should('be.visible')

    // Aguarda carregamento
    cy.wait(2000)

    // Screenshot personalizada
    cy.screenshot('resultado-pesquisa-bing')

  })

})