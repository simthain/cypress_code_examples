
/*
Hooks in cypress: 

before - execute once before all blocks (once)
afte- execute once after all blocks (once)
beforeEach- will execute before each it block(multiple)
AfterEach - will execute after each it block(multiple)
 
Tags

it.skip- to skip particular block
it.only- to execute particular block



*/

describe('tags and hooks', ()=>{

before(  ()=>{
cy.log("------before  ------")
})

after( ()=>{
    cy.log("---------after --------")
})
  
afterEach( ()=>{
    cy.log("---------afterEach --------")
})

beforeEach( ()=>{
    cy.log("---------beforeEach --------")
})

it('search', ()=>{
cy.log("********* searching ************")


})


it('advanced search',()=>{
    cy.log("********* advanced   seaching ************")

    
})


it('listing products',()=>{
    cy.log("********* listing product ************")

})


})