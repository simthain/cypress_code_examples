
// data to be fetched from orangehrm.json under fixture folder

let userdata;

describe('fixturesDemo', ()=>{

    before('', ()=>{
        cy.fixture('orangehrm.json').then( (data1)=>{
        userdata=data1
    })
    })


    it.skip('fixture- hard code data', ()=>{

        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("[type='submit']").click()

        cy.get(".oxd-topbar-header-breadcrumb>h6").should('have.text', 'Dashboard')
    })


    it('fixture- data from fixture file', ()=>{
    
        // cy.fixture('orangehrm.json').then( (data)=>{
 
        // cy.visit(userdata.url)
        cy.get("[name='username']").type(userdata.username)
        cy.get("[name='password']").type(userdata.password)
        cy.get("[type='submit']").click()
   
        cy.get(".oxd-topbar-header-breadcrumb>h6").should('have.text', userdata.expected)
   })

})

