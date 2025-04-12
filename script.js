document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    lucide.createIcons();

    // Current year for footer copyright
    const currentYearElements = document.querySelectorAll('#currentYear');
    currentYearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');

            // Update icon
            const menuIcon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                menuIcon.setAttribute('data-lucide', 'x');
            } else {
                menuIcon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
    }

    // Mobile dropdown functionality
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

    mobileDropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.mobile-dropdown-btn');

        if (btn) {
            btn.addEventListener('click', () => {
                dropdown.classList.toggle('active');

                const icon = btn.querySelector('i');
                const isActive = dropdown.classList.contains('active');

                // Update icon
                icon.setAttribute('data-lucide', isActive ? 'chevron-up' : 'chevron-down');
                lucide.createIcons();
            });
        }
    });

    // Hero carousel functionality
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    function showSlide(index) {
        heroSlides.forEach(slide => slide.classList.remove('active'));

        currentSlide = (index + heroSlides.length) % heroSlides.length;
        heroSlides[currentSlide].classList.add('active');
    }

    function nextHeroSlide() {
        showSlide(currentSlide + 1);
    }

    // Auto rotate hero slides if they exist
    if (heroSlides.length > 0) {
        let heroCarouselInterval = setInterval(nextHeroSlide, 2000);

        const heroCarousel = document.getElementById('heroCarousel');
        if (heroCarousel) {
            heroCarousel.addEventListener('mouseenter', () => {
                clearInterval(heroCarouselInterval);
            });

            heroCarousel.addEventListener('mouseleave', () => {
                heroCarouselInterval = setInterval(nextHeroSlide, 2000);
            });
        }
    }

    // Testimonial slider functionality
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');
    const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        if (!testimonialTrack) return;

        const testimonialSlides = testimonialTrack.querySelectorAll('.testimonial-slide');
        if (testimonialSlides.length === 0) return;

        currentTestimonial = (index + testimonialSlides.length) % testimonialSlides.length;

        testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;

        // Update indicators
        testimonialIndicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentTestimonial);
        });
    }

    if (testimonialPrev && testimonialNext) {
        testimonialPrev.addEventListener('click', () => {
            showTestimonial(currentTestimonial - 1);
        });

        testimonialNext.addEventListener('click', () => {
            showTestimonial(currentTestimonial + 1);
        });

        // Click on indicators
        testimonialIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showTestimonial(index);
            });
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Normally you would send the form data to a server here
            // For this example, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Maintenance request form submission
    const maintenanceForm = document.getElementById('maintenanceForm');

    if (maintenanceForm) {
        maintenanceForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Normally you would send the form data to a server here
            alert('Your maintenance request has been submitted! A confirmation email will be sent shortly.');
            maintenanceForm.reset();
        });
    }

    // Rental application form submission
    const rentalApplicationForm = document.getElementById('rentalApplicationForm');

    if (rentalApplicationForm) {
        rentalApplicationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Normally you would send the form data to a server here
            alert('Your rental application has been submitted! We will contact you within 24-48 hours regarding the status of your application.');
            rentalApplicationForm.reset();
        });
    }

    // Notice to vacate form submission
    const noticeToVacateForm = document.getElementById('noticeToVacateForm');

    if (noticeToVacateForm) {
        noticeToVacateForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Normally you would send the form data to a server here
            alert('Your notice to vacate has been submitted! A confirmation email will be sent shortly with detailed move-out instructions.');
            noticeToVacateForm.reset();
        });
    }

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .stat, .about-text p, .info-card, .feature-card, .testimonial-card, .faq-item, .team-member');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            observer.observe(el);
        });
    }

    animateOnScroll();

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-question');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Responsive checks
    function isMobile() {
        return window.innerWidth < 768;
    }

    function checkMobile() {
        // Show/hide logo based on screen size
        if (logo) {
            if (isMobile()) {
                logo.style.display = 'none';
            } else {
                logo.style.display = 'block';
            }
        }
    }

    window.addEventListener('resize', checkMobile);
    checkMobile(); // Check initial state

    // AI Assistant Integration
    const aiAssistantContainer = document.getElementById('ai-assistant');
    if (aiAssistantContainer) {
        // Create AI Assistant button
        const assistantButton = document.createElement('button');
        assistantButton.className = 'ai-assistant-button';
        assistantButton.setAttribute('aria-label', 'Open AI Assistant');

        // Add icon
        const iconElement = document.createElement('i');
        iconElement.setAttribute('data-lucide', 'bot');
        assistantButton.appendChild(iconElement);

        // Add to container
        aiAssistantContainer.appendChild(assistantButton);

        // Initialize Lucide icon
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Create and initialize the assistant drawer
        const assistantDrawer = document.createElement('div');
        assistantDrawer.className = 'ai-assistant-drawer';
        assistantDrawer.innerHTML = `
        <div class="ai-drawer-content">
          <div class="ai-drawer-header">
            <div class="ai-drawer-title">
              <i data-lucide="bot"></i>
              <span>AI Property Assistant</span>
            </div>
            <button class="ai-drawer-close" aria-label="Close assistant">
              <i data-lucide="x"></i>
            </button>
          </div>
          <div class="ai-messages">
            <div class="ai-message">
              <div class="ai-message-content">
                Hello! I'm your AI assistant. How can I help you with your property needs today?
              </div>
            </div>
          </div>
          <form class="ai-message-form">
            <input type="text" placeholder="Type your message..." class="ai-message-input">
            <button type="submit" class="ai-message-submit">
              <i data-lucide="send"></i>
            </button>
          </form>
        </div>
      `;

        document.body.appendChild(assistantDrawer);

        // Initialize icons in the drawer
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Toggle drawer visibility
        assistantButton.addEventListener('click', function () {
            assistantDrawer.classList.toggle('open');
            document.body.classList.toggle('ai-drawer-open');
        });

        // Close drawer when close button is clicked
        const closeButton = assistantDrawer.querySelector('.ai-drawer-close');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                assistantDrawer.classList.remove('open');
                document.body.classList.remove('ai-drawer-open');
            });
        }

        // Handle message submission
        const messageForm = assistantDrawer.querySelector('.ai-message-form');
        const messagesContainer = assistantDrawer.querySelector('.ai-messages');

        if (messageForm && messagesContainer) {
            messageForm.addEventListener('submit', function (event) {
                event.preventDefault();

                const input = messageForm.querySelector('.ai-message-input');
                if (!input || !input.value.trim()) return;

                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'ai-message user-message';
                userMessage.innerHTML = `
            <div class="ai-message-content">
              ${input.value}
            </div>
          `;
                messagesContainer.appendChild(userMessage);

                // Scroll to bottom
                messagesContainer.scrollTop = messagesContainer.scrollHeight;

                // Clear input
                const inputValue = input.value;
                input.value = '';

                // Simulate AI response
                setTimeout(function () {
                    const aiMessage = document.createElement('div');
                    aiMessage.className = 'ai-message';
                    aiMessage.innerHTML = `
              <div class="ai-message-content">
                Thank you for your message about "${inputValue}". Our team will help you with your inquiry about property management services soon.
              </div>
            `;
                    messagesContainer.appendChild(aiMessage);

                    // Scroll to bottom again
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }, 1000);
            });
        }
    }
});
