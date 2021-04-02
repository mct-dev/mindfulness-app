context("Home Page", () => {
  describe("When api responds with posts", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should find posts title", () => {
      cy.get("h1").contains(/posts/i);
    });

    it("should have list of posts", () => {
      cy.get("p").should("have.length.greaterThan", 1);
    });
  });

  describe("When api is loading", () => {
    it("should render loading element", () => {
      cy.intercept('/posts', {
        delay: 1000
      })

      cy.visit("/");
      cy.get("span").contains(/loading/i);
    });
  });
});
