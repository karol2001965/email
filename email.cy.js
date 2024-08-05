describe("create",()=>{
it("createemail",()=>{
    cy.visit("tutaj nazwa strony")



     cy.get('#loginId').type('krasnystawtest01')
     cy.get('#passwordId').type('!Ranek123456')
     cy.get('[ng-pattern="!Ranek123456"]').type('!Ranek123456')
     cy.get('[ng-model="regData[inputs.recoveryData]"]').type('xdasdadqweqwr@int.pl')
     cy.get('[placeholder="DD"]').type('12')
     cy.get('[placeholder="MM"]').type('12')
     cy.get('[placeholder="RRRR"]').type('1994')
     cy.get('[for="sexId"]').click()
     cy.get('[type="checkbox"]').check({ force: true })
     cy.get('[data-track-click="regClickCreate"]').click()







})


})
