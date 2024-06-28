// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
showSlide(currentSlide);

// Modal functionality
const modalButtons = document.querySelectorAll('.more-info, .register');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Scroll to top functionality
const scrollTopButton = document.getElementById('scrollTop');

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
