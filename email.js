import emailjs from "@emailjs/browser";

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
 * 4. Add credentials to .env.local:
 *    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
 *    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
 *    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
 */

export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  contactEmail: "koustavmondal9641@gmail.com",
};

/**
 * Initialize EmailJS with configuration
 * @param {Object} config - Configuration object with serviceId, templateId, publicKey
 */
export function initializeEmailJS(config) {
  if (config.serviceId) emailConfig.serviceId = config.serviceId;
  if (config.templateId) emailConfig.templateId = config.templateId;
  if (config.publicKey) emailConfig.publicKey = config.publicKey;

  if (config.contactEmail) {
    emailConfig.contactEmail = config.contactEmail;
  }

  if (emailConfig.publicKey) {
    emailjs.init(emailConfig.publicKey);
    console.log("EmailJS initialized successfully");
  }
}

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data object
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} [formData.subject] - Email subject
 * @param {string} formData.message - Email message
 * @returns {Promise<{success: boolean, message: string}>} - Result object
 */
export async function sendEmail(formData) {
  try {
    const serviceId =
      emailConfig.serviceId || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId =
      emailConfig.templateId || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey =
      emailConfig.publicKey || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error(
        "EmailJS is not configured. Please add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your environment or config."
      );
    }

    if (!formData.name || !formData.email || !formData.message) {
      throw new Error("Please fill in all required fields.");
    }

    if (!validateEmail(formData.email)) {
      throw new Error("Please enter a valid email address.");
    }

    const templateParams = {
      from_name: sanitizeInput(formData.name),
      from_email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject || "New Contact Form Submission"),
      message: sanitizeInput(formData.message),
      to_email: emailConfig.contactEmail,
    };

    console.log("Sending email with params:", templateParams);

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log("Email sent successfully!", response);

    if (response.status !== 200) {
      throw new Error(
        `EmailJS returned status ${response.status}: ${response.text}`
      );
    }

    return {
      success: true,
      message: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Email sending failed:", error);

    let errorMessage = "Failed to send email. ";
    if (error.text) {
      errorMessage += error.text;
    } else if (error.message) {
      errorMessage += error.message;
    } else {
      errorMessage += "Please try again later.";
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if email is valid
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize input to prevent XSS
 * @param {string} input - Input to sanitize
 * @returns {string} - Sanitized input
 */
export function sanitizeInput(input) {
  if (!input) return "";
  if (typeof window === "undefined") {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}

export default {
  initializeEmailJS,
  sendEmail,
  validateEmail,
  sanitizeInput,
  emailConfig,
};
