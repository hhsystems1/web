// FINAL MOBILE MENU - ULTRA ROBUST VERSION FOR NEXT.JS
// Handles all edge cases and deployment environments

(function() {
    'use strict';
    
    console.log('Mobile menu script loaded');
    
    // Prevent multiple initialization
    if (window.mobileMenuInitialized) {
        console.log('Mobile menu already initialized, skipping');
        return;
    }
    window.mobileMenuInitialized = true;
    
    // Branding management - immediate execution
    function hideNavbarText() {
        const style = document.createElement('style');
        style.id = 'navbar-text-hide';
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
        console.log('Navbar text hidden');
    }
    
    function updateFooterBranding() {
        const footerElements = document.querySelectorAll('footer *');
        footerElements.forEach(el => {
            if (el.textContent && el.textContent.includes('Helping Hands Web')) {
                el.textContent = el.textContent.replace(/Helping Hands Web/g, 'Helping Hands Systems');
            }
        });
        console.log('Footer branding updated');
    }
    
    function addDesktopBranding() {
        if (window.innerWidth < 768) return;
        
        // Remove existing
        document.querySelectorAll('.desktop-brand').forEach(el => el.remove());
        
        // Add new
        const container = document.querySelector('.floating-island .flex.items-center.space-x-2');
        if (container) {
            const span = document.createElement('span');
            span.className = 'desktop-brand';
            span.textContent = 'Helping Hands Systems';
            span.style.cssText = `
                font-size: 1.125rem !important;
                font-weight: 700 !important;
                color: var(--primary, #667eea) !important;
                margin-left: 0.5rem !important;
                white-space: nowrap !important;
            `;
            container.appendChild(span);
            console.log('Desktop branding added');
        }
    }
    
    // Mobile menu functionality
    function initializeMobileMenu() {
        console.log('Initializing mobile menu...');
        
        const buttons = document.querySelectorAll('button[aria-label="Toggle menu"]');
        console.log(`Found ${buttons.length} mobile menu buttons`);
        
        buttons.forEach((button, index) => {
            console.log(`Setting up button ${index + 1}:`, button);
            
            // Remove any existing listeners
            button.replaceWith(button.cloneNode(true));
            const newButton = document.querySelectorAll('button[aria-label="Toggle menu"]')[index];
            
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Mobile menu button clicked');
                toggleMobileMenu(this);
            });
            
            newButton.style.cursor = 'pointer';
            newButton.style.outline = 'none';
        });
    }
    
    function toggleMobileMenu(button) {
        console.log('Toggling mobile menu');
        
        let menu = document.querySelector('.mobile-menu-overlay');
        
        if (menu) {
            console.log('Closing existing menu');
            closeMobileMenu(menu);
        } else {
            console.log('Creating and opening menu');
            menu = createMobileMenu();
            openMobileMenu(menu);
        }
    }
    
    function createMobileMenu() {
        console.log('Creating mobile menu');
        
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        
        // Ultra-reliable fullscreen styles
        overlay.style.cssText = `
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
        `;
        
        // Menu content container
        const content = document.createElement('div');
        content.style.cssText = `
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 2rem !important;
            width: 100% !important;
            max-width: 300px !important;
        `;
        
        // Get navigation links - try multiple selectors
        let navLinks = [];
        const selectors = [
            'nav a:not([href*="mailto"]):not([href*="tel"])',
            'header a:not([href*="mailto"]):not([href*="tel"])',
            '.absolute.top-0 nav a',
            '.floating-island nav a'
        ];
        
        selectors.forEach(selector => {
            const links = document.querySelectorAll(selector);
            links.forEach(link => {
                if (link.textContent.trim() && 
                    !link.querySelector('img') && 
                    !navLinks.some(existing => existing.href === link.href)) {
                    navLinks.push(link);
                }
            });
        });
        
        console.log(`Found ${navLinks.length} navigation links`);
        
        // Create menu links
        navLinks.forEach((link, index) => {
            if (['Services', 'Why Us', 'Packages', 'Contact'].includes(link.textContent.trim())) {
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
                
                content.appendChild(menuLink);
            }
        });
        
        // Get Started button
        const getStartedLink = document.querySelector('a[href*="/contact"], a[href*="/packages"]');
        if (getStartedLink) {
            const menuButton = document.createElement('a');
            menuButton.href = getStartedLink.href;
            menuButton.textContent = 'Get Started';
            menuButton.style.cssText = `
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
            content.appendChild(menuButton);
        }
        
        // Close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '✕';
        closeButton.style.cssText = `
            position: absolute !important;
            top: 1.5rem !important;
            right: 1.5rem !important;
            background: rgba(255, 255, 255, 0.1) !important;
            border: none !important;
            color: white !important;
            font-size: 2rem !important;
            cursor: pointer !important;
            z-index: 1000000 !important;
            width: 3rem !important;
            height: 3rem !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: 50% !important;
            transition: background 0.3s ease !important;
        `;
        
        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMobileMenu(overlay);
        });
        
        closeButton.addEventListener('mouseenter', () => {
            closeButton.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        closeButton.addEventListener('mouseleave', () => {
            closeButton.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeMobileMenu(overlay);
            }
        });
        
        overlay.appendChild(closeButton);
        overlay.appendChild(content);
        document.body.appendChild(overlay);
        
        console.log('Mobile menu created');
        return overlay;
    }
    
    function openMobileMenu(menu) {
        console.log('Opening mobile menu');
        
        // Show menu
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
        
        // Animate menu items
        const items = menu.querySelectorAll('a');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100 + 200);
        });
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.documentElement.style.overflow = 'hidden';
    }
    
    function closeMobileMenu(menu) {
        console.log('Closing mobile menu');
        
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        
        setTimeout(() => {
            if (menu.parentNode) {
                menu.parentNode.removeChild(menu);
            }
        }, 300);
        
        // Restore body
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.documentElement.style.overflow = '';
    }
    
    // Initialization function
    function initialize() {
        console.log('Running initialization...');
        
        // Hide navbar text immediately
        hideNavbarText();
        
        // Update branding
        updateFooterBranding();
        addDesktopBranding();
        
        // Initialize mobile menu
        initializeMobileMenu();
        
        // Handle resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                updateFooterBranding();
                addDesktopBranding();
            }, 150);
        });
        
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                updateFooterBranding();
                addDesktopBranding();
            }, 300);
        });
        
        console.log('Initialization complete');
    }
    
    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
    
    // Additional safety - run after a delay
    setTimeout(initialize, 100);
    setTimeout(initialize, 500);
    
})();
