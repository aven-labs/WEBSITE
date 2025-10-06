# Email Template System Documentation

## Overview

The email template system provides a structured way to create and send emails with consistent styling and variable replacement.

## Folder Structure

```
src/pages/api/templates/
├── types.ts              # TypeScript types for templates
├── emailTemplates.ts     # Email template definitions
├── emailRenderer.ts      # Template rendering logic
└── emailService.ts       # Email sending service
```

## Template Structure

Each template includes:

### 1. **Subject** - Email subject line with variables
```typescript
subject: 'Welcome to Aven Waitlist! 🚀'
```

### 2. **Heading** - Main heading in the email
```typescript
heading: 'Welcome to Aven! 🎉'
```

### 3. **Content** - Email body with sections
```typescript
content: {
  greeting: 'Hi {{name}},',          // Optional greeting
  mainText: [...],                   // Array of paragraphs
  sections: [{                       // Optional sections with bullet points
    title: 'What\'s Next?',
    items: [...]
  }],
  closing: 'Stay tuned!',            // Optional closing message
  signature: 'The Aven Team'         // Optional signature
}
```

### 4. **Variables** - List of allowed variables
```typescript
variables: ['name', 'email', 'agentName']
```

## Available Templates

### 1. `waitlist` - Waitlist confirmation email
**Variables:** `name`

### 2. `agentSubmission` - Agent submission confirmation
**Variables:** `name`, `agentName`

### 3. `welcome` - Welcome email for new users
**Variables:** `name`

### 4. `notification` - Generic notification email
**Variables:** `name`, `subject`, `heading`, `message`, `closing`

## Usage

### Sending an Email with Template

```typescript
import { sendTemplatedEmail } from './templates/emailService';

// Send waitlist confirmation
await sendTemplatedEmail('waitlist', 'user@example.com', {
  name: 'John Doe'
});

// Send agent submission confirmation
await sendTemplatedEmail('agentSubmission', 'developer@example.com', {
  name: 'Jane Smith',
  agentName: 'AI Content Generator'
});

// Send notification with custom content
await sendTemplatedEmail('notification', 'user@example.com', {
  name: 'John',
  subject: 'Your Request is Being Processed',
  heading: 'Update on Your Request',
  message: 'We are currently processing your request and will get back to you soon.',
  closing: 'Thank you for your patience!'
});
```

### Adding a New Template

1. **Add template to `emailTemplates.ts`:**

```typescript
export const emailTemplates: Record<string, EmailTemplate> = {
  // ... existing templates
  
  myNewTemplate: {
    subject: 'New Template Subject - {{variable}}',
    heading: 'My Custom Heading',
    content: {
      greeting: 'Hello {{name}},',
      mainText: [
        'This is the first paragraph with {{variable}}.',
        'This is the second paragraph.',
      ],
      sections: [
        {
          title: 'Section Title',
          items: [
            'First bullet point',
            'Second bullet point with {{anotherVariable}}',
          ],
        },
      ],
      closing: 'Best wishes!',
      signature: 'Your Team',
    },
    variables: ['name', 'variable', 'anotherVariable'],
  },
};
```

2. **Use the template:**

```typescript
await sendTemplatedEmail('myNewTemplate', 'recipient@example.com', {
  name: 'User Name',
  variable: 'some value',
  anotherVariable: 'another value'
});
```

## Variable Replacement

Variables are defined using double curly braces: `{{variableName}}`

They can be used in:
- Subject
- Heading
- Greeting
- Main text paragraphs
- Section titles
- Section items
- Closing message
- Signature

**Example:**
```typescript
Template: "Hi {{name}}, welcome to {{platform}}!"
Variables: { name: "John", platform: "Aven" }
Result: "Hi John, welcome to Aven!"
```

## Email Styling

The rendered email includes:
- Responsive design (mobile-friendly)
- Gradient header
- Clean content section
- Professional footer with copyright
- Modern font stack
- Consistent spacing and colors

## Configuration

Set these environment variables in `.env.local`:

```bash
# Email credentials
EMAIL_USER=your-email@hostinger.com
EMAIL_PASS=your-password

# For Gmail (alternative)
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
```

## Error Handling

The email service includes built-in error handling:

```typescript
try {
  await sendTemplatedEmail('waitlist', email, { name });
  console.log('Email sent successfully');
} catch (error) {
  console.error('Failed to send email:', error);
  // Handle error appropriately
}
```

## Best Practices

1. **Always validate variables** before sending
2. **Keep templates simple** and focused
3. **Test emails** before production use
4. **Use meaningful variable names**
5. **Don't include sensitive data** in templates
6. **Keep subject lines concise** (< 50 characters)
7. **Make content scannable** with headings and lists

## Example: Complete Flow

```typescript
// In your API endpoint (e.g., /api/waitlist.ts)
import { sendTemplatedEmail } from './templates/emailService';

export default async function handler(req, res) {
  const { name, email } = req.body;
  
  // ... save to database ...
  
  // Send confirmation email
  try {
    await sendTemplatedEmail('waitlist', email, { name });
    return res.status(200).json({ message: 'Success!' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(200).json({ 
      message: 'Saved, but email failed' 
    });
  }
}
```

## Customization

### Changing Email Provider

Edit `emailService.ts` to use different SMTP settings:

```typescript
// For Gmail
return nodemailer.createTransporter({
  service: 'gmail',
  auth: { user: emailUser, pass: emailPass }
});

// For Outlook
return nodemailer.createTransporter({
  service: 'outlook',
  auth: { user: emailUser, pass: emailPass }
});

// For Custom SMTP
return nodemailer.createTransporter({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: { user: emailUser, pass: emailPass }
});
```

### Modifying Styles

Edit the CSS in `emailRenderer.ts` to customize:
- Colors
- Fonts
- Spacing
- Layout
- Header gradient
- Button styles

## Testing

Test templates with different variables:

```typescript
import { renderEmailTemplate } from './templates/emailRenderer';
import { emailTemplates } from './templates/emailTemplates';

// Render template to preview
const { subject, html } = renderEmailTemplate(
  emailTemplates.waitlist,
  { name: 'Test User' }
);

console.log('Subject:', subject);
console.log('HTML:', html);
```
