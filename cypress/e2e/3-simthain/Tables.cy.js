
describe('handle tables',()=>{

beforeEach('login',()=>{          //  called as Hook, execure before every other blocks
    cy.visit('https://demo.opencart.com/admin/index.php')
    //login page
    cy.get("#input-username").type("demo")
    cy.get("#input-password").type("demo")
    cy.get("button[type='submit']").click()
    
    //popup button closed
    cy.get(".btn-close").click()
    
    cy.get('#menu-customer').click()
    cy.get('#collapse-5>li:first-child').click()
    

})
    it.skip('check no. of rows and columns',()=>{

        //capture the no. of rows
        cy.get("[class='table table-bordered table-hover']>tbody>tr")
        .should('have.length',10)

        //capture the no. of columns
        cy.get("[class='table table-bordered table-hover']>thead>tr>td")
        .should('have.length',7)

})


it('get cell data from specific row & column',()=>{
    
    //reading email from row 7 and column 3
    cy.get("[class='table table-bordered table-hover']>tbody>tr:nth-child(7)>td:nth-child(3)")
    .should('have.text','pr@yopmail.com')

})



it.skip('read all rows and columns data from the 1st page',()=>{

    cy.get("table[class='table table-bordered table-hover']>tbody>tr")            //>tr:nth-child(7)>td:nth-child(3)")
    .each(($row,index,$rows)=>{     //row-specific row, index- it is index of each row, rows: captures all rows

        cy.wrap($row).within( ()=>{   //wrap is used to wrap/structure rows, within- used to wrap col data

             cy.get("td").each(($col,index,$cols)=>{

                cy.log($col.text())

            })
    })

    })

})


it.only('Pagination',()=>{

    //find total no. of pages

    cy.get("div[class='col-sm-6 text-end']").then( (e)=>{
        let mytxt=e.text()   //Showing 1 to 10 of 7715 (772 Pages)
        cy.log(mytxt)      //print the text in console
        let pgcount= mytxt.substring(mytxt.indexOf('(')+1, mytxt.indexOf('Pages')-1)
        cy.log("Total no. of pages in the table : " +pgcount)     // 772 (print total no. of pages)

        //to click only 2 pages 
        let pgscount=2
        for(let i=1;i<=pgscount;i++)       //to read data from only 5 pages
        {
            if(pgscount>1)
            {
                cy.log("Active page: " +i);     //print active page no.
                
                cy.get("ul[class='pagination']>li:nth-child("+i+")").click();
                cy.wait(2000);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each( ($row,index,$rows)=>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(3)').then( (e)=>{

                            cy.log(e.text())       //print email
                        })
                    })

                })

            }
        }

    })


})

})