import { Overview, Works, About } from "../routes";
import OverviewPageSmoothScroll from "./smoothscroll/OverviewScroll";
import ProjectPageSmoothScroll from "./smoothscroll/ProjectScroll";

import SplitType from "split-type";
const { gsap } = window

const appElement = document.querySelector('#app') as HTMLDivElement;
const overlay = document.querySelector('#overlay') as HTMLDivElement;
let currentPath = window.location.pathname;

const routes: { [path: string]: string }  = {
  "/": Overview,
  "/about": About,
  "/works": Works 
};

const observeSection = () => {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '100%';
      } else {
        entry.target.style.opacity = '20%';
      }
    });
  }, { threshold: [0.5, 1.0] });

  const sections = document.querySelectorAll('section');
  sections.forEach((s) => {
    sectionObserver.observe(s);
  });
};

const pageInitializer = {
  "/": () => {
    if (window.innerWidth > 768) {
      new OverviewPageSmoothScroll();
    }
    
    const name = new SplitType('.name > span');
    gsap.from(name.words, {
      yPercent: 120,
      ease: "power4",
      duration: 2,
    });
    
    const paragraph = new SplitType('.overview > header p');
    gsap.from(paragraph.words, {
      yPercent: 120,
      ease: "power4",
      stagger:0.025,
      duration: 1.5,
      delay:0.5
    });
     
    observeSection()
    
    addLinkListeners();
  },
  
  "/works": () => {
    new ProjectPageSmoothScroll();
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
        appElement.classList.add('exit');
        overlay.classList.add('active')
        
        setTimeout(() => {
          appElement.classList.remove('exit');
          overlay.classList.remove('active');
          render(pathname);
        }, 700)
      }
    })
  );
};

const render = (path: string) => {
  addLinkListeners();

  appElement.innerHTML = routes[path] || '<h1>Not Found</h1>';
  const action = pageInitializer[currentPath as keyof typeof pageInitializer];
  if (action) {
    action();
  }
};

window.addEventListener("popstate", (event) => {
  const path = event.state ? event.state.path : window.location.pathname;
  render(path);
});

render(window.location.pathname);
