// Environment Configuration
export const ENV = {
  DEVELOPMENT: process.env.NODE_ENV === 'development',
  PRODUCTION: process.env.NODE_ENV === 'production',
  TEST: process.env.NODE_ENV === 'test'
};

// API Configuration
export const API = {
  BASE_URL: process.env.REACT_APP_API_URL || 'https://api.presentationplatform.com/v1',
  TIMEOUT: 10000, // 10 seconds
  CACHE_TIME: 5 * 60 * 1000 // 5 minutes
};

// Application Metadata
export const APP_INFO = {
  NAME: 'Presentation Platform',
  TAGLINE: 'Professional Presentations, Simplified',
  VERSION: '1.0.0',
  SUPPORT_EMAIL: 'support@presentationplatform.com',
  SOCIAL_LINKS: {
    TWITTER: 'https://twitter.com/presentationplatform',
    LINKEDIN: 'https://linkedin.com/company/presentationplatform',
    FACEBOOK: 'https://facebook.com/presentationplatform'
  }
};

// Internationalization
export const LOCALES = {
  DEFAULT: 'en-US',
  SUPPORTED: ['en-US', 'es-ES', 'fr-FR', 'de-DE']
};

// User Roles and Permissions
export const USER_ROLES = {
  GUEST: 'guest',
  USER: 'user',
  CREATOR: 'creator',
  ADMIN: 'admin'
};

// Error and Success Messages
export const MESSAGES = {
  AUTH: {
    LOGIN_SUCCESS: 'Welcome back!',
    LOGIN_FAILURE: 'Invalid email or password.',
    REGISTER_SUCCESS: 'Account created successfully.',
    LOGOUT_SUCCESS: 'You have been logged out.'
  },
  ERRORS: {
    FETCH_FAILURE: 'Failed to fetch data. Please try again later.',
    NETWORK_ERROR: 'Network connection lost. Please check your internet.',
    UNAUTHORIZED: 'You are not authorized to perform this action.',
    VALIDATION_ERROR: 'Please check your input and try again.'
  },
  CART: {
    ITEM_ADDED: 'Item added to cart',
    ITEM_REMOVED: 'Item removed from cart',
    CHECKOUT_SUCCESS: 'Purchase completed successfully!'
  }
};

// Pricing and Subscription Tiers
export const PRICING_TIERS = {
  FREE: {
    name: 'Free',
    price: 0,
    features: ['Limited Templates', 'Basic Support']
  },
  PRO: {
    name: 'Pro',
    price: 9.99,
    features: ['Unlimited Templates', 'Priority Support', 'Custom Branding']
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 49.99,
    features: ['All Pro Features', 'Team Collaboration', 'Dedicated Account Manager']
  }
};