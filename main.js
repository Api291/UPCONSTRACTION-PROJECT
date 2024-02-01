function aos_init() {
  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});

  