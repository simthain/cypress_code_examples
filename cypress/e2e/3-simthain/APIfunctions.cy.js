
const urlf='https://fakerestapi.azurewebsites.net/api/v1/Activities/';

const postobj= 
{
    "id":31,
    "title":"Activity 31-Simran",
    "dueDate":"2022-12-19T08:09:29.8739779+00:00",
    "completed":true
}
const getobj= {"id":8,"title":"Activity 8","dueDate":"2022-12-18T10:17:43.7794769+00:00","completed":true};

const putobj= {"message":"hello hows !!Error Occured! Page Not found, contact rstapi2example@gmail.com"}

describe('API functions- Get, POST, Patch, Delete', ()=>{

it.only('Get function',()=>{
    cy.request('GET', urlf)
    .its('body')
    .should('deep.eq',getobj).end()
    

})

it('Post function',()=>{
    cy.request('POST', urlf,postobj)    
})

it('PUT function',()=>{

    cy.request('PUT', 'https://dummy.restapiexample.com/public/api/v1/update/21')
    .its('body')
    .should('contains',putobj)
})

it('Delete function',()=>{
    cy.request('DELETE', 'https://dummy.restapiexample.com/public/api/v1/update/${item.id}')

    
})

it('Delete all function',()=>{
    cy.request('https://dummy.restapiexample.com/public/api/v1/update/')
    .its('body')
    .each(cy.request('DELETE', `https://dummy.restapiexample.com/public/api/v1/update//${item.id}`))
    
})





})