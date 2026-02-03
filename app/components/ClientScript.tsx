'use client';

import { useEffect } from 'react';

export default function ClientScript() {
    useEffect(() => {
        // Mobile Navigation Toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu?.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu?.classList.remove('active');
                navToggle?.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                if (href) {
                    const target = document.querySelector(href);
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Animate numbers on scroll
        function animateValue(element: HTMLElement, start: number, end: number, duration: number) {
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const currentValue = Math.floor(progress * (end - start) + start);
                element.textContent = currentValue.toString() + (element.textContent?.includes('%') ? '%' : '');
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.textContent = end.toString() + (element.textContent?.includes('%') ? '%' : '');
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
                    const element = entry.target as HTMLElement;
                    const target = parseInt(element.getAttribute('data-target') || '0');
                    
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
        const contactForm = document.getElementById('contactForm') as HTMLFormElement;

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Reset previous errors
                clearErrors();
                
                // Get form values
                const name = (document.getElementById('name') as HTMLInputElement)?.value.trim();
                const email = (document.getElementById('email') as HTMLInputElement)?.value.trim();
                const phone = (document.getElementById('phone') as HTMLInputElement)?.value.trim();
                const message = (document.getElementById('message') as HTMLTextAreaElement)?.value.trim();
                
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
                    // You can integrate with Formspree, Netlify Forms, or your backend
                    showSuccess();
                    contactForm.reset();
                    
                    console.log('Form data:', {
                        name,
                        email,
                        phone,
                        company: (document.getElementById('company') as HTMLInputElement)?.value.trim(),
                        message
                    });
                }
            });
        }

        function showError(elementId: string, message: string) {
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
                (el as HTMLElement).style.display = 'none';
            });
            
            const formSuccess = document.getElementById('formSuccess');
            const formError = document.getElementById('formError');
            if (formSuccess) (formSuccess as HTMLElement).style.display = 'none';
            if (formError) (formError as HTMLElement).style.display = 'none';
        }

        function showSuccess() {
            const formSuccess = document.getElementById('formSuccess');
            const formError = document.getElementById('formError');
            if (formSuccess) {
                (formSuccess as HTMLElement).style.display = 'block';
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            if (formError) (formError as HTMLElement).style.display = 'none';
        }

        // Header scroll effect
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (header) {
                if (currentScroll > 100) {
                    (header as HTMLElement).style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                } else {
                    (header as HTMLElement).style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
            }
        });

        // Add active state to navigation links based on scroll position
        const sections = document.querySelectorAll('section[id]');

        function activateNavLink() {
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const htmlSection = section as HTMLElement;
                const sectionHeight = htmlSection.offsetHeight;
                const sectionTop = htmlSection.offsetTop - 100;
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
    }, []);

    return null;
}
