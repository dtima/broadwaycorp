'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const divisions = [
  {
    id: 'farmhouse',
    logo: '/images/logos/BRoadway-Farmhouse.jpg',
    title: 'Broadway Farmhouse',
    tagline: 'Sustainable Agriculture & Food Systems',
    description: 'Leading innovation in BSF protein systems, smart farming automation, and community-driven agricultural training.',
    features: ['Scorpion Farm Tours', 'BSF Protein Systems', 'Aquaculture & Fish Farming', 'Smart Greenhouse Technology'],
    gradient: 'from-emerald-500 to-teal-600',
    link: '/farmhouse',
  },
  {
    id: 'enterprise',
    logo: '/images/logos/Broadway-Enterprise.jpg',
    title: 'Broadway Enterprise',
    tagline: 'Laboratory Solutions & STEM Education',
    description: 'Empowering scientific excellence through custom lab designs, equipment sales, and immersive STEM programs.',
    features: ['Scientific Equipment Catalog', 'Custom Laboratory Designs', 'STEM Education Programs', 'Community Science Labs'],
    gradient: 'from-blue-500 to-cyan-600',
    link: '/enterprise',
  },
  {
    id: 'intelligence',
    logo: '/images/logos/Broadway-Intelligence.jpg',
    title: 'Broadway Intelligence',
    tagline: 'IT Services & Distance Learning',
    description: 'Digital infrastructure powering Africa\'s future with data centers, security consulting, and smart classrooms.',
    features: ['IT Infrastructure & Cloud', 'Data Center Services', 'Security Consulting', 'Distance Learning (LMS)'],
    gradient: 'from-purple-500 to-pink-600',
    link: '/intelligence',
  },
  {
    id: 'resorts',
    logo: '/images/logos/Broadway-Resort.jpg',
    title: 'Broadway Resorts',
    tagline: 'Eco-Tourism & Hospitality',
    description: 'Farm-to-table dining, agro-tourism experiences, and nature-based hospitality in the heart of Central Africa.',
    features: ['Agro-Tourism Experiences', 'Broadway Roadhouse Dining', 'Animal Sanctuary Tours', 'Corporate Retreats & Events'],
    gradient: 'from-orange-500 to-red-600',
    link: '/resorts',
  },
];

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message (no backend)
    setFormStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('idle');
    }, 3000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Futuristic Glassmorphism */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/80 via-neutral-800/80 to-neutral-900/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-3 sm:h-16 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              <Image
                src="/images/logos/BClogo.jpg"
                alt="Broadway Corporation"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent sm:text-2xl">Broadway</span>
          </Link>
          <nav className="hidden items-center gap-4 md:flex lg:gap-6">
            <a href="#divisions" className="text-xs font-medium text-neutral-300 hover:text-white transition-colors sm:text-sm">
              Divisions
            </a>
            <a href="#about" className="text-xs font-medium text-neutral-300 hover:text-white transition-colors sm:text-sm">
              About
            </a>
            <a href="#contact" className="text-xs font-medium text-neutral-300 hover:text-white transition-colors sm:text-sm">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all sm:px-4 sm:py-2 sm:text-sm"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section - Mobile-First Futuristic */}
      <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-12 text-white sm:min-h-screen sm:py-20 lg:py-28">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(59,130,246,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(147,51,234,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* Badge */}
            <div className="mb-6 flex justify-center sm:mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1.5 text-xs font-medium text-primary-300 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
                </span>
                Powering Africa's Digital Transformation
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="mb-4 text-center text-3xl font-black leading-tight tracking-tight sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">Systems That</span>
              <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent animate-gradient">
                Power The Future
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 text-center text-base leading-relaxed text-neutral-300 sm:mb-10 sm:text-lg md:text-xl lg:text-2xl">
              Four specialized divisions delivering excellence in <span className="font-semibold text-white">Agriculture</span>, <span className="font-semibold text-white">Science</span>, <span className="font-semibold text-white">Technology</span>, and <span className="font-semibold text-white">Hospitality</span> across Central Africa.
            </p>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#divisions"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-2xl shadow-primary-500/25 transition-all hover:shadow-primary-500/40 sm:px-8 sm:py-4 sm:text-base"
              >
                <span className="relative z-10">Explore Our Divisions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="#contact"
                className="rounded-xl border-2 border-white/20 bg-white/5 px-6 py-3.5 text-center text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
              >
                Contact Us
              </a>
            </div>

            {/* Trust Indicators - Mobile Optimized */}
            <div className="mt-10 grid grid-cols-2 gap-4 text-center sm:mt-16 sm:grid-cols-4 sm:gap-8">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-4">
                <div className="text-xl font-bold text-white sm:text-3xl">4</div>
                <div className="text-xs text-neutral-400 sm:text-sm">Divisions</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-4">
                <div className="text-xl font-bold text-white sm:text-3xl">10+</div>
                <div className="text-xs text-neutral-400 sm:text-sm">Years</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-4">
                <div className="text-xl font-bold text-white sm:text-3xl">500+</div>
                <div className="text-xs text-neutral-400 sm:text-sm">Projects</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-4">
                <div className="text-xl font-bold text-white sm:text-3xl">24/7</div>
                <div className="text-xs text-neutral-400 sm:text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section - Futuristic Cards */}
      <section id="divisions" className="scroll-mt-14 bg-gradient-to-b from-neutral-50 to-white py-12 sm:scroll-mt-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <div className="mb-3 inline-block rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
              Our Divisions
            </div>
            <h2 className="mb-3 text-2xl font-black text-neutral-900 sm:mb-4 sm:text-4xl lg:text-5xl">
              Specialized Excellence
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-lg">
              Four business units driving innovation across Africa
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
            {divisions.map((division, idx) => (
              <Link
                key={division.id}
                href={division.link}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200/50 bg-white p-5 shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl sm:rounded-3xl sm:p-8"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-0 transition-opacity group-hover:opacity-5`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between gap-3 sm:items-center">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white shadow-lg sm:h-16 sm:w-16 sm:rounded-2xl`}>
                        <Image
                          src={division.logo}
                          alt={division.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary-600 transition-colors sm:text-xl">{division.title}</h3>
                        <p className="text-xs text-neutral-600 sm:text-sm">{division.tagline}</p>
                      </div>
                    </div>
                    <svg className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-600 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-neutral-700 sm:mb-6 sm:text-base">{division.description}</p>
                  <ul className="space-y-2">
                    {division.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600 sm:text-sm">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary-500 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16 bg-white py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                About Broadway Corporation
              </h2>
              <p className="text-lg text-neutral-600">
                A multi-divisional powerhouse transforming Africa's potential into global benchmarks of excellence
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-xl font-bold text-neutral-900">Our Mission</h3>
                <p className="text-neutral-700">
                  Transform Africa's potential into global benchmarks of excellence through modular innovation, 
                  multicultural branding, and community-driven systems. We consolidate specialized expertise across 
                  agriculture, science, technology, and hospitality into one unified ecosystem.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-neutral-900">Our Approach</h3>
                <p className="text-neutral-700 mb-4">
                  Broadway Corporation brings together four specialized divisions, each a leader in its field, 
                  operating under a unified brand. This integrated approach allows us to deliver comprehensive 
                  solutions while maintaining excellence in each specialized area.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                    <h4 className="mb-2 font-semibold text-neutral-900">Innovation-Driven</h4>
                    <p className="text-sm text-neutral-600">Forward-thinking technology and sustainable practices</p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                    <h4 className="mb-2 font-semibold text-neutral-900">Community-Focused</h4>
                    <p className="text-sm text-neutral-600">Education, empowerment, and local capacity building</p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                    <h4 className="mb-2 font-semibold text-neutral-900">Sustainability First</h4>
                    <p className="text-sm text-neutral-600">Eco-conscious and regenerative business practices</p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                    <h4 className="mb-2 font-semibold text-neutral-900">Excellence Always</h4>
                    <p className="text-sm text-neutral-600">Professional, reliable, high-quality delivery</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-neutral-900">Our Vision</h3>
                <p className="text-neutral-700">
                  To become Central Africa's leading integrated platform for sustainable agriculture, scientific education, 
                  digital infrastructure, and eco-tourism—setting new standards for innovation, community impact, and 
                  environmental stewardship across the continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 bg-neutral-50 py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                Get In Touch
              </h2>
              <p className="text-lg text-neutral-600">
                Have a question or want to work with us? We'd love to hear from you.
              </p>
            </div>

            {formStatus === 'success' ? (
              <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
                <div className="mb-2 text-4xl">✓</div>
                <h3 className="mb-2 text-lg font-semibold text-green-900">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary-600 px-6 py-3.5 font-semibold text-white shadow-lg hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer - Modernized */}
      <footer className="border-t border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-12 sm:py-16">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info with Logo */}
            <div className="lg:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                  <Image
                    src="/images/logos/BClogo.jpg"
                    alt="Broadway Corporation"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Broadway<br />Corporation</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                Systems That Power Africa's Future — Agriculture, Science, Technology & Hospitality.
              </p>
              <div className="flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors hover:bg-primary-600 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors hover:bg-primary-600 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors hover:bg-primary-600 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Divisions */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-700">Divisions</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/farmhouse" className="group flex items-center text-neutral-600 transition-colors hover:text-primary-600">
                    <span className="mr-2 opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    Broadway Farmhouse
                  </Link>
                </li>
                <li>
                  <Link href="/enterprise" className="group flex items-center text-neutral-600 transition-colors hover:text-primary-600">
                    <span className="mr-2 opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    Broadway Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/intelligence" className="group flex items-center text-neutral-600 transition-colors hover:text-primary-600">
                    <span className="mr-2 opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    Broadway Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/resorts" className="group flex items-center text-neutral-600 transition-colors hover:text-primary-600">
                    <span className="mr-2 opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    Broadway Resorts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-700">Company</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#about" className="group flex items-center text-neutral-600 transition-colors hover:text-primary-600">
                    <span className="mr-2 opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="group flex items-center text-neutral-600 transition-colors hover:text-primary-600">
                    <span className="mr-2 opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-700">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-neutral-600">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:enquiries@broadway-corp.com" className="hover:text-primary-600 transition-colors">
                    enquiries@broadway-corp.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-neutral-600">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+237677181487" className="hover:text-primary-600 transition-colors">
                    +237 677 181 487
                  </a>
                </li>
                <li className="flex items-start gap-2 text-neutral-600">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    No 225 Batibo St, Simbock<br />
                    Yaoundé, Cameroon
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-neutral-200 pt-8 text-center">
            <p className="text-sm text-neutral-600">
              &copy; {new Date().getFullYear()} Broadway Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
