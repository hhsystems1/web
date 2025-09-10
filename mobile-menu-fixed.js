// ENHANCED MOBILE MENU WITH IMPROVED BRANDING AND NO FLASH
// This file provides mobile menu functionality with iOS Safari compatibility
// and proper navbar branding management without FOUC (Flash of Unstyled Content)

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
    
    const setFullscreenStyles = () => {
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        
        mobileMenu.style.cssText = `
            position: fixed !important;
            top: 0px !important;
            left: 0px !important;
            right: 0px !important;
            bottom: 0px !important;
            width: ${vw}px !important;
            height: ${vh}px !important;
            background: rgba(13, 19, 33, 0.98) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            z-index: 99999 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            padding: 2rem !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transition: opacity 0.4s ease, visibility 0.4s ease !important;
            overflow: hidden !important;
            transform: translateZ(0) !important;
        `;
    };
    
    setFullscreenStyles();
    
    // iOS Safari viewport handling
    const handleResize = () => {
        setTimeout(() => {
            setFullscreenStyles();
        }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
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
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Update button state
    if (button) {
        button.setAttribute('aria-expanded', 'true');
    }
}

function closeMobileMenu(mobileMenu, button) {
    mobileMenu.style.opacity = '0';
    mobileMenu.style.visibility = 'hidden';
    mobileMenu.classList.remove('show');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
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
    
    // Handle window resize for responsive branding
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateBranding, 150);
    });
    
    // Handle viewport changes on mobile
    window.addEventListener('orientationchange', function() {
        setTimeout(updateBranding, 300);
    });
    
    // Additional safety net - update branding after a brief delay
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
