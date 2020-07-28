
// When ('The user open Login page', () =>{
//     beforeEach(() => {
//         cy.visit('http://demo.realworld.io/#/login')
//     })  
// })
// // https://yousee-stage.b2b.247e.com/

When ('The user open Login page', () =>{
        cy.visit('http://demo.realworld.io/#/login')
})

Then ('Login page greets with Sign in', () =>{
    it('greets with Sign in', () =>{
        cy.contains('h1', 'Sign in')
    })
})

Then ('Need an acccount links to register', () => {
    it('links to #/register', () =>{
        cy.contains('Need an account?').should('have.attr', 'href', '#/register')
    })
})

Then ('Can not log in without password', () =>{
    cy.get('input[type="email"]').type('knyazev.alexandr@gmail.com{enter}')
    cy.get('.error-messages')
        .should('contain', 'email or password is invalid')
})

And ('Can not log in with empty email and password', () =>{
    cy.reload()
    cy.get('form').contains('Sign in').click()
    cy.get('.error-messages')
        .should('contain', 'email or password is invalid')
})

Then ( 'Valid username and password required', () =>{
    cy.get('input[type="email"]').type('knyazev.alexandr@gmail.com')
    cy.get('input[type="password"]').type('invalid{enter}')
    cy.get('.error-messages')
        .should('contain', 'email or password is invalid')

})

And ('navigates to correct url on succesful login', () =>{
    cy.reload()
    cy.get('input[type="email"]').type('knyazev.alexandr@gmail.com')
    cy.get('input[type="password"]').type('test4510698{enter}')
    cy.hash().should('eq', '#/')
})