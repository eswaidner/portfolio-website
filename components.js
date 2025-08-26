function init() {
  customElements.define("page-header", PageHeader);
  customElements.define("page-footer", PageFooter);
  customElements.define("project-card", ProjectCard);
}

export class PageHeader extends HTMLElement {
  constructor() {
    super();

    let name = this.attributes["name"].nodeValue;
    if (!name) name = "PAGE";

    this.innerHTML = `
        <div class="breadcrumb">
            <a href="./index.html#" class="clickable" style="text-decoration: none">
                eswaidner
            </a>
            <div>/</div>
            <div>${name}</div>
        </div>
      `;
  }
}

export class PageFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
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
    <div>/* &COPY; 2025 Ethan Swaidner */</div>
    `;
  }
}

export class ProjectCard extends HTMLElement {
  constructor() {
    super();

    const name = this.attributes["name"].nodeValue;
    const desc = this.attributes["desc"].nodeValue;
    const tags = this.attributes["tags"].nodeValue;

    const tagsHtml = tags
      .split(", ")
      .map((t) => {
        if (!t) return;
        return `<div class="project-tag">${t}</div>`;
      })
      .join("\n");

    const id = name.toLowerCase().replace(" ", "-");

    this.innerHTML = `
      <div class="project-bg" style="background-image: url(./assets/${id}-thumb.png);"></div>
      <a class="project-link" href="./${id}.html">
        <h3 class="project-name">${name}</h3>
        <p class="project-desc">${desc}</p>
        <div class="project-tags">
          ${tagsHtml}
        </div>
      </a>
    `;
  }
}

init();
