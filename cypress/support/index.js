Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Cibele')
    cy.get('#lastName').type('Mallmann')
    cy.get('#email').type('cibele@mallmann.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})