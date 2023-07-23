it('REGEX examples',function(){

    cy.visit('https://en.wikipedia.org/wiki/Main_Page')

    cy.get('.cdx-text-input__input').type('mayo')
    cy.wait(1000)
    cy.get('.cdx-menu__listbox li').should('exist').each(($li)=>{
    const text= $li.text();
    expect(text).to.match(/^mayo/i);  //here we used regular expression: ^ means text starting with 'mayo' text and i means ignore case
    // instead of ^, use $ to find string having particular text anywhere,   and use * to find text/value in the middle 
    //examples cy.get('[value^='si']), cy.get('[value$='im']), cy.get('[value*='m'])
    // expect(text).to.match(/mayo/i);

})
})

it.only('find index and given string',function(){
    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name=first_name').type('simr');
    cy.get('[name=last_name').type('thapar');
    cy.get('[name=email').type('404');
    cy.get('input').filter((k,input)=>{
        return input.value.includes('ha')
    })
    .should('have.value','thapar')
    

})