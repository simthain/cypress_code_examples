import 'cypress-iframe'

describe('frames',()=>{

    it('Approach 1: frame handling',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
    
        const iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type("welcome {control+a}")
        cy.get ("[aria-label='Bold']").click()
    })


    it('Approach 2: by creating custom command in commands.js',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
    
        cy.getiframe('#mce_0_ifr').clear().type("welcome {control+a}")
        cy.get ("[aria-label='Bold']").click()
    })


    
    it('Approach 3: by installing iframe plugin,npm install -D cypress-iframe',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
    
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("welcome {control+a}")
        cy.get ("[aria-label='Bold']").click()
    })

})