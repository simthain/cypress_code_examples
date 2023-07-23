describe('API oauth demo',()=>{
let access_token=''
let userid=''

    beforeEach(()=>{
        
        //pass the credentials
        cy.request({
          method : 'POST',
          url:  'http://coop.apps.symfonycasts.com/token',
          form: true,
          body:{
            "client_id" : "SimTha",
            "client_secret" : "75b2afd3f30a4717b004b60023936f93",
            "grant_type" : "client_credentials"
          }
        }).then(res=>{
            cy.log(JSON.stringify(res))
            cy.log(res.body.access_token)
            access_token=res.body.access_token
            
            //to get the user id
            cy.request({
                method: 'GET',
                url:'http://coop.apps.symfonycasts.com/api/me',
                headers: {
                    'Authorization' : 'Bearer ' + access_token
                }
            }).then(res=>{
                userid=res.body.id
                cy.log("user id : "+ userid)
               
            }) 
        })

    })

    it('API- chickens feed ',()=>{

        cy.request({
            method:'POST',
            url:'http://coop.apps.symfonycasts.com/api/'+userid+'/chickens-feed',
            headers: {
                'Authorization' : 'Bearer ' + access_token
            }
         }).then(res=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.equal(200)

         })

    })
    
    it('API - toiletseatdown',()=>{

        cy.request({
            method:'POST',
            url:'http://coop.apps.symfonycasts.com/api/'+userid+'/toiletseat-down',
            headers: {
                'Authorization' : 'Bearer ' + access_token
            }
         }).then(res=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.equal(200)

         })

    })

    it('API - barn-unlock ',()=>{

        cy.request({
            method:'POST',
            url:'http://coop.apps.symfonycasts.com/api/'+userid+'/barn-unlock',
            headers: {
                'Authorization' : 'Bearer ' + access_token
            }
         }).then(res=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.equal(200)

         })

    })


})