// PROFESSIONAL RESPONSIVE NAVBAR SYSTEM
// Handles transparent to floating island transition with proper mobile menu

(function() {
    'use strict';
    
    let isScrolled = false;
    let mobileMenuOpen = false;
    
    // Initialize navbar system
    function initializeNavbar() {
        handleScrollTransition();
        initializeMobileMenu();
        setupScrollListener();
        updateBranding();
    }
    
    // Handle scroll-based navbar transition
    function handleScrollTransition() {
        const scrollY = window.scrollY;
        const topNavbar = document.querySelector('.absolute.top-0');
        const floatingNavbar = document.querySelector('.floating-island').parentElement;
        
        if (scrollY > 100 && !isScrolled) {
            // Switch to floating navbar
            isScrolled = true;
            
            if (topNavbar) {
                topNavbar.style.opacity = '0';
                topNavbar.style.pointerEvents = 'none';
            }
            
            if (floatingNavbar) {
                floatingNavbar.style.opacity = '1';
                floatingNavbar.style.transform = 'translateX(-50%) translateY(0) scale(1)';
                floatingNavbar.style.pointerEvents = 'auto';
            }
            
        } else if (scrollY <= 100 && isScrolled) {
            // Switch to transparent navbar
            isScrolled = false;
            
            if (topNavbar) {
                topNavbar.style.opacity = '1';
                topNavbar.style.pointerEvents = 'auto';
            }
            
            if (floatingNavbar) {
                floatingNavbar.style.opacity = '0';
                floatingNavbar.style.transform = 'translateX(-50%) translateY(-30px) scale(0.8)';
                floatingNavbar.style.pointerEvents = 'none';
            }
        }
    }
    
    // Setup scroll listener with throttling
    function setupScrollListener() {
        let ticking = false;
        
        function updateNavbar() {
            handleScrollTransition();
            ticking = false;
        }
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        }, { passive: true });
    }
    
    // Mobile menu functionality - ONLY for mobile/tablet devices
    function initializeMobileMenu() {
        const mobileButtons = document.querySelectorAll('button[aria-label="Toggle menu"]');
        
        mobileButtons.forEach(button => {
            button.addEventListener('click', handleMobileMenuToggle);
        });
        
        // Close menu when clicking links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href]') && mobileMenuOpen) {
                closeMobileMenu();
            }
        });
    }
    
    function handleMobileMenuToggle(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Only activate on mobile/tablet devices
        if (window.innerWidth >= 1024) {
            return; // Desktop - do nothing
        }
        
        if (mobileMenuOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        if (window.innerWidth >= 1024) return; // Desktop protection
        
        mobileMenuOpen = true;
        
        // Create mobile menu overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(13, 19, 33, 0.98);
            backdrop-filter: blur(12px);
            z-index: 9999;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: env(safe-area-inset-top, 2rem) env(safe-area-inset-right, 2rem) env(safe-area-inset-bottom, 2rem) env(safe-area-inset-left, 2rem);
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        // Create menu content
        const menuContent = document.createElement('div');
        menuContent.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            width: 100%;
            max-width: 300px;
        `;
        
        // Add navigation links
        const navLinks = [
            { href: '/services/', text: 'Services' },
            { href: '/why-us/', text: 'Why Us' },
            { href: '/packages/', text: 'Packages' },
            { href: '/contact/', text: 'Contact' }
        ];
        
        navLinks.forEach((link, index) => {
            const menuLink = document.createElement('a');
            menuLink.href = link.href;
            menuLink.textContent = link.text;
            menuLink.style.cssText = `
                color: white;
                font-size: 1.25rem;
                font-weight: 600;
                text-decoration: none;
                padding: 0.75rem 1.5rem;
                border-radius: 0.5rem;
                transition: all 0.3s ease;
                text-align: center;
                width: 100%;
                opacity: 0;
                transform: translateY(20px);
            `;
            
            menuLink.addEventListener('mouseenter', () => {
                menuLink.style.background = 'rgba(255, 255, 255, 0.1)';
            });
            
            menuLink.addEventListener('mouseleave', () => {
                menuLink.style.background = 'transparent';
            });
            
            menuContent.appendChild(menuLink);
            
            // Animate in
            setTimeout(() => {
                menuLink.style.opacity = '1';
                menuLink.style.transform = 'translateY(0)';
            }, index * 100 + 200);
        });
        
        // Add Get Started button
        const getStartedBtn = document.createElement('a');
        getStartedBtn.href = '/contact/';
        getStartedBtn.textContent = 'Get Started';
        getStartedBtn.style.cssText = `
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: none;
            padding: 1rem 2rem;
            border-radius: 2rem;
            transition: all 0.3s ease;
            text-align: center;
            margin-top: 1rem;
            opacity: 0;
            transform: translateY(20px);
        `;
        menuContent.appendChild(getStartedBtn);
        
        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = `
            position: absolute;
            top: env(safe-area-inset-top, 1.5rem);
            right: env(safe-area-inset-right, 1.5rem);
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.3s ease;
        `;
        
        closeBtn.addEventListener('click', closeMobileMenu);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeMobileMenu();
        });
        
        overlay.appendChild(closeBtn);
        overlay.appendChild(menuContent);
        document.body.appendChild(overlay);
        
        // Show overlay
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
        });
        
        // Animate Get Started button
        setTimeout(() => {
            getStartedBtn.style.opacity = '1';
            getStartedBtn.style.transform = 'translateY(0)';
        }, 600);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Update button states
        document.querySelectorAll('button[aria-label="Toggle menu"]').forEach(btn => {
            btn.setAttribute('aria-expanded', 'true');
        });
    }
    
    function closeMobileMenu() {
        mobileMenuOpen = false;
        
        const overlay = document.querySelector('.mobile-menu-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Update button states
        document.querySelectorAll('button[aria-label="Toggle menu"]').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
        });
    }
    
    // Branding management
    function updateBranding() {
        // Hide original navbar text
        const style = document.createElement('style');
        style.textContent = `
            .absolute.top-0 .text-xl.font-bold.text-white,
            .floating-island .text-lg.font-bold.text-primary {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
        
        // Update footer branding
        const footerElements = document.querySelectorAll('footer *');
        footerElements.forEach(el => {
            if (el.textContent && el.textContent.includes('Helping Hands Web')) {
                el.textContent = el.textContent.replace(/Helping Hands Web/g, 'Helping Hands Systems');
            }
        });
        
        // Add desktop branding to floating island
        if (window.innerWidth >= 768) {
            const floatingContainer = document.querySelector('.floating-island .flex.items-center.space-x-2');
            if (floatingContainer && !floatingContainer.querySelector('.desktop-brand')) {
                const brandSpan = document.createElement('span');
                brandSpan.className = 'desktop-brand text-lg font-bold text-primary';
                brandSpan.textContent = 'Helping Hands Systems';
                brandSpan.style.marginLeft = '0.5rem';
                floatingContainer.appendChild(brandSpan);
            }
        }
    }
    
    // Handle window resize
    function handleResize() {
        // Close mobile menu if window becomes desktop size
        if (window.innerWidth >= 1024 && mobileMenuOpen) {
            closeMobileMenu();
        }
        
        // Update branding
        updateBranding();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeNavbar);
    } else {
        initializeNavbar();
    }
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
})();
