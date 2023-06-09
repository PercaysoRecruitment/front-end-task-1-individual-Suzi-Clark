/* eslint-disable sonarjs/no-duplicate-string */
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    const instructions = cy.get('[data-testid="instructions"]');
    instructions.should('have.attr', 'data-testid', 'instructions');
    instructions.should('have.text', 'Take it in turns.0s go first.Get 3 in a vertical, horizontal or diagonal line to win.');
    instructions.should('be.visible');
    cy.get('strong').should('have.text', 'Click a square to play!');
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Noughts & Crosses');
    cy.get('#play-again').should('not.exist');
    cy.get('h2').should('not.exist');
    const topLeft = cy.get(':nth-child(1) > [data-testid="game-button"]');
    topLeft.click();
    topLeft.should('have.text', '0');
    topLeft.should('be.disabled');
    const topMid = cy.get(':nth-child(2) > [data-testid="game-button"]');
    topMid.click();
    topMid.should('be.disabled');
    topMid.should('have.text', 'X');
    const midLeft = cy.get(':nth-child(4) > [data-testid="game-button"]');
    midLeft.click();
    midLeft.should('be.disabled');
    midLeft.should('have.text', '0');
    const midMid = cy.get(':nth-child(5) > [data-testid="game-button"]');
    midMid.click();
    midMid.should('be.disabled');
    midMid.should('have.text', 'X');
    const bottomLeft = cy.get(':nth-child(7) > [data-testid="game-button"]');
    bottomLeft.click();
    cy.get('h2').should('have.text', '0\'s Win!!!');
    cy.get('h2').should('be.visible');
    cy.get('[data-testid="instructions"]').should('not.exist');
    const playAgainButton = cy.get('#play-again');
    playAgainButton.should('have.text', 'Play Again?');
    playAgainButton.should('have.attr', 'type', 'button');
    playAgainButton.should('be.visible');
    playAgainButton.should('be.enabled');
    playAgainButton.click();
    playAgainButton.should('not.exist');
  });
});

export {};
