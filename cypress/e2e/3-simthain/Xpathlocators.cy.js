describe("xpathlocator",()=>{

    it("xpathtest1-find no of photos",()=>{
        cy.visit("https://www.rediff.com/")
        cy.xpath("//div[@id='topdiv_0']//a").should('have.length',6)
    }) 
    
    it("xpathtest2-chained xpath demo",()=>{
        cy.visit("https://www.rediff.com/")
        cy.xpath("//div[@id='topdiv_0']").xpath("//a").should('have.length',6)      //split xpath
    }) 

})