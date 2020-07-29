Given ('The user is on the homepage', () =>{
    cy.visit('https://music.youtube.com/')
    })

When('The user click on play button', ()=>{
    cy.get('#content').within(($content) => {
        cy.get('#content').eq(1).trigger('mouseover')
        cy.get('#play-button').click()
    })  
})

// Then('Playback started',()=>{
//     cy.get('.search-results__bestresult').within(($topresult) => {
//         cy.get('[data-qa="image"]').trigger('mouseover')
//         //cy.get('[data-ng-click="playMenuService.playNow()"]')
//         cy.get('.play-button').click()
//         //cy.get('.play-menu__inner').within(($inner)=>{
//         //cy.get('[data-ng-click="playMenuService.playNow()"]').click()
//         //cy.get('[data-ng-click="playMenuService.playNow()"]').click()
//         //})
//     })
//     cy.contains('Okay').click()
//     cy.wait(2000)
//     //cy.get('.player-time-played').should('not.have.text', '0:00')
//     cy.get('.player-time-played').should('have.text', '0:00')
// })