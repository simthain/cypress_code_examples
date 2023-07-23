//cypress can't handle child windows, it has workaround
//of removing the new window value in the target attribute, and 
//secondly, by directly opening the new link

describe('child windows',()=>{

it('Approach 1:removing target attribute',()=>{

cy.visit('https://the-internet.herokuapp.com/windows')
//opening a window in the same window by removing 'target' attribute
cy.get("div.example>a").invoke('removeAttr','target').click()

cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
cy.get("div.example>h3").contains('New Window')

//going backward to parent window
cy.go('back')
})

it('Approach 2: directly opening new window from its link',()=>{

    cy.visit('https://the-internet.herokuapp.com/windows')
    
    cy.get("div.example>a").then((a)=>{
        let url=a.prop('href');
        cy.visit(url);

    })

    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
    cy.get("div.example>h3").contains('New Window')
    
    //going backward to parent window
    cy.go('back')
    })

})