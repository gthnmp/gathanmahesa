function convertRemToPixels(rem: number) {    
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default class ProjectPageSmoothScroll {
  
  current: number;
  target: number;
  isDragging: boolean;
  startY: number;
  ease: number;
  container: HTMLHeadElement;
  touchSpeed: number;
  maximumX: number;
  cardWidth: number;
  cardGap: number;

  constructor() {
    this.current = 0;
    this.target = 0;
    this.isDragging = false;
    this.startY = 0;
    this.ease =  0.095;
    this.touchSpeed = 1.5;
    this.cardWidth = 15
    this.cardGap = 1; 

    this.container = document.querySelector('.project-grid')!;
    this.maximumX = convertRemToPixels(this.cardWidth * 3 + this.cardGap * 4);

    this.smoothScroll = this.smoothScroll.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);

    if(window.innerWidth > 768){
      this.init();
    }
  }

  lerp(start: number, end: number, t: number) {
    return start * (1 - t) + (end * t);
  }

  setTransform(element: HTMLElement | null, change: string) {
    if (element) {
      element.style.transform = change;
    }
  }
  smoothScroll() {
    this.current = this.lerp(this.current, this.target, this.ease);
    this.current = parseFloat(this.current.toFixed(2));
    this.setTransform(this.container, `translate3d(calc(50% - ${(this.cardWidth / 2)}rem - ${this.current}px), 0, 0)`);
    requestAnimationFrame(this.smoothScroll);
  }

  handleWheel(e: WheelEvent) {
    e.preventDefault();
    this.target = Math.min(this.maximumX, Math.max(0, this.target + e.deltaY));
  }

  handleMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startY = event.clientY;
  }

  handleMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    const deltaY = event.clientX - this.startY;
    this.target = Math.min(this.maximumX, Math.max(0, this.target - deltaY * this.touchSpeed));
    this.startY = event.clientX;
  }

  handleMouseUp() {
    this.isDragging = false;
  }

  handleTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.startY = event.touches[0].clientY;
  }

  handleTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    const deltaY = event.touches[0].clientY - this.startY;
    this.target = Math.min(this.maximumX, Math.max(0, this.target - deltaY * this.touchSpeed));
    this.startY = event.touches[0].clientY;
  }

  handleTouchEnd() {
    this.isDragging = false;
  }

  init() {
    this.smoothScroll();
    window.addEventListener('wheel', this.handleWheel, { passive: false });
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('touchstart', this.handleTouchStart);
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleTouchEnd);
  }
}

