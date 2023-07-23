
describe('Radiobuttons', ()=>{

it('radiobutton-test',()=>{
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
   
    //check visibility
    cy.get('input#female').should('be.visible')
    cy.get('input#male').should('be.visible')

    //select radio
    cy.get('input#female').check().should('be.checked')
    cy.get('input#male').check().should('not.be.checked')
    
    cy.get('input#female').check().should('not.be.checked')
    cy.get('input#male').check().should('be.checked')
    
})

it('checkbox-test',()=>{
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    cy.get('#monday').check().should('be.visible')
   
    //selecting single checkbox
    cy.get('#monday').check().should('be.checked')
    
    //unselecting single checkbox
    cy.get('#monday').uncheck().should('not.be.checked')

    //select all checkboxes
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

    //unselect all boxes
    cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

    //select first checkbox or las checkbox
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

})


})