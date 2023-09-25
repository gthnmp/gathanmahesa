const aboutData = [
  {
    type: 'div',
    class: 'text-xs tracking-wider uppercase',
    content: '<a href="/" class="pointer-events-auto">Back</a>',
  },
  {
    type: 'div',
    class: 'row-start-2 col-span-4 flex items-end uppercase',
    content: '<span class="text-6xl tracking-wide">Gathan Mahesa</span>',
  },
  {
    type: 'div',
    class: 'row-start-2 col-start-6 bg-neutral-300 self-potrait',
    content: '<img src="/potrait.webp" class="w-full h-full object-cover"/>',
  },
  {
    type: 'div',
    class: 'col-start-2 flex flex-col gap-2 text-xs font-medium leading-4 description',
    content: `
      <span> Me </span>
      <p>
        Gathan Mahesa is a freelance web developer based in Indonesia. Love to do problem solving and learning new technologies. Interested in the whole web development spectrum and working with ambitious projects with interesting and positive people.
      </p>
    `,
  },
  {
    type: 'div',
    class: 'row-start- col-start-4 col-span- flex flex-col gap-2 font-semibold leading-4 text-xs',
    content: `
      <span> Tools: </span>
      <ul class="text-xs font-medium leading-4 tools">
        <li>Arch Linux</li>
        <li>Cisco</li>
        <li>C++</li>
        <li>Firebase</li>
        <li>Javascript & Typescript</li>
        <li>MikroTik</li>
        <li>Nginx</li>
        <li>NextJS</li>
        <li>PostgreSQL</li>
        <li>Puppeteer & Selenium</li>
        <li>ReactJS</li>
        <li>Samba</li>
        <li>Supabase</li>
        <li>Ubuntu Linux</li>
        <li>Vanilla Javascript</li>
        <li>Vim & Neovim</li>
        <li>WebGL</li>
      </ul>
    `,
  },
  {
    type: 'div',
    class: 'row-start- col-start-6 col-span-2 flex flex-col gap-2 font-semibold leading-4 text-xs',
    content: `
      <span> Certification: </span>
      <ul class="text-xs font-medium leading-4 certs">
        <li>Certified Network Technichian</li>
        <li>Javascript Intermediate</li>
        <li>MikroTik Certified Network Associate</li>
        <li>Problem Solving Certified</li>
        <li>Python Basic Certified</li>
        <li>React Basic Certified</li>
      </ul>
    `,
  },
  {
    type: 'div',
    class: 'row-start- col-start-8 flex flex-col gap-2 font-semibold leading-4 text-xs',
    content: `
      <span> Contact: </span>
      <ul class="text-xs font-medium leading-4 socials pointer-events-auto">
        <li><a target="_blank" href="https://www.instagram.com/gthnmp/">Instagram</a></li>
        <li><a target="_blank" href="https://twitter.com/gathanmahesa">Twitter</a></li>
        <li><a target="_blank" href="https://github.com/gthnmp">GitHub</a></li>
        <li><a target="_blank" href="https://https://www.linkedin.com/in/gathan">LinkedIn</a></li>
        <li><a target="_blank" href="mailto:gathan.mahesa@gmail.com">Email</a></li>
      </ul>
    `,
  },
];

const generateHTML = (data : any) => {
  return data.map((item : any) => `<${item.type} class="${item.class}">${item.content}</${item.type}>`).join('');
};

const about = `
<div class="about overflow-hidden content w-screen h-screen grid grid-cols-8 grid-rows-[1fr_15rem] px-4 pt-4 font-sans font-semibold">
  ${generateHTML(aboutData)}
</div>
`;

export default about;
