const projects = [
  {
    title: 'Rafly Diaz',
    imageSrc: '/works/rafly-diaz.webp',
  },
  {
    title: 'Onix',
    imageSrc: '/works/onix.webp',
  },
  {
    title: 'Jakarta',
    imageSrc: '/works/jakarta.webp',
  },
  {
    title: 'Blog',
    imageSrc: '/works/blog.webp',
  },
];

const generateProjectCards = () => {
  return projects.map((project, index) => `
    <div id="${index}" class='project-card w-full h-max flex items-center pointer-events-auto'>
      <div class="w-auto h-80 aspect-[3/4] bg-neutral-400 project-card-thumbnail">
        <img draggable="false" src="${project.imageSrc}" class="w-full h-full object-cover" /> 
      </div>
    </div>
  `).join('');
};

const works = `
<div class="works overflow-hidden content w-screen h-screen font-sans">
  <nav class="fixed top-0 w-screen pointer-events-auto h-20 p-4">
    <a href="/" class="text-xs tracking-wider uppercase font-semibold"> Back </a>
  </nav>

  <main class="grid grid-flow-col auto-cols-max gap-4 absolute project-grid">
    ${generateProjectCards()}
  </main>
</div>
`;

export default works;
