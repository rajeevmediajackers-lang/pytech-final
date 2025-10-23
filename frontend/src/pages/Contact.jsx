import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission for now
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2463] via-[#2E5BFF] to-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#2E5BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-[#2E5BFF]" size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-2">Phone</h3>
                <a href="tel:+919205222170" className="text-gray-600 hover:text-[#2E5BFF] transition-colors">
                  +91 9205 222 170
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#2E5BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[#2E5BFF]" size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-2">Email</h3>
                <a href="mailto:info@pytechdigital.com" className="text-gray-600 hover:text-[#2E5BFF] transition-colors">
                  info@pytechdigital.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#2E5BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#2E5BFF]" size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-2">Office</h3>
                <p className="text-gray-600 text-sm">
                  Sector 142, Noida, UP 201304
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#2E5BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-[#2E5BFF]" size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon - Sat: 9AM - 6PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A2463] mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Web Development Inquiry"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#2E5BFF] hover:bg-[#1e4bd6] text-white font-semibold py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            </div>

            {/* Map & Address */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A2463] mb-6">
                Visit Our Office
              </h2>
              
              <Card className="border-0 shadow-xl mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <MapPin className="text-[#2E5BFF] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-[#0A2463] mb-2">Head Office</h3>
                      <p className="text-gray-600">
                        1st Floor, Plot No. 21 & 21A,<br />
                        Sector 142, Noida,<br />
                        Uttar Pradesh 201304
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-6">
                    <Phone className="text-[#2E5BFF] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-[#0A2463] mb-2">Phone</h3>
                      <a href="tel:+919205222170" className="text-gray-600 hover:text-[#2E5BFF] transition-colors">
                        +91 9205 222 170
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-[#2E5BFF] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-[#0A2463] mb-2">Email</h3>
                      <a href="mailto:info@pytechdigital.com" className="text-gray-600 hover:text-[#2E5BFF] transition-colors">
                        info@pytechdigital.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3820994591394!2d77.40845431508026!3d28.577049582437564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d90b9d9b3f%3A0x7e3a9c3e5d9b9d9f!2sSector%20142%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2463] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#0A2463] mb-2">
                  What is your typical response time?
                </h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#0A2463] mb-2">
                  Do you offer free consultations?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer free initial consultations to discuss your project requirements and provide recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#0A2463] mb-2">
                  What information should I include in my inquiry?
                </h3>
                <p className="text-gray-600">
                  Please include details about your project goals, timeline, budget range, and any specific requirements or challenges you're facing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;