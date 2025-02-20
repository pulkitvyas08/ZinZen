/// <reference types="cypress" />
describe("Basic Tests Home Page", () => {
    it("nav-bar should work", () => {
        cy.visit("/");
        cy.contains("Home");
        cy.contains("Discover");
        cy.contains("Donate");
    });

    it("should have Home Page title", () => {
        cy.visit("/");
        cy.get('[alt="ZinZen Logo"]').should("be.visible");
        cy.get('[alt="ZinZen Text Logo"]').should("be.visible");
        cy.contains("Realize");
        cy.contains("dreams");
        cy.contains("together");
    });

    it("should have Learn More button", () => {
        cy.contains("Learn More").click();
    });

    it("should display the book icon", () => {
        cy.get('[alt="Book Icon"]').should("be.visible");
    });
    it("user choice panel for language choice should work", () => {
        cy.contains("Choose your preferred Language");
    });
});
