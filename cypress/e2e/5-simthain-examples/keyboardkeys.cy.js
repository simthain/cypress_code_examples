it('keyboard key - enter',function(){

    cy.visit('https://en.wikipedia.org/wiki/Main_Page')

    // cy.get('.cdx-text-input__input').type('25'+'{enter}')

    cy.get('.cdx-text-input__input').type('25').type('{enter}')

})