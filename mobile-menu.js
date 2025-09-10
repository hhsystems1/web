// Professional Responsive Navbar System with Scroll Transitions
// Complete mobile menu and navbar management with bulletproof desktop protection

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Professional Navbar System: Initializing...');
    
    // BULLETPROOF DESKTOP PROTECTION - Multiple checks
    function isDesktop() {
        return window.innerWidth >= 1024;
    }
    
    function isMobileOrTablet() {
        return window.innerWidth < 1024;
    }
    
    // Force hide mobile menu on desktop
    function enforceDesktopRules() {
        if (isDesktop()) {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('show');
                mobileMenu.style.display = 'none';
                mobileMenu.style.visibility = 'hidden';
                mobileMenu.style.opacity = '0';
                mobileMenu.style.pointerEvents = 'none';
            }
            
            // Hide hamburger buttons on desktop
            const hamburgerButtons = document.querySelectorAll('button[aria-label="Toggle menu"]');
            hamburgerButtons.forEach(btn => {
                btn.style.display = 'none';
                btn.style.visibility = 'hidden';
                btn.style.pointerEvents = 'none';
            });
            
            console.log('🖥️ Desktop mode: Mobile menu and hamburger buttons hidden');
        } else {
            // Show hamburger buttons on mobile/tablet
            const hamburgerButtons = document.querySelectorAll('button[aria-label="Toggle menu"]');
            hamburgerButtons.forEach(btn => {
                btn.style.display = 'flex';
                btn.style.visibility = 'visible';
                btn.style.pointerEvents = 'auto';
            });
            
            console.log('📱 Mobile/Tablet mode: Hamburger buttons visible');
        }
    }
    
    // Initialize navbar system
    function initializeNavbar() {
        console.log('🔧 Initializing navbar components...');
        
        // Enforce desktop rules immediately
        enforceDesktopRules();
        
        const transparentNav = document.querySelector('.absolute.top-0');
        const floatingIsland = document.querySelector('.floating-island');
        
        if (!transparentNav || !floatingIsland) {
            console.error('❌ Navbar elements not found');
            return;
        }
        
        console.log('✅ Navbar elements found and configured');
        
        // Set up scroll handling
        handleScrollTransition();
        
        // Set up mobile menu (only for mobile/tablet)
        if (isMobileOrTablet()) {
            setupMobileMenu();
        }
        
        // Update branding
        updateNavbarBranding();
    }
    
    // Handle scroll-based navbar transitions
    function handleScrollTransition() {
        const transparentNav = document.querySelector('.absolute.top-0');
        const floatingIsland = document.querySelector('.floating-island');
        
        if (!transparentNav || !floatingIsland) return;
        
        let isFloatingVisible = false;
        
        function updateNavbarVisibility() {
            const scrollY = window.scrollY;
            const shouldShowFloating = scrollY > 100;
            
            if (shouldShowFloating && !isFloatingVisible) {
                // Show floating island
                transparentNav.style.opacity = '0';
                transparentNav.style.pointerEvents = 'none';
                floatingIsland.style.opacity = '1';
                floatingIsland.style.visibility = 'visible';
                floatingIsland.style.transform = 'translateY(0)';
                isFloatingVisible = true;
            } else if (!shouldShowFloating && isFloatingVisible) {
                // Show transparent navbar
                transparentNav.style.opacity = '1';
                transparentNav.style.pointerEvents = 'auto';
                floatingIsland.style.opacity = '0';
                floatingIsland.style.visibility = 'hidden';
                floatingIsland.style.transform = 'translateY(-20px)';
                isFloatingVisible = false;
            }
        }
        
        // Initial check
        updateNavbarVisibility();
        
        // Scroll listener with throttling
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(updateNavbarVisibility, 10);
        });
    }
    
    // Setup mobile menu functionality (ONLY for mobile/tablet)
    function setupMobileMenu() {
        if (isDesktop()) {
            console.log('🖥️ Desktop detected: Skipping mobile menu setup');
            return;
        }
        
        console.log('📱 Setting up mobile menu for mobile/tablet...');
        
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu) {
            console.error('❌ Mobile menu element not found');
            return;
        }
        
        // Find all hamburger buttons
        const hamburgerButtons = document.querySelectorAll('button[aria-label="Toggle menu"]');
        
        if (hamburgerButtons.length === 0) {
            console.error('❌ No hamburger buttons found');
            return;
        }
        
        console.log(`📱 Found ${hamburgerButtons.length} hamburger button(s)`);
        
        // Add click handlers to hamburger buttons
        hamburgerButtons.forEach((button, index) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // TRIPLE CHECK: Only allow on mobile/tablet
                if (isDesktop()) {
                    console.log('🖥️ Desktop click blocked: Mobile menu not allowed');
                    return false;
                }
                
                handleMobileMenuToggle();
            });
            
            console.log(`✅ Mobile menu handler attached to button ${index + 1}`);
        });
        
        // Add mobile menu close handlers
        setupMobileMenuCloseHandlers();
    }
    
    // Handle mobile menu toggle (with desktop protection)
    function handleMobileMenuToggle() {
        // BULLETPROOF DESKTOP PROTECTION
        if (isDesktop()) {
            console.log('🖥️ Desktop protection: Mobile menu toggle blocked');
            return false;
        }
        
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu) return;
        
        const isCurrentlyOpen = mobileMenu.classList.contains('show');
        
        if (isCurrentlyOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    // Open mobile menu (with desktop protection)
    function openMobileMenu() {
        // FINAL DESKTOP CHECK
        if (isDesktop()) {
            console.log('🖥️ Desktop protection: Cannot open mobile menu');
            return false;
        }
        
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu) return;
        
        console.log('📱 Opening mobile menu...');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        
        // Show mobile menu
        mobileMenu.style.display = 'flex';
        mobileMenu.style.visibility = 'visible';
        
        // Trigger show animation
        setTimeout(() => {
            mobileMenu.classList.add('show');
        }, 10);
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu) return;
        
        console.log('📱 Closing mobile menu...');
        
        // Remove show class
        mobileMenu.classList.remove('show');
        
        // Restore body scroll
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        
        // Hide menu after animation
        setTimeout(() => {
            mobileMenu.style.display = 'none';
            mobileMenu.style.visibility = 'hidden';
        }, 300);
    }
    
    // Setup mobile menu close handlers
    function setupMobileMenuCloseHandlers() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu) return;
        
        // Close on overlay click
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
                closeMobileMenu();
            }
        });
        
        // Close mobile menu links when clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
    
    // Update navbar branding
    function updateNavbarBranding() {
        console.log('🎨 Updating navbar branding...');
        
        // Desktop branding update
        const desktopBrandSelectors = [
            '.absolute.top-0 .flex.items-center.space-x-2',
            '.floating-island .flex.items-center.space-x-2'
        ];
        
        desktopBrandSelectors.forEach(selector => {
            const brandContainer = document.querySelector(selector);
            if (brandContainer) {
                // Hide default brand text
                const existingBrand = brandContainer.querySelector('span');
                if (existingBrand) {
                    existingBrand.style.display = 'none';
                }
                
                // Add custom brand
                let customBrand = brandContainer.querySelector('.desktop-brand');
                if (!customBrand) {
                    customBrand = document.createElement('span');
                    customBrand.className = 'desktop-brand';
                    customBrand.textContent = 'Helping Hands Systems';
                    customBrand.style.cssText = `
                        font-size: 1.125rem;
                        font-weight: 700;
                        margin-left: 0.5rem;
                        white-space: nowrap;
                        color: inherit;
                    `;
                    brandContainer.appendChild(customBrand);
                }
            }
        });
        
        console.log('✅ Navbar branding updated');
    }
    
    // Window resize handler with desktop protection
    function handleWindowResize() {
        console.log(`📏 Window resized: ${window.innerWidth}x${window.innerHeight}`);
        
        // Enforce desktop rules on resize
        enforceDesktopRules();
        
        // If resized to desktop, close mobile menu immediately
        if (isDesktop()) {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && mobileMenu.classList.contains('show')) {
                closeMobileMenu();
                console.log('🖥️ Closed mobile menu due to desktop resize');
            }
        }
        
        // Re-setup mobile menu if needed
        if (isMobileOrTablet()) {
            setupMobileMenu();
        }
    }
    
    // Window resize listener with debouncing
    let resizeTimeout;
    window.addEventListener('resize', function() {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(handleWindowResize, 150);
    });
    
    // Initialize the navbar system
    initializeNavbar();
    
    console.log('🎉 Professional Navbar System: Initialization complete!');
    console.log(`📱 Current mode: ${isDesktop() ? 'Desktop' : 'Mobile/Tablet'} (${window.innerWidth}px)`);
});
