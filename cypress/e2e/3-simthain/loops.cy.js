describe('Repeat clicking of a button using loops', () => {
  it('for loop', () => {
    cy.visit('https://www.google.com/')
    for(let i=1;i<5;i++){
      cy.get('.FPdoLc > center > .gNO89b').click({force:true})
      cy.log('Clicked '+i+' times')
    }
  })
    
  it('while loop',function(){
    cy.visit('https://www.google.com/')

    let i=0;
    // while(i<5){
    while(i!=5){
      cy.get('.FPdoLc > center > .gNO89b').click({force:true})
      cy.log('Clicked '+i+' times')
      i++
    }
  })
  it.only('lodash loop', function(){
    cy.visit('https://www.google.com/')
  Cypress._.times(5, () => cy.get('.FPdoLc > center > .gNO89b').click({force:true})  )
  
  })
    
    

})