import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Users } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyStats } from '../data/mock';

const About = () => {
  const values = [
    {
      icon: 'Lightbulb',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.'
    },
    {
      icon: 'Shield',
      title: 'Integrity',
      description: 'Honesty and transparency guide every decision we make and every relationship we build.'
    },
    {
      icon: 'Award',
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in everything we do.'
    },
    {
      icon: 'Users',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, both internally and with our clients.'
    }
  ];

  const team = [
    {
      name: 'Rajeev Kumar',
      position: 'Director & CEO',
      image: 'https://customer-assets.emergentagent.com/job_webtech-masters/artifacts/v2c3hvi9_Gemini_Generated_Image_9xi1vk9xi1vk9xi1.png',
      bio: '15+ years in tech leadership'
    },
    {
      name: 'Priya Sharma',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'Expert in cloud architecture'
    },
    {
      name: 'Amit Patel',
      position: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      bio: 'Award-winning UX designer'
    },
    {
      name: 'Neha',
      position: 'Head of Development',
      image: 'https://customer-assets.emergentagent.com/job_webtech-masters/artifacts/srxkeado_neha.png',
      bio: 'Full-stack development expert'
    }
  ];

  const getIconComponent = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={32} /> : null;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2463] via-[#2E5BFF] to-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About PyTech Digital
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Empowering businesses through innovative technology solutions since 2015
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#2E5BFF] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2015, PyTech Digital began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service digital agency.
                </p>
                <p>
                  Today, we serve clients across the globe, from startups to enterprise organizations, delivering innovative solutions that drive real business results. Our team of experts combines technical excellence with strategic thinking to create digital experiences that matter.
                </p>
                <p>
                  We believe that technology should be an enabler, not a barrier. That's why we focus on creating solutions that are not only powerful but also intuitive and user-friendly.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E5BFF]/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="text-[#2E5BFF]" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[#0A2463] mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We strive to be more than just a service provider – we aim to be a trusted partner in our clients' success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E5BFF]/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="text-[#2E5BFF]" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[#0A2463] mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  To be the leading digital transformation partner, recognized globally for our innovation, expertise, and commitment to client success. We envision a future where technology seamlessly integrates with business to create exceptional value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2E5BFF]/10 to-[#06D6A0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#2E5BFF]">
                      {getIconComponent(value.icon)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals driving innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-1">{member.name}</h3>
                  <p className="text-[#2E5BFF] font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A2463] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0A2463] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;