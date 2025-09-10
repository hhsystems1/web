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
    
    // Create mobile menu with aggressive iOS-compatible full-screen overlay
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Ultra-aggressive inline styles that override everything for iOS
    const setMobileMenuStyles = () => {
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        
        Object.assign(mobileMenu.style, {
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            width: vw + 'px',
            height: vh + 'px',
            maxWidth: 'none',
            maxHeight: 'none',
            minWidth: vw + 'px',
            minHeight: vh + 'px',
            background: 'rgba(13, 19, 33, 0.98)',
            backdropFilter: 'blur(12px)',
            webkitBackdropFilter: 'blur(12px)',
            zIndex: '99999',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            margin: '0',
            border: 'none',
            outline: 'none',
            boxSizing: 'border-box',
            opacity: '0',
            visibility: 'hidden',
            transition: 'opacity 0.4s ease, visibility 0.4s ease',
            overflow: 'hidden',
            webkitOverflowScrolling: 'touch',
            transform: 'translateZ(0)', // Force hardware acceleration
            webkitTransform: 'translateZ(0)'
        });
    };
    
    setMobileMenuStyles();
    
    const menuContent = document.createElement('div');
    Object.assign(menuContent.style, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '400px',
        padding: '0',
        margin: '0',
        textAlign: 'center',
        gap: '1.5rem'
    });
    
    // Add navigation links
    navLinks.forEach(link => {
        if (link.textContent.trim() && !link.querySelector('img') && link.textContent !== 'Get Started') {
            const menuLink = document.createElement('a');
            menuLink.href = link.href;
            menuLink.textContent = link.textContent;
            
            Object.assign(menuLink.style, {
                display: 'block',
                padding: '1rem 2rem',
                fontSize: '1.5rem',
                fontWeight: '500',
                color: 'rgba(230, 234, 242, 0.9)',
                textDecoration: 'none',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                border: 'none',
                background: 'transparent',
                width: '100%',
                textAlign: 'center',
                boxSizing: 'border-box'
            });
            
            menuLink.addEventListener('mouseenter', () => {
                menuLink.style.backgroundColor = 'rgba(90, 227, 255, 0.1)';
                menuLink.style.color = '#5AE3FF';
            });
            
            menuLink.addEventListener('mouseleave', () => {
                menuLink.style.backgroundColor = 'transparent';
                menuLink.style.color = 'rgba(230, 234, 242, 0.9)';
            });
            
            menuContent.appendChild(menuLink);
        }
    });
    
    // Add Get Started button if exists
    if (getStartedBtn) {
        const menuBtn = document.createElement('a');
        menuBtn.href = getStartedBtn.href;
        menuBtn.textContent = 'Get Started';
        
        Object.assign(menuBtn.style, {
            display: 'block',
            padding: '1rem 2rem',
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #5AE3FF, #7C3AED)',
            border: 'none',
            marginTop: '1rem',
            width: '100%',
            textAlign: 'center',
            boxSizing: 'border-box',
            transition: 'all 0.3s ease'
        });
        
        menuBtn.addEventListener('mouseenter', () => {
            menuBtn.style.transform = 'scale(1.05)';
        });
        
        menuBtn.addEventListener('mouseleave', () => {
            menuBtn.style.transform = 'scale(1)';
        });
        
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
