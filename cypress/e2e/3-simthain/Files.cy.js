
import 'cypress-file-upload'

describe('file upload',()=>{

it('single file upload', ()=>{

    cy.visit('https://the-internet.herokuapp.com/upload')

    cy.get('#file-upload').attachFile('test1.txt',{allowEmpty:true})
    cy.get('#file-submit').click()
    cy.wait(2000)
    cy.get('h3').should('have.text','File Uploaded!')
})


it('file upload rename', ()=>{

    cy.visit('https://the-internet.herokuapp.com/upload')

    cy.get('#file-upload').attachFile({filePath:'test1.txt', fileName:'simran.pdf'},{allowEmpty:true})
    cy.get('#file-submit').click()
    cy.wait(2000)
    cy.get('h3').should('have.text','File Uploaded!')
    
})

it('file upload- drag and drop', ()=>{

    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#drag-drop-upload').attachFile('test1.txt',{subjectType:'drag-n-drop'})    
    

})

it('multiple files upload', ()=>{

    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    cy.get("#filesToUpload").attachFile(["test1.txt", "test2.txt"],{allowEmpty:true})
    cy.get(':nth-child(6) > strong')  
      .should('contain','Files You Selected:')
})

it.only('file upload -shadow dom', ()=>{

    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
    cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('test1.txt',{allowEmpty:true})
    cy.get('.smart-item-name',{includeShadowDom:true}).should('contain','test1.txt')

})


})
