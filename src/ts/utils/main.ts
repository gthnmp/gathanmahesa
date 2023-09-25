import { Overview, Works, About } from "../routes";
import OverviewPageSmoothScroll from "./smoothscroll/OverviewScroll";
import ProjectPageSmoothScroll from "./smoothscroll/ProjectScroll";

import SplitType from "split-type";
import gsap from "gsap";

const appElement = document.querySelector('#app') as HTMLDivElement;
let currentPath = window.location.pathname;

const routes: { [path: string]: string }  = {
  "/": Overview,
  "/about": About,
  "/works": Works 
};

const pageInitializer = {
  "/": () => {
    if (window.innerWidth > 768) {
      new OverviewPageSmoothScroll();
    }
    addLinkListeners();
  },
  
  "/works": () => {
    new ProjectPageSmoothScroll();
    const projectCards = document.querySelectorAll('.project-card-thumbnail')
    projectCards.forEach((card) => {
      card.addEventListener('click', () => {
      })
    })
    addLinkListeners();
  },
  
  "/about": () => {
    const elementsToAnimate = [
      '.about .description > p',
      '.about .tools > li',
      '.about .certs > li',
      '.about .socials > li',
    ];

    elementsToAnimate.forEach((elementSelector) => {
      const splitType = new SplitType(elementSelector);
      gsap.from(splitType.words, {
        yPercent: 120,
        stagger: 0.025,
        ease: "power4",
        duration: 1,
      });
    });
    
    const splitType = new SplitType('.about span');
    gsap.from(splitType.words, {
      yPercent: 120,
      ease: "power4",
      duration: 2,
    });

    addLinkListeners();
  },
};

const addLinkListeners = () => {
  const links = document.querySelectorAll('[href^="/"]');
  links.forEach(link => 
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const { pathname } = new URL(target.href);
      
      if (pathname !== currentPath) {
        currentPath = pathname;
        
        window.history.pushState({ path: pathname }, pathname, pathname);
        render(pathname);
      }
    })
  );
};

const render = (path: string) => {
  addLinkListeners();

  appElement.classList.add('exit');
  
  setTimeout(() => {
    appElement.classList.remove('exit');
    appElement.innerHTML = routes[path] || '<h1>Not Found</h1>';
    const action = pageInitializer[currentPath as keyof typeof pageInitializer];
    if (action) {
      action();
    }
  }, 300)
};

window.addEventListener("popstate", (event) => {
  const path = event.state ? event.state.path : window.location.pathname;
  render(path);
});

render(window.location.pathname);
