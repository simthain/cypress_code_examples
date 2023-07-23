it("login using cypress-keycloak-commands",()=>{
    cy.kcLogout();
    cy.kcLogin('user');
})