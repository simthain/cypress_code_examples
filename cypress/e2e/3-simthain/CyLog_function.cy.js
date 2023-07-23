
/*to do this, follow below given steps (https://www.programsbuzz.com/article/cypress-verify-file-download)
step 1. run 
            npm i -D cy-verify-downloads

Step 2: Add the below line to your project's cypress/support/e2e.js

        require('cy-verify-downloads').addCustomCommand();

Step 3: Add the following lines of code to your project's cypress.config.js

    const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
    },
  },
});


*/
describe('verify download',function(){

    it('verify download',function(){
        // cy.visit('https://cert-sit.alberta.ca/')

        // cy.get('p > .goa--secondary').then((el)=>{
        //     el.attr('download','')})
        //     .click()
        
        // cy.readFile('cypress/downloads/CDEV3904.pdf');
        // cy.verifyDownload('CDEV3904.pdf');
        // cy.isFileExist('CDEV3904.pdf')
        cy.log('normal')    //normal grey color
        cy.log('**simran thapar**') //bold white color, use ** befre and after
        cy.log('_fgfgfgfgfdgdf_')           //italic message use underscore "_" before and after
        cy.log('[i m h bgv ffdsdsfsd sdfsdfdsfsdf sdffgsdfsd ]()')  //use text inside [] followed by ()  to BLUE color
        
      

    })
})