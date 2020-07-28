const { exists } = require("cypress/lib/fs")

describe('Create and mark-unmark as favorite', function(){

    Cypress.config('pageLoadTimeout', 100000)

    before (function(){
        cy.SignIn()
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
        //adding ot favorite
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        //unfavorite first item in a favorited list with 1 like
        cy.get('.btn-primary').first().then(($fav)=>{
            const favCount = $fav.text()
            expect(parseInt(favCount)).to.eq(1)
        }).click()
        cy.reload()
 
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        //cy.go(-1)  same as go back
        //cy.go(1)  same as go forward
    })
})
