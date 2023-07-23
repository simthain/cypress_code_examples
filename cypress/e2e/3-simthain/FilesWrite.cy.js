
describe('file write',()=>{

    it('write an API response to log', ()=>{
        cy.request('GET', 'https://dummy.restapiexample.com/public/api/v1/employees/').then((response) => {
            
            cy.writeFile('cypress/fixtures/filewrite.json', response.body)  //write data to a file
            
            cy.readFile('cypress/fixtures/filewrite.json').its('status').should('eq', 'success') // true

            cy.readFile('cypress/fixtures/filewrite.json').then((user)=>{
                expect(user.status).to.equal('success')
            })

        })

    })


})
