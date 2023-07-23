it("count number of text appearance on page",()=>{
  cy.visit('https://cert-sit.alberta.ca/')
/
  cy.get('div p:contains("Alberta.ca Account")').invoke('css','border','8px solid red').then(count=>{
    // el.get('div a:contains("Alberta.ca Account').
    cy.get('div p:contains("Alberta.ca Account")').invoke('css','border','8px solid red').then(countr=>{
       
      cy.log('Total ' + (count.length + countr.length) +' text found on the page')
    
    
    })
})

})


// it('count of strings',()=>{
//     cy.visit('https://cert-sit.alberta.ca/')

// let count = 0
// cy.get('.col-third:nth-child(3)')
//   .each(($li) => {
//     if ($li.text().match('to')) {
//       count += 1
//     }
//   })
//   .then(() => {
//     // by the time ".each" is finished, the count has been updated
//     expect(count).to.equal(3)
//   })


// let count = 0
// cy.get('.col-third:nth-child(3)')
//   .each(($li) => {
//     if ($li.text() === 'to') {
//       count += 1
//     }
//   })
//   .then(() => {
//     // by the time ".each" is finished, the count has been updated
//     expect(count, 'to').to.equal(3)
//   })

// })