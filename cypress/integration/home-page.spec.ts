context('Assertions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should find posts title', () => {
    cy.get('h1').contains(/posts/i)
  })

  it('should have list of posts', () => {
    // works with async calls! cypress waits for the posts to show up
    cy.get('p').should('have.length.greaterThan', 1)
  })
})