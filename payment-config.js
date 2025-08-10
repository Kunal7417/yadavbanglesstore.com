/**
 * Payment Gateway Configuration for Yadav Bangles Store
 * 
 * SETUP INSTRUCTIONS:
 * 1. Replace placeholder values with your actual merchant credentials
 * 2. Test with sandbox/staging URLs first
 * 3. Switch to production URLs when ready to go live
 * 4. Keep this file secure and never commit real credentials to public repositories
 */

// Payment Gateway Configuration
const PAYMENT_GATEWAYS = {
    
    // PAYTM CONFIGURATION
    // To setup Paytm:
    // 1. Visit https://business.paytm.com/
    // 2. Create merchant account
    // 3. Get MID (Merchant ID) and Merchant Key
    // 4. Replace values below
    paytm: {
        enabled: false, // Disabled until merchant key is obtained
        merchantId: 'ekwJZg66004232833346', // Your actual Paytm Merchant ID
        merchantKey: '', // Will be provided by Paytm support
        website: 'DEFAULT', // Production website
        industryType: 'Retail',
        channelId: 'WEB',
        // Production URL for live payments
        paytmUrl: 'https://securegw.paytm.in/order/process',
        callbackUrl: window.location.origin + '/payment-success.html'
    },
    
    // RAZORPAY CONFIGURATION  
    // To setup Razorpay:
    // 1. Visit https://razorpay.com/
    // 2. Create account and get API keys
    // 3. Replace Key ID below
    razorpay: {
        enabled: true, // Set to false to disable Razorpay
        keyId: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
        keySecret: 'YOUR_RAZORPAY_KEY_SECRET', // Keep this secure, use on server-side only
        currency: 'INR',
        companyName: 'Yadav Bangles Store',
        description: 'Premium Beauty & Traditional Accessories',
        logo: 'assets/img/logo.png',
        theme: {
            color: '#FF6B35'
        }
    },
    
    // PHONEPE CONFIGURATION
    // To setup PhonePe:
    // 1. Visit https://www.phonepe.com/business/
    // 2. Create merchant account
    // 3. Get Merchant ID and Salt Key
    phonepe: {
        enabled: true, // Set to false to disable PhonePe
        merchantId: 'YOUR_PHONEPE_MERCHANT_ID', // Replace with your PhonePe Merchant ID
        saltKey: 'YOUR_PHONEPE_SALT_KEY', // Replace with your PhonePe Salt Key
        saltIndex: 1, // Usually 1, check with PhonePe
        // Staging URL for testing
        apiUrl: 'https://api-preprod.phonepe.com/apis/hermes/pg/v1/pay',
        // Production URL (uncomment when going live)
        // apiUrl: 'https://api.phonepe.com/apis/hermes/pg/v1/pay',
        redirectUrl: window.location.origin + '/payment-success.html',
        callbackUrl: window.location.origin + '/payment-callback.php'
    },
    
    // UPI DIRECT CONFIGURATION
    upi: {
        enabled: true, // Set to false to disable UPI
        upiId: '9119741603@ptaxis', // Your actual UPI ID
        payeeName: 'Yadav Bangles Store',
        // Alternative UPI IDs (optional)
        alternativeUPIs: [
            '9119741603@googlepay',
            '9119741603@phonepe',
            '9119741603@paytm'
        ]
    },
    
    // CASH ON DELIVERY
    cod: {
        enabled: true, // Set to false to disable COD
        availableIn: ['Aligarh', 'Jaiganj'], // Areas where COD is available
        minimumOrder: 100, // Minimum order value for COD
        codCharges: 0 // COD charges (0 for free)
    },
    
    // WHATSAPP ORDER (Traditional)
    whatsapp: {
        enabled: true, // Always keep enabled as fallback
        phoneNumber: '917417163092', // Your WhatsApp business number
        message: 'Hello! I would like to place an order from your website.'
    }
};

// Store Information
const STORE_CONFIG = {
    name: 'Yadav Bangles Store',
    address: 'Jaiganj, Aligarh, UP - 202001',
    phone: '+91 7417163092',
    email: 'contact@yadavbanglesstore.com',
    website: 'yadavbanglesstore.com',
    
    // Delivery Configuration
    delivery: {
        freeDeliveryLimit: 500, // Free delivery above this amount
        deliveryCharges: 50, // Delivery charges below free limit
        deliveryAreas: ['Aligarh', 'Jaiganj', 'Hathras', 'Kasganj'], // Delivery areas
        deliveryTime: '1-2 working days'
    },
    
    // Business Hours
    businessHours: {
        monday: '9:00 AM - 8:00 PM',
        tuesday: '9:00 AM - 8:00 PM',
        wednesday: '9:00 AM - 8:00 PM',
        thursday: '9:00 AM - 8:00 PM',
        friday: '9:00 AM - 8:00 PM',
        saturday: '9:00 AM - 9:00 PM',
        sunday: '10:00 AM - 7:00 PM'
    }
};

// Security Configuration
const SECURITY_CONFIG = {
    // Enable/disable features based on security needs
    allowGuestCheckout: true, // Allow checkout without registration
    requirePhoneVerification: false, // Require OTP verification
    enableOrderTracking: true, // Enable order tracking
    enableReviews: true, // Enable product reviews
    
    // HTTPS enforcement
    enforceHTTPS: true, // Redirect HTTP to HTTPS
    
    // Rate limiting
    maxOrdersPerHour: 10, // Maximum orders per IP per hour
    maxSearchesPerMinute: 30 // Maximum searches per IP per minute
};

/**
 * SETUP CHECKLIST:
 * 
 * □ 1. PAYTM SETUP
 *   - Create Paytm business account
 *   - Get Merchant ID and Key
 *   - Update paytm.merchantId and paytm.merchantKey
 *   - Test with staging URL first
 * 
 * □ 2. RAZORPAY SETUP  
 *   - Create Razorpay account
 *   - Get API Key ID
 *   - Update razorpay.keyId
 *   - Add webhook URL in Razorpay dashboard
 * 
 * □ 3. PHONEPE SETUP
 *   - Create PhonePe business account
 *   - Get Merchant ID and Salt Key
 *   - Update phonepe.merchantId and phonepe.saltKey
 *   - Configure callback URL
 * 
 * □ 4. UPI SETUP
 *   - Verify your UPI ID is working
 *   - Update upi.upiId with your UPI ID
 *   - Test UPI payments manually
 * 
 * □ 5. WHATSAPP BUSINESS
 *   - Setup WhatsApp Business account
 *   - Verify whatsapp.phoneNumber
 *   - Enable business features
 * 
 * □ 6. SSL CERTIFICATE
 *   - Install SSL certificate on your domain
 *   - Ensure all payment URLs use HTTPS
 *   - Test payment flows on live domain
 * 
 * □ 7. TESTING
 *   - Test each payment method with small amounts
 *   - Verify success/failure redirects work
 *   - Test on mobile devices
 *   - Verify WhatsApp notifications work
 * 
 * □ 8. GO LIVE
 *   - Switch to production URLs
 *   - Update merchant credentials to live keys
 *   - Monitor first few transactions closely
 *   - Setup payment reconciliation process
 */

// Export configuration for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PAYMENT_GATEWAYS, STORE_CONFIG, SECURITY_CONFIG };
} else {
    // Browser environment
    window.PAYMENT_GATEWAYS = PAYMENT_GATEWAYS;
    window.STORE_CONFIG = STORE_CONFIG;
    window.SECURITY_CONFIG = SECURITY_CONFIG;
}

/**
 * QUICK START GUIDE:
 * 
 * FOR TESTING (Start here):
 * 1. Keep all staging URLs as they are
 * 2. For UPI: Update upi.upiId with your real UPI ID
 * 3. Test UPI payments with small amounts (₹1-10)
 * 4. Verify WhatsApp notifications work
 * 
 * FOR PRODUCTION:
 * 1. Get real merchant accounts from payment providers
 * 2. Replace all placeholder credentials
 * 3. Switch to production URLs
 * 4. Test thoroughly before going live
 * 
 * SUPPORT:
 * - Paytm: https://business.paytm.com/docs
 * - Razorpay: https://razorpay.com/docs
 * - PhonePe: https://developer.phonepe.com/docs
 */ 
