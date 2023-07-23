

describe("assertions",()=>{
    
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("implicit-Assertion-test1",()=>{
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //should, and
        cy.url().should('include', "orangehrmlive")     //url check
        .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should('contain',"hrmlive")
        .should('not.contain',"figma")
        .should('not.contain',"httpr")       //if it is included in the url, so test will fail

        cy.url().should('include', "orangehrmlive")     //url check
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contain',"hrmlive")

        cy.title().should('include', "Orange")      //title check
        .and('eq',"OrangeHRM")
        
        // to check visibility of element
    //     cy.get('.orangehrm-login-branding > img').should('be.visible')
    //    .and('exist')

       //to check total no of links on page
       cy.xpath("//a").should('have.length',5)

    
        
        cy.xpath("//*[@name='username']").type("Admin")
        .should('have.value','Admin')

        cy.xpath("//*[@name='password']").type("admin123")
        .should('have.value', 'admin123')

        // cy.xpath("//*[@type='submit']").click()
        
    })


    it("explicit-Assertion-test2",()=>{
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.xpath("//*[@name='username']").type("Admin")
        cy.xpath("//*[@name='password']").type("admin123")
        cy.xpath("//*[@type='submit']").click()



        let expName='Paul Collings';
        cy.get('.oxd-userdropdown-name').then((x)=>{

            //BDD style assertions using 'expect'
            
            let actName=x.text()
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal('xyz')

             //TDD style using 'assert'

        assert.equal(expName,actName)
        assert.notEqual(expName,'simrna')
        })

       

        
    })



})