//to get data from the fixture file (API_post.json)
// const datajson= require('../../fixtures/API_post')

describe('PUT demo', ()=>{

    let token='b8ac58fcf14c494912abd3e8a57835ea96b8ed2a16041df12ed24155914af1d9'
    let randomtext
    let temail

    it('PUT demo', ()=>{

        //to generate random email text
        var pattern="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for(var i=0;i<10;i++)
        randomtext+=pattern.charAt(Math.floor(Math.random()*pattern.length))
        temail=randomtext + '@gmail.com'

       //to get data from the fixture file (API_post.json)
        // cy.fixture('API_post').then((datajson)=>{

        cy.request({
            method: 'POST', 
            url:'https://gorest.co.in/public/v2/users', 
            headers:{
                'Authorization': 'Bearer '+ token 
            },
            body: { 
                //values from fixture file
                // "name": datajson.name,
                // "email": temail,
                // "gender": datajson.gender,
                // "status": datajson.status

                //hard code values
                "name": "sheru singh shera",
                "email": temail,
                "gender": "male",
                "status": "active"
            }   
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            // expect(res.body).has.property('name',datajson.name)
            // expect(res.body).has.property('email',temail)
            // expect(res.body).has.property('gender',datajson.gender)
            // expect(res.body).has.property('status',datajson.status)
            expect(res.body).has.property('name','sheru singh shera')
            expect(res.body).has.property('email',temail)
            expect(res.body).has.property('gender','male')
            expect(res.body).has.property('status','active')

         // }).then((res)=>{
                   
         const userId=res.body.id
         cy.log("user id is : "+userId)
     
     //Use of PUT to modify data
     cy.request
     ({
         method: 'PUT', 
         url:'https://gorest.co.in/public/v2/users/'+userId, 
         headers:
         {
             'Authorization': 'Bearer '+ token 
         },
         body: { 
            //hard code values
            "name": "TEST singh TEST",
            "email": temail,
            "gender": "male",
            "status": "active"
        }   
     }).then((res)=>
     {
         expect(res.status).to.eq(200)
         expect(res.body).has.property('id',userId)
         expect(res.body).has.property('name','TEST singh TEST')
        expect(res.body).has.property('email',temail)
        expect(res.body).has.property('gender','male')
         expect(res.body).has.property('status','active')
     })

     
         //Use of GET to verify data
     cy.request
     ({
         method: 'GET', 
         url:'https://gorest.co.in/public/v2/users/'+userId, 
         headers:
         {
             'Authorization': 'Bearer '+ token 
         } 
     }).then((res)=>
     {
         expect(res.status).to.eq(200)
         expect(res.body).has.property('id',userId)
         expect(res.body).has.property('name','TEST singh TEST')
        expect(res.body).has.property('email',temail)
        expect(res.body).has.property('gender','male')
         expect(res.body).has.property('status','active')
     })

     })

     })

 })