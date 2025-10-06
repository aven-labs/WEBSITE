import React from "react";
import {
  Footer as FooterWrapper,
  FooterContent,
  FooterColumn,
  FooterBottom,
} from "./ui/footer";

const footerLinks = [
  {
    title: "Get Started",
    links: [
      { label: "Deploy Agent", href: "/deploy-your-agent" },
      { label: "Access Aven", href: "/waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      {
        label: "Book a Meeting",
        href: "https://calendly.com/dhruv-helloaven/30min",
        blank: true,
      },
      {
        label: "Careers",
        href: "https://wellfound.com/company/aven-labs-1",
        blank: true,
      },
    ],
  },
];

const socialLinks = [
  { label: "X", href: "#twitter" },
  { label: "Discord", href: "#discord" },
  { label: "GitHub", href: "#github" },
  { label: "LinkedIn", href: "#linkedin" },
];

const Footer = () => {
  return (
    <FooterWrapper className="border-t">
      <div className="container mx-auto px-8">
        <FooterContent>
          <FooterColumn>
            <h3 className="text-xl font-bold">Aven</h3>
            <p className="text-muted text-sm">
              Building the future of secure communication.
            </p>
          </FooterColumn>
          <FooterColumn />
          <FooterColumn className="hidden md:block" />
          {footerLinks.map((section) => (
            <FooterColumn key={section.title}>
              <h4 className="text-sm font-semibold">{section.title}</h4>
              <ul className="flex flex-col gap-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.blank ? "_blank" : undefined}
                      className="text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </FooterContent>

        <FooterBottom>
          <p>© {new Date().getFullYear()} Aven. All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="hover:text-foreground transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </FooterBottom>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
