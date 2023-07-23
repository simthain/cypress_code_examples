// with this user login to website automatically and remain login as the jwt(token) is set to the browser.
// visit this link:  https://www.youtube.com/watch?v=8X7DygJ2woc
const urladdress='https://api.realworld.io/api/users/login'

beforeEach(()=>{
    cy.loginbysession('simthain@gmail.com','test')

})
it.skip('automatic login using API and storing token in browser ', {env:{urladd:urladdress}},()=>{

    const web=Cypress.env('webadd')     //this is to shorten the length of the statement


    cy.request({
        url:Cypress.env('urladd'),  //this env variable is declared in the test itself and its on test level, if variable is declared in describe then it will be entire test suite.
        method:'POST',
        body:{
            user: {email: Cypress.env('emailid'), password: Cypress.env('password')} //this variable is stored in cypress.config.js file
        },
    }).its('body')
    .then(res=> localStorage.setItem('jwt',res.user.token))  //token is stored to localstorage
    .then(resp=> cy.log(resp.user.token))  //this statement is additional to show the token
    cy.visit(web) //this variable is stored in cypress.env.json file, it is exclusive file for env. variables
})

it('login persistance using session1',()=>{
    // const login = (name) => {
    // Cypress.session.clearAllSavedSessions()   
    // cy.loginbysession('simthain@gmail.com','test')  //session command is created in the commands.js, to login only once

    cy.log("login 1")
        // cy.visit('https://react-redux.realworld.io/#/login')
        // cy.get(':nth-child(1) > .form-control').type(Cypress.env('emailid'))
        // cy.get(':nth-child(2) > .form-control').type(Cypress.env('password'))
        // cy.get('.btn').click()
        // const loginname=cy.get(':nth-child(4) > .nav-link')
        // loginname.should('exist')
})
it('login 2',()=>{
    // cy.loginbysession('simthain@gmail.com','test')

    cy.log("login 2")
        //session command is created in the commands.js, to login only once

})