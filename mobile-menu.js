// DEBUG VERSION - Simple mobile menu
console.log('Mobile menu debug script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing mobile menu debug');
    
    // Find ALL mobile menu buttons
    const buttons = document.querySelectorAll('button[aria-label="Toggle menu"]');
    console.log('Found mobile menu buttons:', buttons.length);
    
    buttons.forEach((button, index) => {
        console.log(`Button ${index}:`, button);
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu button clicked!', this);
            
            // Simple alert for debugging
            alert('Mobile menu button clicked! This confirms JavaScript is working.');
            
            // Try to create a simple overlay
            let overlay = document.querySelector('.debug-mobile-menu');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'debug-mobile-menu';
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.9);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 2rem;
                `;
                overlay.innerHTML = '<div>DEBUG MENU<br><button onclick="this.parentElement.parentElement.remove()">Close</button></div>';
                document.body.appendChild(overlay);
            } else {
                overlay.remove();
            }
        });
    });
});

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
    // Get ALL mobile menu buttons from BOTH navbars
    const mobileMenuBtns = document.querySelectorAll('[aria-label="Toggle menu"]');
    
    console.log(`Found ${mobileMenuBtns.length} mobile menu buttons`);
    
    mobileMenuBtns.forEach((btn, index) => {
        console.log(`Initializing button ${index + 1}:`, btn);
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu button clicked:', this);
            toggleMobileMenu(this);
        });
    });
    
    // Close menu when clicking on links
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.href) {
            closeMobileMenus();
        }
    });
    
    // Force click event binding for both navbar types
    setTimeout(() => {
        // Top navbar button
        const topNavBtn = document.querySelector('.absolute.top-0 button[aria-label="Toggle menu"]');
        if (topNavBtn && !topNavBtn.hasAttribute('data-mobile-menu-bound')) {
            topNavBtn.setAttribute('data-mobile-menu-bound', 'true');
            topNavBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Top navbar mobile menu clicked');
                toggleMobileMenu(this);
            });
        }
        
        // Floating island button
        const floatingNavBtn = document.querySelector('.floating-island button[aria-label="Toggle menu"]');
        if (floatingNavBtn && !floatingNavBtn.hasAttribute('data-mobile-menu-bound')) {
            floatingNavBtn.setAttribute('data-mobile-menu-bound', 'true');
            floatingNavBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Floating navbar mobile menu clicked');
                toggleMobileMenu(this);
            });
        }
    }, 500);
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
    // Get links from BOTH navbar structures - top navbar and floating island
    let navLinks;
    let getStartedBtn;
    
    // Try to get links from the specific navbar first
    navLinks = navbar.querySelectorAll('nav a, header a');
    getStartedBtn = navbar.querySelector('[href*="contact"], [href*="packages"]');
    
    // If no links found, get from the entire document (fallback)
    if (navLinks.length === 0) {
        console.log('No links found in specific navbar, searching entire document');
        navLinks = document.querySelectorAll('nav a, header a, .absolute.top-0 a, .floating-island a');
        getStartedBtn = document.querySelector('[href*="contact"], [href*="packages"]');
    }
    
    console.log(`Found ${navLinks.length} navigation links for mobile menu`);
    
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // UNIVERSAL RESPONSIVE VIEWPORT COVERAGE - WORKS ON ALL DEVICES
    const setUniversalFullscreen = () => {
        // Get EVERY possible dimension measurement
        const windowH = window.innerHeight || 0;
        const windowW = window.innerWidth || 0;
        const documentH = document.documentElement.clientHeight || 0;
        const documentW = document.documentElement.clientWidth || 0;
        const bodyH = document.body.clientHeight || 0;
        const bodyW = document.body.clientWidth || 0;
        const screenH = screen.height || 0;
        const screenW = screen.width || 0;
        const availH = screen.availHeight || 0;
        const availW = screen.availWidth || 0;
        
        // Use MAXIMUM of all available dimensions + generous fallbacks
        const finalHeight = Math.max(windowH, documentH, bodyH, screenH, availH, 800, window.outerHeight || 0);
        const finalWidth = Math.max(windowW, documentW, bodyW, screenW, availW, 400, window.outerWidth || 0);
        
        // FORCE ABSOLUTE POSITIONING WITH CSS CUSTOM PROPERTIES
        mobileMenu.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            min-width: ${finalWidth}px !important;
            min-height: ${finalHeight}px !important;
            max-width: none !important;
            max-height: none !important;
            background: rgba(13, 19, 33, 0.98) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            z-index: 999999 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            padding: 2rem !important;
            margin: 0 !important;
            border: none !important;
            box-sizing: border-box !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transition: opacity 0.3s ease !important;
            overflow: hidden !important;
            -webkit-overflow-scrolling: touch !important;
            transform: translateZ(0) !important;
            -webkit-transform: translateZ(0) !important;
            will-change: transform !important;
        `;
        
        // Additional fallback positioning for stubborn devices
        mobileMenu.style.setProperty('position', 'fixed', 'important');
        mobileMenu.style.setProperty('inset', '0', 'important');
        mobileMenu.style.setProperty('width', '100vw', 'important');
        mobileMenu.style.setProperty('height', '100vh', 'important');
        mobileMenu.style.setProperty('width', '100dvw', 'important');
        mobileMenu.style.setProperty('height', '100dvh', 'important');
        
        console.log(`Mobile menu: Using ${finalWidth}x${finalHeight} (window: ${windowW}x${windowH}, screen: ${screenW}x${screenH})`);
    };
    
    // Apply styles immediately
    setUniversalFullscreen();
    
    // UNIVERSAL RESIZE HANDLER - NO DEVICE LEFT BEHIND
    const universalResize = () => {
        setUniversalFullscreen();
        
        // Force repaint
        mobileMenu.style.display = 'none';
        mobileMenu.offsetHeight; // Force reflow
        mobileMenu.style.display = 'flex';
    };
    
    // Listen to ALL resize events across all browsers and devices
    const resizeEvents = ['resize', 'orientationchange', 'load', 'scroll'];
    resizeEvents.forEach(event => {
        window.addEventListener(event, universalResize, { passive: true });
    });
    
    // Mobile-specific events
    const mobileEvents = ['touchstart', 'gesturestart', 'gesturechange'];
    mobileEvents.forEach(event => {
        window.addEventListener(event, universalResize, { passive: true });
    });
    
    // Force multiple updates for different device quirks
    setTimeout(universalResize, 0);
    setTimeout(universalResize, 100);
    setTimeout(universalResize, 300);
    
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
    // Force full-screen coverage for ALL devices
    mobileMenu.style.setProperty('position', 'fixed', 'important');
    mobileMenu.style.setProperty('top', '0', 'important');
    mobileMenu.style.setProperty('left', '0', 'important');
    mobileMenu.style.setProperty('right', '0', 'important');
    mobileMenu.style.setProperty('bottom', '0', 'important');
    mobileMenu.style.setProperty('width', '100vw', 'important');
    mobileMenu.style.setProperty('height', '100vh', 'important');
    mobileMenu.style.setProperty('z-index', '999999', 'important');
    
    // Show the menu
    mobileMenu.style.opacity = '1';
    mobileMenu.style.visibility = 'visible';
    mobileMenu.classList.add('show');
    
    // Animate menu items
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100 + 200);
    });
    
    // Lock body scroll for ALL devices
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
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
    
    // Restore body and document for ALL devices
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.height = '';
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
