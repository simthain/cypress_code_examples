describe('browser navigation commands demo',()=>{

    it('browser navigation',()=>{

        cy.visit("https://demo.opencart.com/");

        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text',"Cameras")

        //go back 
        cy.go('back')
        cy.title().should('eq',"Your Store")

        //go forward
        cy.go('forward')
        cy.get("div[id='content'] h2").should('have.text',"Cameras")


        //go back 
        cy.go(-1)
        cy.title().should('eq',"Your Store")

        //go forward
        cy.go(1)
        cy.get("div[id='content'] h2").should('have.text',"Cameras")

        //refresh
        cy.reload()


        //refresh forchfully
        cy.reload(true)

        //refresh forcefully with timeout
        cy.reload(true, {timeout:5000}).contains('Opencart')
//

    })



})