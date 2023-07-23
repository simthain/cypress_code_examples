describe('custom command demo', ()=>{

    it.skip('Custom command for link text', ()=>{

        cy.visit('https://demo.nopcommerce.com/')

       
       //directly getting the link text
        //    cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        //    cy.get("div[class='product-name'] h1").should('have.text',"Apple MacBook Pro 13-inch");

        //using custom command - created in commands.js file under support
       cy.linktext('Apple MacBook Pro 13-inch')
       cy.get("div[class='product-name'] h1").should('have.text',"Apple MacBook Pro 13-inch");

    })

    it.skip('OVERWRITE command- contains command demo ', ()=>{
        cy.visit('https://demo.nopcommerce.com/')

        cy.linktext('Apple MacBook Pro 13-inch')
        cy.get("div[class='product-name'] h1").contains("APPLE MACBOOK PRO 13-inch");

    })
    
    it.only('common functions command- login opererations', ()=>{

        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2Fapple-macbook-pro-13-inch")
        cy.login("testing@gmail.com","test123")

    })
    
    







})