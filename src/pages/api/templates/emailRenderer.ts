import type { EmailTemplate, EmailVariables } from "./types";
import data from "../../../data/data.json";

/**
 * Replace variables in a string with actual values
 * Example: "Hi {{name}}" with {name: "John"} becomes "Hi John"
 */
function replaceVariables(text: string, variables: EmailVariables): string {
  let result = text;
  Object.keys(variables).forEach((key) => {
    const regex = new RegExp(`{{${key}}}`, "g");
    result = result.replace(regex, String(variables[key]));
  });
  return result;
}

/**
 * Render email template to HTML
 */
export function renderEmailTemplate(
  template: EmailTemplate,
  variables: EmailVariables
): { subject: string; html: string } {
  const { subject, heading, content } = template;

  // Replace variables in subject and heading
  const renderedSubject = replaceVariables(subject, variables);
  const renderedHeading = replaceVariables(heading, variables);

  // Build HTML content
  let contentHtml = "";

  // Greeting
  if (content.greeting) {
    contentHtml += `<h2>${replaceVariables(content.greeting, variables)}</h2>`;
  }

  // Main text paragraphs
  content.mainText.forEach((paragraph) => {
    contentHtml += `<p>${replaceVariables(paragraph, variables)}</p>`;
  });

  // Sections with bullet points
  if (content.sections) {
    content.sections.forEach((section) => {
      contentHtml += `<h3>${replaceVariables(section.title, variables)}</h3>`;
      contentHtml += "<ul>";
      section.items.forEach((item) => {
        contentHtml += `<li>${replaceVariables(item, variables)}</li>`;
      });
      contentHtml += "</ul>";
    });
  }

  // Closing
  if (content.closing) {
    contentHtml += `<p>${replaceVariables(content.closing, variables)}</p>`;
  }

  // Wrap in full HTML template
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @font-face {
            font-family: 'SF Pro Display';
            src: local('SF Pro Display'), local('SFProDisplay-Regular');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'SF Pro Display';
            src: local('SF Pro Display'), local('SFProDisplay-Medium');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'SF Pro Display';
            src: local('SF Pro Display'), local('SFProDisplay-Bold');
            font-weight: 700;
            font-style: normal;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body { 
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.5; 
            color: #000000;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
          }
          .email-wrapper {
            background-color: #ffffff;
            padding: 20px;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: #ffffff;
          }
          .header { 
            margin-bottom: 24px;
          }
          .header h1 {
            margin: 0;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: #000000;
          }
          .content { 
            background: #ffffff;
          }
          .content h2 {
            color: #000000;
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 16px 0;
          }
          .content h3 {
            color: #000000;
            font-size: 14px;
            font-weight: 600;
            margin: 24px 0 8px 0;
          }
          .content p {
            margin: 0 0 12px 0;
            color: #000000;
            font-size: 14px;
            line-height: 1.5;
          }
          .content ul {
            margin: 8px 0 12px 0;
            padding: 0;
            list-style: none;
          }
          .content li {
            margin: 4px 0;
            color: #000000;
            font-size: 14px;
            line-height: 1.5;
          }
          .footer { 
            margin-top: 32px;
            padding-top: 20px;
          }
          .footer p {
            margin: 4px 0;
            color: #000000;
            font-size: 14px;
            line-height: 1.4;
          }
          .social-section {
            margin-top: 24px;
            padding-top: 16px;
            border-top: 1px solid #e5e5e5;
            animation: fadeInUp 0.6s ease-out;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .social-title {
            margin: 0 0 10px 0;
            font-size: 11px;
            color: #666666;
            font-weight: 400;
            letter-spacing: 0.3px;
          }
          .social-links {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
            align-items: center;
          }
          .social-link {
            display: inline-block;
            color: #000000 !important;
            text-decoration: none;
            font-size: 12px;
            font-weight: 400;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
          }
          .social-link:hover {
            color: #666666 !important;
            transform: translateY(-1px);
          }
          .social-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background-color: #000000;
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .social-link:hover::after {
            width: 100%;
          }
          .social-separator {
            color: #e5e5e5;
            font-size: 12px;
            user-select: none;
          }
          @media only screen and (max-width: 600px) {
            .email-wrapper {
              padding: 16px;
            }
            .social-links {
              gap: 10px;
            }
            .social-link {
              font-size: 11px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="container">
            <div class="header">
              <h1>AVEN</h1>
            </div>
            <div class="content">
              <h2>${renderedHeading}</h2>
              ${contentHtml}
            </div>
            <div class="footer">
              <p>Best,</p>
              <p>Uplift Team</p>
              <div class="social-section">
                <p class="social-title">Join us</p>
                <div class="social-links">
                  ${(Object.keys(data.social) as Array<keyof typeof data.social>)
                    .map((platform, index, array) => {
                      const link = `<a href="${data.social[platform]}" class="social-link">${platform}</a>`;
                      const separator = index < array.length - 1 ? '<span class="social-separator">•</span>' : '';
                      return `${link}${separator}`;
                    })
                    .join('')}
                </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  return {
    subject: renderedSubject,
    html,
  };
}
