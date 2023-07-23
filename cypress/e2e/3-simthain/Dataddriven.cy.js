describe('datadriven example', ()=>{
    let userdata;
    it('data driven example', ()=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            cy.fixture('orangehrm2.json').then( (data)=>{
               
                data.forEach( (userdata) => {
                cy.get("[name='username']").type(userdata.username)
                cy.get("[name='password']").type(userdata.password)
                cy.get("[type='submit']").click()
                

                if(userdata.username=='Admin' && userdata.password=='admin123')
                {
                        cy.get(".oxd-topbar-header-breadcrumb>h6").should('have.text', userdata.expected)
                        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                
                else
                {
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', userdata.expected)

                }
            })
            })             

    })

})