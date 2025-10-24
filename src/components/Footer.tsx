import React from "react";
import {
  Footer as FooterWrapper,
  FooterContent,
  FooterColumn,
  FooterBottom,
} from "./ui/footer";
import data from "@/data/data.json";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
        label: "Let's Meet",
        href: data.contact.calendly,
        blank: true,
      },
      {
        label: "Careers",
        href: data.contact.career,
        blank: true,
      },
    ],
  },
];

const socialLinks = [
  { label: "X", href: data.social.X },
  { label: "Discord", href: data.social.Discord },
  { label: "GitHub", href: data.social.GitHub },
  { label: "LinkedIn", href: data.social.LinkedIn },
];

const Footer = () => {
  return (
    <FooterWrapper className="border-t">
      <div className="container mx-auto px-8">
        <FooterContent>
          <FooterColumn>
            <h3 className="text-xl font-bold">Aven</h3>
            <p className="flex items-center gap-2 text-muted text-sm">
              Install <ArrowRight className="w-4 h-4" /> Plug <ArrowRight className="w-4 h-4" /> Run
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
          <p>© {new Date().getFullYear()} Operator Uplift LLC. All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
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
