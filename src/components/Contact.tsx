import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rikinpatel17902@gmail.com',
    href: 'mailto:rikinpatel17902@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (249) 688-1018',
    href: 'tel:+12496881018',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ottawa, ON',
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rikin-k-patel-412a82301/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/pate1355', label: 'GitHub' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have any 
            questions or just want to connect.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.label} 
                  variants={itemVariants}
                  className="group flex items-center gap-5 p-5 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
          
          {/* Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6 p-8 md:p-10 bg-card/60 backdrop-blur-sm rounded-3xl border border-border/50 shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input id="name" placeholder="Your Name" className="rounded-xl h-12 bg-secondary/50 border-border/50 focus:border-primary" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="rounded-xl h-12 bg-secondary/50 border-border/50 focus:border-primary" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." rows={5} className="rounded-xl bg-secondary/50 border-border/50 focus:border-primary resize-none" />
              </div>
              
              <Button type="submit" size="lg" className="w-full rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
