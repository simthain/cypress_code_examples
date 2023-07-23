//to get data from the fixture file (API_post.json)
// const datajson= require('../../fixtures/API_post')

describe('POST demo', ()=>{

    let token='b8ac58fcf14c494912abd3e8a57835ea96b8ed2a16041df12ed24155914af1d9'
    let randomtext
    let temail

    it('demo 1', ()=>{

        //to generate random email text
        var pattern="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for(var i=0;i<10;i++)
        randomtext+=pattern.charAt(Math.floor(Math.random()*pattern.length))
        temail=randomtext + '@gmail.com'

       //to get data from the fixture file (API_post.json)
        cy.fixture('API_post').then((datajson)=>{

        cy.request({
            method: 'POST', 
            url:'https://gorest.co.in/public/v2/users', 
            headers:{
                'Authorization': 'Bearer '+ token 
            },
            body: { 
                "name": datajson.name,
                "email": temail,
                "gender": datajson.gender,
                "status": datajson.status
            }   
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name',datajson.name)
            expect(res.body).has.property('email',temail)
            expect(res.body).has.property('gender',datajson.gender)
            expect(res.body).has.property('status',datajson.status)

        })

    })

    })
})