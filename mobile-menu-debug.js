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
