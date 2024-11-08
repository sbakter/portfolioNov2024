// Form Validation for Contact Form
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.querySelector('input[name="cf_name"]').value;
    const email = document.querySelector('input[name="cf_email"]').value;
    const message = document.querySelector('textarea[name="cf_message"]').value;

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // If validation passes, display a success message
    alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);

    // Clear the form after submission
    document.getElementById('form').reset();
});

// Navigation menu toggle for mobile view
const navMenu = document.querySelector('nav ul');
const toggleNav = document.createElement('button');
toggleNav.innerText = '☰';
toggleNav.style.fontSize = '2rem';
toggleNav.style.background = 'none';
toggleNav.style.border = 'none';
toggleNav.style.color = 'white';
toggleNav.style.cursor = 'pointer';

// Append the toggle button to the navigation
document.querySelector('nav').insertBefore(toggleNav, navMenu);

// Add click event to toggle the navigation
toggleNav.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});

// Smooth scroll for internal links (e.g., clicking "Projects" will smoothly scroll to the project section)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
