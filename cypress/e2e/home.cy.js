describe("The Sketch Free Website", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("https://wcanvas:wcanvas2022@qainter.wcanvasqa.com/");
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
  context("US01 NavBar href button checker", () => {
    it("Virtual Graphic Recording Button", () => {
      cy.visit("https://wcanvas:wcanvas2022@qainter.wcanvasqa.com/");
      cy.get("#menu-item-38 > a").click();
      cy.url().should("contain", "virtual-sketching");
    });
    it("In Person Graphic Recording Button", () => {
      cy.visit("https://wcanvas:wcanvas2022@qainter.wcanvasqa.com/");
      cy.get("#menu-item-39 > a").click();
      cy.url().should("contain", "on-site-sketching");
    });
    it("Animation", () => {
      cy.visit("https://wcanvas:wcanvas2022@qainter.wcanvasqa.com/");
      cy.get("#menu-item-37 > a").click();
      cy.url().should("contain", "video-animation");
    });
  });
  context("US05 Quicklinks destination checker", () => {
    it("About", () => {
      cy.get('[href="/culture/"]').click();
      cy.url().should("contain", "https://thesketcheffect.com/culture/");
    });
    it("In Person Graphic Recording Button", () => {
      cy.get('[href="/on-site-sketching/"]').click();
      cy.url().should(
        "contain",
        "https://thesketcheffect.com/on-site-sketching/"
      );
    });
    it("Virtual Graphic Recording Button", () => {
      cy.get('[href="/virtual-sketching/"]').click();
      cy.url().should(
        "contain",
        "https://thesketcheffect.com/virtual-sketching/"
      );
    });
    it("Video Animation", () => {
      cy.get('[href="/animation/"]').click();
      cy.url().should("contain", "https://thesketcheffect.com/animation/");
    });
    it("Speaking & Workshops", () => {
      cy.get('[href="//"]').click();
      cy.url().should("contain", "https://thesketcheffect.com/speaking/");
    });
    it("Privacy Notice", () => {
      cy.get('[href="/privacy-notice/"]').click();
      cy.url().should("contain", "https://thesketcheffect.com/privacy-policy/");
    });
    it("Team", () => {
      cy.get('[href="/team/"]').click();
      cy.url().should("contain", "https://thesketcheffect.com/team/");
    });
    it("Jobs", () => {
      cy.get('[href="/jobs/"]').click();
      cy.url().should("contain", "https://thesketcheffect.com/jobs/");
    });
  });
  context("US06 Learning & About Dropdown Menu ", () => {
    context("Learning Dropdown menu elements text content checker", () => {
      it("Courses Text Content Button", () => {
        cy.get("#menu-item-34").contains("Courses");
      });
      it("Speaking Text Content Button", () => {
        cy.get("#menu-item-55").contains("Speaking");
      });
    });
    context("About Dropdown menu elements text content checker", () => {
      it("Team Text Content Button", () => {
        cy.get("#menu-item-54").contains("Team");
      });
      it("Blog Text Content Button", () => {
        cy.get("#menu-item-41").contains("Blog");
      });
      it("Culture Text Content Button", () => {
        cy.get("#menu-item-35").contains("Culture");
      });
    });
  });
  context("NavBar elements text content checker", () => {
    context("NavBar Text Content Buttons", () => {
      it("Virtual Sketching Text Content Button", () => {
        cy.visit("https://wcanvas:wcanvas2022@qainter.wcanvasqa.com/");
        cy.get("#menu-item-38 > a").contains("Virtual Sketching");
      });
      it("On-Site Sketching Text Content Button", () => {
        cy.get("#menu-item-39 > a").contains("On-Site Sketching");
      });
      it("Animation Text Content Button", () => {
        cy.get("#menu-item-37 > a").contains("Animation");
      });
      it("About Text Content Button", () => {
        cy.get("#menu-item-62 > :nth-child(1)").contains("About");
      });
      it("Learning Text Content Button", () => {
        cy.get("#menu-item-63 > :nth-child(1)").contains("Learning");
      });
      it("Contact Us Text Content Button", () => {
        cy.get(".c-navbar__cta > span").contains("Contact Us");
      });
    });
  });
  context("Les talk ! Contact form items checker", () => {
    it("Title: Let's Talk!", () => {
      cy.visit("https://wcanvas:wcanvas2022@qainter.wcanvasqa.com/");
      cy.get(".c-navbar__cta > span").click();
      cy.get(".modal-contact__form_title").contains("Let´s Talk!");
    });
    it("First Name", () => {
      cy.get(".modal-contact__form_title").contains("First Name");
    });
    it("Last Name", () => {
      cy.get(".modal-contact__form_title").contains("Last Name");
    });
    it("Organization Name", () => {
      cy.get(".modal-contact__form_title").contains("Organization Name");
    });
    it("Contact Email", () => {
      cy.get(".modal-contact__form_title").contains("Contact Email");
    });
  });
  context("Animation Contact form items checker", () => {
    it("Title: Let's Talk!", () => {
      cy.visit("https://wcanvas:wcanvas2022@qainter.wcanvasqa.com/");
      cy.get(".c-navbar__cta > span").click();
      cy.get(".modal-contact__form_title").contains("Animation");
    });
    it("First Name", () => {
      cy.get(".modal-contact__form_title").contains("First Name");
    });
    it("Last Name", () => {
      cy.get(".modal-contact__form_title").contains("Last Name");
    });
    it("Organization Name", () => {
      cy.get(".modal-contact__form_title").contains("Organization Name");
    });
    it("Contact Email", () => {
      cy.get(".modal-contact__form_title").contains("Contact Email");
    });
  });
  context("US04 Newsletter Registration", () => {
    it("Newsletter registration pressing ENTER", () => {
      cy.visit("https://wcanvas:wcanvas2022@qainter.wcanvasqa.com/");
      cy.get("#mce-EMAIL").type("asdd@gmail.com").type("{enter}");
      cy.url().should("contain", "thank-you-stay-connected");
    });
    it("Newsletter registration clicking arrow", () => {
      cy.visit("https://wcanvas:wcanvas2022@qainter.wcanvasqa.com/");
      cy.get("#mce-EMAIL").type("asdd@gmail.com");
      cy.get("#mc-embedded-subscribe").click();
      cy.url().should("contain", "thank-you-stay-connected");
    });
  });
});
