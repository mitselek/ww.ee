// script.js
const etBtn = document.getElementById('et-btn');
const enBtn = document.getElementById('en-btn');
const contactEt = document.getElementById('contact-et');
const contactEn = document.getElementById('contact-en');

etBtn.addEventListener('click', () => {
    etBtn.classList.add('active');
    enBtn.classList.remove('active');
    contactEt.classList.add('active');
    contactEn.classList.remove('active');
    document.documentElement.lang = 'et'; // Set language attribute
});

enBtn.addEventListener('click', () => {
    enBtn.classList.add('active');
    etBtn.classList.remove('active');
    contactEn.classList.add('active');
    contactEt.classList.remove('active');
    document.documentElement.lang = 'en'; // Set language attribute
});