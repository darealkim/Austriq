// A simple active state handler for the navigation links based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            // Apply unique style for active link
            a.style.color = "#FF007F"; 
            a.style.fontWeight = "bold";
        } else {
            // Restore default
            a.style.color = "#e0e0e0";
            a.style.fontWeight = "500";
        }
    });
});

// Simple Contact Form submission handler (Unique notification)
document.getElementById('pulse-contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const clientName = this.querySelector('input[type="text"]').value;
    
    // Visually unique alert
    alert(`⚡ Pulse Sent! Thank you, ${clientName}. Our lead editor will review your vision and contact you shortly.`);
    
    // Clear the form fields
    this.reset();
});

// Add console log for a "hidden" developer touch
console.log("%c ⚡ PixelPulse ICT ⚡ - Status: Online & Rendering ", "background: #1A1122; color: #00E5FF; font-size: 16px; border-radius: 5px; padding: 5px;");