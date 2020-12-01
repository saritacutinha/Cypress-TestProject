import BasePage from "../BasePage";
export default class WatchTeaserPage extends BasePage {
  static clickOnShowImage() {
    cy.get("ol > li > a").first().click();
  }

  static clickOnTeaserSection() {
    cy.get('div[data-ref="ProgramTrailer"]').contains("Teaser").click();
  }

  static pauseAutoplayTeaserOnYoutube() {
    cy.get('iframe[title="Teaser"]')
      .should(
        ($iframe) =>
          expect($iframe.contents().find("button.ytp-play-button")).to.exist
      )
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find("button.ytp-play-button")
          .should("have.attr", "title", "Pause (k)")
          .click();
      });
  }
}
