
// When ('The user open Login page', () =>{
//     beforeEach(() => {
//         cy.visit('http://demo.realworld.io/#/login')
//     })  
// })
// // https://yousee-stage.b2b.247e.com/

When ('The user open Home page', () =>{
        cy.GoHomePage()
    })

Then ('Home page contains Log ind button', () =>{
    cy.url().should('include', 'https://musik.yousee.dk/')
    cy.get('.btn-login').eq(1).should('have.text', 'Log ind')
    })


When ('The user click on Log in button', () => {
    cy.get('.btn-login').eq(1).click()
    cy.get('.modal-login').should('be.visible').and('include.text', 'Log ind')
})

Then('Log in popup is displayed',()=>{
    cy.get('.modal-login').should('be.visible').and('include.text', 'Log ind')
})

// add correct login here
Then ('Can not log in without password, Log ind button is not active', () =>{
    cy.get('#login-email').type('login')
    cy.get('.login-buttons-section').within(($sections) =>{
        cy.get('button.btn').should('have.class', 'disabled').and('have.text', 'Log ind')
    })
})

And ('Can not log in with empty email and password', () =>{
    cy.reload()
    cy.get('.btn-login').eq(1).click()
    cy.get('.login-buttons-section').within(($sections) =>{
        cy.get('button.btn').should('have.class', 'disabled').and('have.text', 'Log ind')
    })
})

// add correct login here
When ('The user enter valid login and invalid password', () =>{
    cy.get('#login-email').type('login')
    cy.get('#login-password').type('invalid')
    
})

Then ('Error message is displayed', () =>{
    cy.get('.error')
        .should('contain', 'Du har indtastet forkert brugernavn eller adgangskode')
    cy.reload()
})


// add correct login and password here
Then('The user enter valid login and valid password', () =>{
    cy.get('#login-email').type('login')
    cy.get('#login-password').type('password{enter}')  
})

Then('The user is logged in', () =>{
    cy.url().should('contain', 'https://musik.yousee.dk/')
    cy.get('.btn-login').eq(0).should('be.visible').and('have.text', 'Giv os feedback')
})

When('The user click on Giv os feedback button', ()=>{
    cy.get('.btn-login').eq(0).click()
})

Then('The user is able to enter text')