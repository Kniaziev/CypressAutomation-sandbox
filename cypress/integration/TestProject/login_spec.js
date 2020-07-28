describe('/login', () =>{
    beforeEach(() => {
        cy.visit('http://demo.realworld.io/#/login')
    })  

    it('greets with Sign in', () =>{
        cy.contains('h1', 'Sign in')
    })

    it('links to #/register', () =>{
        cy.contains('Need an account?').should('have.attr', 'href', '#/register')
    })
    
    it('requires email', () =>{
        cy.get('input[type="email"]').type('knyazev.alexandr@gmail.com{enter}')
        cy.get('.error-messages')
            .should('contain', 'email or password is invalid')
    })
    
    it('requires password', () =>{
        cy.get('form').contains('Sign in').click()
        cy.get('.error-messages')
            .should('contain', 'email or password is invalid')
    })
    
    it('requires valid username and password', () =>{
        cy.get('input[type="email"]').type('knyazev.alexandr@gmail.com')
        cy.get('input[type="password"]').type('invalid{enter}')
        cy.get('.error-messages')
            .should('contain', 'email or password is invalid')

    })
    
    it('navigates to #/ on succesful login', () =>{
        cy.get('input[type="email"]').type('knyazev.alexandr@gmail.com')
        cy.get('input[type="password"]').type('test4510698{enter}')
        cy.hash().should('eq', '#/')
    })
    
})