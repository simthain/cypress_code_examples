///<reference types='Cypress'/>

describe('dropdown with select',()=>{

    it.skip('dropdown-test',()=>{   //skip means this block wont execute in the next round
        cy.visit('https://www.zoho.com/commerce/free-demo.html') 
        cy.get('#zcf_address_country')
        .select('India')
        .should('have.value','India')

    })

   
    it.skip('bootstrap-dropdown-without select-test',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        //open the dropdown list
        cy.get('#select2-billing_country-container').click()
       //input value in the textbox of the dropdown
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        //verifying the entered text 
        cy.get('#select2-billing_country-container').should('have.text','Italy')
    })

    it.skip('autosuggest-dropdown-without select-test',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        //open the dropdown list
        cy.get('input#searchInput').type('amritsar')
        //input value in the textbox of the dropdown
        // cy.get('div.suggestions-result').should('have.length',10)
        cy.xpath("//div[@class='suggestions-results']/a").contains('Amritsar 1919').click()
        // 
        
        //verifying the entered text 
        // cy.get('#select2-billing_country-container').should('have.text','Italy')
    })

    it('dynamic-dropdown-without select-test',()=>{
        cy.visit('https://www.google.com/')
    
        cy.get("[name='q']").type('thapar')
       
        cy.wait(1000)

        cy.get('div.wM6W7d>span').should('have.length',11)       //same as below but used css locator    
        
        // cy.xpath("//ul[@class='G43f7e']/li").should('have.length',10)
        // cy.xpath("//ul[@class='G43f7e']/li").contains('thapar surname').click()
        
        //jquery method, similar to above given contains>click, using each for each option where el is element having index in the list(array)
        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{         
                if($el.text()=='thapar surname')
                {
                    cy.wrap($el).click()

                }
        } )
        cy.wait(4000)
        cy.get(':nth-child(4) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()

        // cy.get("[name='q']").should('have.value', 'thapar')
    
    })



})