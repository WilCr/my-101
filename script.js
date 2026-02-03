// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animate numbers on scroll
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue + (element.textContent.includes('%') ? '%' : '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = end + (element.textContent.includes('%') ? '%' : '');
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const target = parseInt(element.getAttribute('data-target'));
            
            if (target && !element.classList.contains('animated')) {
                element.classList.add('animated');
                animateValue(element, 0, target, 2000);
            }
        }
    });
}, observerOptions);

// Observe all elements with data-target attribute
document.querySelectorAll('[data-target]').forEach(el => {
    observer.observe(el);
});

// Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous errors
        clearErrors();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // Validate name
        if (name === '') {
            showError('nameError', 'Name is required');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone (if provided)
        if (phone !== '') {
            const phoneRegex = /^[\d\s\-\(\)]+$/;
            if (!phoneRegex.test(phone)) {
                showError('phoneError', 'Please enter a valid phone number');
                isValid = false;
            }
        }
        
        // Validate message
        if (message === '') {
            showError('messageError', 'Message is required');
            isValid = false;
        }
        
        if (isValid) {
            // Here you would typically send the form data to a server
            // For now, we'll show a success message
            // You can integrate with Formspree, Netlify Forms, or your backend
            
            // Example: Using Formspree (uncomment and add your formspree endpoint)
            /*
            const formData = new FormData(contactForm);
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showSuccess();
                    contactForm.reset();
                } else {
                    showFormError();
                }
            })
            .catch(error => {
                showFormError();
            });
            */
            
            // For demo purposes, show success message
            showSuccess();
            contactForm.reset();
            
            // In production, replace the above with actual form submission
            console.log('Form data:', {
                name,
                email,
                phone,
                company: document.getElementById('company').value.trim(),
                message
            });
        }
    });
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
    
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    if (formSuccess) formSuccess.style.display = 'none';
    if (formError) formError.style.display = 'none';
}

function showSuccess() {
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    if (formSuccess) {
        formSuccess.style.display = 'block';
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    if (formError) formError.style.display = 'none';
}

function showFormError() {
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    if (formError) {
        formError.style.display = 'block';
        formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    if (formSuccess) formSuccess.style.display = 'none';
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Add active class styling (you can add this to CSS)
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--light-blue);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Any initialization code
    console.log('CurvedSpace Investment Services website loaded');
});
