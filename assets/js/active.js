/*global jQuery */
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // Slider Carouse JS
        var banner_owl = $('#banner-carousel');
        banner_owl.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        });

        // Slider Caption Animation JS
        var caption = $('.banner-caption *');
        caption.addClass('animated');

        banner_owl.on('translate.owl.carousel', function (event) {
            caption.removeClass('fadeInUp');
            caption.addClass('hide');
        });

        banner_owl.on('translated.owl.carousel', function (event) {
            caption.addClass('fadeInUp');
            caption.removeClass('hide');
        });

        // Product Carousel JS
        $('.products-carousel').owlCarousel({
            items: 3,
            loop: true,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    autoplay: true,
                    nav: false
                },
                576: {
                    items: 2,
                    autoplay: true
                },
                768: {
                    items: 2,
                    nav: true
                },
                992: {
                    items: 3,
                    nav: true
                }
            }
        });

        // New Product Carousel JS
        $('.new-products-carousel').owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    autoPlay: true,
                    nav: false
                },
                576: {
                    items: 2,
                    autoPlay: true
                },
                768: {
                    items: 2,
                    nav: true
                },
                992: {
                    items: 3,
                    nav: true
                },
                1200: {
                    items: 4,
                    nav: true
                }
            }
        });

        // New Product Two Carousel JS
        $('.new-products-carousel-two').owlCarousel({
            items: 2,
            dots: false,
            nav: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            margin: 30,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    autoPlay: true
                },
                // breakpoint from 576 up
                576: {
                    items: 2,
                    autoPlay: true
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    nav: true
                },
                // breakpoint from 992 up
                992: {
                    items: 2,
                    nav: true
                }
            }
        });

        // New Product Gallery Carousel JS
        $('.new-pro-gallery-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoPlay: true
        });

        // Testimonial Carousel JS
        $('#testimonialCarousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoPlay: true
        });

        // Image Gallery JS
        $('.imgage-gallery-carousel').owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            nav: false,
            autoPlay: true
        });

        // Sale Product Carousel
        $('.sale-product-carousel').owlCarousel({
            items: 1,
            loop: false,
            dots: false,
            smartSpeed: 500,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        // Home 4 Product Carousel
        $('.products-categories-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            smartSpeed: 500,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        // Single Product  Carousel Js
        $('.product-thumb-carousel').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            smartSpeed: 500,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            thumbs: true,
            thumbImage: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item'
        });

        // Bootstrap tooltip
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

        // Body Popup Modal
        $('.modal-active').on('click', function () {
            $('.body-popup-modal-area').fadeIn(200);

            return false;
        });

        $('.modal-close').on('click', function () {
            $('.body-popup-modal-area').fadeOut();

            return false;
        });

        $('.menu-open').on('click', function () {
            $('.navigation-area-wrap').fadeIn(200);

            return false;
        });

        $('.menu-close').on('click', function () {
            $('.navigation-area-wrap').fadeOut();

            return false;
        });

        // Responsive Slicknav
        $('#mainmenu').slicknav({
            label: '',
            prependTo: '#header-area',
            closedSymbol: '+',
            openedSymbol: '-'
        });

        // Scroll to top
        $('.scrolltotop').smoothScroll({
            direction: 'top',
            scrollTarget: 'html',
            speed: 600
        });

        // Nice Select Js
        $('select').niceSelect();

        // Product View Style JS
        var view_style_wrap = $('.shop-page-products-wrap > .products-wrapper');

        $('.product-view li.column-gird').on('click', function () {
            view_style_wrap.removeClass('products-gird products-list-view');
        });

        $('.product-view li.box-gird').on('click', function () {
            view_style_wrap.addClass('products-gird');
            view_style_wrap.removeClass('products-list-view');
        });

        $('.product-view li.list').on('click', function () {
            view_style_wrap.addClass('products-list-view');
            view_style_wrap.removeClass('products-gird');
        });

        $('.product-view li').on('click', function () {
            $('.product-view li').removeClass('current');
            $(this).addClass('current');
        });

        // Checkout Page Checkbox
        $("#create_pwd").on("change", function () {
            $(".account-create").slideToggle("100");
        });

        $("#ship_to_different").on("change", function () {
            $(".ship-to-different").slideToggle("100");
        });

        // Payment Method Accordion
        $('input[name="paymentmethod"]').on('click', function () {

            var $value = $(this).attr('value');

            $('.payment-method-details').slideUp();
            $('[data-method="' + $value + '"]').slideDown();
        });


        // Sale Products Countdown
        $(".sale-product-countdown").each(function (index, element) {
            var $element = $(element),
                $date = $element.data('date');

            $element.countdown($date, function (event) {
                var $this = $(this).html(event.strftime(''

                    + '<div class="counter-item"><span class="counter-no">%D</span><span class="counter-label">Days</span></div>'
                    + '<div class="counter-item"><span class="counter-no">%H</span><span class="counter-label">Hours</span></div>'
                    + '<div class="counter-item"><span class="counter-no">%M</span><span class="counter-label">Mins</span></div>'
                    + '<div class="counter-item"><span class="counter-no">%S</span><span class="counter-label">Secs</span></div>'));
            });
        });


        //Email Ajax Submission
        $('#subscribe-form').submit(function () {
            var action = $(this).attr('action'),
                result = $('#result');

            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    email: $('#address').attr('value')
                },
                success: function (data) {
                    result.html(data);
                    result.removeClass('alert alert-danger');
                    result.addClass('alert alert-success');
                },
                error: function () {
                    result.html('Sorry, an error occurred.');
                    result.removeClass('alert alert-success');
                    result.addClass('alert alert-danger');
                }
            });
            return false;
        });

        // All Window Scroll Function
        $(window).scroll(function () {
            //Scroll top Hide Show
            if ($(window).scrollTop() >= 400) {
                $('.scrolltotop').addClass('show');
            } else {
                $('.scrolltotop').removeClass('show');
            }

            //Header Fix JS
            if ($(window).scrollTop() >= 400) {
                $('#header-area').addClass('fixed');
            } else {
                $('#header-area, .slicknav_menu').removeClass('fixed');
            }
        });

    }); //Ready Function End

    jQuery(window).on('load', function () {

    }); //window load End
}(jQuery));

// Yadav Bangles Store Custom Functions
// Online Booking System - Simple & Professional
function showBookingModal() {
    var bookingModal = `
        <div class="booking-modal-overlay" id="bookingModalOverlay">
            <div class="booking-modal">
                <div class="booking-modal-header">
                    <h3><i class="fa fa-shopping-bag"></i> Quick Order</h3>
                    <button onclick="closeBookingModal()" class="close-btn">&times;</button>
                </div>
                <div class="booking-modal-body">
                    <div class="store-info">
                        <p><i class="fa fa-map-marker"></i> <strong>Yadav Bangles Store</strong> - Jaiganj, Aligarh</p>
                        <p><i class="fa fa-phone"></i> Call: <a href="tel:7417163092">7417163092</a></p>
                    </div>
                    
                    <form id="bookingForm">
                        <div class="form-row">
                            <div class="form-group">
                                <input type="text" id="customerName" required placeholder="Your Name *" class="form-input">
                            </div>
                            <div class="form-group">
                                <input type="tel" id="customerPhone" required placeholder="Mobile Number *" class="form-input">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <input type="text" id="productName" placeholder="Product you want to order" class="form-input">
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <select id="productCategory" class="form-input">
                                    <option value="">Select Category</option>
                                    <option value="bangles">Glass Bangles</option>
                                    <option value="churis">Fancy Churis</option>
                                    <option value="poshak">God Poshaks</option>
                                    <option value="cosmetics">Cosmetics</option>
                                    <option value="festival">Festival Items</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="number" id="quantity" min="1" value="1" placeholder="Qty" class="form-input">
                            </div>
                        </div>
                        
                        <div class="booking-actions">
                            <button type="button" onclick="submitBookingWhatsApp()" class="btn-whatsapp">
                                <i class="fa fa-whatsapp"></i> Order via WhatsApp
                            </button>
                            <button type="button" onclick="callStore()" class="btn-call">
                                <i class="fa fa-phone"></i> Call Now
                            </button>
                        </div>
                        
                        <div class="booking-note">
                            <small><i class="fa fa-info-circle"></i> We'll confirm your order and arrange home delivery within Aligarh</small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', bookingModal);
    var overlay = document.getElementById('bookingModalOverlay');
    overlay.style.display = 'flex';
    setTimeout(function() {
        overlay.classList.add('show');
    }, 10);
}

function closeBookingModal() {
    var modal = document.getElementById('bookingModalOverlay');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(function() {
            modal.remove();
        }, 300);
    }
}

// Updated bookProduct function to use new payment integration
function bookProduct(productName, price) {
    console.log('📝 bookProduct called from active.js with:', productName, price);
    
    // Use the new modal system from main.js
    if (typeof openModal === 'function') {
        console.log('✅ Using NEW payment system modal');
        // Set product name in the new form
        setTimeout(() => {
            const productField = document.querySelector('[name="productName"]');
            if (productField) {
                productField.value = productName;
            }
        }, 100);
        
        // Open the new booking modal
        openModal('bookingModal');
    } else {
        // Fallback to old system if new system not loaded
        showBookingModal();
        setTimeout(function() {
            const productField = document.getElementById('productName');
            if (productField) {
                productField.value = productName;
            }
            if (price) {
                const infoField = document.getElementById('additionalInfo');
                if (infoField) {
                    infoField.value = 'Price: ₹' + price;
                }
            }
        }, 100);
    }
}

function submitBookingWhatsApp() {
    var name = document.getElementById('customerName').value;
    var phone = document.getElementById('customerPhone').value;
    var product = document.getElementById('productName').value;
    var category = document.getElementById('productCategory').value;
    var quantity = document.getElementById('quantity').value;
    
    if (!name || !phone) {
        alert('Please enter your name and mobile number');
        return;
    }
    
    var message = `🛍️ *Order from Yadav Bangles Store*\n\n`;
    message += `👤 *Name:* ${name}\n`;
    message += `📱 *Mobile:* ${phone}\n`;
    if (product) message += `🛒 *Product:* ${product}\n`;
    if (category) message += `📂 *Category:* ${getCategoryName(category)}\n`;
    message += `🔢 *Quantity:* ${quantity}\n\n`;
    message += `📍 *Store:* Jaiganj, Aligarh\n`;
    message += `✅ Please confirm availability and price. Thank you!`;
    
    var whatsappUrl = `https://wa.me/917417163092?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeBookingModal();
}

function getCategoryName(category) {
    var categories = {
        'bangles': 'Glass Bangles',
        'churis': 'Fancy Churis', 
        'poshak': 'God Poshaks',
        'cosmetics': 'Cosmetics',
        'festival': 'Festival Items'
    };
    return categories[category] || category;
}

function callStore() {
    window.location.href = 'tel:+917417163092';
}

function quickView(productName) {
    var message = `I need detailed information about ${productName}.`;
    var whatsappUrl = `https://wa.me/917417163092?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function addToWishlist(productName) {
    // Store in localStorage for now
    var wishlist = JSON.parse(localStorage.getItem('ybsWishlist') || '[]');
    if (!wishlist.includes(productName)) {
        wishlist.push(productName);
        localStorage.setItem('ybsWishlist', JSON.stringify(wishlist));
        showNotification(productName + ' added to wishlist!');
    } else {
        showNotification(productName + ' is already in wishlist!');
    }
}

function showNotification(message) {
    var notification = document.createElement('div');
    notification.className = 'ybs-notification';
    notification.innerHTML = message;
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(function() {
        notification.classList.remove('show');
        setTimeout(function() {
            notification.remove();
        }, 300);
    }, 3000);
}

function scrollToProducts() {
    document.getElementById('new-collection-area').scrollIntoView({
        behavior: 'smooth'
    });
}

// Festival Offers Banner
function showFestivalOffer() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1;
    var festivalMessage = '';
    
    // Festival-based offers
    if (currentMonth === 10 || currentMonth === 11) { // Diwali season
        festivalMessage = 'दिवाली स्पेशल ऑफर! सभी चूड़ियों पर 20% छूट!';
    } else if (currentMonth === 3) { // Holi
        festivalMessage = 'होली स्पेशल! रंगबिरंगी चूड़ियों पर विशेष छूट!';
    } else if (currentMonth === 9) { // Navratri
        festivalMessage = 'नवरात्रि स्पेशल! भगवान के पोशाक पर 15% छूट!';
    }
    
    if (festivalMessage) {
        var banner = document.createElement('div');
        banner.className = 'festival-banner';
        banner.innerHTML = `
            <div class="festival-content">
                <span>${festivalMessage}</span>
                <button onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        document.body.insertBefore(banner, document.body.firstChild);
    }
}

// Initialize festival offers on page load
document.addEventListener('DOMContentLoaded', function() {
    showFestivalOffer();
    
    // Update cart count from localStorage
    var cartItems = JSON.parse(localStorage.getItem('ybsCart') || '[]');
    var cartCount = document.querySelector('.shop-cart .count');
    if (cartCount) {
        cartCount.textContent = cartItems.length;
    }
});

// Search functionality
function searchProducts() {
    var searchTerm = document.querySelector('input[type="search"]').value.toLowerCase();
    if (searchTerm) {
        var message = `I need information about "${searchTerm}".`;
        var whatsappUrl = `https://wa.me/917417163092?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Add search functionality to search form
document.addEventListener('DOMContentLoaded', function() {
    var searchForm = document.querySelector('.search-box-form form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            searchProducts();
        });
    }
});

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'bookingModalOverlay') {
        closeBookingModal();
    }
});

// Enhanced dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown-show');
    
    dropdowns.forEach(function(dropdown) {
        var menu = dropdown.querySelector('.mega-menu-wrap');
        if (menu) {
            var hideTimeout;
            var isOpen = false;
            
            // Check if it's mobile/touch device
            var isMobile = window.innerWidth <= 767;
            
            if (isMobile) {
                // Mobile: Use click to toggle
                var dropdownLink = dropdown.querySelector('a');
                if (dropdownLink) {
                    dropdownLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        isOpen = !isOpen;
                        
                        if (isOpen) {
                            menu.style.opacity = '1';
                            menu.style.visibility = 'visible';
                            menu.style.transform = 'translateY(0)';
                        } else {
                            menu.style.opacity = '0';
                            menu.style.visibility = 'hidden';
                            menu.style.transform = 'translateY(-10px)';
                        }
                    });
                }
            } else {
                // Desktop: Use hover
                dropdown.addEventListener('mouseenter', function() {
                    clearTimeout(hideTimeout);
                    menu.style.opacity = '1';
                    menu.style.visibility = 'visible';
                    menu.style.transform = 'translateY(0)';
                    isOpen = true;
                });
                
                dropdown.addEventListener('mouseleave', function() {
                    hideTimeout = setTimeout(function() {
                        menu.style.opacity = '0';
                        menu.style.visibility = 'hidden';
                        menu.style.transform = 'translateY(-10px)';
                        isOpen = false;
                    }, 200);
                });
                
                // Keep menu open when hovering over it
                menu.addEventListener('mouseenter', function() {
                    clearTimeout(hideTimeout);
                });
                
                menu.addEventListener('mouseleave', function() {
                    hideTimeout = setTimeout(function() {
                        menu.style.opacity = '0';
                        menu.style.visibility = 'hidden';
                        menu.style.transform = 'translateY(-10px)';
                        isOpen = false;
                    }, 200);
                });
            }
        }
    });
    
    // Handle settings dropdown
    var settingsDropdown = document.querySelector('.settings');
    if (settingsDropdown) {
        var settingsMenu = settingsDropdown.querySelector('.site-settings');
        if (settingsMenu) {
            var settingsHideTimeout;
            
            settingsDropdown.addEventListener('mouseenter', function() {
                clearTimeout(settingsHideTimeout);
                settingsMenu.style.opacity = '1';
                settingsMenu.style.visibility = 'visible';
                settingsMenu.style.transform = 'translateY(0)';
            });
            
            settingsDropdown.addEventListener('mouseleave', function() {
                settingsHideTimeout = setTimeout(function() {
                    settingsMenu.style.opacity = '0';
                    settingsMenu.style.visibility = 'hidden';
                    settingsMenu.style.transform = 'translateY(-10px)';
                }, 200);
            });
        }
    }

    // Handle cart dropdown
    var cartDropdown = document.querySelector('.shop-cart');
    if (cartDropdown) {
        var cartMenu = cartDropdown.querySelector('.mini-cart');
        if (cartMenu) {
            var cartHideTimeout;
            
            cartDropdown.addEventListener('mouseenter', function() {
                clearTimeout(cartHideTimeout);
                cartMenu.style.opacity = '1';
                cartMenu.style.visibility = 'visible';
                cartMenu.style.transform = 'translateY(0)';
            });
            
            cartDropdown.addEventListener('mouseleave', function() {
                cartHideTimeout = setTimeout(function() {
                    cartMenu.style.opacity = '0';
                    cartMenu.style.visibility = 'hidden';
                    cartMenu.style.transform = 'translateY(-10px)';
                }, 200);
            });
        }
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-show')) {
            dropdowns.forEach(function(dropdown) {
                var menu = dropdown.querySelector('.mega-menu-wrap');
                if (menu) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.transform = 'translateY(-10px)';
                }
            });
        }
        
        // Close settings dropdown
        if (!e.target.closest('.settings') && settingsDropdown) {
            var settingsMenu = settingsDropdown.querySelector('.site-settings');
            if (settingsMenu) {
                settingsMenu.style.opacity = '0';
                settingsMenu.style.visibility = 'hidden';
                settingsMenu.style.transform = 'translateY(-10px)';
            }
        }
        
        // Close cart dropdown
        if (!e.target.closest('.shop-cart') && cartDropdown) {
            var cartMenu = cartDropdown.querySelector('.mini-cart');
            if (cartMenu) {
                cartMenu.style.opacity = '0';
                cartMenu.style.visibility = 'hidden';
                cartMenu.style.transform = 'translateY(-10px)';
            }
        }
    });
});