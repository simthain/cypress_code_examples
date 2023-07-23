describe('login',()=>{
Given('I am on the Login Page',()=>{

    cy.visit('https://www.saucedemo.com/')
})

When('I enter username as {user}',(username)=>{
    cy.get('#user-name').type(username)

})

And('I enter password as {pass}',(password)=>{
    cy.get('#password').type(password)
})

And('I click on login button',()=>{
    cy.get('#login-button').click()
})

Then('I enter into the website',()=>{
cy.url().should('contain', '/inventory.html')

})

And('I confirm the Products page',()=>{
 cy.get('.class').should('have.text', 'PRODUCTS')

})



})  


