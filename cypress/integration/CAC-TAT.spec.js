/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    this.beforeEach(function(){
        cy.visit('./src/index.html') 
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')        
    })

    it.only('preenche os campos obrigatórios e envie o formulário', function() {
        const longText = 'Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste. Teste.'

        cy.get('#firstName').type('Cibele')
        cy.get('#lastName').type('Mallmann')
        cy.get('#email').type('cibele@mallmann.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
  })