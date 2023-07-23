describe('API basics', ()=>{

    it('Get function 1', ()=>{
                
        // cy.request('https://reqres.in/api/users/2')
        // .its('status').should('eq',200) 
        
        //OR
        
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((res)=>{
            expect(res.status).equal(200)
            expect(res.body.data[0]).has.property('id',7)       //data[0]- first element, has id equal to 7
            expect(res.body.data[0]).has.property('first_name','Michael')
            expect(res.body.data[1]).has.property('email','lindsay.ferguson@reqres.in')
            
        })

    })

        
    it('GET function 2',()=>{
            cy.request('GET','https://reqres.in/api/users?page=2').then((res)=>{
                expect(res.status).equal(200)  
                expect(res.body.data).length(6) 
                expect(res.body.data).not.have.property('price')
        })

    })

})
