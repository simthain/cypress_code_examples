//to get data from the fixture file (API_post.json)
// const datajson= require('../../fixtures/API_post')


//this code is used to delete data using DELETE method
// and then verify the delete data using its id value through get method

describe('Delete demo', ()=>{

    let token='b8ac58fcf14c494912abd3e8a57835ea96b8ed2a16041df12ed24155914af1d9'  //generated from website to authenticate login
    let randomtext
    let temail

    it('Delete demo', ()=>{

        //Use of POST to create data first
        cy.request({
            method: 'POST', 
            url:'https://gorest.co.in/public/v2/users', 
            headers:{
                'Authorization': 'Bearer '+ token 
            },
            body: { 
                "name": "TEST",
                "email": "TEST9@gmail.com",
                "gender": "male",
                "status": "active"
            }   
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            cy.log(res.body.id)
            expect(res.body).has.property('name','TEST')
            expect(res.body).has.property('email','TEST9@gmail.com')
            expect(res.body).has.property('gender','male')
            expect(res.body).has.property('status','active')
        // }).then((res)=>{        //
                   
            const userId=res.body.id
            cy.log("user id is: ",userId)
        //Use of DElete to delete data
            cy.request ({
            method: 'Delete', 
            url:'https://gorest.co.in/public/v2/users/'+userId, 
            headers:
            {
                'Authorization': 'Bearer '+ token 
            } 
        }).then((res)=>
        {
            expect(res.status).to.eq(204)
            
        })

        })

        })

    })
// })