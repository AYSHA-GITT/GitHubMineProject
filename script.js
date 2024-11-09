document.addEventListener('DOMContentLoaded', function () {

    // 1. Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 2. Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let isValid = true;
        let errorMessage = '';

        // Clear previous error messages
        const existingErrorMessage = document.querySelector('.error-message');
        if (existingErrorMessage) {
            existingErrorMessage.remove();
        }

        // Basic validation checks
        if (!name || !email || !message) {
            isValid = false;
            errorMessage = 'Please fill out all fields.';
        } else if (!validateEmail(email)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }

        if (isValid) {
            alert('Message sent successfully!');
            contactForm.reset(); // Reset form after submission
        } else {
            // Display error message
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('error-message');
            errorDiv.textContent = errorMessage;
            contactForm.prepend(errorDiv);
        }
    });

    // Validate email format
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    // 3. Dynamic Project Loading
    const projects = [
        {
            name: "Project 1",
            description: "Description of the first project.",
            link: "#",
        },
        {
            name: "Project 2",
            description: "Description of the second project.",
            link: "#",
        },
        {
            name: "Project 3",
            description: "Description of the third project.",
            link: "#",
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectElement);
    });

});
