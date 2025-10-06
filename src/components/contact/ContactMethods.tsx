import React from "react";
import { motion } from "framer-motion";
import { H4, Text } from "@/components/ui/typography";
import {
  MessageCircle,
  Mail,
  Calendar,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import data from "@/data/data.json";

interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "WhatsApp",
    description: "Chat with us instantly",
    link: data.contact.whatsapp.startsWith('+') 
      ? `https://wa.me/${data.contact.whatsapp.replace(/[^0-9]/g, '')}`
      : data.contact.whatsapp,
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email",
    description: data.contact.email,
    link: `mailto:${data.contact.email}`,
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Book a Meeting",
    description: "Schedule a video call",
    link: data.contact.calendly,
  },
  {
    icon: <Twitter className="w-8 h-8" />,
    title: "X (Twitter)",
    description: "Follow and DM us",
    link: data.social.X,
  },
  {
    icon: <DiscordLogoIcon className="w-8 h-8" />,
    title: "Discord",
    description: "Join our community",
    link: data.social.Discord,
  },
  {
    icon: <Linkedin className="w-8 h-8" />,
    title: "LinkedIn",
    description: "Connect professionally",
    link: data.social.LinkedIn,
  },
];

const ContactMethods = () => {
  return (
    <section className="container mx-auto px-8 pb-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group rounded-xl p-6 transition-all duration-300 cursor-pointer bg-card"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="text-foreground/80 group-hover:text-primary transition-colors duration-300">
                  {method.icon}
                </div>
                
                <div className="flex-1">
                  <H4 className="text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    {method.title}
                  </H4>
                  <Text className="text-muted text-sm leading-relaxed">
                    {method.description}
                  </Text>
                </div>
              </div>

              <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ContactMethods;
