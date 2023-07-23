describe('API alias demo', ()=>{
    beforeEach(()=>{
        //the base url(https://reqres.in/api) is in the cypress.config.js file, location of resource is given below in cy.request
        cy.request('GET','/users?page=2').as('pageurl')
    })

    it(' page header', ()=>{
          cy.get('@pageurl')
            .its('headers')
            .its('content-type')
            .should('include','application/json; charset=utf-8')
    })

    it(' status code', ()=>{
        cy.get('@pageurl')
          .its('status')
          .should('equal',200)
    })

    it('total pages in body ', ()=>{
        cy.get('@pageurl')
          .its('body')
          .should('contains',{'total_pages':2})
    })

    it('validate user info in data json array', ()=>{
        cy.get('@pageurl')
          .its('body').then((res)=>{
            expect(res.data[0]).has.property('first_name','Michael')
          })
    })

})
