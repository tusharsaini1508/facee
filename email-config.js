// ========================================
// LensAI Pro - Email Configuration
// ========================================
//
// ⚠️ SECURITY WARNING:
// Do NOT use SMTP.js (Option 1) in production!
// It exposes your credentials in client-side code.
// 
// For production, use:
// - Option 2: FormSubmit.co (easiest, free)
// - Option 3: EmailJS (professional)
// - Option 4: Backend API (most secure)
//
// ========================================

const EMAIL_CONFIG = {
    
    // ============================================================
    // OPTION 1: SMTP.js (⚠️ TESTING ONLY - NOT SECURE)
    // ============================================================
    //
    // Gmail Setup:
    // 1. Enable 2-Factor Authentication: https://myaccount.google.com/security
    // 2. Generate App Password: https://myaccount.google.com/apppasswords
    // 3. Replace values below
    //
    useDirectSMTP: true, // Set to false for FormSubmit
    
    smtp: {
        Host: "smtp.gmail.com",
        Username: "tusharsainivpn1@gmail.com",           // ← REPLACE THIS
        Password: "vfxm yctc wqea zknz",            // ← REPLACE with 16-char App Password
        To: "abhishakechatterjee@gmail.com>",                 // ← Who receives the reports
        From: "tusharsainivpn0@gmail.com"                // ← Your Gmail address
    },
    
    // ============================================================
    // OPTION 2: FormSubmit.co (✅ RECOMMENDED FOR PRODUCTION)
    // ============================================================
    //
    // Setup:
    // 1. Set useDirectSMTP to false
    // 2. Replace the email in the URL below
    // 3. First submission triggers verification email
    // 4. Click link to activate
    //
    formsubmitUrl: "https://formsubmit.co/ajax/your-email@example.com"  // ← REPLACE THIS
};

// ============================================================
// ADDITIONAL FORMSUBMIT OPTIONS (Optional)
// ============================================================
//
// Add these to your form payload for extra features:
//
// _subject: "New LensAI Analysis Report"       // Custom subject line
// _autoresponse: "Thank you for your submission!" // Auto-reply to user
// _template: "table"                           // Format as table
// _cc: "manager@company.com"                   // CC someone
//
// ============================================================


// ============================================================
// OPTION 3: EmailJS (Professional - Requires account)
// ============================================================
//
// Setup:
// 1. Sign up at https://www.emailjs.com/
// 2. Create email service
// 3. Create template
// 4. Get your credentials
// 5. Replace script in HTML:
//    Remove: <script src="https://smtpjs.com/v3/smtp.js"></script>
//    Add: <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
//
// Then use this code in handleFormSubmit():
/*

emailjs.init("YOUR_PUBLIC_KEY"); // Your EmailJS public key

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    to_email: "recipient@example.com",
    from_name: payload.name,
    phone: payload.phone,
    age: payload.age,
    gender: payload.gender,
    pd: payload.pd,
    frameSize: payload.frameSize,
    recommendation: payload.recommendation,
    // ... include all fields you need
    message: JSON.stringify(payload, null, 2) // Full data as JSON
})
.then(() => {
    showNotification('Email sent successfully!', 'success');
})
.catch((error) => {
    showNotification('Failed to send email', 'error');
    console.error('EmailJS error:', error);
});

*/
// ============================================================


// ============================================================
// OPTION 4: Backend API (Most Secure - Requires server)
// ============================================================
//
// Setup:
// 1. Create backend server (Node.js, PHP, Python, etc.)
// 2. Install email library (nodemailer, SendGrid, etc.)
// 3. Create API endpoint
// 4. Update fetch URL in handleFormSubmit()
//
// Example fetch:
/*

fetch('https://your-api.com/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        showNotification('Email sent!', 'success');
    }
})
.catch(error => {
    showNotification('Error sending email', 'error');
});

*/
// ============================================================


// ============================================================
// CUSTOM EMAIL TEMPLATE CONFIGURATION
// ============================================================

const EMAIL_TEMPLATE_CONFIG = {
    // Company branding
    companyName: "LensAI Pro",
    companyLogo: "https://your-domain.com/logo.png", // Optional logo URL
    
    // Colors (used in email template)
    primaryColor: "#2563eb",
    secondaryColor: "#7c3aed",
    accentColor: "#f59e0b",
    
    // Footer text
    footerText: "Generated by LensAI Pro · Ultimate Virtual Try-On System",
    disclaimerText: "This is an automated analysis report. For professional optical advice, please consult with a licensed optometrist.",
    
    // Contact info (optional)
    supportEmail: "support@your-company.com",
    supportPhone: "+1-234-567-8900",
    website: "https://your-company.com"
};


// ============================================================
// DEVELOPMENT vs PRODUCTION
// ============================================================

const ENVIRONMENT = {
    isDevelopment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
    
    // Different configs for dev/prod
    getEmailConfig() {
        if (this.isDevelopment) {
            console.log('📧 Development mode: Using test email config');
            // Use test credentials in development
            return EMAIL_CONFIG;
        } else {
            console.log('🚀 Production mode: Using production email config');
            // In production, you might want to fetch config from server
            return EMAIL_CONFIG;
        }
    }
};


// ============================================================
// QUICK START GUIDE
// ============================================================
/*

STEPS TO GET STARTED:

1. CHOOSE YOUR EMAIL METHOD:
   - Testing locally? Use SMTP.js (Option 1)
   - Simple production? Use FormSubmit (Option 2)
   - Professional app? Use EmailJS (Option 3)
   - Enterprise? Use Backend API (Option 4)

2. UPDATE CONFIGURATION ABOVE:
   - Replace email addresses
   - Add credentials/API keys
   - Test with your email

3. TEST LOCALLY:
   - Open HTML file in browser (use HTTPS if possible)
   - Complete face scan
   - Submit form
   - Check email inbox

4. DEPLOY:
   - Upload to web hosting (Netlify, Vercel, etc.)
   - Ensure HTTPS enabled
   - Test in production
   - Monitor email delivery

5. OPTIONAL ENHANCEMENTS:
   - Add reCAPTCHA to prevent spam
   - Implement rate limiting
   - Add database to store submissions
   - Create admin dashboard
   - Add SMS notifications
   - Integrate with CRM

NEED HELP?
- Check SETUP_GUIDE.md for detailed instructions
- Review browser console for errors
- Test email service separately first
- Verify all credentials are correct

*/
// ============================================================


// Export configuration (if using modules)
// export { EMAIL_CONFIG, EMAIL_TEMPLATE_CONFIG, ENVIRONMENT };

// For inline use, paste the EMAIL_CONFIG object directly into your HTML file
// at line ~1065 (replace the existing EMAIL_CONFIG object)
