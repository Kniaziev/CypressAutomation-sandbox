
// When ('The user open Login page', () =>{
//     beforeEach(() => {
//         cy.visit('http://demo.realworld.io/#/login')
//     })  
// })
// // https://yousee-stage.b2b.247e.com/

Given ('The user is logged in', () =>{
        cy.GoHomePage()
        cy.Login()
        cy.get('.btn-login').eq(0).should('be.visible').and('have.text', 'Giv os feedback')
    })

When('The user click on Giv os feedback button', ()=>{
    cy.get('.btn-login').eq(0).click()
})

Then('The user is able to enter text and send it',()=>{
    cy.get('[name="userFeedback"]').type('test cypress feedback'+ Cypress.moment().format(' MMM DD, YYYY, HH:mm:ss'))
    cy.contains('Send').click()
    cy.contains('Vi har modtaget dit feedback!').should('be.visible')
})