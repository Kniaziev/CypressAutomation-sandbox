Given ('The user is logged in', () =>{
        cy.GoHomePage()
        cy.Login()
        //cy.get('.btn-login').eq(0).should('be.visible').and('have.text', 'Giv os feedback')
    })

When('The user perform a search', ()=>{
    cy.get('.search__btn').click()
    cy.get('input[type="search"]').eq(1).type('taylor swift folklore{enter}')
    cy.get('.search-results__bestresult').within(($topresult) => {
        cy.get('[data-qa="album"]').should('contain.text','folklore' )
    })  
})

Then('The user is able to start playback from search results',()=>{
    cy.get('.search-results__bestresult').within(($topresult) => {
        cy.get('[data-qa="image"]').trigger('mouseover')
        //cy.get('[data-ng-click="playMenuService.playNow()"]')
        cy.get('.play-button').click()
        //cy.get('.play-menu__inner').within(($inner)=>{
        //cy.get('[data-ng-click="playMenuService.playNow()"]').click()
        //cy.get('[data-ng-click="playMenuService.playNow()"]').click()
        //})
    })
    cy.contains('Okay').click()
    cy.wait(2000)
    //cy.get('.player-time-played').should('not.have.text', '0:00')
    cy.get('.player-time-played').should('have.text', '0:00')
})