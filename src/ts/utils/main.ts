import runGL from "./gl/runGL";
import { Overview, Works, About } from "../routes";
import OverviewPageSmoothScroll from "./smoothscroll/OverviewScroll";
import ProjectPageSmoothScroll from "./smoothscroll/ProjectScroll";

const routes: { [path: string]: string }  = {
  "/": Overview,
  "/about": About,
  "/works": Works 
};

const overlayElement = document.querySelector('.overlay') as HTMLDivElement;
const appElement = document.querySelector('#app') as HTMLDivElement;

let listenersAdded = false;

let currentPath = window.location.pathname;

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
  
  listenersAdded = true;
};

const render = (path: string) => {
  addLinkListeners();
  appElement.innerHTML = routes[path] || '<h1>Not Found</h1>';

  if(currentPath === "/works"){
    new ProjectPageSmoothScroll();
    addLinkListeners();
  } else if (currentPath === "/"){
    addLinkListeners();
    new OverviewPageSmoothScroll() && window.innerWidth > 768 
  } else if (currentPath === "/about"){
    addLinkListeners();
  }
};

window.addEventListener("popstate", (event) => {
  const path = event.state ? event.state.path : window.location.pathname;
  render(path);
});

render(window.location.pathname);
