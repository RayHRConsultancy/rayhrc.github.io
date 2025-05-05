// Basic form submission handling (for demonstration)
document.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});
