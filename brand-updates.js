// Brand text updates for navbar and footer
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Run immediately
    updateFooterBranding();
    
    // Run again after a short delay in case content loads dynamically
    setTimeout(updateFooterBranding, 1000);
    
    // Also observe for dynamic content changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                updateFooterBranding();
            }
        });
    });
    
    // Start observing footer changes
    const footer = document.querySelector('footer');
    if (footer) {
        observer.observe(footer, {
            childList: true,
            subtree: true
        });
    }
});
