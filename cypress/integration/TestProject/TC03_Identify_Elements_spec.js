describe('Create and mark-unmark as favorite', function(){
    it ('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        //cy.get('input[type="email"]').type('qamilestone.academy@gmail.com')
        //cy.get('input[type="password"]').type('admin123')
        //cy.get('.btn').contains('Sign in').click()
        //cy.get('button[type="submit"]').should('be.visible').click()

        cy.get('form').within(($form) => {
            // cy.get will only look for elements within form
            cy.get('input[type="email"]').type('qamilestone.academy@gmail.com')
            cy.get('input[type="password"]').type('admin123')
            cy.root().submit()

        })
        cy.contains('Your Feed',{timeout: 10000}).should('be.visible')
    })

    it ('Create a post', function(){
        //cy.contains('New Post').click()
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.get('form').within(($form) => {
            //cy.get('input[placeholder="Article Title"]').type('hello world title')
            cy.get('input').first().type('hello world title')
            cy.get('input').eq(1).type('hello world about')
            cy.get('textarea').type('hello world markdown')
            cy.get('input').last().type('Ukraine')
            cy.get('button[type="button"]').click()
            })

        cy.get('h1').should('have.text', 'hello world title')
        cy.url().should('include', 'article')
        })

    it ('mark-unmark as favorite', function(){
        cy.get('.nav-link').contains('kimono').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        //cy.go(-1)  same as go back
        //cy.go(1)  same as go forward

    })
})
