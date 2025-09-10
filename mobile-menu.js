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
    
        // Click outside to close
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            const button = document.querySelector('[aria-label="Toggle menu"]');
            if (button) {
                closeMobileMenu(mobileMenu, button);
            }
        }
    });
    
    // iOS viewport fix on orientation change
    window.addEventListener('resize', () => {
        if (mobileMenu.classList.contains('show') && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
            setTimeout(() => {
                mobileMenu.style.height = window.innerHeight + 'px';
            }, 100);
        }
    });
    
    return mobileMenu;
}

function toggleMobileMenu(button) {
    // Create or toggle mobile menu for the navbar
    const navbar = button.closest('nav') || button.closest('header');
    let mobileMenu = document.body.querySelector('.mobile-menu');
    
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
    
    // Create mobile menu with full-screen overlay
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Full-screen overlay styles with iOS compatibility
    mobileMenu.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        height: 100dvh !important;
        background: rgba(13, 19, 33, 0.98) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        z-index: 9999 !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        padding: 2rem !important;
        opacity: 0 !important;
        visibility: hidden !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        -webkit-overflow-scrolling: touch !important;
        overflow: hidden !important;
    `;
    
    const menuContent = document.createElement('div');
    menuContent.className = 'space-y-6 text-center w-full max-w-md';
    
    // Add navigation links
    navLinks.forEach(link => {
        if (link.textContent.trim() && !link.querySelector('img') && link.textContent !== 'Get Started') {
            const menuLink = document.createElement('a');
            menuLink.href = link.href;
            menuLink.textContent = link.textContent;
            menuLink.className = 'block py-4 px-6 text-2xl text-white/90 hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/10';
            menuContent.appendChild(menuLink);
        }
    });
    
    // Add Get Started button if exists
    if (getStartedBtn) {
        const menuBtn = document.createElement('a');
        menuBtn.href = getStartedBtn.href;
        menuBtn.textContent = 'Get Started';
        menuBtn.className = 'block w-full px-8 py-4 rounded-lg mt-8 text-center text-lg btn-primary bg-primary text-primary-foreground hover:bg-primary/90';
        menuContent.appendChild(menuBtn);
    }
    
    mobileMenu.appendChild(menuContent);
    
    // Append to body instead of navbar to prevent overflow issues
    document.body.appendChild(mobileMenu);
    
    return mobileMenu;
}

function openMobileMenu(mobileMenu, button) {
    // Close other menus first
    closeMobileMenus();
    
    // Animate hamburger to X
    animateHamburgerToX(button);
    
    // Show menu with full-screen overlay
    mobileMenu.classList.add('show');
    mobileMenu.style.opacity = '1';
    mobileMenu.style.visibility = 'visible';
    
    // Prevent body scroll and fix iOS viewport issues
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    
    // iOS Safari specific fixes
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        document.body.style.webkitOverflowScrolling = 'touch';
        mobileMenu.style.height = window.innerHeight + 'px';
    }
}

function closeMobileMenu(mobileMenu, button) {
    // Animate X to hamburger
    animateXToHamburger(button);
    
    // Hide menu
    mobileMenu.classList.remove('show');
    mobileMenu.style.opacity = '0';
    mobileMenu.style.visibility = 'hidden';
    
    // Restore body scroll and remove iOS fixes
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.height = '';
    document.body.style.webkitOverflowScrolling = '';
}

function closeMobileMenus() {
    const openMenus = document.querySelectorAll('.mobile-menu.show');
    const menuButtons = document.querySelectorAll('[aria-label="Toggle menu"]');
    
    openMenus.forEach((menu, index) => {
        closeMobileMenu(menu, menuButtons[index]);
    });
}

function animateHamburgerToX(button) {
    const svg = button.querySelector('svg');
    const paths = button.querySelectorAll('path');
    
    if (svg && paths.length >= 3) {
        // Animate the hamburger lines to form an X
        paths[0].style.transform = 'rotate(45deg) translate(2px, 2px)';
        paths[0].style.transformOrigin = 'center';
        paths[1].style.opacity = '0';
        paths[2].style.transform = 'rotate(-45deg) translate(2px, -2px)';
        paths[2].style.transformOrigin = 'center';
        
        svg.style.transition = 'all 0.3s ease';
        paths.forEach(path => {
            path.style.transition = 'all 0.3s ease';
        });
    }
}

function animateXToHamburger(button) {
    const svg = button.querySelector('svg');
    const paths = button.querySelectorAll('path');
    
    if (svg && paths.length >= 3) {
        // Animate the X back to hamburger lines
        paths[0].style.transform = 'rotate(0deg) translate(0px, 0px)';
        paths[1].style.opacity = '1';
        paths[2].style.transform = 'rotate(0deg) translate(0px, 0px)';
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
                floatingHeader.classList.add('visible');
            } else {
                floatingHeader.classList.remove('visible');
            }
            
            lastScrollTop = scrollTop;
        });
        
        // Trigger scroll event immediately to set initial state
        window.dispatchEvent(new Event('scroll'));
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
