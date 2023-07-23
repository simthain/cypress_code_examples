import POClogin from "../../PageObjects/POClogin" 
const ln=new POClogin();    //object of class 

describe('POM demo', ()=>{
    it.skip('Login test without POM', ()=>{
        
        //Approach without POM
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', "Dashboard")

    })

    it.skip('Login test with POM without fixture data', ()=>{
        //Approach with POM
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        // const ln=new POClogin();    //object of class 
        
        ln.setUserName("Admin")  //hard code data
        ln.setPassword("admin123")   //hard code data
           
        ln.clickSubmit()
        ln.verifyLogin()

    })


    it('Login test with POM and fixture data', ()=>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        // const ln=new POClogin();    //object of class 
        
        cy.fixture('orangehrm.json').then ( (data)=>{

            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
        
        
       

    })


})