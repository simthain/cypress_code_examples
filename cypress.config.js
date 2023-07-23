const { verifyDownloadTasks } = require('cy-verify-downloads');
const { defineConfig } = require('cypress')

module.exports = defineConfig({

  env:{
    emailid:"simthain@gmail.com",
    password:"test"
  },

  reporter: 'cypress-mochawesome-reporter',  //for reports

  e2e: {
    baseUrl: 'https://reqres.in/api',
    
    chromeWebSecurity: false, 
    
    experimentalSessionAndOrigin:true,


    "env": {
      "auth_base_url": "https://access-uat.alberta.ca/auth",
      "auth_realm": "CCDS",
      "auth_client_id": "lic-fbp-fdh-app"
    },

    setupNodeEvents(on, config) {     
      // implement node event listeners here
      this.specPattern
      require('cypress-mochawesome-reporter/plugin') (on)  //for reports

      on('task', verifyDownloadTasks);
      

    },
  },
  
    
  
});


