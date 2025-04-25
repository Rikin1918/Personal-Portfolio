
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out if you have any 
              questions or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="contact-icon">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:rikinpatel17902@gmail.com" className="text-primary hover:underline">
                    rikinpatel17902@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="contact-icon">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+12496881018" className="text-primary hover:underline">
                    +1 (249) 688-1018
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="contact-icon">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Location</h4>
                  <p>Ottawa, ON</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex space-x-4 mt-4">
                  <a href="https://www.linkedin.com/in/rikin-k-patel-412a82301/" target='_blank'  className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/pate1355" target='_blank'   className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6 bg-card p-8 rounded-lg shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your Name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
