/**
 * Configuration file for Portfolio
 * 
 * This file reads configuration from environment variables in production (Vercel)
 * and uses default values in development
 * 
 * For local development:
 * - Update the default values below with your EmailJS credentials
 * 
 * For Vercel deployment:
 * - Add environment variables in Vercel dashboard:
 *   EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, CONTACT_EMAIL
 */

// Helper function to get environment variables (for Vercel)
function getEnvVar(key, defaultValue) {
    // In Vercel, environment variables are injected at build time
    // For local development, use the default values
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
        return process.env[key];
    }
    return defaultValue;
}

const CONFIG = {
    // EmailJS Configuration
    // SETUP REQUIRED: Replace the default values with your actual credentials for local development
    emailjs: {
        serviceId: getEnvVar('EMAILJS_SERVICE_ID', 'YOUR_SERVICE_ID'),        // Your EmailJS Service ID
        templateId: getEnvVar('EMAILJS_TEMPLATE_ID', 'YOUR_TEMPLATE_ID'),      // Your EmailJS Template ID
        publicKey: getEnvVar('EMAILJS_PUBLIC_KEY', 'YOUR_PUBLIC_KEY'),        // Your EmailJS Public Key
        contactEmail: getEnvVar('CONTACT_EMAIL', 'your-email@example.com')  // Your email where you'll receive messages
    },
    
    // Site Configuration
    site: {
        name: 'Your Name',
        title: 'Portfolio',
        description: 'Frontend Developer Portfolio'
    }
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
