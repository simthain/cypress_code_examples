//refer LODASH official page for more methods  https://lodash.com/docs/4.17.15#times

it('examples of lodash random function',function(){
let projectName;
    //random number
    projectName = `my random project ${Cypress._.random(1e5)}`;  //1e5 means  5 digit number
    cy.log(projectName)

    projectName = `my random project ${Cypress._.random(70, 1e2)}`; //1e2 means  2 digit number starting from 70
    cy.log(projectName)
    
})

it.only('random number with string',function(){
function randomStrNum(str){
//    return str+`${Cypress._.random(1e3)}`;  
   //or
   return str+Cypress._.random(1e3);
} 

cy.log("Number: "+ran('Test'))


});

it('Lodash uniqueId number',function(){
    const uniqueSeed = Date.now().toString();
    // const unique='1'
    const getUniqueId = () => Cypress._.uniqueId(uniqueSeed);
    cy.log(getUniqueId());
})
it('another random number using Math.random()',function(){

    // Math.random() Math is an object and random is a mehtod, it alone will generate float number between 0 and 1
    // Math.floor() here, floor gives the integer number(not the float), it is preferred over MAth.round since it gives uniform distribution
    // in other words, round gives half a chance to come out as an outcome among the given range of numbers. 
    // Using Math.floor() will give you perfectly even distribution

    const random=Math.random()
      cy.log('Simple random number: '+ random) //generate float number between 0 and 1

      const random0= Math.random()*100 //provide random FLOAT numbers between 0 to 100  
      cy.log('Random 0: '+ random0)

    const random1= Math.floor(Math.random()*1000) //provide random INTEGER numbers between 0 to 1000
        cy.log('Random 1: '+ random1)

    const random2= Math.floor(Math.random()*10)+2
    cy.log('Random 2: '+ random2)

    let max=50,min=35
    const random3= Math.floor(Math.random()*(max-min+1))+min       //50-10+1=41+10=51 it gives random INT number between given range, +1 start the number from 1 upto given range
    cy.log('Random 3: '+ random3)


    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length)); 
      cy.log('text:'+text)


   

})