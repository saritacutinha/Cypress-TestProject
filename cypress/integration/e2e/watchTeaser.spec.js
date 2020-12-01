import NavBar from "../../page-objects/components/NavBar";
import WatchTeaserPage from "../../page-objects/pages/WatchTeaserPage";
import { WatchTeasers } from "../../../config";

before(() => {
  cy.visit(WatchTeasers);
});

describe("Tests for Watch Teasers Page", () => {
  it("should have the Sign up page if the user is not logged in ", () => {
    NavBar.clickStartYourFreeTrial();
  });

  it("should redirect to the Home Page on clicking the Brand", () => {
    NavBar.clickOnLogo();
  });
  it("should redirect to show details page on click of image", () => {
    WatchTeaserPage.clickOnShowImage();
  });
  it("should navigate to the teaser and click on the teaser play section", () => {
    WatchTeaserPage.clickOnTeaserSection();
  });

  it("should find the embedded youtube player to play the teaser", () => {
    WatchTeaserPage.pauseAutoplayTeaserOnYoutube();
  });
});
