/**
 * EmailJS Service for Portfolio Contact Form
 * This service handles sending emails through EmailJS
 * 
 * Setup Instructions:
 * 1. Go to https://www.emailjs.com/ and sign up
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with these variables:
 *    - {{from_name}} - Sender's name
 *    - {{from_email}} - Sender's email
 *    - {{subject}} - Email subject
 *    - {{message}} - Email message
 *    - {{to_email}} - Your email (optional)
 * 4. Get your credentials and add them to config.js
 */

// Email configuration - Update these values in config.js
const emailConfig = {
    serviceId: '', // Will be loaded from config
    templateId: '', // Will be loaded from config
    publicKey: '', // Will be loaded from config
    contactEmail: 'koustavmondal9641@gmail.com'
};

/**
 * Initialize EmailJS with configuration
 * @param {Object} config - Configuration object with serviceId, templateId, publicKey
 */
function initializeEmailJS(config) {
    emailConfig.serviceId = config.serviceId;
    emailConfig.templateId = config.templateId;
    emailConfig.publicKey = config.publicKey;
    
    if (config.contactEmail) {
        emailConfig.contactEmail = config.contactEmail;
    }
    
    // Initialize EmailJS
    emailjs.init(emailConfig.publicKey);
    
    console.log('EmailJS initialized successfully');
}

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data object
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.subject - Email subject
 * @param {string} formData.message - Email message
 * @returns {Promise} - Promise that resolves when email is sent
 */
async function sendEmail(formData) {
    try {
        // Validate configuration
        if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
            throw new Error('EmailJS is not properly configured. Please check your configuration.');
        }

        // Validate form data
        if (!formData.name || !formData.email || !formData.message) {
            throw new Error('Please fill in all required fields.');
        }

        // Prepare template parameters
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'New Contact Form Submission',
            message: formData.message,
            to_email: emailConfig.contactEmail
        };

        console.log('Sending email with params:', templateParams);

        // Send email using EmailJS
        const response = await emailjs.send(
            emailConfig.serviceId,
            emailConfig.templateId,
            templateParams
        );

        console.log('Email sent successfully!', response);

        if (response.status !== 200) {
            throw new Error(`EmailJS returned status ${response.status}: ${response.text}`);
        }

        return {
            success: true,
            message: 'Email sent successfully!'
        };

    } catch (error) {
        console.error('Email sending failed:', error);
        
        // Return user-friendly error message
        let errorMessage = 'Failed to send email. ';
        
        if (error.text) {
            errorMessage += error.text;
        } else if (error.message) {
            errorMessage += error.message;
        } else {
            errorMessage += 'Please try again later.';
        }

        return {
            success: false,
            message: errorMessage
        };
    }
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if email is valid
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Sanitize input to prevent XSS
 * @param {string} input - Input to sanitize
 * @returns {string} - Sanitized input
 */
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeEmailJS,
        sendEmail,
        validateEmail,
        sanitizeInput
    };
}
