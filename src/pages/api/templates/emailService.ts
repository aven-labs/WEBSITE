import nodemailer from 'nodemailer';
import type { EmailVariables } from './types';
import { emailTemplates } from './emailTemplates';
import { renderEmailTemplate } from './emailRenderer';

/**
 * Create email transporter (can be configured for different services)
 */
function createTransporter() {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    throw new Error('Email credentials not configured');
  }

  // Using Hostinger SMTP
  return nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
}

/**
 * Send email using a template
 * @param templateName - Name of the template to use (e.g., 'waitlist', 'agentSubmission')
 * @param toEmail - Recipient email address
 * @param variables - Variables to replace in the template
 */
export async function sendTemplatedEmail(
  templateName: string,
  toEmail: string,
  variables: EmailVariables
) {
  // Get template
  const template = emailTemplates[templateName];
  if (!template) {
    throw new Error(`Email template '${templateName}' not found`);
  }

  // Render template with variables
  const { subject, html } = renderEmailTemplate(template, variables);

  // Create transporter
  const transporter = createTransporter();

  // Send email
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    name: 'Aven Labs',
    to: toEmail,
    subject,
    html,
  });

  return info;
}

/**
 * Send custom email (without template)
 */
export async function sendCustomEmail(
  toEmail: string,
  subject: string,
  html: string
) {
  const transporter = createTransporter();

  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject,
    html,
  });

  return info;
}
