/// <reference types="Cypress" />

import { recurse } from 'cypress-recurse'

it('pagination example',()=>{
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').type('how to count occurrences of a string on a page in cypress {enter}')
    cy.wait(8000);


    // const visitTextPageIfPossible = () => {
    //     cy.get('[style="display:block;margin-left:53px"]').then(($next) => {
    //         if ($next.hasClass('disabled')) {
    //         return
    //       }
    //       cy.wait(8000) 
    //       cy.get('[style="display:block;margin-left:53px"]').should('be.visible').click()
    //       visitTextPageIfPossible()
    //     })
    //   }
  
    //   visitTextPageIfPossible()
  
    //   cy.log('**on the last page**')
    //   cy.contains('li', 11).should('be.visible')
    //   cy.contains('.paginationjs-nav', '3 / 3').should('be.visible')
      // if you want to confirm the "next" list is disabled
    //   cy.get('.paginationjs-next').should('have.class', 'disabled')


    //to use recure, install recurse dependency
    
    recurse(
        ()=> cy.get('[style="display:block;margin-left:53px"]'),
    (next)=>next.attr('style',''),
    {
    post(){
    cy.get('[style="display:block;margin-left:53px"]').click()
    
    // cy.wait(8000)
          }
     },
    )

})