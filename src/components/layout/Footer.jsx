import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { icon: Github, href: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: socialLinks.email, label: 'Email' },
  ];

  return (
    <footer className="border-t border-white/5 bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center text-center text-sm text-muted-foreground">
          <div className="flex items-center gap-6 mb-8 md:hidden">
            {links.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
