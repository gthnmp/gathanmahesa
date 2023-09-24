const works = `
<div class="about overflow-hidden content w-screen h-screen font-sans">
  <nav class="fixed top-0 w-screen pointer-events-auto h-20 p-4">
    <a href="/" class="text-xs tracking-wider uppercase font-semibold"> Back </a>
  </nav>

  <main class="grid grid-flow-col auto-cols-max gap-4 absolute project-grid">
    <div class='project-card  w-full h-full  flex  items-center'>
      <div class="h-96 w-full flex flex-col justify-center ">
        <div class="w-60 h-80 bg-neutral-400">
          <img draggable="false" src="/works/rafly-diaz.webp" class="w-full h-full object-cover" /> 
        </div>
      </div>
    </div>

    <div class='project-card relative w-full h-full  flex  items-center'>
      <div class="h-96 w-full flex flex-col justify-center ">
        <div class="w-60 h-80 bg-neutral-400">
          <img draggable="false" src="/works/onix.webp" class="w-full h-full object-cover" /> 
        </div>
      </div>
    </div>

    <div class='project-card relative w-full h-full  flex  items-center'>
      <div class="h-96 w-full flex flex-col justify-center ">
        <div class="w-60 h-80 bg-neutral-400">
          <img draggable="false" src="/works/jakarta.webp" class="w-full h-full object-cover" /> 
        </div>
      </div>
    </div>

    <div class='project-card relative w-full h-full  flex  items-center'>
      <div class="h-96 w-full flex flex-col justify-center ">
        <div class="w-60 h-80 bg-neutral-400">
          <img draggable="false" src="/works/blog.webp" class="w-full h-full object-cover" /> 
        </div>
      </div>
    </div>
  </main>
</div>
`;

export default works;
