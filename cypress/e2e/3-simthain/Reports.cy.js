describe('Reports demo', ()=>{

    it('Reports', ()=>{
            //for details check txt file in the testing folder, it has step by step procedure to use reports
            // reports will be generated when you run a test in CLI mode using command 'npx cypress run --spec pathofthetest  --headed --browser chrome'
            // https://www.tutorialspoint.com/cypress/cypress_reports.htm
            // OR https://www.browserstack.com/guide/cypress-html-reporter
            // OR https://medium.com/egnyte-engineering/3-steps-to-awesome-test-reports-with-cypress-f4fe915bc246
            //  OR https://dzone.com/articles/cypress-generate-html-results-with-screenshot

        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq',"Your Store")
        cy.title().should('eq',"Yourfff Store")



    })



})