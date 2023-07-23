
 //cypress automatically handles(close) alerts by pressing ok button
    // Examples of alerts are simple alert(ok button), confirm alert(with ok cancel), prompt alert(with ok, cancel and textbox)
    

describe('javascripts simple alert',()=>{

    it.skip('simple alert',()=>{  //"it.skip" is used to skip this block during execution
    
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsAlert()']").click()

    //verify that alert was there by comparing its message
    cy.on('window:alert',(t)=>{

        expect(t).to.contains('I am a JS Alert')
    })
    //another check to verify that alert was ok pressed
    cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })


    it.skip('confirm alert with ok,cancel-ok button pressed',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsConfirm()']").click()

    //OK is clicked(which is default behavior)

    //verify that alert was there by comparing its message
    cy.on('window:confirm',(t)=>{

        expect(t).to.contains('I am a JS Confirm')
    })
    //another check to verify that alert was ok pressed
    cy.get('#result').should('have.text', 'You clicked: Ok')

})
    
it.skip('confirm alert with ok,cancel-CANCEL button pressed',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsConfirm()']").click()
    //verify that alert was there by comparing its message
    cy.on('window:confirm',(t)=>{
    expect(t).to.contains('I am a JS Confirm')
    })

    cy.on('window:confirm',()=>false);      //instead of false(cancel), true is default

    cy.get('#result').should('have.text', 'You clicked: Cancel')


    })

    it(' JS prompt-with textbox, ok & cancel button',()=>{     //only is used to skip(no need for skip method) other blocks and execute only this block

        //cypress automatically handles(close) alerts, confirm alert with ok cancel, alerts with prompts, textboxes
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

   //before clicking, button enter text in the prompt
    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('welcome')
    })
    
    cy.get("button[onclick='jsPrompt()']").click()
    cy.get('#result').should('have.text', 'You entered: welcome')

    })


    it(' authenticated alert-username,password',()=>{     //only is used to skip(no need for skip method) other blocks and execute only this block


        //approach 1
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:
                                                            {
                                                                username:"admin", 
                                                                password:"admin"
                                                            }
                                                        }
            )
    //verification of successful authenticatoin
    cy.get('p').contains('Congratulations')
    //or
    cy.get('p').should('have.contain','Congratulations') 
    


    //approach 2 (username, password given in the URL before @symbol)
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')


})

})