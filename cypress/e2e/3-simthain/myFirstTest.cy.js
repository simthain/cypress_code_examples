describe('suite name', ()=>{
   

    it('test 1-positive test',()=>{
        cy.visit('https://www.sql-practice.com/')
        cy.title().should('eq','Learn SQL - Online SQL Terminal - Practice SQL Querys')
    })

    it('test 2-negative test',function(){
        cy.visit('https://www.sql-practice.com/')
        cy.title().should('eq','SQL - Online SQL Terminal - Practice SQL Querys')
    })

    it("count number of text appearance on page",()=>{
        cy.visit('https://cert-sit.alberta.ca/')
      /
        cy.get('div p:contains("Alberta.ca Account")').invoke('css','border','8px solid red').then(count=>{
          // el.get('div a:contains("Alberta.ca Account').
          cy.get('div p:contains("Alberta.ca Account")').invoke('css','border','8px solid red').then(countr=>{
             
            cy.log('Total ' + (count.length + countr.length) +' text found on the page')
          
          
          })
      })
})
 
