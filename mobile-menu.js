// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu for both navbars
    initializeMobileMenu();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize animations
    initializeAnimations();
});

function initializeMobileMenu() {
    // Get all mobile menu buttons and menus
    const mobileMenuBtns = document.querySelectorAll('[aria-label="Toggle menu"]');
    
    mobileMenuBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleMobileMenu(this);
        });
    });
    
    // Close menu when clicking on links
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.href) {
            closeMobileMenus();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('header')) {
            closeMobileMenus();
        }
    });
}

function toggleMobileMenu(button) {
    // Create or toggle mobile menu for the navbar
    const navbar = button.closest('nav') || button.closest('header');
    let mobileMenu = navbar.querySelector('.mobile-menu');
    
    if (!mobileMenu) {
        mobileMenu = createMobileMenu(navbar);
    }
    
    const isOpen = mobileMenu.classList.contains('show');
    
    if (isOpen) {
        closeMobileMenu(mobileMenu, button);
    } else {
        openMobileMenu(mobileMenu, button);
    }
}

function createMobileMenu(navbar) {
    // Get navigation links
    const navLinks = navbar.querySelectorAll('nav a, header a');
    const getStartedBtn = navbar.querySelector('[href*="contact"], [href*="packages"]');
    
    // Create mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/20 z-40 transform -translate-y-full opacity-0 transition-all duration-300 ease-in-out';
    
    const menuContent = document.createElement('div');
    menuContent.className = 'px-4 py-6 space-y-4 max-w-md mx-auto';
    
    // Add navigation links
    navLinks.forEach(link => {
        if (link.textContent.trim() && !link.querySelector('img') && link.textContent !== 'Get Started') {
            const menuLink = document.createElement('a');
            menuLink.href = link.href;
            menuLink.textContent = link.textContent;
            menuLink.className = 'block py-3 px-2 text-foreground hover:text-primary transition-colors border-b border-border/10 rounded-lg hover:bg-primary/10';
            menuContent.appendChild(menuLink);
        }
    });
    
    // Add Get Started button if exists
    if (getStartedBtn) {
        const menuBtn = document.createElement('a');
        menuBtn.href = getStartedBtn.href;
        menuBtn.textContent = 'Get Started';
        menuBtn.className = 'btn-primary w-full px-6 py-3 rounded-lg mt-6 block text-center';
        menuContent.appendChild(menuBtn);
    }
    
    mobileMenu.appendChild(menuContent);
    navbar.appendChild(mobileMenu);
    
    return mobileMenu;
}

function openMobileMenu(mobileMenu, button) {
    // Close other menus first
    closeMobileMenus();
    
    // Animate hamburger to X
    animateHamburgerToX(button);
    
    // Show menu
    mobileMenu.classList.add('show');
    setTimeout(() => {
        mobileMenu.style.transform = 'translateY(0)';
        mobileMenu.style.opacity = '1';
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu(mobileMenu, button) {
    // Animate X to hamburger
    animateXToHamburger(button);
    
    // Hide menu
    mobileMenu.style.transform = 'translateY(-100%)';
    mobileMenu.style.opacity = '0';
    
    setTimeout(() => {
        mobileMenu.classList.remove('show');
    }, 300);
    
    // Restore body scroll
    document.body.style.overflow = '';
}

function closeMobileMenus() {
    const openMenus = document.querySelectorAll('.mobile-menu.show');
    const menuButtons = document.querySelectorAll('[aria-label="Toggle menu"]');
    
    openMenus.forEach((menu, index) => {
        closeMobileMenu(menu, menuButtons[index]);
    });
}

function animateHamburgerToX(button) {
    const spans = button.querySelectorAll('span');
    if (spans.length >= 3) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    }
}

function animateXToHamburger(button) {
    const spans = button.querySelectorAll('span');
    if (spans.length >= 3) {
        spans[0].style.transform = 'rotate(0) translate(0, 0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0, 0)';
    }
}

function initializeScrollEffects() {
    let lastScrollTop = 0;
    const floatingHeader = document.querySelector('header.fixed');
    const topNavbar = document.querySelector('nav.absolute, nav.fixed');
    
    if (floatingHeader) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Show/hide floating header based on scroll
            if (scrollTop > 100) {
                floatingHeader.style.opacity = '1';
                floatingHeader.style.transform = 'translateX(-50%) translateY(0) scale(1)';
            } else {
                floatingHeader.style.opacity = '0';
                floatingHeader.style.transform = 'translateX(-50%) translateY(-30px) scale(0.8)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    document.querySelectorAll('[style*="opacity:0"]').forEach(el => {
        observer.observe(el);
    });
}

// Responsive breakpoint handling
function handleResize() {
    if (window.innerWidth >= 768) {
        closeMobileMenus();
        document.body.style.overflow = '';
    }
}

window.addEventListener('resize', handleResize);
