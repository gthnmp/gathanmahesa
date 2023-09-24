const aboutData = [
  {
    type: 'div',
    class: 'text-xs tracking-wider uppercase',
    content: '<a href="/" class="pointer-events-auto">Menu</a>',
  },
  {
    type: 'div',
    class: 'row-start-2 col-span-4 flex items-end uppercase',
    content: '<span class="text-6xl tracking-wider">Gathan Mahesa</span>',
  },
  {
    type: 'div',
    class: 'row-start-2 col-start-6 bg-neutral-300',
    content: '<img src="/potrait.webp" class="w-full h-full object-cover"/>',
  },
  {
    type: 'div',
    class: 'row-start- col-start-2 flex flex-col gap-2 text-xs font-medium leading-4',
    content: `
      <span> Me </span>
      <p class="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut felis in libero sagittis consectetur. Nulla facilisi. Fusce sed justo auctor, sagittis mi. Vivamus convallis urna sed ex vestibulum. Sed ac rhoncus odio, at sollicitudin dui. Nunc vel finibus turpis, id lacinia tellus.
      </p>
    `,
  },
  {
    type: 'div',
    class: 'row-start- col-start-4 col-span- flex flex-col gap-2 font-semibold leading-4 text-xs',
    content: `
      <span> Tools: </span>
      <ul class="text-xs font-medium leading-4">
        <li>Arch Linux</li>
        <li>Ubuntu Linux</li>
        <li>Vim & Neovim</li>
        <li>Nginx</li>
        <li>Samba</li>
        <li>MikroTik</li>
        <li>Cisco</li>
        <li>Puppeteer & Selenium</li>
        <li>Vanilla Javascript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>WebGL</li>
        <li>PostgreSQL</li>
        <li>Supabase</li>
        <li>Firebase</li>
      </ul>
    `,
  },
  {
    type: 'div',
    class: 'row-start- col-start-6 col-span-2 flex flex-col gap-2 font-semibold leading-4 text-xs',
    content: `
      <span> Certification: </span>
      <ul class="text-xs font-medium leading-4">
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
      <ul class="text-xs font-medium leading-4">
        <li><a href="https://www.instagram.com/gthnmp/">Instagram</a></li>
        <li><a href="https://www.instagram.com/gthnmp/">Twitter</a></li>
        <li><a href="https://www.instagram.com/gthnmp/">GitHub</a></li>
        <li><a href="https://www.instagram.com/gthnmp/">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/gthnmp/">Email</a></li>
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
