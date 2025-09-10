// PERFECT NAVBAR SYSTEM - Final JavaScript Solution
// Bulletproof, working navbar with proper responsive behavior

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Perfect Navbar System: Initializing...');
    
    createPerfectNavbar();
    initializeNavbarFunctionality();
    
    console.log('✅ Perfect Navbar System: Ready and functional!');
});

// Create the perfect navbar structure
function createPerfectNavbar() {
    console.log('🏗️ Creating perfect navbar...');
    
    // Remove any broken existing navbars
    const brokenNavs = document.querySelectorAll('.absolute.top-0, .floating-island, header[class*="fixed"], #mobile-menu, .clean-navbar');
    brokenNavs.forEach(nav => nav.remove());
    
    // Create perfect navbar HTML
    const navbarHTML = `
        <nav class="perfect-navbar transparent" id="perfect-navbar">
            <div class="navbar-container">
                <a href="/" class="navbar-brand">
                    <img src="/hhs-logo.png" alt="HHS Logo" class="brand-logo">
                    <span class="brand-text">Helping Hands Systems</span>
                </a>
                
                <ul class="navbar-nav">
                    <li><a href="/services/" class="nav-link">Services</a></li>
                    <li><a href="/why-us/" class="nav-link">Why Us</a></li>
                    <li><a href="/packages/" class="nav-link">Packages</a></li>
                    <li><a href="/contact/" class="nav-link">Contact</a></li>
                </ul>
                
                <a href="/contact/" class="navbar-cta">Get Started</a>
                
                <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 5h16M4 12h16M4 19h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
        
        <div class="perfect-mobile-menu" id="perfect-mobile-menu">
            <button class="mobile-close" id="mobile-close" aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
            </button>
            
            <div class="mobile-menu-content">
                <div class="mobile-brand">
                    <img src="/hhs-logo.png" alt="HHS Logo" class="brand-logo">
                    <span class="brand-text">Helping Hands Systems</span>
                </div>
                
                <ul class="mobile-nav">
                    <li><a href="/services/" class="mobile-nav-link">Services</a></li>
                    <li><a href="/why-us/" class="mobile-nav-link">Why Us</a></li>
                    <li><a href="/packages/" class="mobile-nav-link">Packages</a></li>
                    <li><a href="/contact/" class="mobile-nav-link">Contact</a></li>
                </ul>
                
                <a href="/contact/" class="mobile-cta">Get Started</a>
            </div>
        </div>
    `;
    
    // Insert navbar at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    console.log('✅ Perfect navbar created');
}

// Initialize all navbar functionality
function initializeNavbarFunctionality() {
    console.log('⚙️ Initializing navbar functionality...');
    
    const navbar = document.getElementById('perfect-navbar');
    const mobileMenu = document.getElementById('perfect-mobile-menu');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    
    if (!navbar || !mobileMenu || !mobileToggle || !mobileClose) {
        console.error('❌ Perfect navbar elements not found');
        return;
    }
    
    // Scroll detection for navbar transition
    let isFloating = false;
    let scrollTimeout;
    
    function handleScroll() {
        const scrollY = window.scrollY;
        const shouldFloat = scrollY > 50; // Changed from 100 to 50 for earlier trigger
        
        if (shouldFloat && !isFloating) {
            // Switch to floating navbar
            navbar.classList.remove('transparent');
            navbar.classList.add('floating');
            // Hide brand text in floating mode
            const brandText = navbar.querySelector('.brand-text');
            if (brandText) brandText.style.display = 'none';
            isFloating = true;
            console.log('📱 Switched to floating navbar');
        } else if (!shouldFloat && isFloating) {
            // Switch to transparent navbar
            navbar.classList.remove('floating');
            navbar.classList.add('transparent');
            // Show brand text in transparent mode
            const brandText = navbar.querySelector('.brand-text');
            if (brandText) brandText.style.display = 'inline';
            isFloating = false;
            console.log('🏠 Switched to transparent navbar');
        }
    }
    
    // Optimized scroll listener
    window.addEventListener('scroll', function() {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 10);
    });
    
    // Mobile menu functionality
    function openMobileMenu() {
        if (window.innerWidth >= 1024) {
            console.log('🖥️ Desktop detected: Mobile menu blocked');
            return;
        }
        
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('📱 Mobile menu opened');
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        console.log('📱 Mobile menu closed');
    }
    
    // Mobile menu event listeners
    mobileToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openMobileMenu();
    });
    
    mobileClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenu();
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
    
    // Close mobile menu when clicking nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Close mobile menu if resized to desktop
            if (window.innerWidth >= 1024 && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
                console.log('🖥️ Mobile menu closed due to desktop resize');
            }
        }, 150);
    });
    
    // Initial scroll check
    handleScroll();
    
    console.log('✅ Navbar functionality initialized');
    console.log(`📏 Screen width: ${window.innerWidth}px (${window.innerWidth >= 1024 ? 'Desktop' : 'Mobile/Tablet'})`);
}

// Debug helper
window.perfectNavbarDebug = function() {
    console.log('🔍 Perfect Navbar Debug Info:');
    console.log('- Navbar element:', document.getElementById('perfect-navbar'));
    console.log('- Mobile menu element:', document.getElementById('perfect-mobile-menu'));
    console.log('- Mobile toggle element:', document.getElementById('mobile-toggle'));
    console.log('- Screen width:', window.innerWidth + 'px');
    console.log('- Mobile menu active:', document.getElementById('perfect-mobile-menu')?.classList.contains('active'));
    console.log('- Navbar floating:', document.getElementById('perfect-navbar')?.classList.contains('floating'));
};
