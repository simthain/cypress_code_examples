// const weburl='https://www.saucedemo.com/'
import HomeSaucePage from "../../PageObjects/HomeSaucePage"
import inventoryPage from "../../PageObjects/inventoryPage"
const tests=require('../../fixtures/saucedemo.json')   //to use fixture file


describe('login- data driven demo on saucedemo',()=>{

    beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/')

    })
    
/*
    it.skip('login without POM',()=>{
    // cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('span.title').should('have.text','Products')

    })

    it('login with POM-Login to inventory page',()=>{
        // cy.visit(weburl)
       HomeSaucePage.typeUsername('standard_user')
       HomeSaucePage.typePassword('secret_sauce')
       HomeSaucePage.clickLogin()
       inventoryPage.elements.titleSpan.should('have.text','Products')

       
    })

    it('login with POM-locked out user',()=>{
        // cy.visit(weburl)
        HomeSaucePage.typeUsername('locked_out_user')
        HomeSaucePage.typePassword('secret_sauce')
        HomeSaucePage.clickLogin()
        HomeSaucePage.elements.errorMessage.should('have.text','Epic sadface: Sorry, this user has been locked out.')
       
    })

    it('login with POM-invalid login-1',()=>{
        // cy.visit(weburl)
       HomeSaucePage.typeUsername('stffandard_user')
       HomeSaucePage.typePassword('secret_sauce')
       HomeSaucePage.clickLogin()
       HomeSaucePage.elements.errorMessage.should('have.text','Epic sadface: Username and password do not match any user in this service')

       
    })

    it('login with POM-invalide login-2',()=>{
        // cy.visit(weburl)
       HomeSaucePage.typeUsername('fgfgfg')
       HomeSaucePage.typePassword('secret_sauce')
       HomeSaucePage.clickLogin()
       HomeSaucePage.elements.errorMessage.should('have.text','Epic sadface: Username and password do not match any user in this service')

       
    })
*/

//data driven code below
    /* Other way to get data from fixture file

    cy.fixture('orangehrm2.json').then( (data)=>{      
     data.forEach( (userdata) => {
     cy.get("[name='username']").type(userdata.username)
    
     */
    
    tests.forEach(test=>{

    it(test.name,()=>{
        cy.log('DATA DRIVEN')
       HomeSaucePage.typeUsername(test.username)
       HomeSaucePage.typePassword(test.password)
       HomeSaucePage.clickLogin()

       if(test.name=='should login to inventory page')
       {
            inventoryPage.elements.titleSpan.should('have.text', test.expected)
        }
       else
       {
        HomeSaucePage.elements.errorMessage.should('have.text',test.expected)

       }
       
    })
})





})