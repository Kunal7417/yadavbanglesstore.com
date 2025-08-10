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

// Enhanced add to cart - Opens order form instead of just adding to cart
function addToCart(productId) {
    console.log('🛒 addToCart called with productId:', productId);
    
    // Look in both main products and janmashtami products (if available)
    let product = products.find(p => p.id === productId);
    if (!product && typeof janmashtamiProducts !== 'undefined') {
        product = janmashtamiProducts.find(p => p.id === productId);
    }
    
    if (!product) {
        showNotification('Product not found!', 'error');
        return;
    }
    
    console.log('📦 Found product:', product.name, 'Price:', product.price);
    
    // Instead of adding to cart, open the order form directly
    // Set the product name in the form
    setTimeout(() => {
        const productField = document.querySelector('[name="productName"]');
        if (productField) {
            productField.value = product.name;
            console.log('✅ Product name set in form:', product.name);
        }
    }, 100);
    
    // Open the booking modal for immediate order
    openModal('bookingModal');
    console.log('✅ Order form opened for:', product.name);
    
    // Show notification
    showNotification(`📝 Order form opened for ${product.name}`, 'success');
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

// Payment Integration Functions
// Use external payment configuration if available, otherwise use defaults
const PAYMENT_CONFIG = window.PAYMENT_GATEWAYS || {
    paytm: {
        merchantId: 'YOUR_PAYTM_MERCHANT_ID', // Replace with your Paytm Merchant ID
        merchantKey: 'YOUR_PAYTM_MERCHANT_KEY', // Replace with your Paytm Merchant Key
        website: 'WEBSTAGING', // Use 'DEFAULT' for production
        industryType: 'Retail',
        channelId: 'WEB',
        paytmUrl: 'https://securegw-stage.paytm.in/order/process' // Use production URL for live
    },
    razorpay: {
        keyId: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
        keySecret: 'YOUR_RAZORPAY_KEY_SECRET' // Replace with your Razorpay Key Secret
    },
    phonepe: {
        merchantId: 'YOUR_PHONEPE_MERCHANT_ID',
        saltKey: 'YOUR_PHONEPE_SALT_KEY'
    }
};

// Enhanced order submission with payment options
function submitOrder(event) {
    event.preventDefault();
    
    // Debug log to confirm this function is being called
    console.log('🚀 NEW submitOrder function called - Payment options will show!');
    
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loading"></span> Processing...';
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

    // Calculate order total
    const product = products.find(p => p.name === orderData.productName);
    const orderTotal = product ? product.price * parseInt(orderData.quantity) : 0;

    // Store order data for payment processing
    sessionStorage.setItem('pendingOrder', JSON.stringify({
        ...orderData,
        total: orderTotal,
        orderId: generateOrderId()
    }));

    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        closeModal('bookingModal');
        
        // Show payment options modal instead of direct WhatsApp
        showPaymentOptions(orderData, orderTotal);
    }, 1000);
}

// Generate unique order ID
function generateOrderId() {
    return 'YBS' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
}

// Show payment options modal
function showPaymentOptions(orderData, total) {
    console.log('💳 showPaymentOptions called with:', { orderData, total });
    const modalBody = document.getElementById('productModalBody');
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h3 style="color: var(--primary-color); margin-bottom: 20px;">
                <i class="fas fa-credit-card"></i> Choose Payment Method
            </h3>
            
            <div style="background: var(--grey-100); padding: 20px; border-radius: 12px; margin-bottom: 24px;">
                <h4 style="margin-bottom: 10px;">Order Summary</h4>
                <p><strong>Product:</strong> ${orderData.productName}</p>
                <p><strong>Quantity:</strong> ${orderData.quantity}</p>
                <p><strong>Customer:</strong> ${orderData.customerName}</p>
                <p style="font-size: 18px; color: var(--primary-color);"><strong>Total: ₹${total}</strong></p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
                
                <!-- Paytm Payment -->
                <button onclick="initiatePaytmPayment()" class="payment-btn" style="background: #00BAF2; color: white; padding: 16px; border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s ease;">
                    <i class="fab fa-paytm" style="font-size: 24px; margin-bottom: 8px; display: block;"></i>
                    <strong>Paytm</strong>
                    <small style="display: block; opacity: 0.9;">Wallet & UPI</small>
                </button>

                <!-- UPI Direct -->
                <button onclick="initiateUPIPayment()" class="payment-btn" style="background: #FF6B35; color: white; padding: 16px; border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s ease;">
                    <i class="fas fa-mobile-alt" style="font-size: 24px; margin-bottom: 8px; display: block;"></i>
                    <strong>UPI Pay</strong>
                    <small style="display: block; opacity: 0.9;">GPay, PhonePe, etc.</small>
                </button>

                <!-- Razorpay (Multiple options) -->
                <button onclick="initiateRazorpayPayment()" class="payment-btn" style="background: #3395FF; color: white; padding: 16px; border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s ease;">
                    <i class="fas fa-credit-card" style="font-size: 24px; margin-bottom: 8px; display: block;"></i>
                    <strong>Card/Net Banking</strong>
                    <small style="display: block; opacity: 0.9;">All Banks</small>
                </button>

                <!-- PhonePe -->
                <button onclick="initiatePhonePePayment()" class="payment-btn" style="background: #5F259F; color: white; padding: 16px; border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s ease;">
                    <i class="fab fa-phoenix-framework" style="font-size: 24px; margin-bottom: 8px; display: block;"></i>
                    <strong>PhonePe</strong>
                    <small style="display: block; opacity: 0.9;">Quick Pay</small>
                </button>

                <!-- Cash on Delivery -->
                <button onclick="initiateCOD()" class="payment-btn" style="background: #28A745; color: white; padding: 16px; border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s ease;">
                    <i class="fas fa-money-bill-wave" style="font-size: 24px; margin-bottom: 8px; display: block;"></i>
                    <strong>Cash on Delivery</strong>
                    <small style="display: block; opacity: 0.9;">Pay at delivery</small>
                </button>

                <!-- WhatsApp Order -->
                <button onclick="processWhatsAppOrder()" class="payment-btn" style="background: #25D366; color: white; padding: 16px; border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s ease;">
                    <i class="fab fa-whatsapp" style="font-size: 24px; margin-bottom: 8px; display: block;"></i>
                    <strong>WhatsApp Order</strong>
                    <small style="display: block; opacity: 0.9;">Traditional way</small>
                </button>
            </div>

            <p style="color: var(--grey-600); font-size: 14px; margin-bottom: 16px;">
                <i class="fas fa-shield-alt"></i> All payments are secure and encrypted
            </p>

            <button onclick="closeModal('productModal')" class="btn btn-outline" style="width: 100%;">
                Cancel Order
            </button>
        </div>
    `;

    openModal('productModal');
}

// Paytm Payment Integration
function initiatePaytmPayment() {
    const orderData = JSON.parse(sessionStorage.getItem('pendingOrder'));
    if (!orderData) {
        showNotification('Order data not found. Please try again.', 'error');
        return;
    }

    // Check if Paytm is properly configured
    if (!PAYMENT_CONFIG.paytm.merchantKey || PAYMENT_CONFIG.paytm.merchantKey === '') {
        showNotification('Paytm is not configured yet. Please use UPI or COD payment.', 'error');
        return;
    }

    showNotification('Redirecting to Paytm...', 'success');

    // Create Paytm payment form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = PAYMENT_CONFIG.paytm.paytmUrl;

    const params = {
        MID: PAYMENT_CONFIG.paytm.merchantId,
        WEBSITE: PAYMENT_CONFIG.paytm.website,
        INDUSTRY_TYPE_ID: PAYMENT_CONFIG.paytm.industryType,
        CHANNEL_ID: PAYMENT_CONFIG.paytm.channelId,
        ORDER_ID: orderData.orderId,
        CUST_ID: orderData.customerPhone,
        TXN_AMOUNT: orderData.total.toString(),
        CALLBACK_URL: `${window.location.origin}/payment-success.html`,
        EMAIL: `${orderData.customerPhone}@yadavbangles.com`, // Dummy email
        MOBILE_NO: orderData.customerPhone
    };

    // Add parameters to form
    Object.keys(params).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = params[key];
        form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
}

// UPI Direct Payment
function initiateUPIPayment() {
    const orderData = JSON.parse(sessionStorage.getItem('pendingOrder'));
    if (!orderData) {
        showNotification('Order data not found. Please try again.', 'error');
        return;
    }

    // Generate UPI payment link - use from configuration
    const upiId = PAYMENT_CONFIG.upi ? PAYMENT_CONFIG.upi.upiId : '9119741603@ptaxis';
    const amount = orderData.total;
    const note = `Payment for ${orderData.productName} - Order ${orderData.orderId}`;
    
    const upiUrl = `upi://pay?pa=${upiId}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    
    // For mobile devices, try to open UPI app
    if (/Android|iPhone/i.test(navigator.userAgent)) {
        window.location.href = upiUrl;
        
        // Fallback: Show QR code and manual UPI ID
        setTimeout(() => {
            showUPIDetails(upiId, amount, note, orderData.orderId);
        }, 3000);
    } else {
        // For desktop, show QR code directly
        showUPIDetails(upiId, amount, note, orderData.orderId);
    }
}

// Show UPI payment details
function showUPIDetails(upiId, amount, note, orderId) {
    const modalBody = document.getElementById('productModalBody');
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h3 style="color: var(--primary-color); margin-bottom: 20px;">
                <i class="fas fa-mobile-alt"></i> UPI Payment
            </h3>
            
            <div style="background: var(--grey-100); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                <h4 style="margin-bottom: 16px;">Scan QR Code or Use UPI ID</h4>
                
                <!-- Real QR Code -->
                <div style="width: 200px; height: 200px; background: white; border: 2px solid var(--grey-300); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; border-radius: 12px;">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=${upiId}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}" 
                         alt="UPI QR Code" 
                         style="width: 180px; height: 180px; border-radius: 8px;"
                         onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=&quot;text-align: center; color: var(--grey-600);&quot;><i class=&quot;fas fa-qrcode&quot; style=&quot;font-size: 48px; margin-bottom: 8px; display: block;&quot;></i>QR Code<br><small>Use any UPI app to scan</small></div>';">
                </div>
                
                <div style="background: white; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                    <p><strong>UPI ID:</strong> <code style="background: var(--grey-100); padding: 4px 8px; border-radius: 4px;">${upiId}</code></p>
                    <p><strong>Amount:</strong> ₹${amount}</p>
                    <p><strong>Order ID:</strong> ${orderId}</p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px;">
                <button onclick="paymentCompleted('${orderId}')" class="btn btn-primary">
                    <i class="fas fa-check"></i> Payment Done
                </button>
                <button onclick="closeModal('productModal')" class="btn btn-outline">
                    Cancel
                </button>
            </div>

            <p style="color: var(--grey-600); font-size: 14px;">
                After payment, click "Payment Done" to confirm your order.
            </p>
        </div>
    `;
}

// Razorpay Payment Integration
function initiateRazorpayPayment() {
    const orderData = JSON.parse(sessionStorage.getItem('pendingOrder'));
    if (!orderData) {
        showNotification('Order data not found. Please try again.', 'error');
        return;
    }

    // Load Razorpay script dynamically
    if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => processRazorpayPayment(orderData);
        document.head.appendChild(script);
    } else {
        processRazorpayPayment(orderData);
    }
}

function processRazorpayPayment(orderData) {
    const options = {
        key: PAYMENT_CONFIG.razorpay.keyId,
        amount: orderData.total * 100, // Amount in paise
        currency: 'INR',
        name: 'Yadav Bangles Store',
        description: orderData.productName,
        order_id: orderData.orderId,
        handler: function(response) {
            paymentSuccess(response.razorpay_payment_id, orderData.orderId, 'Razorpay');
        },
        prefill: {
            name: orderData.customerName,
            contact: orderData.customerPhone
        },
        theme: {
            color: '#FF6B35'
        },
        modal: {
            ondismiss: function() {
                showNotification('Payment cancelled', 'error');
            }
        }
    };

    const rzp = new Razorpay(options);
    rzp.open();
}

// PhonePe Payment Integration
function initiatePhonePePayment() {
    const orderData = JSON.parse(sessionStorage.getItem('pendingOrder'));
    if (!orderData) {
        showNotification('Order data not found. Please try again.', 'error');
        return;
    }

    // PhonePe Web SDK integration
    showNotification('Redirecting to PhonePe...', 'success');
    
    // This would typically involve server-side integration
    // For now, redirect to a payment page or show UPI option
    setTimeout(() => {
        initiateUPIPayment(); // Fallback to UPI for now
    }, 1500);
}

// Cash on Delivery
function initiateCOD() {
    const orderData = JSON.parse(sessionStorage.getItem('pendingOrder'));
    if (!orderData) {
        showNotification('Order data not found. Please try again.', 'error');
        return;
    }

    // Process COD order
    paymentSuccess('COD', orderData.orderId, 'Cash on Delivery');
}

// WhatsApp Order (Traditional)
function processWhatsAppOrder() {
    const orderData = JSON.parse(sessionStorage.getItem('pendingOrder'));
    if (!orderData) {
        showNotification('Order data not found. Please try again.', 'error');
        return;
    }

    const message = `🛍️ *New Order - Yadav Bangles Store*

👤 *Customer Information:*
Name: ${orderData.customerName}
Phone: ${orderData.customerPhone}
Address: ${orderData.customerAddress}

🛒 *Order Details:*
Product: ${orderData.productName}
Quantity: ${orderData.quantity}
Total Amount: ₹${orderData.total}
Order ID: ${orderData.orderId}
${orderData.specialRequests ? `Special Requests: ${orderData.specialRequests}` : ''}

📱 *Order Source:* Website
⏰ *Order Time:* ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}

Thank you for choosing Yadav Bangles Store! 🙏

*Address:* Jaiganj, Aligarh, UP
*Phone:* +91 7417163092`;

    const whatsappURL = `https://wa.me/917417163092?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    closeModal('productModal');
    showNotification('Order sent via WhatsApp! We will contact you soon. 📱', 'success');
}

// Payment Success Handler
function paymentSuccess(paymentId, orderId, paymentMethod) {
    const orderData = JSON.parse(sessionStorage.getItem('pendingOrder'));
    
    // Store successful payment data
    const paymentData = {
        ...orderData,
        paymentId: paymentId,
        paymentMethod: paymentMethod,
        paymentStatus: 'SUCCESS',
        paymentTime: new Date().toISOString()
    };
    
    localStorage.setItem(`order_${orderId}`, JSON.stringify(paymentData));
    sessionStorage.removeItem('pendingOrder');
    
    // Close modal and show success
    closeModal('productModal');
    
    // Redirect to success page or show success message
    setTimeout(() => {
        showPaymentSuccessModal(paymentData);
        
        // Send confirmation to WhatsApp
        sendPaymentConfirmationToWhatsApp(paymentData);
    }, 500);
}

// Show payment success modal
function showPaymentSuccessModal(paymentData) {
    const modalBody = document.getElementById('productModalBody');
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 30px;">
            <div style="color: var(--success-color); font-size: 64px; margin-bottom: 20px;">
                <i class="fas fa-check-circle"></i>
            </div>
            
            <h3 style="color: var(--success-color); margin-bottom: 16px;">Payment Successful!</h3>
            
            <div style="background: var(--grey-100); padding: 20px; border-radius: 12px; margin-bottom: 24px; text-align: left;">
                <h4 style="margin-bottom: 12px; text-align: center;">Order Confirmation</h4>
                <p><strong>Order ID:</strong> ${paymentData.orderId}</p>
                <p><strong>Payment ID:</strong> ${paymentData.paymentId}</p>
                <p><strong>Product:</strong> ${paymentData.productName}</p>
                <p><strong>Amount Paid:</strong> ₹${paymentData.total}</p>
                <p><strong>Payment Method:</strong> ${paymentData.paymentMethod}</p>
                <p><strong>Customer:</strong> ${paymentData.customerName}</p>
            </div>

            <div style="background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); color: white; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
                <h4 style="margin-bottom: 8px;"><i class="fas fa-truck"></i> What's Next?</h4>
                <p style="margin: 0;">We'll contact you within 2 hours to confirm delivery details. Your order will be delivered within 1-2 days in Aligarh area.</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                <button onclick="downloadOrderReceipt('${paymentData.orderId}')" class="btn btn-primary">
                    <i class="fas fa-download"></i> Download Receipt
                </button>
                <button onclick="trackOrder('${paymentData.orderId}')" class="btn btn-outline">
                    <i class="fas fa-map-marker-alt"></i> Track Order
                </button>
            </div>

            <button onclick="closeModal('productModal'); continueShopping();" class="btn btn-outline" style="width: 100%;">
                <i class="fas fa-shopping-bag"></i> Continue Shopping
            </button>
        </div>
    `;

    openModal('productModal');
    
    // Auto-close after 10 seconds
    setTimeout(() => {
        closeModal('productModal');
    }, 10000);
}

// Send payment confirmation to WhatsApp
function sendPaymentConfirmationToWhatsApp(paymentData) {
    const message = `✅ *PAYMENT RECEIVED - Yadav Bangles Store*

💰 *Payment Details:*
Payment ID: ${paymentData.paymentId}
Order ID: ${paymentData.orderId}
Amount: ₹${paymentData.total}
Method: ${paymentData.paymentMethod}
Status: SUCCESS ✅

👤 *Customer Details:*
Name: ${paymentData.customerName}
Phone: ${paymentData.customerPhone}
Address: ${paymentData.customerAddress}

🛒 *Product Details:*
Product: ${paymentData.productName}
Quantity: ${paymentData.quantity}

⏰ *Payment Time:* ${new Date(paymentData.paymentTime).toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}

🚚 *Action Required:* Please confirm delivery details with customer and prepare the order for dispatch.

*Yadav Bangles Store* 🙏`;

    // This will be sent automatically to store owner
    const whatsappURL = `https://wa.me/917417163092?text=${encodeURIComponent(message)}`;
    
    // Open in a new window (will auto-close)
    const confirmationWindow = window.open(whatsappURL, '_blank');
    setTimeout(() => {
        if (confirmationWindow) confirmationWindow.close();
    }, 3000);
}

// Payment completion confirmation
function paymentCompleted(orderId) {
    paymentSuccess('MANUAL_CONFIRMATION', orderId, 'UPI Manual');
}

// Download order receipt
function downloadOrderReceipt(orderId) {
    const orderData = JSON.parse(localStorage.getItem(`order_${orderId}`));
    if (!orderData) {
        showNotification('Order data not found', 'error');
        return;
    }

    // Create a simple receipt
    const receiptContent = `
        YADAV BANGLES STORE
        Jaiganj, Aligarh, UP
        Phone: +91 7417163092
        
        ═══════════════════════════════
        PAYMENT RECEIPT
        ═══════════════════════════════
        
        Order ID: ${orderData.orderId}
        Payment ID: ${orderData.paymentId}
        Date: ${new Date(orderData.paymentTime).toLocaleDateString('en-IN')}
        Time: ${new Date(orderData.paymentTime).toLocaleTimeString('en-IN')}
        
        Customer Details:
        Name: ${orderData.customerName}
        Phone: ${orderData.customerPhone}
        
        Product Details:
        ${orderData.productName}
        Quantity: ${orderData.quantity}
        
        Payment Details:
        Method: ${orderData.paymentMethod}
        Amount: ₹${orderData.total}
        Status: PAID ✓
        
        ═══════════════════════════════
        Thank you for your purchase!
        Visit: yadavbanglesstore.com
        ═══════════════════════════════
    `;

    // Create and download receipt
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `YBS_Receipt_${orderId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Receipt downloaded successfully!', 'success');
}

// Track order
function trackOrder(orderId) {
    showNotification('Order tracking will be available soon. We will contact you with delivery updates.', 'success');
}

// Continue shopping
function continueShopping() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    showNotification('Happy shopping! 🛍️', 'success');
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
