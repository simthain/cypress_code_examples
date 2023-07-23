
describe('CSSlocator', ()=>{

it('csslocatortest1',()=>{

    cy.visit('https://www.pavantestingtools.com/')
    cy.get(".search-field").type('simran')
    // cy.get(".search-submit[type=submit]").click()       //CSS Selector- class and attribute with value
    cy.get(".search-submit").click()                    //CSS Selector- class
    cy.get(".status-msg-body").contains('simran')
    cy.get(".home-link").click()
    cy.get("span#blog-pager-older-link").click()            //css locator- id
})

it('csslocatortest2',()=>{

    // cy.visit('https://www.pavantestingtools.com/')
    // cy.get(".search-field").type('selenium')
    // cy.get(".search-submit").click()
    // cy.url().contains('selenium')
})

it('csslocatortest3',()=>{
    let txt='selenium'
    cy.visit('https://www.pavantestingtools.com/')
   
   //filter is used to particular attribute=value from same type of tags
    // cy.get('input').filter('[type="text"]').type("sim")
    // cy.get('input').filter('[type="submit"]').click()

    //eq, first, last methods
    // cy.get('input').first().type('sim')  //1st matching locator of particular tag
    // cy.get('input').eq(1).type('pass')       //element having 2 number(index=1) locator of particular tag
    // cy.get('input').last().click()       //last element in array or locator
    

    //find method
    // cy.get('form').find('input').eq(0).type("simran")
    // cy.get('form').find('input').eq(1).type("passw")

    //parent method
    // cy.get('form').parent().should('have.class', 'login-box')  //form has div parent which is having class=login-box


    cy.get(".search-field").type(txt)
    cy.get(".search-submit").click()
    cy.url().contains('selenium')
})



})