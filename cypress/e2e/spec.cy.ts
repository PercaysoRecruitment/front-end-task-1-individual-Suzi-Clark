describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="instructions"]').should('have.attr', 'data-testid', 'instructions');
    cy.get('[data-testid="instructions"]').should('have.text', 'Take it in turns.0s go first.Get 3 in a vertical, horizontal or diagonal line to win.');
    cy.get('[data-testid="instructions"]').should('be.visible');
    cy.get('strong').should('have.text', 'Click a square to play!');
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Noughts & Crosses');
    cy.get('#play-again').should('not.exist');
    cy.get('h2').should('not.exist');
    cy.get(':nth-child(1) > [data-testid="game-button"]').click();
    cy.get(':nth-child(1) > [data-testid="game-button"]').should('have.text', '0');
    cy.get(':nth-child(1) > [data-testid="game-button"]').should('be.disabled');
    cy.get(':nth-child(2) > [data-testid="game-button"]').click();
    cy.get(':nth-child(2) > [data-testid="game-button"]').should('be.disabled');
    cy.get(':nth-child(2) > [data-testid="game-button"]').should('have.text', 'X');
    cy.get(':nth-child(4) > [data-testid="game-button"]').click();
    cy.get(':nth-child(4) > [data-testid="game-button"]').should('be.disabled');
    cy.get(':nth-child(4) > [data-testid="game-button"]').should('have.text', '0');
    cy.get(':nth-child(5) > [data-testid="game-button"]').click();
    cy.get(':nth-child(5) > [data-testid="game-button"]').should('be.disabled');
    cy.get(':nth-child(5) > [data-testid="game-button"]').should('have.text', 'X');
    cy.get(':nth-child(7) > [data-testid="game-button"]').click();
    cy.get('h2').should('have.text', '0\'s Win!!!');
    cy.get('h2').should('be.visible');
    cy.get('[data-testid="instructions"]').should('not.exist');
    cy.get('#play-again').should('have.text', 'Play Again?');
    cy.get('#play-again').should('have.attr', 'type', 'button');
    cy.get('#play-again').should('be.visible');
    cy.get('#play-again').should('be.enabled');
    cy.get('#play-again').click();
    cy.get('#play-again').should('not.exist');
  })
})

export {}