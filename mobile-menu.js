// Mobile Menu Functionality - iOS Safari Compatible
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu for both navbars
    initializeMobileMenu();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize animations
    initializeAnimations();
    
    // Update branding
    updateBranding();
});

function updateBranding() {
    // Update footer branding from "Helping Hands Web" to "Helping Hands Systems"
    function updateFooterBranding() {
        // Find footer links with "Helping Hands Web"
        const footerLinks = document.querySelectorAll('footer a');
        footerLinks.forEach(link => {
            if (link.textContent.includes('Helping Hands Web')) {
                link.textContent = 'Helping Hands Systems';
            }
        });
        
        // Also update any footer text nodes
        const footerTexts = document.querySelectorAll('footer p');
        footerTexts.forEach(p => {
            if (p.textContent.includes('Helping Hands Web')) {
                p.textContent = p.textContent.replace('Helping Hands Web', 'Helping Hands Systems');
            }
        });
    }
    
    // Hide navbar text elements more aggressively
    function hideNavbarText() {
        // Target all navbar text spans that contain "Helping Hands Web"
        const navbarSpans = document.querySelectorAll('nav span, header span, .container span, .floating-island span');
        navbarSpans.forEach(span => {
            if (span.textContent.includes('Helping Hands Web') || 
                span.textContent.includes('Helping Hands') ||
                span.classList.contains('text-xl') ||
                span.classList.contains('text-lg')) {
                span.style.display = 'none';
                span.style.visibility = 'hidden';
                span.style.fontSize = '0';
                span.style.width = '0';
                span.style.height = '0';
                span.style.margin = '0';
                span.style.padding = '0';
                span.textContent = '';
            }
        });
        
        // Also target any text nodes directly
        const allElements = document.querySelectorAll('nav *, header *, .floating-island *');
        allElements.forEach(el => {
            if (el.textContent === 'Helping Hands Web') {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
            }
        });
    }
    
    // Add "Helping Hands Systems" to floating navbar on desktop/tablet
    function addDesktopBranding() {
        if (window.innerWidth >= 768) {
            const floatingLogo = document.querySelector('.floating-island .flex.items-center.space-x-2');
            if (floatingLogo && !floatingLogo.querySelector('.desktop-brand')) {
                const brandSpan = document.createElement('span');
                brandSpan.className = 'desktop-brand';
                brandSpan.textContent = 'Helping Hands Systems';
                brandSpan.style.cssText = `
                    font-size: 1.125rem !important;
                    font-weight: 700 !important;
                    color: var(--primary) !important;
                    margin-left: 0.5rem !important;
                    white-space: nowrap !important;
                `;
                floatingLogo.appendChild(brandSpan);
            }
        }
    }
    
    // Run all branding updates
    updateFooterBranding();
    hideNavbarText();
    addDesktopBranding();
    
    // Run again after short delays
    setTimeout(() => {
        updateFooterBranding();
        hideNavbarText();
        addDesktopBranding();
    }, 1000);
    
    setTimeout(() => {
        updateFooterBranding();
        hideNavbarText();
        addDesktopBranding();
    }, 2000);
    
    // Also observe for dynamic content changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                updateFooterBranding();
                hideNavbarText();
                addDesktopBranding();
            }
        });
    });
    
    // Start observing changes
    const footer = document.querySelector('footer');
    const navbar = document.querySelector('nav');
    const header = document.querySelector('header');
    
    if (footer) {
        observer.observe(footer, { childList: true, subtree: true });
    }
    if (navbar) {
        observer.observe(navbar, { childList: true, subtree: true });
    }
    if (header) {
        observer.observe(header, { childList: true, subtree: true });
    }
}

function initializeMobileMenu() {
    // Get all mobile menu buttons
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
    
    // Force immediate styles - iOS Safari workaround
    const setImmediateStyles = () => {
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        
        // Direct DOM style manipulation - bypasses all CSS
        mobileMenu.style.cssText = `
            position: fixed !important;
            top: 0px !important;
            left: 0px !important;
            right: 0px !important;
            bottom: 0px !important;
            width: ${vw}px !important;
            height: ${vh}px !important;
            max-width: none !important;
            max-height: none !important;
            min-width: ${vw}px !important;
            min-height: ${vh}px !important;
            background: rgba(13, 19, 33, 0.98) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            z-index: 99999 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            padding: 2rem !important;
            margin: 0 !important;
            border: none !important;
            outline: none !important;
            box-sizing: border-box !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transition: opacity 0.4s ease, visibility 0.4s ease !important;
            overflow: hidden !important;
            -webkit-overflow-scrolling: touch !important;
            transform: translateZ(0) !important;
            -webkit-transform: translateZ(0) !important;
        `;
    };
    
    setImmediateStyles();
    
    // Create menu content
    const menuContent = document.createElement('div');
    menuContent.style.cssText = `
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
        max-width: 400px !important;
        padding: 0 !important;
        margin: 0 !important;
        text-align: center !important;
        gap: 1.5rem !important;
    `;
    
    // Add navigation links
    navLinks.forEach(link => {
        if (link.textContent.trim() && !link.querySelector('img') && link.textContent !== 'Get Started') {
            const menuLink = document.createElement('a');
            menuLink.href = link.href;
            menuLink.textContent = link.textContent;
            
            menuLink.style.cssText = `
                display: block !important;
                padding: 1rem 2rem !important;
                font-size: 1.5rem !important;
                font-weight: 500 !important;
                color: rgba(230, 234, 242, 0.9) !important;
                text-decoration: none !important;
                border-radius: 12px !important;
                transition: all 0.3s ease !important;
                border: none !important;
                background: transparent !important;
                width: 100% !important;
                text-align: center !important;
                box-sizing: border-box !important;
            `;
            
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
        
        menuBtn.style.cssText = `
            display: block !important;
            padding: 1rem 2rem !important;
            font-size: 1.25rem !important;
            font-weight: 600 !important;
            color: white !important;
            text-decoration: none !important;
            border-radius: 12px !important;
            background: linear-gradient(135deg, #5AE3FF, #7C3AED) !important;
            border: none !important;
            margin-top: 1rem !important;
            width: 100% !important;
            text-align: center !important;
            box-sizing: border-box !important;
            transition: all 0.3s ease !important;
        `;
        
        menuBtn.addEventListener('mouseenter', () => {
            menuBtn.style.transform = 'scale(1.05)';
        });
        
        menuBtn.addEventListener('mouseleave', () => {
            menuBtn.style.transform = 'scale(1)';
        });
        
        menuContent.appendChild(menuBtn);
    }
    
    mobileMenu.appendChild(menuContent);
    
    // Click outside to close
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            const button = document.querySelector('[aria-label="Toggle menu"]');
            if (button) {
                closeMobileMenu(mobileMenu, button);
            }
        }
    });
    
    // iOS viewport fix on orientation change and resize
    const handleViewportChange = () => {
        if (mobileMenu.classList.contains('show')) {
            setImmediateStyles();
        }
    };
    
    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('orientationchange', () => {
        setTimeout(handleViewportChange, 100);
    });
    
    // Append to body
    document.body.appendChild(mobileMenu);
    
    return mobileMenu;
}

function openMobileMenu(mobileMenu, button) {
    // Close other menus first
    closeMobileMenus();
    
    // Animate hamburger to X
    animateHamburgerToX(button);
    
    // iOS Safari aggressive viewport and positioning fix
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
        // Temporarily adjust viewport for iOS Safari
        let viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover';
        }
        
        // Force Safari to recalculate viewport
        window.scrollTo(0, 0);
    }
    
    // Force iOS-compatible full screen positioning with immediate viewport calculation
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    
    // Ultra-aggressive positioning - override everything
    mobileMenu.style.cssText = `
        position: fixed !important;
        top: 0px !important;
        left: 0px !important;
        right: 0px !important;
        bottom: 0px !important;
        width: ${vw}px !important;
        height: ${vh}px !important;
        max-width: none !important;
        max-height: none !important;
        min-width: ${vw}px !important;
        min-height: ${vh}px !important;
        background: rgba(13, 19, 33, 0.98) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        z-index: 99999 !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        padding: 2rem !important;
        margin: 0 !important;
        border: none !important;
        outline: none !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        transition: opacity 0.4s ease, visibility 0.4s ease !important;
        overflow: hidden !important;
        -webkit-overflow-scrolling: touch !important;
        transform: translateZ(0) !important;
        -webkit-transform: translateZ(0) !important;
    `;
    
    mobileMenu.classList.add('show');
    
    // Prevent body scroll with iOS-specific fixes
    const scrollY = window.scrollY;
    document.body.style.cssText = `
        overflow: hidden !important;
        position: fixed !important;
        top: -${scrollY}px !important;
        left: 0 !important;
        width: 100% !important;
        height: 100vh !important;
        -webkit-overflow-scrolling: touch !important;
    `;
    
    // Store scroll position for restoration
    mobileMenu.dataset.scrollY = scrollY;
    
    // Force reflow on iOS with multiple aggressive attempts
    if (isIOS) {
        // Force hardware acceleration and absolute positioning
        mobileMenu.style.webkitTransform = 'translate3d(0,0,0)';
        mobileMenu.style.transform = 'translate3d(0,0,0)';
        mobileMenu.style.webkitBackfaceVisibility = 'hidden';
        mobileMenu.style.backfaceVisibility = 'hidden';
        
        // Force immediate recalculation
        mobileMenu.offsetHeight; // Force reflow
        document.documentElement.offsetHeight; // Force document reflow
        
        // Multiple aggressive positioning attempts
        const setIOSPosition = () => {
            const currentVH = window.innerHeight;
            const currentVW = window.innerWidth;
            
            mobileMenu.style.height = currentVH + 'px';
            mobileMenu.style.width = currentVW + 'px';
            mobileMenu.style.minHeight = currentVH + 'px';
            mobileMenu.style.minWidth = currentVW + 'px';
            mobileMenu.style.maxHeight = currentVH + 'px';
            mobileMenu.style.maxWidth = currentVW + 'px';
        };
        
        setIOSPosition();
        
        // Multiple attempts with different timings
        setTimeout(setIOSPosition, 10);
        setTimeout(setIOSPosition, 50);
        setTimeout(setIOSPosition, 100);
        setTimeout(setIOSPosition, 200);
        
        // Force Safari address bar to minimize
        setTimeout(() => {
            window.scrollTo(0, 1);
            setTimeout(() => {
                window.scrollTo(0, 0);
                setIOSPosition();
            }, 10);
        }, 300);
    }
}

function closeMobileMenu(mobileMenu, button) {
    // Animate X to hamburger
    animateXToHamburger(button);
    
    // Hide menu
    mobileMenu.classList.remove('show');
    mobileMenu.style.opacity = '0';
    mobileMenu.style.visibility = 'hidden';
    
    // Restore body scroll and position
    const scrollY = mobileMenu.dataset.scrollY || 0;
    document.body.style.cssText = '';
    window.scrollTo(0, parseInt(scrollY));
    
    // Restore original viewport for iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        let viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.content = 'width=device-width, initial-scale=1';
        }
    }
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
        document.body.style.cssText = '';
    }
    
    // Re-run branding updates on resize
    setTimeout(() => {
        updateBranding();
    }, 100);
}

window.addEventListener('resize', handleResize);
