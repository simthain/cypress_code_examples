it('testing purpose',()=>{
    cy.visit('https://online.gndu.ac.in/')
    cy.get(':nth-child(2) > .col-sm-12 > .nav > :nth-child(1) > a').click({force:true})
    // cy.get('#APjFqb').type('dil da mamla{enter}')
    cy.get('h1').should('contain','professor')
})