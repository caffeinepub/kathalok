import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Send, Mail } from 'lucide-react';

export default function ParticipateSection() {
  const [participationForm, setParticipationForm] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleParticipationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!participationForm.name || !participationForm.email || !participationForm.interest) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Thank you for your interest! We will contact you soon.');
    setParticipationForm({ name: '', email: '', interest: '', message: '' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast.error('Please enter your email address');
      return;
    }
    toast.success('Successfully subscribed to our newsletter!');
    setNewsletterEmail('');
  };

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-maroon/5 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-pattern-rangoli bg-repeat"
        style={{ backgroundSize: '600px 600px' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-maroon mb-6">
            Join the Movement
          </h2>
          <p className="font-lato text-xl md:text-2xl text-forest leading-relaxed">
            Stay connected with India's cultural pulse
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Participation Form */}
          <Card className="bg-white/90 backdrop-blur border-2 border-gold/30 shadow-xl">
            <CardHeader>
              <CardTitle className="font-playfair text-3xl text-maroon">
                Participate in KathaLok
              </CardTitle>
              <CardDescription className="font-lato text-base text-forest">
                Whether you're a performer, volunteer, or attendee — we'd love to hear from you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleParticipationSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-lato text-maroon">Name *</Label>
                  <Input
                    id="name"
                    value={participationForm.name}
                    onChange={(e) => setParticipationForm({ ...participationForm, name: e.target.value })}
                    placeholder="Your full name"
                    className="border-gold/30 focus:border-maroon"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-lato text-maroon">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={participationForm.email}
                    onChange={(e) => setParticipationForm({ ...participationForm, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="border-gold/30 focus:border-maroon"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest" className="font-lato text-maroon">Area of Interest *</Label>
                  <Select
                    value={participationForm.interest}
                    onValueChange={(value) => setParticipationForm({ ...participationForm, interest: value })}
                  >
                    <SelectTrigger className="border-gold/30 focus:border-maroon">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="performer">Performer</SelectItem>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                      <SelectItem value="attendee">Attendee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-lato text-maroon">Message</Label>
                  <Textarea
                    id="message"
                    value={participationForm.message}
                    onChange={(e) => setParticipationForm({ ...participationForm, message: e.target.value })}
                    placeholder="Tell us more about your interest..."
                    rows={4}
                    className="border-gold/30 focus:border-maroon resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-maroon hover:bg-maroon/90 text-ivory font-semibold py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Newsletter Signup */}
          <Card className="bg-white/90 backdrop-blur border-2 border-gold/30 shadow-xl">
            <CardHeader>
              <CardTitle className="font-playfair text-3xl text-maroon">
                Newsletter Signup
              </CardTitle>
              <CardDescription className="font-lato text-base text-forest">
                Get updates on KathaLok and future cultural events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="newsletter-email" className="font-lato text-maroon">Email Address</Label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="border-gold/30 focus:border-maroon"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-saffron hover:bg-saffron/90 text-maroon font-semibold py-6"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Subscribe to Newsletter
                </Button>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-saffron/10 to-gold/10 rounded-lg border border-gold/20">
                  <h4 className="font-playfair text-xl text-maroon mb-3">What You'll Receive:</h4>
                  <ul className="space-y-2 font-lato text-forest">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Early access to festival announcements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Exclusive behind-the-scenes content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Special discounts on tickets and merchandise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Cultural insights and stories from India</span>
                    </li>
                  </ul>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
