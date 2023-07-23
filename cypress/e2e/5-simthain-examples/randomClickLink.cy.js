//https://www.youtube.com/watch?v=xvvL3GRjXCY

it.skip('Randomly clicking on a link using lodash function',function(){

    cy.visit('https://react-redux.realworld.io/#/login?_k=qwbj9j');
    cy.get('div > ul>li').then(($a)=>Cypress._.sample($a.toArray()) ).click();
    // cy.location('pathname').should('include',[login,signup,home])
    cy.get('div#main').invoke('text').should('match',/Sign Up|Sign In|Global Feed/);
    cy.get('div#main').invoke('text').should('match',/Sign (Up|In)|Global Feed/);
    
})

it('random clicking using math.random',function(){
    cy.visit('https://react-redux.realworld.io/#/login?_k=qwbj9j');
    cy.get('div > ul>li').then(($len)=>{
        const length=$len.length;
        cy.log(length);
        const randomIndex= Math.floor(Math.random()*length);
        cy.wrap($len[randomIndex]).click();
        cy.get('div#main').invoke('text').should('match',/Sign Up|Sign In|Global Feed/);

    })

});