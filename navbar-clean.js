// CLEAN NAVBAR SYSTEM - Complete redesign
// Simple, functional, professional navbar with transparent-to-floating transition

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Clean Navbar System: Starting...');
    
    // Remove all existing navbar mess and rebuild cleanly
    cleanupExistingNavbars();
    createCleanNavbar();
    setupNavbarFunctionality();
    
    console.log('✅ Clean Navbar System: Ready!');
});

// Clean up the existing broken navbar mess
function cleanupExistingNavbars() {
    console.log('🧹 Cleaning up existing navbars...');
    
    // Remove all existing navbar elements
    const existingNavs = document.querySelectorAll('.absolute.top-0, .floating-island, header');
    existingNavs.forEach(nav => {
        if (nav.querySelector('nav') || nav.querySelector('button[aria-label="Toggle menu"]')) {
            nav.remove();
        }
    });
    
    // Remove existing mobile menu
    const existingMobileMenu = document.getElementById('mobile-menu');
    if (existingMobileMenu) {
        existingMobileMenu.remove();
    }
    
    console.log('✅ Cleanup complete');
}

// Create clean, functional navbar
function createCleanNavbar() {
    console.log('🏗️ Building clean navbar...');
    
    const body = document.body;
    
    // Create navbar container
    const navbarContainer = document.createElement('div');
    navbarContainer.id = 'clean-navbar';
    navbarContainer.innerHTML = `
        <!-- Transparent Navbar (Top of page) -->
        <nav id="transparent-navbar" class="clean-navbar transparent">
            <div class="navbar-content">
                <div class="navbar-brand">
                    <img src="/hhs-logo.png" alt="HHS Logo" class="brand-logo">
                    <span class="brand-text">Helping Hands Systems</span>
                </div>
                
                <div class="navbar-links desktop-only">
                    <a href="/services/">Services</a>
                    <a href="/why-us/">Why Us</a>
                    <a href="/packages/">Packages</a>
                    <a href="/contact/">Contact</a>
                </div>
                
                <div class="navbar-actions">
                    <a href="/contact/" class="get-started-btn desktop-only">Get Started</a>
                    <button id="mobile-menu-toggle" class="mobile-only" aria-label="Toggle menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 5h16M4 12h16M4 19h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        
        <!-- Floating Island Navbar (When scrolling) -->
        <nav id="floating-navbar" class="clean-navbar floating">
            <div class="navbar-content">
                <div class="navbar-brand">
                    <img src="/hhs-logo.png" alt="HHS Logo" class="brand-logo">
                    <span class="brand-text">Helping Hands Systems</span>
                </div>
                
                <div class="navbar-links desktop-only">
                    <a href="/services/">Services</a>
                    <a href="/why-us/">Why Us</a>
                    <a href="/packages/">Packages</a>
                    <a href="/contact/">Contact</a>
                </div>
                
                <div class="navbar-actions">
                    <a href="/contact/" class="get-started-btn desktop-only">Get Started</a>
                    <button id="mobile-menu-toggle-floating" class="mobile-only" aria-label="Toggle menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 5h16M4 12h16M4 19h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        
        <!-- Mobile Menu -->
        <div id="clean-mobile-menu" class="mobile-menu">
            <div class="mobile-menu-content">
                <button id="mobile-menu-close" class="mobile-menu-close" aria-label="Close menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>
                
                <div class="mobile-menu-brand">
                    <img src="/hhs-logo.png" alt="HHS Logo" class="brand-logo">
                    <span class="brand-text">Helping Hands Systems</span>
                </div>
                
                <nav class="mobile-menu-nav">
                    <a href="/services/" class="mobile-menu-link">Services</a>
                    <a href="/why-us/" class="mobile-menu-link">Why Us</a>
                    <a href="/packages/" class="mobile-menu-link">Packages</a>
                    <a href="/contact/" class="mobile-menu-link">Contact</a>
                </nav>
                
                <div class="mobile-menu-actions">
                    <a href="/contact/" class="get-started-btn-mobile">Get Started</a>
                </div>
            </div>
        </div>
    `;
    
    // Insert at the beginning of body
    body.insertBefore(navbarContainer, body.firstChild);
    
    console.log('✅ Clean navbar created');
}

// Setup navbar functionality
function setupNavbarFunctionality() {
    console.log('⚙️ Setting up navbar functionality...');
    
    const transparentNav = document.getElementById('transparent-navbar');
    const floatingNav = document.getElementById('floating-navbar');
    const mobileMenu = document.getElementById('clean-mobile-menu');
    
    if (!transparentNav || !floatingNav || !mobileMenu) {
        console.error('❌ Navbar elements not found');
        return;
    }
    
    // Scroll detection for navbar transition
    let isFloating = false;
    
    function handleScroll() {
        const scrollY = window.scrollY;
        const shouldFloat = scrollY > 100;
        
        if (shouldFloat && !isFloating) {
            // Switch to floating navbar
            transparentNav.style.opacity = '0';
            transparentNav.style.pointerEvents = 'none';
            floatingNav.style.opacity = '1';
            floatingNav.style.visibility = 'visible';
            floatingNav.style.transform = 'translateX(-50%) translateY(0)';
            isFloating = true;
        } else if (!shouldFloat && isFloating) {
            // Switch to transparent navbar
            transparentNav.style.opacity = '1';
            transparentNav.style.pointerEvents = 'auto';
            floatingNav.style.opacity = '0';
            floatingNav.style.visibility = 'hidden';
            floatingNav.style.transform = 'translateX(-50%) translateY(-20px)';
            isFloating = false;
        }
    }
    
    // Throttled scroll listener
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 10);
    });
    
    // Mobile menu functionality (only on mobile/tablet)
    function setupMobileMenu() {
        if (window.innerWidth >= 1024) return; // Desktop protection
        
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const mobileToggleFloating = document.getElementById('mobile-menu-toggle-floating');
        const mobileClose = document.getElementById('mobile-menu-close');
        const mobileLinks = document.querySelectorAll('.mobile-menu-link');
        
        // Open mobile menu
        function openMobileMenu() {
            if (window.innerWidth >= 1024) return; // Double check
            
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close mobile menu
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Event listeners
        if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
        if (mobileToggleFloating) mobileToggleFloating.addEventListener('click', openMobileMenu);
        if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
        
        // Close on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close on overlay click
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
    
    // Setup mobile menu initially
    setupMobileMenu();
    
    // Re-setup on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Close mobile menu if resized to desktop
            if (window.innerWidth >= 1024 && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
            setupMobileMenu();
        }, 150);
    });
    
    // Initial scroll check
    handleScroll();
    
    console.log('✅ Navbar functionality setup complete');
}
