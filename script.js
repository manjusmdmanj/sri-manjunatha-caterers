// Configuration - UPDATE THESE WITH YOUR DETAILS
const CONFIG = {
    whatsappNumber: '919066302632', // WhatsApp number (country code + number, no + or spaces)
    contactPhones: ['+91 90663 02632', '+91 99807 57024', '+91 70909 23072'], // Phone numbers for display
    contactEmail: 'info@srimanjunathacaterers.com', // Your email
    contactAddress: '#43, 18th Main Road, Venkateshwara Talkies Road, Muneshwara Block, Bangaluru 560026' // Your address
};

// Menu Packages - UPDATE THESE WITH YOUR ACTUAL MENUS AND PRICES
// Only these predefined packages will show prices
const menuPackages = [
    {
        name: 'Basic Meal',
        price: 'Starting from ₹XXX', // UPDATE WITH YOUR PRICE
        description: 'Perfect for small gatherings and budget-friendly events',
        items: ['Rice', 'Dal', '2 Vegetables', 'Roti', 'Pickle', 'Dessert'],
        occasions: ['Small Events', 'Family Functions', 'Office Lunches'],
        popular: false
    },
    {
        name: 'Medium Meal',
        price: 'Starting from ₹XXX', // UPDATE WITH YOUR PRICE
        description: 'Ideal for medium-sized events with variety',
        items: ['Rice', 'Dal', '3-4 Vegetables', 'Roti/Naan', 'Raita', 'Pickle', 'Dessert', 'Salad'],
        occasions: ['Weddings', 'Corporate Events', 'Birthday Parties'],
        popular: true
    },
    {
        name: 'Grand Meal',
        price: 'Starting from ₹XXX', // UPDATE WITH YOUR PRICE
        description: 'Premium package for grand celebrations',
        items: ['Biryani/Pulao', 'Multiple Dals', '5-6 Vegetables', 'Naan/Roti', 'Raita', 'Papad', 'Pickle', 'Multiple Desserts', 'Salad', 'Special Items'],
        occasions: ['Grand Weddings', 'Large Corporate Events', 'Festivals'],
        popular: false
    }
];

// Occasion-based Menus - ADD YOUR SPECIFIC MENUS HERE
const occasionMenus = {
    'Wedding': {
        basic: { price: '₹XXX per plate', items: [] },
        medium: { price: '₹XXX per plate', items: [] },
        grand: { price: '₹XXX per plate', items: [] }
    },
    'Corporate Event': {
        basic: { price: '₹XXX per plate', items: [] },
        medium: { price: '₹XXX per plate', items: [] },
        grand: { price: '₹XXX per plate', items: [] }
    },
    'Birthday': {
        basic: { price: '₹XXX per plate', items: [] },
        medium: { price: '₹XXX per plate', items: [] },
        grand: { price: '₹XXX per plate', items: [] }
    },
    'Festival': {
        basic: { price: '₹XXX per plate', items: [] },
        medium: { price: '₹XXX per plate', items: [] },
        grand: { price: '₹XXX per plate', items: [] }
    }
};

// Menu Items Data - Pure Vegetarian
const menuItems = [
    // South Indian Dishes
    {
        name: 'Masala Dosa',
        price: '₹80',
        description: 'Crispy dosa filled with spiced potato masala, served with sambar and chutney',
        category: 'southindian',
        image: 'masala-dosa.jpg'
    },
    {
        name: 'Idli Sambar',
        price: '₹60',
        description: 'Soft steamed rice cakes served with hot sambar and coconut chutney',
        category: 'southindian',
        image: 'idli-sambar.jpg'
    },
    {
        name: 'Vada Sambar',
        price: '₹70',
        description: 'Crispy lentil fritters served with sambar and chutney',
        category: 'southindian',
        image: 'vada-sambar.jpg'
    },
    {
        name: 'Uttapam',
        price: '₹90',
        description: 'Thick dosa topped with vegetables, onions, and tomatoes',
        category: 'southindian',
        image: 'uttapam.jpg'
    },
    {
        name: 'Rava Dosa',
        price: '₹85',
        description: 'Crispy semolina dosa, thin and golden, served with chutney',
        category: 'southindian',
        image: 'rava-dosa.jpg'
    },
    {
        name: 'Pongal',
        price: '₹75',
        description: 'Traditional South Indian rice and lentil dish, creamy and flavorful',
        category: 'southindian',
        image: 'pongal.jpg'
    },
    {
        name: 'Sambar Rice',
        price: '₹100',
        description: 'Steamed rice served with tangy sambar, vegetables, and papad',
        category: 'southindian',
        image: 'sambar-rice.jpg'
    },
    {
        name: 'Rasam Rice',
        price: '₹95',
        description: 'Steamed rice with spicy rasam, perfect comfort food',
        category: 'southindian',
        image: 'rasam-rice.jpg'
    },
    {
        name: 'Curd Rice',
        price: '₹70',
        description: 'Cooling rice mixed with yogurt, tempered with spices',
        category: 'southindian',
        image: 'curd-rice.jpg'
    },
    {
        name: 'Bisi Bele Bath',
        price: '₹110',
        description: 'Hot lentil rice dish with vegetables and special spice mix',
        category: 'southindian',
        image: 'bisi-bele-bath.jpg'
    },
    // North Indian Dishes
    {
        name: 'Veg Biryani',
        price: '₹250',
        description: 'Fragrant basmati rice cooked with vegetables and aromatic spices',
        category: 'northindian',
        image: 'veg-biryani.jpg'
    },
    {
        name: 'Paneer Butter Masala',
        price: '₹280',
        description: 'Creamy and rich paneer curry with butter and tomato gravy',
        category: 'northindian',
        image: 'paneer-butter-masala.jpg'
    },
    {
        name: 'Dal Makhani',
        price: '₹200',
        description: 'Creamy black lentils cooked with butter and cream',
        category: 'northindian',
        image: 'dal-makhani.jpg'
    },
    {
        name: 'Dal Tadka',
        price: '₹180',
        description: 'Tempered yellow lentils with aromatic spices',
        category: 'northindian',
        image: 'dal-tadka.jpg'
    },
    {
        name: 'Palak Paneer',
        price: '₹260',
        description: 'Fresh spinach curry with soft paneer cubes',
        category: 'northindian',
        image: 'palak-paneer.jpg'
    },
    {
        name: 'Chana Masala',
        price: '₹220',
        description: 'Spicy chickpea curry with onions and tomatoes',
        category: 'northindian',
        image: 'chana-masala.jpg'
    },
    {
        name: 'Aloo Gobi',
        price: '₹200',
        description: 'Potato and cauliflower curry with Indian spices',
        category: 'northindian',
        image: 'aloo-gobi.jpg'
    },
    {
        name: 'Vegetable Pulao',
        price: '₹220',
        description: 'Fragrant basmati rice cooked with mixed vegetables and spices',
        category: 'northindian',
        image: 'vegetable-pulao.jpg'
    },
    {
        name: 'Naan',
        price: '₹40',
        description: 'Freshly baked soft leavened bread from tandoor',
        category: 'northindian',
        image: 'naan.jpg'
    },
    {
        name: 'Roti',
        price: '₹15',
        description: 'Whole wheat flatbread, soft and fresh',
        category: 'northindian',
        image: 'roti.jpg'
    },
    {
        name: 'Paratha',
        price: '₹50',
        description: 'Layered flatbread, crispy and buttery',
        category: 'northindian',
        image: 'paratha.jpg'
    },
    {
        name: 'Rajma Masala',
        price: '₹210',
        description: 'Kidney beans in rich tomato and onion gravy',
        category: 'northindian',
        image: 'rajma-masala.jpg'
    },
    // Chinese Dishes
    {
        name: 'Veg Fried Rice',
        price: '₹180',
        description: 'Steamed rice stir-fried with mixed vegetables and sauces',
        category: 'chinese',
        image: 'veg-fried-rice.jpg'
    },
    {
        name: 'Veg Noodles',
        price: '₹170',
        description: 'Stir-fried noodles with fresh vegetables and Chinese spices',
        category: 'chinese',
        image: 'veg-noodles.jpg'
    },
    {
        name: 'Gobi Manchurian',
        price: '₹220',
        description: 'Crispy cauliflower florets in spicy Indo-Chinese sauce',
        category: 'chinese',
        image: 'gobi-manchurian.jpg'
    },
    {
        name: 'Paneer Manchurian',
        price: '₹250',
        description: 'Fried paneer cubes in tangy and spicy Manchurian sauce',
        category: 'chinese',
        image: 'paneer-manchurian.jpg'
    },
    {
        name: 'Veg Spring Rolls',
        price: '₹150',
        description: 'Crispy rolls filled with vegetables, served with sauce',
        category: 'chinese',
        image: 'veg-spring-rolls.jpg'
    },
    {
        name: 'Chilli Paneer',
        price: '₹240',
        description: 'Spicy paneer cubes with bell peppers and onions',
        category: 'chinese',
        image: 'chilli-paneer.jpg'
    },
    {
        name: 'Hakka Noodles',
        price: '₹180',
        description: 'Thick noodles stir-fried with vegetables and soy sauce',
        category: 'chinese',
        image: 'hakka-noodles.jpg'
    },
    {
        name: 'Schezwan Fried Rice',
        price: '₹190',
        description: 'Spicy fried rice with Schezwan sauce and vegetables',
        category: 'chinese',
        image: 'schezwan-fried-rice.jpg'
    },
    {
        name: 'Veg Momos',
        price: '₹120',
        description: 'Steamed dumplings filled with vegetables, served with spicy sauce',
        category: 'chinese',
        image: 'veg-momos.jpg'
    },
    {
        name: 'American Chopsuey',
        price: '₹200',
        description: 'Crispy noodles topped with sweet and sour vegetable gravy',
        category: 'chinese',
        image: 'american-chopsuey.jpg'
    },
    // Desserts
    {
        name: 'Gulab Jamun',
        price: '₹120',
        description: 'Sweet milk dumplings in warm sugar syrup',
        category: 'desserts',
        image: 'gulab-jamun.jpg'
    },
    {
        name: 'Kheer',
        price: '₹100',
        description: 'Traditional rice pudding with nuts and cardamom',
        category: 'desserts',
        image: 'kheer.jpg'
    },
    {
        name: 'Ice Cream',
        price: '₹80',
        description: 'Assorted flavors of premium ice cream',
        category: 'desserts',
        image: 'ice-cream.jpg'
    },
    {
        name: 'Rasgulla',
        price: '₹110',
        description: 'Soft cottage cheese balls in light sugar syrup',
        category: 'desserts',
        image: 'rasgulla.jpg'
    },
    {
        name: 'Payasam',
        price: '₹95',
        description: 'Traditional South Indian sweet pudding with vermicelli',
        category: 'desserts',
        image: 'payasam.jpg'
    },
    {
        name: 'Jalebi',
        price: '₹130',
        description: 'Crispy spiral sweets soaked in sugar syrup',
        category: 'desserts',
        image: 'jalebi.jpg'
    }
];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMenuPackages();
    initializeMenu();
    initializeOrderForm();
    initializeContactInfo();
    initializeScrollEffects();
    initializeAnimations();
});

// Navigation Functions
function initializeNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Menu Packages Functions
function initializeMenuPackages() {
    const packagesGrid = document.getElementById('menuPackagesGrid');
    if (!packagesGrid) return;

    renderMenuPackages();
}

function renderMenuPackages() {
    const packagesGrid = document.getElementById('menuPackagesGrid');
    if (!packagesGrid) return;

    packagesGrid.innerHTML = menuPackages.map((pkg, index) => `
        <div class="menu-package-card ${pkg.popular ? 'popular' : ''}" data-aos="fade-up" data-aos-delay="${index * 100}">
            ${pkg.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
            <div class="package-icon">${pkg.name === 'Basic Meal' ? '🍽️' : pkg.name === 'Medium Meal' ? '🍛' : '👑'}</div>
            <h3 class="package-name">${pkg.name}</h3>
            <div class="package-price">${pkg.price}</div>
            <p class="package-description">${pkg.description}</p>
            <div class="package-items">
                <h4>Includes:</h4>
                <ul>
                    ${pkg.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="package-occasions">
                <h4>Suitable for:</h4>
                <div class="occasion-tags">
                    ${pkg.occasions.map(occasion => `<span class="occasion-tag">${occasion}</span>`).join('')}
                </div>
            </div>
            <button class="btn btn-package" onclick="selectPackage('${pkg.name}')">Select Package</button>
        </div>
    `).join('');

    // Add animation classes
    setTimeout(() => {
        document.querySelectorAll('.menu-package-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-in');
        });
    }, 100);
}

function selectPackage(packageName) {
    // Scroll to order form and pre-select package
    const orderSection = document.getElementById('order');
    if (orderSection) {
        // Pre-fill package selection
        const packageSelect = document.getElementById('packageType');
        if (packageSelect) {
            packageSelect.value = packageName;
            packageSelect.style.borderColor = 'var(--primary-color)';
            packageSelect.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.2)';
            setTimeout(() => {
                packageSelect.style.borderColor = '';
                packageSelect.style.boxShadow = '';
            }, 2000);
        }
        
        orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Show notification
        showNotification(`Selected ${packageName} package! Fill the form below to proceed.`, 'success');
    }
}

// Menu Functions
function initializeMenu() {
    const menuGrid = document.getElementById('menuGrid');
    const menuTabs = document.querySelectorAll('.menu-tab');

    // Render menu items only if menu grid exists on page
    if (menuGrid) {
        renderMenuItems('all');
    }

    // Menu tab functionality
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            // Filter menu items
            const category = tab.getAttribute('data-category');
            renderMenuItems(category);
        });
    });
}

function renderMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    let filteredItems = menuItems;

    if (category !== 'all') {
        filteredItems = menuItems.filter(item => item.category === category);
    }

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <div class="menu-item-image">
                <span>${item.name}</span>
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <span class="menu-item-category">${item.category === 'southindian' ? 'South Indian' : item.category === 'northindian' ? 'North Indian' : item.category === 'chinese' ? 'Chinese' : 'Dessert'}</span>
            </div>
        </div>
    `).join('');
}

// Order Form Functions
function initializeOrderForm() {
    const orderForm = document.getElementById('orderForm');
    
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmit);
    }

    // Set minimum date to today
    const eventDateInput = document.getElementById('eventDate');
    if (eventDateInput) {
        const today = new Date().toISOString().split('T')[0];
        eventDateInput.setAttribute('min', today);
    }
}

function handleOrderSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Get custom typed items (comma/newline separated)
    const customItemsInput = document.getElementById('customItems');
    const customItems = customItemsInput
        ? customItemsInput.value
              .split(/\n|,/)
              .map(item => item.trim())
              .filter(Boolean)
        : [];
    
    // Build WhatsApp message
    const message = buildWhatsAppMessage(formObject, customItems);
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showNotification('Order form submitted! Opening WhatsApp...', 'success');
    
    // Reset form after a delay
    setTimeout(() => {
        e.target.reset();
    }, 1000);
}

function buildWhatsAppMessage(formData, customItems) {
    let message = `🍽️ *NEW ORDER - Sri Manjunatha Caterings*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    if (formData.email) {
        message += `Email: ${formData.email}\n`;
    }
    message += `\n*Event Details:*\n`;
    message += `Event Type: ${formData.eventType}\n`;
    if (formData.packageType) {
        message += `Meal Package: ${formData.packageType}\n`;
    }
    message += `Event Date: ${formData.eventDate}\n`;
    message += `Number of Guests: ${formData.guests}\n`;
    if (formData.location) {
        message += `Location: ${formData.location}\n`;
    }
    message += `\n*Menu Selection:*\n`;
    if (customItems.length > 0) {
        message += `Custom Menu Items:\n`;
        customItems.forEach(item => {
            message += `• ${item}\n`;
        });
        message += `\n*Note: Prices for custom menu will be provided based on current market rates.*\n`;
    } else if (formData.packageType && formData.packageType !== 'Custom Menu') {
        message += `Selected Package: ${formData.packageType}\n`;
        message += `(Items can be modified as per requirements)\n`;
    } else {
        message += `(Custom menu - items mentioned in message below)\n`;
    }
    if (formData.message) {
        message += `\n*Additional Details:*\n${formData.message}\n`;
    }
    message += `\n---\n*Please confirm this order and provide quotation.*`;
    
    return message;
}

// Contact Info Functions
function initializeContactInfo() {
    // Update contact information
    const contactPhone = document.getElementById('contactPhone');
    const contactEmail = document.getElementById('contactEmail');
    const contactAddress = document.getElementById('contactAddress');
    const whatsappLink = document.getElementById('whatsappLink');
    const footerWhatsapp = document.getElementById('footerWhatsapp');
    const floatingWhatsApp = document.getElementById('floatingWhatsApp');

    if (contactPhone) {
        contactPhone.innerHTML = CONFIG.contactPhones.join('<br>');
    }
    if (contactEmail) contactEmail.textContent = CONFIG.contactEmail;
    if (contactAddress) contactAddress.textContent = CONFIG.contactAddress;

    // WhatsApp links
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}`;
    const whatsappMessage = encodeURIComponent('Hello! I am interested in your catering services.');
    
    if (whatsappLink) {
        whatsappLink.href = `${whatsappUrl}?text=${whatsappMessage}`;
    }
    if (footerWhatsapp) {
        footerWhatsapp.href = `${whatsappUrl}?text=${whatsappMessage}`;
    }
    if (floatingWhatsApp) {
        floatingWhatsApp.href = `${whatsappUrl}?text=${whatsappMessage}`;
    }
}

// Animation Functions
function initializeAnimations() {
    // Add stagger animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    // Fallback: ensure service cards become visible even if observer timing fails
    setTimeout(() => {
        serviceCards.forEach(card => card.classList.add('animate-in'));
    }, 300);

    // Add pulse animation to floating WhatsApp button
    const floatingBtn = document.getElementById('floatingWhatsApp');
    if (floatingBtn) {
        setInterval(() => {
            floatingBtn.style.animation = 'pulse 2s ease-in-out';
        }, 3000);
    }

    // Add counter animation for stats (if needed)
    animateOnScroll();
}

function animateOnScroll() {
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.service-card, .menu-item, .gallery-item, .contact-item, .menu-package-card').forEach(el => {
            el.classList.add('animate-in');
        });
        return;
    }

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.service-card, .menu-item, .gallery-item, .contact-item, .menu-package-card').forEach(el => {
        observer.observe(el);
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scroll with offset
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Notification Function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : '#ff6b35'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

