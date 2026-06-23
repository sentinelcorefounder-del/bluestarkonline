const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const requestForm = document.querySelector('#requestForm');
if (requestForm) {
  requestForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(requestForm);
    const name = form.get('name') || '';
    const organisation = form.get('organisation') || '';
    const country = form.get('country') || '';
    const product = form.get('product') || '';
    const message = form.get('message') || '';
    const body = [
      `Name: ${name}`,
      `Organisation: ${organisation}`,
      `Country: ${country}`,
      `Product interest: ${product}`,
      '',
      `Message: ${message}`
    ].join('\n');
    const subject = encodeURIComponent('BlueStark product information request');
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:info@bluestarkonline.com?subject=${subject}&body=${encodedBody}`;
  });
}
