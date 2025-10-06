# Email Configuration Guide

## Setting up Gmail with Nodemailer (Free)

### Step 1: Enable 2-Step Verification
1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left menu
3. Under "How you sign in to Google", click on **2-Step Verification**
4. Follow the steps to enable it

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Under "Select app", choose **Mail**
3. Under "Select device", choose **Other (Custom name)**
4. Enter "Aven Website" or any name you prefer
5. Click **Generate**
6. Copy the 16-character password (it looks like: `xxxx xxxx xxxx xxxx`)

### Step 3: Update .env.local
```bash
EMAIL_USER=dhurv@helloaven.com  # Your Gmail address
EMAIL_PASS=xxxx xxxx xxxx xxxx   # The App Password you just generated (remove spaces)
```

### Step 4: Test the Email
1. Restart your development server: `npm run dev`
2. Submit the waitlist form
3. Check the recipient's email inbox (and spam folder)

## Alternative Free Email Services

### Using Outlook/Hotmail
```javascript
service: 'outlook'
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Using Yahoo
```javascript
service: 'yahoo'
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

### Using Custom SMTP
```javascript
host: 'smtp.your-domain.com'
port: 587
secure: false
auth: {
  user: 'your-email@your-domain.com',
  pass: 'your-password'
}
```

## Troubleshooting

### Email not sending?
1. Make sure 2-Step Verification is enabled
2. Use App Password, not your regular Gmail password
3. Check if "Less secure app access" is enabled (if using regular password)
4. Verify EMAIL_USER and EMAIL_PASS are set correctly in .env.local
5. Restart your development server after changing .env.local

### Error: "Invalid login"?
- You're using your regular password instead of App Password
- Generate a new App Password and try again

### Email goes to spam?
- This is normal for development/testing
- For production, consider setting up proper SPF, DKIM, and DMARC records
- Or use a dedicated email service like SendGrid, Mailgun, etc.

## Limits
- **Gmail**: 500 emails/day (free personal account), 2000/day (Google Workspace)
- No additional costs
- Perfect for testing and small-scale applications
