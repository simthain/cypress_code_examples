
import 'cypress-iframe'
import '@4tw/cypress-drag-drop'

describe('mouseoperations',()=>{

beforeEach('open page',()=>{

})

it('mouse hover',()=>{

    cy.visit('https://demo.opencart.com/')

    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
    
    cy.get("div[class='dropdown-menu show']>div>ul>li>a:nth-child(1)")
    .should('be.visible')

}) 

it('right click',()=>{

    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    //Approach 1
    // cy.get("span[class='context-menu-one btn btn-neutral']").trigger('contextmenu')
    // cy.get('.context-menu-icon-copy > span').should('be.visible')

    
    //Approach 2
    cy.get("span[class='context-menu-one btn btn-neutral']").rightclick()
    cy.get('.context-menu-icon-copy > span').should('be.visible')


})

it('double click',()=>{

cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
cy.frameLoaded('iframeResult') //loaded frame

cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World')
})

it.skip('drap and drop using plugin',()=>{
//plugin is used for this by executing command(npm install --save-dev @4tw/cypress-drag-drop)

cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

cy.wait(2000)
cy.get('#box4').drag('#box106')

})

it('scroll page',()=>{

    cy.visit('https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/')

    cy.get("a[href='/world-population/canada-population/']").scrollIntoView({duration:2000});
    cy.get("a[href='/world-population/canada-population/']").should('be.visible')

    
})


it.only('Show hidden contents',()=>{

    cy.visit('https://automationexercise.com/test_cases')
    
    // cy.get('.panel-title>a>u').first().click()
    
    //or
    cy.get('.panel-title a u').contains('Test Case 1:').click()


    


    
})

})