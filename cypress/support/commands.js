// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('SignIn', ()=>{
    cy.visit('/#/login')
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'https:')
    cy.get('form').within(($form) => {
            // cy.get will only look for elements within form
        cy.get('input[type="email"]').type('knyazev.alexandr@gmail.com')
        cy.get('input[type="password"]').type('password')
        cy.root().submit()
        })
    cy.contains('Your Feed',{timeout: 10000}).should('be.visible')
    })

Cypress.Commands.add('LoginApi', ()=>{
    cy.request({
        method: 'POST',
        url: 'https://musik.yousee.dk/api/nocache/user/login',
        body:{
            // add correct login and passsword here
                username:'login',
                password:'password',
        }
    })
    .then((resp)=>{
        window.localStorage.setItem('jwt', resp.body.token)
        })
    })

    Cypress.Commands.add('Login', ()=>{
        cy.get('.btn-login').eq(1).click()
        cy.get('#login-email').type('ysmvip157')
        cy.get('#login-password').type('Qwerty123{enter}')  
        cy.get('.btn-login').eq(0).should('be.visible').and('have.text', 'Giv os feedback')

    })
// Cypress.Commands.add('GoHomePage', ()=>{
//     cy.visit('https://musik.yousee.dk/')
//     cy.get('.navheader__button-animation-main').click()
//     cy.get('.navshortcuts__item').eq(2).click()
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         expect(err.message).to.include('AutoJoinPolicy')
//         // returning false here prevents Cypress from
//         // failing the test
//         return false
        
//       })
//     cy.get('[data-qa="icon-accept-cookies"]').click()
// })

Cypress.Commands.add('GoHomePage', ()=>{
    cy.visit('https://musik.yousee.dk/')
    cy.visit('https://musik.yousee.dk/')
    Cypress.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('AutoJoinPolicy')
        // returning false here prevents Cypress from
        // failing the test
        return false
        
      })
    cy.get('[data-qa="icon-accept-cookies"]').click()
})

//Taylor swift new album  Folklore  'taylor swift folklore'