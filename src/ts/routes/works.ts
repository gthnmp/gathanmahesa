// Define an array of project data
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
  return projects.map((project) => `
    <div class='project-card w-full h-full flex items-center'>
      <div class="h-96 w-full flex flex-col justify-center hover:scale-105 transition-transform duration-300">
        <div class="w-60 h-80 bg-neutral-400">
          <img draggable="false" src="${project.imageSrc}" class="w-full h-full object-cover" /> 
        </div>
      </div>
    </div>
  `).join('');
};

// Create the HTML content with dynamic project cards
const works = `
<div class="about overflow-hidden content w-screen h-screen font-sans">
  <nav class="fixed top-0 w-screen pointer-events-auto h-20 p-4">
    <a href="/" class="text-xs tracking-wider uppercase font-semibold"> Back </a>
  </nav>

  <main class="grid grid-flow-col auto-cols-max gap-4 absolute project-grid">
    ${generateProjectCards()}
  </main>
</div>
`;

export default works;
