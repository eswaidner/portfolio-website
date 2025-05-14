function init() {
  customElements.define("page-header", PageHeader);
  customElements.define("page-footer", PageFooter);
}

export class PageHeader extends HTMLElement {
  constructor() {
    super();

    let name = this.attributes["name"].nodeValue;
    if (!name) name = "PAGE";

    this.innerHTML = `
        <div class="breadcrumb">
            <a href="./index.html#" class="clickable" style="text-decoration: none">
                ${name !== "home" ? "<< " : ""}eswaidner
            </a>
            <div>/</div>
            <div>${name}</div>
        </div>

        <div class="socials">
            <a
                target="_blank"
                href="https://github.com/eswaidner"
                class="clickable"
            >
                <img src="./assets/github.svg" />
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/ethanswaidner/"
                class="clickable"
            >
                <img src="./assets/linkedin.svg" />
            </a>
            <a
                target="_blank"
                href="https://bsky.app/profile/eswaidner.com"
                class="clickable"
            >
                <img src="./assets/bluesky.svg" />
            </a>
        </div>
      `;
  }
}

export class PageFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `/* &COPY; 2025 Ethan Swaidner */`;
  }
}

init();
