// install plugin cypress-real-events by $ npm install --save-dev cypress-real-events --force
// put this statement ( import "cypress-real-events/support";) in support/e2e.js file

it('to test the tooltip when mouse is hovered over',function(){
cy.visit('https://www.w3schools.com/css/css_navbar_vertical.asp');
cy.get('#topnav > div > div.w3-bar.w3-left > a.topnav-icons.fa.fa-home.w3-left.w3-bar-item.w3-button.ga-nav').realHover().should("have.css", "color", "rgb(255, 255, 255)");
cy.get('#topnav > div > div.w3-bar.w3-left > a.topnav-icons.fa.fa-home.w3-left.w3-bar-item.w3-button.ga-nav').trigger('mouseover').should("have.css", "color", "rgb(241, 241, 241)");
})