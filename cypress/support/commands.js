// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
  if (opts.displayName === "script" || opts.name === "request") {
    return;
  }
  return origLog(opts, ...other);
};

const routes = ["/some-route-to-hide"];

Cypress.on("log:added", (ev) => {
  if (
    ev.displayName === "xhr" &&
    routes.some((route) => ev.consoleProps?.URL.includes(route))
  ) {
    const el = Array.from(
      window.top.document.querySelectorAll(".command-wrapper")
    ).slice(-1)[0];
    if (el) {
      el.parentElement.style.display = "none";
    }
  }
});
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML =
    ".command-name-request, .command-name-xhr { display: none }";
  style.setAttribute("data-hide-command-log-request", "");

  app.document.head.appendChild(style);
}
