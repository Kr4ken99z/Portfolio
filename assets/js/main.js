/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
  });

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 4250 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data, .projects__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__content, .achievements__card`, {interval: 100})

/*=============== CONTACT FORM WITH EMAILJS ===============*/
// Initialize EmailJS when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Check if CONFIG is available
    if (typeof CONFIG !== 'undefined' && CONFIG.emailjs) {
        // Initialize EmailJS with configuration
        if (typeof initializeEmailJS === 'function') {
            initializeEmailJS(CONFIG.emailjs);
        }
    } else {
        console.warn('EmailJS configuration not found. Please check config.js');
    }
});

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const contactButton = contactForm?.querySelector('.contact__button');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('contact-name').value.trim(),
            email: document.getElementById('contact-email').value.trim(),
            message: document.getElementById('contact-project').value.trim(),
            subject: `Portfolio Contact from ${document.getElementById('contact-name').value.trim()}`
        };
        
        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            showMessage('Please fill in all fields! ❌', 'error');
            return;
        }
        
        // Validate email format
        if (typeof validateEmail === 'function' && !validateEmail(formData.email)) {
            showMessage('Please enter a valid email address! ❌', 'error');
            return;
        }
        
        // Disable submit button and show loading state
        if (contactButton) {
            contactButton.disabled = true;
            contactButton.innerHTML = 'Sending... <i class="ri-loader-4-line"></i>';
        }
        
        try {
            // Check if sendEmail function is available
            if (typeof sendEmail !== 'function') {
                throw new Error('Email service is not properly loaded');
            }
            
            // Send email
            const result = await sendEmail(formData);
            
            if (result.success) {
                showMessage('Message sent successfully! ✅', 'success');
                contactForm.reset();
            } else {
                showMessage(result.message || 'Failed to send message. Please try again! ❌', 'error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage('Oops! Something went wrong. Please try again later. ❌', 'error');
        } finally {
            // Re-enable submit button
            if (contactButton) {
                contactButton.disabled = false;
                contactButton.innerHTML = 'Send <i class="ri-arrow-right-up-line"></i>';
            }
        }
    });
}

/**
 * Show message to user
 * @param {string} message - Message to display
 * @param {string} type - Message type ('success' or 'error')
 */
function showMessage(message, type = 'success') {
    if (contactMessage) {
        contactMessage.textContent = message;
        contactMessage.style.color = type === 'success' ? '#4ade80' : '#f87171';
        contactMessage.style.fontSize = '0.875rem';
        contactMessage.style.marginTop = '0.5rem';
        contactMessage.style.fontWeight = '500';
        
        // Clear message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
    }
}
