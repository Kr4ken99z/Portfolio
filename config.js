/**
 * Configuration file for Portfolio
 * 
 * IMPORTANT: This file contains your actual EmailJS credentials
 * 
 * NOTE: EmailJS public keys are SAFE to use in browser-side code
 * They are designed to be exposed in the client. EmailJS protects against abuse through:
 * - Rate limiting
 * - Domain restrictions (you can set in EmailJS dashboard)
 * - CAPTCHA options
 * 
 * Get your credentials from https://www.emailjs.com/
 */

const CONFIG = {
    // EmailJS Configuration
    emailjs: {
        serviceId: 'service_y67pssv',        // Your EmailJS Service ID
        templateId: 'template_f13uyw4',      // Your EmailJS Template ID
        publicKey: '5K3Pqk24YK_Jy1VL1',     // Your EmailJS Public Key
        contactEmail: 'koustavmondal9641@gmail.com'  // Your email where you'll receive messages
    },
    
    // Site Configuration
    site: {
        name: 'Koustav Mondal',
        title: 'Portfolio',
        description: 'Frontend Developer Portfolio'
    }
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

