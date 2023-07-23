class POClogin {
    //locators
    txtusername= "input[placeholder='Username']"
    txtpassword="input[placeholder='Password']"
    clicksubmit=".oxd-button"
    verify=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

//methods with action
setUserName(username)
{
// cy.get("input[placeholder='Username']").type(username)
    cy.get(this.txtusername).type(username)
}

setPassword(password)
{
// cy.get("input[placeholder='Password']").type(password)
    cy.get(this.txtpassword).type(password)
}

clickSubmit()
{
//    cy.get("button[type='submit']").click()
    cy.get(this.clicksubmit).click()
}

verifyLogin()
{
    // cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', "Dashboard")
    cy.get(this.verify).should('have.text', "Dashboard")

}

}

export default POClogin 
