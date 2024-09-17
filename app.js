const emailInput = document.getElementById('user-email');
const newsletterForm = document.querySelector('.newsletter-form');
const emailError = document.querySelector('.email-error-msg');

function isEmailValid() {
    const email = emailInput.value;
    const emailRegex = /^[a-zA-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/;

    if (email.match(emailRegex)) {
        return true;
    } else {
        return false;
    }
}

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    if (!isEmailValid()) {
         emailError.classList.remove('hide');
         newsletterForm.style.alignItems = 'first baseline';
         emailInput.classList.add('input-error');
    } else {
        emailError.classList.add('hide');
        newsletterForm.style.alignItems = 'center';
        emailInput.classList.remove('input-error');
    } 
})

const menuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', handleMobileMenu);

function handleMobileMenu() {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('hide');
}