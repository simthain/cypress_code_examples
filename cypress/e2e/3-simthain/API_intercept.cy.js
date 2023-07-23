describe('API interception demo',()=>{
    
    it('Intercept demo',()=>{

        cy.on('uncaught:exception', (err, runnable) => {return false})

        cy.visit("http://jsonplaceholder.typicode.com/")

        cy.intercept({ path:'/posts' }).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then(inter=>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })
    })

    it('mocking with intercept test with static data',()=>{
        cy.on('uncaught:exception', (err, runnable) => {return false})

        cy.visit("http://jsonplaceholder.typicode.com/")
        //injecting fake data(stub)
        cy.intercept('GET','/posts', {totalposts:5, name:'Siram'}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })
    it('mocking with intercept test with dynamic(fixture) data',()=>{
        cy.on('uncaught:exception', (err, runnable) => {return false})

        cy.visit("http://jsonplaceholder.typicode.com/")
        //injecting fake data and restricting to 5 posts
        cy.intercept('GET','/posts', {fixture:'example.json'}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })

})