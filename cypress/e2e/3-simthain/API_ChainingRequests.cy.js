//to get data from the fixture file (API_post.json)
// const datajson= require('../../fixtures/API_post')


//this code is used to get specific data and then pass it to the next request

describe('Request chaining demo', ()=>{

    let token='b8ac58fcf14c494912abd3e8a57835ea96b8ed2a16041df12ed24155914af1d9'  //generated from website to authenticate login

    it('Request chaining', ()=>{

        //Use of GET to verify data
        cy.request
        ({
            method: 'GET', 
            url:'https://gorest.co.in/public/v2/users/', 
            headers: {'Authorization': 'Bearer '+ token} 

        }).then((resp)=>{
            expect(resp.status).to.equal(200)
            const testId=resp.body[0].id
            // cy.log(testId)  
            return testId
        }).then((testId)=>{
            cy.request({
                method:'GET',
                url:'https://gorest.co.in/public/v2/users/'+testId,
                headers: {'Authorization': 'Bearer '+ token} 
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body).to.have.property('id',testId)
                cy.log("After chaining, id is: "+ resp.body.id)
            })
        })

    })


    it.only('Request chaining- using for loop ', ()=>{

        //Use of GET to verify data
        cy.request
        ({
            method: 'GET', 
            url:'https://gorest.co.in/public/v2/users/', 
            headers: {'Authorization': 'Bearer '+ token} 

        }).then((resp)=>{
            expect(resp.status).to.equal(200)
            expect(resp.body).to.have.length(10)
            const ele=resp.body
            return ele
        }).then((ele)=>{
            
           for (let i=0;i<ele.length;i++)
           {
                cy.request({
                method:'GET',
                url:'https://gorest.co.in/public/v2/users/'+ele[i].id,
                headers: {'Authorization': 'Bearer '+ token} 
                })
                .then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body).to.have.property('email', ele[i].email )
                })
           }
        })

    })

})