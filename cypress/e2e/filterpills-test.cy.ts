describe("Filter Pill Buttons Test", () => {

  beforeEach(() => {
    cy.viewport("macbook-16"); //1536x960 pixels viewport
    cy.visit("https://www.target.com/s?searchTerm=nintendo"); // Go to the nintendo search results page

    // Make sure you are on the search results page
    cy.url().should("contain", "searchTerm=nintendo");
    cy.get('[data-test="resultsHeading"]').contains('results for “nintendo”');
  });

  describe("Filter pills", () => {
    it("First filter pill should open 'All filters' modal drawer", () => {
      // Click on the first filter pill button
      cy.get('[data-test="filters-menu"]').click();
      cy.get('[data-test="modal-drawer-heading"]').contains("All filters");
      cy.get('[data-test="@web/OverlayModal"]').should('exist');

      // Check that modal has selections from the "All filters list"
      cy.get('[data-test="content-wrapper"]').contains("Sort");
      cy.get('[data-test="content-wrapper"]').contains("Include out of stock");
      cy.get('[aria-label="Reset"]').should("be.visible");
      cy.get('[aria-label="Update"]').should("be.visible");
    })

    it("Attribute selection should reduce items on results page", () => {
      cy.get('[data-test="resultsHeading"]') // Get the inital search results count
        .numResults() // use custom command numResults to get the numerical value of the resultsHeading
        .then((initialValue) => {

        // Select "Category - Toys" attribute
        cy.contains("Category").click();
        cy.contains("Toys").click();

        cy.wait(7000); // Give some time to load page changes
        cy.get('[data-test="@web/OverlayModal"]').should('not.exist');

        // Get the updated search results count
        cy.get('[data-test="resultsHeading"]')
          .numResults()
          .then((updatedValue) => {

          // Verify that the updated search results count is less than the initial count
            expect(updatedValue).to.be.lessThan(initialValue);
        });
      });
    })
  });
})