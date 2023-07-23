describe("capture screenshot an videos", ()=>{

    it('screenshot', ()=>{

        cy.visit("https://demo.opencart.com/")
        
        //screenshot of the whole page
       // cy.screenshot("homestore")

        //screenshot of element
        //cy.get('#logo > a > .img-fluid').screenshot("element-opencart")


        //automatically capturing screenshot and video(video captured only on failures) using command prompt on test failure
        //command $ npx cypress run --spec <test file path>
        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text',"") //test will fail since there will be Cameras text instead of Tablet


    })



})