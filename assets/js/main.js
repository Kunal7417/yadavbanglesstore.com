/**
 * Yadav Bangles Store - Main JavaScript
 * Modern E-commerce Website Functionality
 * Location: Jaiganj, Aligarh, UP
 * Contact: +91 7417163092
 */

// Global variables
let cart = [];
let wishlist = [];
let currentProducts = [];
let isSearching = false;

// Enhanced product data with more variety
const products = [
    {
        id: 1,
        name: 'Golden Glass Bangles Set',
        category: 'bangles',
        price: 120,
        originalPrice: 150,
        rating: 4.5,
        reviews: 23,
        badge: 'New',
        description: 'Beautiful golden glass bangles perfect for special occasions. Available in multiple sizes.',
        keywords: ['golden', 'glass', 'bangles', 'traditional', 'wedding'],
        image: 'assets/img/bangle1.avif'
    },
    {
        id: 2,
        name: 'Colorful Glass Bangles',
        category: 'bangles',
        price: 80,
        originalPrice: 100,
        rating: 5,
        reviews: 45,
        badge: 'Popular',
        description: 'Vibrant colorful glass bangles available in multiple colors and patterns.',
        keywords: ['colorful', 'glass', 'bangles', 'vibrant', 'rainbow'],
        image: 'assets/img/bangle2.png.webp'
    },
    {
        id: 3,
        name: 'Traditional Red Bangles',
        category: 'bangles',
        price: 100,
        originalPrice: 120,
        rating: 4.8,
        reviews: 32,
        badge: 'Sale',
        description: 'Classic red bangles perfect for married women and festive occasions.',

        keywords: ['red', 'traditional', 'bangles', 'married', 'bridal'],

    },
    {
        id: 4,
        name: 'Crystal Clear Bangles',
        category: 'bangles',
        price: 150,
        originalPrice: 180,
        rating: 4.3,
        reviews: 18,
        badge: 'Premium',
        description: 'Elegant crystal clear bangles with sparkling finish and premium quality.',
        keywords: ['crystal', 'clear', 'bangles', 'elegant', 'premium'],
        image: 'assets/img/bangle4.jpeg'
    },
    {
        id: 5,
        name: 'Laddu Gopal Divine Dress',
        category: 'poshaks',
        price: 255,
        originalPrice: 300,
        rating: 5,
        reviews: 67,
        badge: 'Janmashtami Special',
        description: 'Beautiful divine dress for Laddu Gopal with premium fabric and intricate embroidery. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'dress', 'divine', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal1.jpg'

    },
    {
        id: 6,
        name: 'Durga Mata Sacred Dress',
        category: 'poshaks',
        price: 400,
        originalPrice: 450,
        rating: 4.9,
        reviews: 34,
        badge: 'Spiritual',
        description: 'Sacred dress for Durga Mata with intricate designs and premium materials.',
        keywords: ['durga', 'mata', 'dress', 'sacred', 'goddess', 'poshak']
    },
    {
        id: 7,
        name: 'Premium Skincare Set',
        category: 'cosmetics',
        price: 180,
        originalPrice: 220,
        rating: 4.6,
        reviews: 89,
        badge: 'Trending',
        description: 'Complete skincare set with natural ingredients for glowing skin.',
        keywords: ['skincare', 'premium', 'natural', 'beauty', 'glowing']
    },
    {
        id: 8,
        name: 'Professional Makeup Kit',
        category: 'cosmetics',
        price: 220,
        originalPrice: 280,
        rating: 4.4,
        reviews: 56,
        badge: 'Popular',
        description: 'Professional makeup collection for all occasions and skin types.',
        keywords: ['makeup', 'professional', 'cosmetics', 'beauty', 'kit']
    },
    {
        id: 9,
        name: 'Diwali Festival Special',
        category: 'festival',
        price: 200,
        originalPrice: 250,
        rating: 4.7,
        reviews: 78,
        badge: 'Festival',
        description: 'Complete Diwali celebration essentials including diyas, rangoli, and decoratives.',
        keywords: ['diwali', 'festival', 'celebration', 'diyas', 'decorative']
    },
    {
        id: 10,
        name: 'Holi Colors & Gulal',
        category: 'festival',
        price: 150,
        originalPrice: 180,
        rating: 4.5,
        reviews: 43,
        badge: 'Colorful',
        description: 'Premium quality Holi colors and gulal for safe and vibrant celebrations.',
        keywords: ['holi', 'colors', 'gulal', 'festival', 'celebration']
    },
    {
        id: 11,
        name: 'Bridal Bangle Collection',
        category: 'bangles',
        price: 300,
        originalPrice: 380,
        rating: 4.9,
        reviews: 28,
        badge: 'Bridal',
        description: 'Exclusive bridal bangle collection with gold finish and intricate patterns.',
        keywords: ['bridal', 'wedding', 'bangles', 'gold', 'exclusive'],
        image: 'assets/img/bangle5.jpg'
    },
    {
        id: 12,
        name: 'Lakshmi Mata Poshak',
        category: 'poshaks',
        price: 350,
        originalPrice: 400,
        rating: 4.8,
        reviews: 41,
        badge: 'Divine',
        description: 'Beautiful poshak for Lakshmi Mata with rich fabric and golden embroidery.',
        keywords: ['lakshmi', 'mata', 'poshak', 'goddess', 'golden']
    },
    {
        id: 13,
        name: 'Laddu Gopal Royal Dress',
        category: 'poshaks',
        price: 272,
        originalPrice: 320,
        rating: 4.9,
        reviews: 52,
        badge: 'Janmashtami Special',
        description: 'Exquisite royal dress for Laddu Gopal with rich golden work and premium silk fabric. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'royal', 'dress', 'krishna', 'silk', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal2.jpg'
    },
    {
        id: 14,
        name: 'Laddu Gopal Traditional Outfit',
        category: 'poshaks',
        price: 230,
        originalPrice: 270,
        rating: 4.7,
        reviews: 38,
        badge: 'Janmashtami Special',
        description: 'Traditional handcrafted outfit for Laddu Gopal with authentic designs and vibrant colors. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'traditional', 'handcrafted', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal3.jpg'
    },
    {
        id: 15,
        name: 'Laddu Gopal Festival Special',
        category: 'poshaks',
        price: 298,
        originalPrice: 350,
        rating: 5,
        reviews: 29,
        badge: 'Janmashtami Special',
        description: 'Special festival dress for Laddu Gopal perfect for Janmashtami and other celebrations. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'festival', 'janmashtami', 'celebration', 'krishna', 'poshak'],
        image: 'assets/img/laddugopal4.jpeg'
    },
    {
        id: 16,
        name: 'Designer Glass Bangles Set',
        category: 'bangles',
        price: 160,
        originalPrice: 200,
        rating: 4.6,
        reviews: 35,
        badge: 'Designer',
        description: 'Elegant designer glass bangles with unique patterns and premium finish.',
        keywords: ['designer', 'glass', 'bangles', 'elegant', 'premium', 'unique'],
        image: 'assets/img/bangle1.avif'
    },
    {
        id: 17,
        name: 'Festive Multicolor Bangles',
        category: 'bangles',
        price: 90,
        originalPrice: 110,
        rating: 4.7,
        reviews: 42,
        badge: 'Festive',
        description: 'Beautiful multicolor bangles perfect for festivals and celebrations.',
        keywords: ['festive', 'multicolor', 'bangles', 'celebration', 'colorful', 'festival'],
        image: 'assets/img/bangle2.png.webp'
    },
    {
        id: 18,
        name: 'Premium Chunky Bangles',
        category: 'bangles',
        price: 140,
        originalPrice: 170,
        rating: 4.4,
        reviews: 26,
        badge: 'Premium',
        description: 'Chunky premium bangles with rich colors and durable quality.',
        keywords: ['premium', 'chunky', 'bangles', 'rich', 'durable', 'quality'],
        image: 'assets/img/bangle3.jpg'

    },
    {
        id: 19,
        name: 'Laddu Gopal Silk Dhoti Set',
        category: 'poshaks',
        price: 213,
        originalPrice: 250,
        rating: 4.8,
        reviews: 34,
        badge: 'Janmashtami Special',
        description: 'Premium silk dhoti set for Laddu Gopal with golden border and matching accessories. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'dhoti', 'silk', 'golden', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal5.webp'
    },
    {
        id: 20,
        name: 'Laddu Gopal Peacock Feather Dress',
        category: 'poshaks',
        price: 255,
        originalPrice: 300,
        rating: 4.9,
        reviews: 28,
        badge: 'Janmashtami Special',
        description: 'Beautiful peacock feather themed dress for Laddu Gopal with intricate embroidery. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'peacock', 'feather', 'dress', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal6.jpeg'
    },
    {
        id: 21,
        name: 'Laddu Gopal Makhan Chor Outfit',
        category: 'poshaks',
        price: 238,
        originalPrice: 280,
        rating: 5.0,
        reviews: 45,
        badge: 'Janmashtami Special',
        description: 'Adorable Makhan Chor themed outfit for Laddu Gopal with butter pot accessories. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'makhan', 'chor', 'butter', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal7.jpg'
    },
    {
        id: 22,
        name: 'Laddu Gopal Gokul Prince Set',
        category: 'poshaks',
        price: 272,
        originalPrice: 320,
        rating: 4.7,
        reviews: 31,
        badge: 'Janmashtami Special',
        description: 'Royal Gokul prince outfit for Laddu Gopal with crown and jewelry accessories. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'gokul', 'prince', 'royal', 'crown', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal4.jpeg'
    },
    {
        id: 23,
        name: 'Laddu Gopal Radha Krishna Set',
        category: 'poshaks',
        price: 340,
        originalPrice: 400,
        rating: 5.0,
        reviews: 22,
        badge: 'Janmashtami Special',
        description: 'Complete Radha Krishna couple set for Laddu Gopal with matching outfits. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'radha', 'krishna', 'couple', 'set', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal1.jpg'
    },
    {
        id: 24,
        name: 'Laddu Gopal Govardhan Parvat Set',
        category: 'poshaks',
        price: 298,
        originalPrice: 350,
        rating: 4.8,
        reviews: 19,
        badge: 'Janmashtami Special',
        description: 'Govardhan Parvat themed dress for Laddu Gopal with mountain backdrop prop. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'govardhan', 'parvat', 'mountain', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal2.jpg'
    },
    {
        id: 25,
        name: 'Laddu Gopal Flute Player Outfit',
        category: 'poshaks',
        price: 221,
        originalPrice: 260,
        rating: 4.9,
        reviews: 37,
        badge: 'Janmashtami Special',
        description: 'Musical flute player outfit for Laddu Gopal with decorative flute accessory. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'flute', 'player', 'musical', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal3.jpg'
    },
    {
        id: 26,
        name: 'Laddu Gopal Vrindavan Special',
        category: 'poshaks',
        price: 264,
        originalPrice: 310,
        rating: 4.6,
        reviews: 26,
        badge: 'Janmashtami Special',
        description: 'Vrindavan themed special dress for Laddu Gopal with floral patterns and accessories. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'vrindavan', 'floral', 'special', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal4.jpeg'
    },
    {
        id: 27,
        name: 'Laddu Gopal Designer Lehenga Set',
        category: 'poshaks',
        price: 306,
        originalPrice: 360,
        rating: 4.8,
        reviews: 33,
        badge: 'Janmashtami Special',
        description: 'Elegant designer lehenga set for Laddu Gopal with mirror work and golden embroidery. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'designer', 'lehenga', 'mirror', 'golden', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal5.webp'
    },
    {
        id: 28,
        name: 'Laddu Gopal Cow Herder Outfit',
        category: 'poshaks',
        price: 247,
        originalPrice: 290,
        rating: 4.9,
        reviews: 41,
        badge: 'Janmashtami Special',
        description: 'Traditional cow herder outfit for Laddu Gopal with miniature cow accessories. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'cow', 'herder', 'traditional', 'gokul', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal6.jpeg'
    },
    {
        id: 29,
        name: 'Laddu Gopal Mathura King Set',
        category: 'poshaks',
        price: 323,
        originalPrice: 380,
        rating: 5.0,
        reviews: 27,
        badge: 'Janmashtami Special',
        description: 'Royal Mathura king outfit for Laddu Gopal with crown, sword and royal accessories. Special 15% off for Janmashtami!',
        keywords: ['laddu', 'gopal', 'mathura', 'king', 'royal', 'crown', 'sword', 'krishna', 'poshak', 'janmashtami'],
        image: 'assets/img/laddugopal7.jpg'
    }
];

// Search suggestions data
const searchSuggestions = [
    'janmashtami', 'laddu gopal', 'krishna dress', 'janmashtami special',
    'bangles', 'golden bangles', 'colorful bangles', 'red bangles', 'bridal bangles',
    'poshak', 'laddu gopal dress', 'durga mata dress', 'lakshmi poshak',
    'cosmetics', 'makeup kit', 'skincare', 'beauty products',
    'festival items', 'diwali special', 'holi colors', 'celebration'
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    currentProducts = products;
    renderProducts(products);
    updateCartCount();
    updateWishlistCount();
    initializeEventListeners();
    
    // Show Janmashtami popup after page loads
    setTimeout(() => {
        showJanmashtamiPopup();
    }, 150);
});

// Initialize event listeners
function initializeEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('focus', showSearchSuggestions);
        searchInput.addEventListener('blur', hideSearchSuggestions);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }

    // Scroll effects
    window.addEventListener('scroll', handleScroll);
    
    // Close modals on outside click
    document.addEventListener('click', handleOutsideClick);
    
    // Escape key handler
    document.addEventListener('keydown', handleEscapeKey);
}

// Handle search input with suggestions
function handleSearchInput() {
    const query = this.value.toLowerCase().trim();
    
    if (query.length > 0) {
        showMatchingSuggestions(query);
    } else {
        hideSearchSuggestions();
    }

    // Debounced search
    clearTimeout(window.searchTimer);
    window.searchTimer = setTimeout(() => {
        performSearch();
    }, 300);
}

// Show matching search suggestions
function showMatchingSuggestions(query) {
    const suggestions = searchSuggestions.filter(s => 
        s.toLowerCase().includes(query)
    ).slice(0, 5);

    const suggestionsDiv = document.getElementById('searchSuggestions');
    
    if (suggestions.length > 0) {
        suggestionsDiv.innerHTML = suggestions.map(suggestion => 
            `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`
        ).join('');
        suggestionsDiv.style.display = 'block';
    } else {
        hideSearchSuggestions();
    }
}

// Select suggestion
function selectSuggestion(suggestion) {
    document.getElementById('searchInput').value = suggestion;
    hideSearchSuggestions();
    performSearch();
}

// Show/hide search suggestions
function showSearchSuggestions() {
    const query = this.value.toLowerCase().trim();
    if (query.length > 0) {
        showMatchingSuggestions(query);
    }
}

function hideSearchSuggestions() {
    setTimeout(() => {
        document.getElementById('searchSuggestions').style.display = 'none';
    }, 200);
}

// Enhanced search function
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const grid = document.getElementById('productsGrid');
    
    if (query === '') {
        renderProducts(products);
        return;
    }

    isSearching = true;
    
    // Filter products based on name, keywords, category, and description
    const filteredProducts = products.filter(product => {
        const searchText = `${product.name} ${product.description} ${product.category} ${product.keywords.join(' ')}`.toLowerCase();
        return searchText.includes(query);
    });

    if (filteredProducts.length > 0) {
        renderProducts(filteredProducts);
        showNotification(`Found ${filteredProducts.length} products for "${query}"`, 'success');
    } else {
        renderNoResults(query);
    }
}

// Render no results
function renderNoResults(query) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = `
        <div class="no-results">
            <i class="fas fa-search"></i>
            <h3>No products found for "${query}"</h3>
            <p>Try searching for: bangles, poshak, cosmetics, festival, or browse our categories</p>
            <button onclick="clearSearch()">Show All Products</button>
        </div>
    `;
}

// Clear search
function clearSearch() {
    document.getElementById('searchInput').value = '';
    isSearching = false;
    renderProducts(products);
    showNotification('Showing all products', 'success');
}

// Enhanced render products function
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (productsToRender.length === 0) {
        renderNoResults('your search');
        return;
    }

    productsToRender.forEach((product, index) => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        const stars = generateStars(product.rating);
        
        const productCard = `
            <div class="product-card" data-category="${product.category}" style="animation-delay: ${index * 0.1}s">
                <div class="product-image">
                    ${product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
                    <div class="product-placeholder" style="display: ${product.image ? 'none' : 'flex'}; width: 100%; height: 200px; background: linear-gradient(135deg, var(--grey-100), var(--grey-200)); border-radius: 12px; align-items: center; justify-content: center; font-size: 48px;">
                        ${getCategoryEmoji(product.category)}
                    </div>
                    <span class="product-badge">${product.badge}</span>
                    <div class="product-actions">
                        <button class="action-btn" onclick="quickView(${product.id})" title="Quick View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="action-btn" onclick="shareProduct(${product.id})" title="Share">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-rating">
                        ${stars}
                        <span class="rating-text">(${product.reviews} reviews)</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">₹${product.price}</span>
                        <span class="original-price">₹${product.originalPrice}</span>
                        <span class="discount">${discount}% OFF</span>
                    </div>
                    <div class="product-footer">
                        <button class="btn-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-bag"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += productCard;
    });

    // Add entrance animation
    grid.style.opacity = '0';
    setTimeout(() => {
        grid.style.transition = 'opacity 0.3s ease';
        grid.style.opacity = '1';
    }, 50);
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star"></i>';
    }

    return stars;
}

// Enhanced product tab function
function showProductTab(category, buttonElement) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    // Filter and render products
    if (category === 'all') {
        renderProducts(products);
        showNotification('Showing all products', 'success');
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
        showNotification(`Showing ${filtered.length} ${category} products`, 'success');
    }
    
    isSearching = false;
    document.getElementById('searchInput').value = '';
}

// Show category
function showCategory(category) {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        let tabButton;
        
        // Map categories to their tab button text
        const categoryMap = {
            'bangles': 'Bangles',
            'poshaks': 'Poshaks', 
            'cosmetics': 'Beauty',
            'festival': 'Festival'
        };
        
        const buttonText = categoryMap[category];
        if (buttonText) {
            tabButton = Array.from(document.querySelectorAll('.tab-btn')).find(btn => 
                btn.textContent.toLowerCase().includes(buttonText.toLowerCase())
            );
        }
        
        if (tabButton) {
            showProductTab(category, tabButton);
        } else {
            // Fallback: show all products if specific category not found
            const allButton = document.querySelector('.tab-btn.active') || document.querySelector('.tab-btn');
            if (allButton) {
                showProductTab('all', allButton);
            }
        }
    }, 500);
}

// Enhanced add to cart
function addToCart(productId) {
    // Look in both main products and janmashtami products (if available)
    let product = products.find(p => p.id === productId);
    if (!product && typeof janmashtamiProducts !== 'undefined') {
        product = janmashtamiProducts.find(p => p.id === productId);
    }
    
    if (!product) {
        showNotification('Product not found!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
        showNotification(`${product.name} quantity updated in cart!`, 'success');
    } else {
        cart.push({ ...product, quantity: 1 });
        showNotification(`${product.name} added to cart! 🛒`, 'success');
    }

    updateCartCount();
    
    // Add to cart animation effect
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Added!';
    button.style.background = 'var(--success-color)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
    }, 1500);
}

// Enhanced wishlist toggle
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const index = wishlist.findIndex(item => item.id === productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification(`${product.name} removed from wishlist 💔`, 'error');
    } else {
        wishlist.push(product);
        showNotification(`${product.name} added to wishlist! ❤️`, 'success');
    }

    updateWishlistCount();
    
    // Visual feedback
    const button = event.target.closest('.action-btn');
    if (index === -1) {
        button.style.background = 'var(--primary-color)';
        button.style.color = 'white';
    } else {
        button.style.background = '';
        button.style.color = '';
    }
}

// Share product
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: product.description,
            url: window.location.href
        });
    } else {
        // Fallback to copying link
        const text = `Check out ${product.name} at Yadav Bangles Store! ${window.location.href}`;
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Product link copied to clipboard!', 'success');
        });
    }
}

// Update counters
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function updateWishlistCount() {
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

// Enhanced quick view
function quickView(productId) {
    // Look in both main products and janmashtami products (if available)
    let product = products.find(p => p.id === productId);
    if (!product && typeof janmashtamiProducts !== 'undefined') {
        product = janmashtamiProducts.find(p => p.id === productId);
    }
    
    if (!product) {
        showNotification('Product not found!', 'error');
        return;
    }
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const stars = product.rating ? generateStars(product.rating) : generateStars(4.5);

    const modalBody = document.getElementById('productModalBody');
    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: start;">
            <div style="text-align: center;">
                <div style="width: 100%; height: 250px; background: linear-gradient(135deg, var(--grey-100), var(--grey-200)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 64px; margin-bottom: 16px; overflow: hidden;">
                    ${product.image ? 
                        `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;" onerror="this.style.display='none'; this.parentElement.innerHTML='${getCategoryEmoji(product.category)}';this.parentElement.style.fontSize='64px';">` : 
                        getCategoryEmoji(product.category)
                    }
                </div>
                <div style="display: flex; gap: 8px; justify-content: center;">
                    <button onclick="addToCart(${product.id}); closeModal('productModal');" class="btn btn-primary" style="flex: 1;">
                        <i class="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                    <button onclick="toggleWishlist(${product.id})" class="action-btn" style="width: 48px; height: 48px;">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div>
                <span class="product-badge" style="position: static; margin-bottom: 12px; display: inline-block;">${product.badge}</span>
                <h3 style="font-size: 28px; margin-bottom: 12px; color: var(--dark-color); line-height: 1.2;">${product.name}</h3>
                <div class="product-rating" style="margin-bottom: 16px;">
                    ${stars}
                    <span class="rating-text">(${product.reviews} reviews)</span>
                </div>
                <div class="product-price" style="margin-bottom: 24px;">
                    <span class="current-price" style="font-size: 32px;">₹${product.price}</span>
                    <span class="original-price" style="font-size: 20px;">₹${product.originalPrice}</span>
                    <span class="discount" style="font-size: 16px;">${discount}% OFF</span>
                </div>
                <p style="color: var(--grey-600); margin-bottom: 24px; line-height: 1.6; font-size: 16px;">${product.description}</p>
                <div style="background: var(--grey-100); padding: 16px; border-radius: 12px; margin-bottom: 20px;">
                    <h4 style="margin-bottom: 8px; color: var(--dark-color);">Product Features:</h4>
                    <ul style="margin: 0; padding-left: 20px; color: var(--grey-600);">
                        <li>Premium quality materials</li>
                        <li>Available in multiple sizes/colors</li>
                        <li>Free delivery within Aligarh</li>
                        <li>30-day return policy</li>
                    </ul>
                </div>
                <button onclick="bookProduct('${product.name}', ${product.price})" class="btn btn-outline" style="width: 100%;">
                    <i class="fab fa-whatsapp"></i> Order on WhatsApp
                </button>
            </div>
        </div>
    `;

    openModal('productModal');
}

// Get category emoji
function getCategoryEmoji(category) {
    const emojis = {
        bangles: '📿',
        poshaks: '👘',
        cosmetics: '💄',
        festival: '🎊'
    };
    return emojis[category] || '🛍️';
}

// Book product
function bookProduct(productName, price) {
    document.querySelector('[name="productName"]').value = productName;
    closeModal('productModal');
    openModal('bookingModal');
}

// Enhanced modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const firstInput = modal.querySelector('input, textarea, button');
    if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Enhanced order submission
function submitOrder(event) {
    event.preventDefault();
    
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loading"></span> Sending...';
    button.disabled = true;

    const formData = new FormData(event.target);
    const orderData = {
        customerName: formData.get('customerName'),
        customerPhone: formData.get('customerPhone'),
        customerAddress: formData.get('customerAddress'),
        productName: formData.get('productName'),
        quantity: formData.get('quantity'),
        specialRequests: formData.get('specialRequests')
    };

    // Create enhanced WhatsApp message
    const message = `🛍️ *New Order - Yadav Bangles Store*

👤 *Customer Information:*
Name: ${orderData.customerName}
Phone: ${orderData.customerPhone}
Address: ${orderData.customerAddress}

🛒 *Order Details:*
Product: ${orderData.productName}
Quantity: ${orderData.quantity}
${orderData.specialRequests ? `Special Requests: ${orderData.specialRequests}` : ''}

📱 *Order Source:* Website
⏰ *Order Time:* ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}

Thank you for choosing Yadav Bangles Store! We will contact you shortly to confirm your order. 🙏

*Address:* Jaiganj, Aligarh, UP
*Phone:* +91 7417163092`;

    setTimeout(() => {
        // Open WhatsApp
        const whatsappURL = `https://wa.me/917417163092?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        
        // Reset form and close modal
        closeModal('bookingModal');
        event.target.reset();
        button.innerHTML = originalText;
        button.disabled = false;
        
        showNotification('Order sent to WhatsApp! We will contact you soon. 📱', 'success');
    }, 1000);
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    const button = event.target.querySelector('button');
    const originalText = button.textContent;
    
    button.innerHTML = '<span class="loading"></span>';
    button.disabled = true;
    
    setTimeout(() => {
        if (email) {
            showNotification('Thank you for subscribing! You will receive exclusive offers and updates. 📧', 'success');
            event.target.reset();
        }
        
        button.textContent = originalText;
        button.disabled = false;
    }, 1000);
}

// Enhanced cart and wishlist display
function openCart() {
    if (cart.length === 0) {
        showNotification('Your cart is empty. Add some products! 🛒', 'error');
        return;
    }
    
    const cartItems = cart.map(item => 
        `${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`
    ).join('\n');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const message = `🛒 *My Cart - Yadav Bangles Store*

📦 *Items:*
${cartItems}

💰 *Total: ₹${total}*

I would like to place this order. Please contact me for confirmation.

*Customer Details:*
- Name: [Please provide your name]
- Phone: [Please provide your phone]
- Address: [Please provide delivery address]

Thank you! 🙏`;
    
    const whatsappURL = `https://wa.me/917417163092?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

function openWishlist() {
    if (wishlist.length === 0) {
        showNotification('Your wishlist is empty. Add some favorites! ❤️', 'error');
        return;
    }
    
    const wishlistItems = wishlist.map(item => 
        `${item.name} - ₹${item.price}`
    ).join('\n');
    
    const message = `❤️ *My Wishlist - Yadav Bangles Store*

💝 *Favorite Items:*
${wishlistItems}

I'm interested in these products. Please share more details and availability.

Thank you! 🙏`;
    
    const whatsappURL = `https://wa.me/917417163092?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Navigation functions
function setActiveNav(element) {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    element.classList.add('active');
    
    // Close mobile nav after selection on mobile devices
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            closeMobileNav();
        }, 100);
    }
}

// Enhanced scroll handling with smart top-bar behavior
let lastScrollY = 0;
let ticking = false;

function handleScroll() {
    const header = document.getElementById('header');
    const topBar = document.querySelector('.top-bar');
    const scrollTop = document.getElementById('scrollTop');
    const currentScrollY = window.scrollY;
    
    // Standard scroll effects
    if (currentScrollY > 100) {
        header.classList.add('scrolled');
        scrollTop.classList.add('show');
    } else {
        header.classList.remove('scrolled');
        scrollTop.classList.remove('show');
    }
    
    // Smart top-bar behavior for all screens (hide/show only the top bar)
    if (topBar) {
        if (currentScrollY > 80) { // Start hiding after 80px scroll
            if (currentScrollY > lastScrollY && currentScrollY > 120) {
                // Scrolling down - hide top bar and move header to top
                topBar.classList.add('hidden');
                topBar.classList.remove('visible');
                header.classList.add('top-bar-hidden');
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up - show top bar and restore header position
                topBar.classList.remove('hidden');
                topBar.classList.add('visible');
                header.classList.remove('top-bar-hidden');
            }
        } else {
            // Near top - always show top bar and normal header position
            topBar.classList.remove('hidden');
            topBar.classList.add('visible');
            header.classList.remove('top-bar-hidden');
        }
    }
    
    lastScrollY = currentScrollY;
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Modal event handlers
function handleOutsideClick(event) {
    const modals = document.querySelectorAll('.modal.show');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
}

function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal.show');
        if (activeModal) {
            closeModal(activeModal.id);
        }
        hideSearchSuggestions();
    }
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existing = document.querySelectorAll('.notification');
    existing.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.4s ease-in-out forwards';
            setTimeout(() => notification.remove(), 400);
        }
    }, 4000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance optimization - Lazy loading effect
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.category-card, .product-card, .feature-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Initialize lazy loading after DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
} else {
    observeElements();
}

// Add loading state management
window.addEventListener('load', function() {
    // Hide any loading spinners
    document.querySelectorAll('.loading').forEach(loader => {
        loader.style.display = 'none';
    });
    
    // Website loaded - no notification needed for production
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.log('Image failed to load:', e.target.src);
    }
}, true);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Add touch gestures for mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    if (!touchStartX || !touchStartY) {
        return;
    }

    let touchEndX = e.changedTouches[0].clientX;
    let touchEndY = e.changedTouches[0].clientY;

    let diffX = touchStartX - touchEndX;
    let diffY = touchStartY - touchEndY;

    // Reset values
    touchStartX = 0;
    touchStartY = 0;

    // Swipe detection (only if horizontal swipe is more significant than vertical)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 100) {
        if (diffX > 0) {
            // Swiped left - could trigger next product or close modal
            const activeModal = document.querySelector('.modal.show');
            if (activeModal) {
                closeModal(activeModal.id);
            }
        } else {
            // Swiped right - could trigger previous product
            // Future enhancement
        }
    }
});

// Analytics and tracking (placeholder)
function trackEvent(eventName, eventData) {
    // Google Analytics or other tracking service integration
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Track product views, cart additions, etc.
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Track important user interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-cart')) {
        trackEvent('add_to_cart', {
            item_name: e.target.closest('.product-card').querySelector('.product-title').textContent
        });
    }
    
    if (e.target.matches('.category-card')) {
        trackEvent('view_category', {
            category_name: e.target.querySelector('.category-title').textContent
        });
    }
});

// Mobile Navigation Functions
function toggleMobileNav() {
    const navContent = document.getElementById('navContent');
    const navOverlay = document.getElementById('navOverlay');
    const navToggle = document.getElementById('mobileNavToggle');
    
    navContent.classList.toggle('active');
    navOverlay.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Prevent body scroll when nav is open
    if (navContent.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMobileNav() {
    const navContent = document.getElementById('navContent');
    const navOverlay = document.getElementById('navOverlay');
    const navToggle = document.getElementById('mobileNavToggle');
    
    navContent.classList.remove('active');
    navOverlay.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close mobile nav when clicking outside or pressing escape
document.addEventListener('click', function(e) {
    const navContent = document.getElementById('navContent');
    const navToggle = document.getElementById('mobileNavToggle');
    
    if (navContent && navContent.classList.contains('active')) {
        if (!navContent.contains(e.target) && !navToggle.contains(e.target)) {
            closeMobileNav();
        }
    }
});

// Enhanced escape key handler for mobile nav
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.show');
        const navContent = document.getElementById('navContent');
        
        if (activeModal) {
            closeModal(activeModal.id);
        } else if (navContent && navContent.classList.contains('active')) {
            closeMobileNav();
        }
        
        hideSearchSuggestions();
    }
});

// Handle window resize for mobile nav
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileNav();
    }
});

// Janmashtami Popup Functions
function showJanmashtamiPopup() {
    // Option 1: Show every time (good for testing/demos)
    const popup = document.getElementById('janmashtamiPopup');
    
    // Preserve scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = scrollbarWidth + 'px';
    
    popup.classList.add('show');
    
    // Option 2: Show only once per day (uncomment below and comment above)
    // const today = new Date().toDateString();
    // const popupShown = localStorage.getItem('janmashtamiPopupShown');
    // if (popupShown !== today) {
    //     const popup = document.getElementById('janmashtamiPopup');
    //     const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    //     document.body.style.overflow = 'hidden';
    //     document.body.style.paddingRight = scrollbarWidth + 'px';
    //     popup.classList.add('show');
    //     localStorage.setItem('janmashtamiPopupShown', today);
    // }
}

function closeJanmashtamiPopup() {
    const popup = document.getElementById('janmashtamiPopup');
    popup.classList.remove('show');
    
    // Restore scrollbar and remove padding
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '';
    
    // Show welcome notification after closing popup
    setTimeout(() => {
        showNotification('Welcome to Yadav Bangles Store! Explore our Janmashtami collection! 🕉️', 'success');
    }, 500);
}

function scrollToJanmashtami() {
    closeJanmashtamiPopup();
    setTimeout(() => {
        document.getElementById('janmashtami-products').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 300);
}

function openJanmashtamiWhatsApp() {
    const message = `🕉️ *Janmashtami Special Inquiry - Yadav Bangles Store*

Namaste! I'm interested in your Janmashtami Special Collection:

🎊 *Special Offer: 15% OFF on Laddu Gopal Poshaks*

Products I'm interested in:
• Laddu Gopal Divine Dress - ₹255 (was ₹300)
• Laddu Gopal Royal Dress - ₹272 (was ₹320)
• Laddu Gopal Traditional Outfit - ₹230 (was ₹270)
• Laddu Gopal Festival Special - ₹298 (was ₹350)

Please share more details about:
- Available sizes
- Fabric quality
- Delivery options in Aligarh

Thank you! 🙏

*Jai Shri Krishna!* 💙`;

    const whatsappURL = `https://wa.me/917417163092?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    closeJanmashtamiPopup();
}

// Close popup when clicking outside
document.addEventListener('click', function(e) {
    const popup = document.getElementById('janmashtamiPopup');
    const popupContent = document.querySelector('.janmashtami-popup-content');
    
    if (popup && popup.classList.contains('show')) {
        if (e.target === popup) {
            closeJanmashtamiPopup();
        }
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const popup = document.getElementById('janmashtamiPopup');
        if (popup && popup.classList.contains('show')) {
            closeJanmashtamiPopup();
        }
    }
});

// Call Store Function - Global access
function callStore() {
    window.location.href = 'tel:+917417163092';
}

// Final initialization
console.log('Yadav Bangles Store website initialized successfully! 🎉');
console.log('Features loaded: Search, Cart, Wishlist, Modals, Responsive Design, Mobile Navigation, Janmashtami Popup');
console.log('Contact: +91 7417163092 | Location: Jaiganj, Aligarh'); 
