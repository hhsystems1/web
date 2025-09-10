// ENHANCED MOBILE MENU WITH IMPROVED BRANDING AND NO FLASH
// This file provides mobile menu functionality with iOS Safari compatibility
// and proper navbar branding management without FOUC (Flash of Unstyled Content)

// iOS Safari Detection and Viewport Management
function isIOSSafari() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && 
           !window.MSStream && 
           /Safari/.test(navigator.userAgent);
}

// Aggressive viewport handling for iOS Safari
function handleIOSViewport() {
    if (isIOSSafari()) {
        // Force viewport meta updates
        let viewport = document.querySelector('meta[name=viewport]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            document.head.appendChild(viewport);
        }
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
        
        // Force CSS injection for mobile menu coverage
        let mobileCSSOverride = document.querySelector('#mobile-menu-ios-fix');
        if (!mobileCSSOverride) {
            mobileCSSOverride = document.createElement('style');
            mobileCSSOverride.id = 'mobile-menu-ios-fix';
            document.head.appendChild(mobileCSSOverride);
        }
        
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        const maxHeight = Math.max(vh, screen.height, 1000);
        const maxWidth = Math.max(vw, screen.width, 500);
        
        mobileCSSOverride.textContent = `
            .mobile-menu {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                width: ${maxWidth}px !important;
                height: ${maxHeight}px !important;
                min-width: ${maxWidth}px !important;
                min-height: ${maxHeight}px !important;
                max-width: none !important;
                max-height: none !important;
                z-index: 99999 !important;
                -webkit-transform: translate3d(0,0,0) !important;
                transform: translate3d(0,0,0) !important;
            }
        `;
    }
}

// Immediately hide navbar text on script load to prevent FOUC
(function() {
    'use strict';
    
    // Critical: Hide text immediately when script loads
    function hideNavbarTextImmediate() {
        const style = document.createElement('style');
        style.textContent = `
            .container .flex.items-center.space-x-2 > span,
            .floating-island .flex.items-center.space-x-2 > span,
            nav .flex.items-center.space-x-2 > span,
            header .flex.items-center.space-x-2 > span,
            a .text-xl.font-bold.text-white.drop-shadow-lg,
            a .text-lg.font-bold.text-primary,
            .text-xl.font-bold.text-white.drop-shadow-lg,
            .text-lg.font-bold.text-primary {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                position: absolute !important;
                left: -9999px !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Run immediately if document is already loaded, otherwise wait for DOMContentLoaded
    if (document.readyState !== 'loading') {
        hideNavbarTextImmediate();
    } else {
        document.addEventListener('DOMContentLoaded', hideNavbarTextImmediate);
    }
})();

// Main branding update function - runs after DOM is ready
function updateBranding() {
    try {
        // Update footer branding
        updateFooterBranding();
        
        // Handle navbar branding based on screen size
        if (window.innerWidth >= 768) {
            addDesktopBranding();
        } else {
            removeDesktopBranding();
        }
    } catch (error) {
        console.log('Branding update error:', error);
    }
}

function updateFooterBranding() {
    try {
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
    } catch (error) {
        console.log('Footer branding error:', error);
    }
}

function addDesktopBranding() {
    try {
        // Only proceed if we're on desktop/tablet
        if (window.innerWidth < 768) return;
        
        // Remove any existing desktop brands first
        removeDesktopBranding();
        
        // Target floating island navbar for desktop branding
        const floatingNavContainer = document.querySelector('.floating-island .flex.items-center.space-x-2');
        
        if (floatingNavContainer) {
            const brandSpan = document.createElement('span');
            brandSpan.className = 'desktop-brand';
            brandSpan.textContent = 'Helping Hands Systems';
            brandSpan.style.cssText = `
                font-size: 1.125rem !important;
                font-weight: 700 !important;
                color: var(--primary) !important;
                margin-left: 0.5rem !important;
                white-space: nowrap !important;
                display: inline !important;
                visibility: visible !important;
                opacity: 1 !important;
                position: static !important;
                left: auto !important;
            `;
            floatingNavContainer.appendChild(brandSpan);
        }
    } catch (error) {
        console.log('Add desktop branding error:', error);
    }
}

function removeDesktopBranding() {
    try {
        const existingBrands = document.querySelectorAll('.desktop-brand');
        existingBrands.forEach(brand => {
            if (brand && brand.parentNode) {
                brand.parentNode.removeChild(brand);
            }
        });
    } catch (error) {
        console.log('Remove desktop branding error:', error);
    }
}

// Mobile menu functions
function initializeMobileMenu() {
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
    const navLinks = navbar.querySelectorAll('nav a, header a');
    const getStartedBtn = navbar.querySelector('[href*="contact"], [href*="packages"]');
    
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Professional viewport handling using modern CSS
    const setFullscreenStyles = () => {
        mobileMenu.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            min-height: 100vh !important;
            min-height: 100dvh !important;
            max-height: none !important;
            background: rgba(13, 19, 33, 0.98) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            z-index: 999999 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            padding: env(safe-area-inset-top, 2rem) env(safe-area-inset-right, 2rem) env(safe-area-inset-bottom, 2rem) env(safe-area-inset-left, 2rem) !important;
            margin: 0 !important;
            border: none !important;
            box-sizing: border-box !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transition: opacity 0.3s ease !important;
            overflow: hidden !important;
            -webkit-overflow-scrolling: touch !important;
            transform: translateZ(0) !important;
        `;
    };
    
    // Apply styles immediately
    setFullscreenStyles();
    
    // Handle viewport changes
    const handleResize = () => {
        if (mobileMenu.classList.contains('show')) {
            setFullscreenStyles();
            mobileMenu.style.opacity = '1';
            mobileMenu.style.visibility = 'visible';
        }
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', () => {
        setTimeout(handleResize, 100);
    }, { passive: true });
    
    // Create menu content
    const menuContent = document.createElement('div');
    menuContent.style.cssText = `
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        gap: 2rem !important;
        width: 100% !important;
        max-width: 300px !important;
    `;
    
    // Add navigation links
    navLinks.forEach((link, index) => {
        if (!link.closest('.mobile-menu') && 
            !link.querySelector('img') && 
            !link.classList.contains('hidden') &&
            link.textContent.trim()) {
            
            const menuLink = document.createElement('a');
            menuLink.href = link.href;
            menuLink.textContent = link.textContent;
            menuLink.style.cssText = `
                color: white !important;
                font-size: 1.25rem !important;
                font-weight: 600 !important;
                text-decoration: none !important;
                padding: 0.75rem 1.5rem !important;
                border-radius: 0.5rem !important;
                transition: all 0.3s ease !important;
                text-align: center !important;
                width: 100% !important;
                opacity: 0 !important;
                transform: translateY(20px) !important;
            `;
            
            menuLink.addEventListener('mouseenter', () => {
                menuLink.style.background = 'rgba(255, 255, 255, 0.1)';
            });
            
            menuLink.addEventListener('mouseleave', () => {
                menuLink.style.background = 'transparent';
            });
            
            menuContent.appendChild(menuLink);
        }
    });
    
    // Add Get Started button if exists
    if (getStartedBtn) {
        const menuBtn = document.createElement('a');
        menuBtn.href = getStartedBtn.href;
        menuBtn.textContent = getStartedBtn.textContent;
        menuBtn.style.cssText = `
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
            color: white !important;
            font-size: 1.1rem !important;
            font-weight: 600 !important;
            text-decoration: none !important;
            padding: 1rem 2rem !important;
            border-radius: 2rem !important;
            transition: all 0.3s ease !important;
            text-align: center !important;
            margin-top: 1rem !important;
            opacity: 0 !important;
            transform: translateY(20px) !important;
        `;
        
        menuContent.appendChild(menuBtn);
    }
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute !important;
        top: 1.5rem !important;
        right: 1.5rem !important;
        background: none !important;
        border: none !important;
        color: white !important;
        font-size: 2rem !important;
        cursor: pointer !important;
        z-index: 100000 !important;
        width: 3rem !important;
        height: 3rem !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 50% !important;
        transition: background 0.3s ease !important;
    `;
    
    closeBtn.addEventListener('click', () => {
        const button = document.querySelector('[aria-label="Toggle menu"]');
        closeMobileMenu(mobileMenu, button);
    });
    
    mobileMenu.appendChild(closeBtn);
    mobileMenu.appendChild(menuContent);
    document.body.appendChild(mobileMenu);
    
    return mobileMenu;
}

function openMobileMenu(mobileMenu, button) {
    // Get current viewport dimensions accounting for mobile browsers
    const currentVH = window.innerHeight;
    const currentVW = window.innerWidth;
    
    // Apply comprehensive fullscreen positioning
    mobileMenu.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        min-height: 100vh !important;
        max-height: none !important;
        background: rgba(13, 19, 33, 0.98) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        z-index: 999999 !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        padding: env(safe-area-inset-top, 1rem) env(safe-area-inset-right, 1rem) env(safe-area-inset-bottom, 1rem) env(safe-area-inset-left, 1rem) !important;
        margin: 0 !important;
        border: none !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        transition: opacity 0.3s ease !important;
        overflow: hidden !important;
        -webkit-overflow-scrolling: touch !important;
        transform: translateZ(0) !important;
    `;
    
    // Force specific dimensions for problematic devices
    mobileMenu.style.setProperty('width', `${currentVW}px`, 'important');
    mobileMenu.style.setProperty('height', `${currentVH}px`, 'important');
    
    mobileMenu.classList.add('show');
    
    // Animate menu items
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100 + 200);
    });
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Update button state
    if (button) {
        button.setAttribute('aria-expanded', 'true');
    }
}

function closeMobileMenu(mobileMenu, button) {
    mobileMenu.style.opacity = '0';
    mobileMenu.style.visibility = 'hidden';
    mobileMenu.classList.remove('show');
    
    // Clean removal after animation
    setTimeout(() => {
        if (mobileMenu.parentNode) {
            mobileMenu.parentNode.removeChild(mobileMenu);
        }
    }, 300);
    
    // Restore body scroll
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    // Update button state
    if (button) {
        button.setAttribute('aria-expanded', 'false');
    }
}

function closeMobileMenus() {
    const mobileMenus = document.querySelectorAll('.mobile-menu');
    mobileMenus.forEach(menu => {
        const button = document.querySelector('[aria-label="Toggle menu"]');
        closeMobileMenu(menu, button);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initial branding update
    updateBranding();
    
    // Handle window resize for responsive branding - UNIVERSAL
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateBranding();
            // Force mobile menu repositioning on ALL devices
            const mobileMenus = document.querySelectorAll('.mobile-menu');
            mobileMenus.forEach(menu => {
                if (menu.classList.contains('show')) {
                    menu.style.setProperty('width', '100vw', 'important');
                    menu.style.setProperty('height', '100vh', 'important');
                }
            });
        }, 150);
    });
    
    // Handle orientation changes - UNIVERSAL
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            updateBranding();
            // Force mobile menu repositioning after orientation change
            const mobileMenus = document.querySelectorAll('.mobile-menu');
            mobileMenus.forEach(menu => {
                if (menu.classList.contains('show')) {
                    menu.style.setProperty('width', '100vw', 'important');
                    menu.style.setProperty('height', '100vh', 'important');
                }
            });
        }, 300);
    });
    
    // Additional safety net
    setTimeout(updateBranding, 100);
});

// Export functions for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateBranding,
        initializeMobileMenu,
        toggleMobileMenu
    };
}
