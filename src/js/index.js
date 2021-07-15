import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

fetch("https://api.github.com/users/paulinaslabosz/repos?sort=created&direction=asc")
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector('.projects__grid--js');
    for (let repo of res) {
        const {description, homepage, html_url, name} = repo;

        const template = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src="img/github.svg" alt="" class="project__icon" />
          <h3 class="project__grid">
            <span class="project__label">project:</span
            ><span class="project__title">${name}</span>
          </h3>
          <p class="project__grid project__grid--description">
            <span class="project__label">description:</span
            ><span class="project__description"
              >${description}</span
            >
          </p>
          <p class="project__grid">
            <span class="project__label">demo:</span
            ><span
              >&lt;<a
              target="_blank"
              rel="noopener noreferrer"
                href="${homepage}"
                title="${name} - demo"
                class="project__link"
                
                >see_here</a
              >&gt;</span
            >
          </p>
          <p class="project__grid">
            <span class="project__label">github:</span
            ><span
              >&lt;<a target="_blank"
              rel="noopener noreferrer"
                href="${html_url}"
                title="${name} - github"
                class="project__link"
                
                >source_code</a
              >&gt;</span
            >
          </p>
        </div>
      </article>`;
        if (description) {container.innerHTML += template};
      
    }
  })
  .catch((e) => console.log(e));