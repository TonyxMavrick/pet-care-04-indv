// Main JavaScript for Happy Tails Hub

document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero slider
    initHeroSlider();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Load services on home page
    if (document.getElementById('servicesGrid')) {
        loadServices();
    }
    
    // Initialize accordions
    initAccordions();
    
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Form validation
    initFormValidation();
});

// Hero Slider Initialization
function initHeroSlider() {
    if ($('.hero-slider').length) {
        $('.hero-slider').slick({
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            pauseOnHover: true,
            arrows: false
        });
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Load Services
function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid || !window.siteData) return;
    
    const services = window.siteData.services.slice(0, 8);
    
    servicesGrid.innerHTML = services.map(service => `
        <div class="bg-white rounded-lg shadow overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 service-card">
            <div class="relative h-48 overflow-hidden image-zoom-container">
                <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover image-zoom">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                    <div class="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                        <i class="fas ${service.icon} text-white text-xl"></i>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-semibold text-lg mb-2">${service.title}</h3>
                <p class="text-gray-600 text-sm mb-4">${service.shortDescription}</p>
                <a href="service-detail.html?service=${service.slug}" class="text-orange-600 hover:text-orange-700 font-medium text-sm inline-flex items-center">
                    View Details
                    <i class="fas fa-arrow-right ml-1"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Load all services on services page
function loadAllServices() {
    const servicesGrid = document.getElementById('allServicesGrid');
    if (!servicesGrid || !window.siteData) return;
    
    const services = window.siteData.services;
    
    servicesGrid.innerHTML = services.map(service => `
        <div class="bg-white rounded-lg shadow overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 service-card">
            <div class="relative h-56 overflow-hidden image-zoom-container">
                <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover image-zoom">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                    <div class="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center">
                        <i class="fas ${service.icon} text-white text-2xl"></i>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-semibold text-xl mb-3 group-hover:text-orange-600 transition-colors">${service.title}</h3>
                <p class="text-gray-600 mb-4">${service.shortDescription}</p>
                <a href="service-detail.html?service=${service.slug}" class="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center">
                    View Details
                    <i class="fas fa-arrow-right ml-1"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Load blog posts
function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid || !window.siteData) return;
    
    const posts = window.siteData.blogPosts;
    
    blogGrid.innerHTML = posts.map(post => `
        <div class="bg-white rounded-lg shadow overflow-hidden group hover:shadow-xl transition-all duration-300 blog-card">
            <div class="relative h-64 overflow-hidden image-zoom-container">
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover image-zoom">
                <div class="absolute top-4 left-4">
                    <span class="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        ${post.category}
                    </span>
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div class="flex items-center">
                        <i class="fas fa-calendar mr-1"></i>
                        ${post.date}
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-user mr-1"></i>
                        ${post.author}
                    </div>
                </div>
                <h3 class="font-semibold text-xl mb-3 group-hover:text-orange-600 transition-colors">
                    ${post.title}
                </h3>
                <p class="text-gray-600 mb-4">${post.excerpt}</p>
                <a href="blog-post.html?post=${post.slug}" class="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center">
                    Read More
                    <i class="fas fa-arrow-right ml-1"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Initialize Accordions
function initAccordions() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all accordions
            document.querySelectorAll('.accordion-button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.accordion-content').forEach(cnt => {
                cnt.classList.remove('active');
            });
            
            // Open clicked accordion if it wasn't active
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Form Validation
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
}

// Scroll to top button
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.remove('hidden');
        } else {
            scrollBtn.classList.add('hidden');
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Expose functions globally
window.loadAllServices = loadAllServices;
window.loadBlogPosts = loadBlogPosts;
window.scrollToTop = scrollToTop;
