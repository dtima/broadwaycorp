'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function IntelligencePage() {
  const features = [
    {
      title: 'IT Infrastructure & Cloud',
      description: 'Enterprise-grade servers, cloud systems, and network architecture for businesses and institutions.',
      icon: '☁️',
    },
    {
      title: 'Data Center Services',
      description: 'Colocation, managed services, and 99.9% uptime guarantees with 24/7 monitoring.',
      icon: '🖥️',
    },
    {
      title: 'Security Consulting',
      description: 'Comprehensive audits, penetration testing, and compliance solutions for secure operations.',
      icon: '🔒',
    },
    {
      title: 'Distance Learning (LMS)',
      description: 'Smart classrooms with behavioral analytics and virtual learning platforms for remote education.',
      icon: '📚',
    },
  ];

  const services = [
    'IT Infrastructure Design & Deployment',
    'Cloud Migration & Management',
    'Data Center Colocation',
    'Cybersecurity Audits & Consulting',
    'Network Setup & Optimization',
    'Learning Management Systems (LMS)',
    'Smart Classroom Implementation',
    'IT Support & Maintenance (SLAs)',
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '24/7', label: 'Monitoring & Support' },
    { value: '500+', label: 'Clients Served' },
    { value: '50+', label: 'Team Experts' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-3 sm:h-16 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white sm:h-10 sm:w-10">
              <Image
                src="/images/logos/Broadway-Intelligence.jpg"
                alt="Broadway Intelligence"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent sm:text-2xl">Intelligence</span>
          </Link>
          <Link
            href="/"
            className="text-xs font-medium text-neutral-300 hover:text-white transition-colors sm:text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-pink-700 py-16 text-white sm:py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/Intelligence/Intelligence.jpg"
            alt="Broadway Intelligence"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-pink-900/80" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/20 px-3 py-1.5 text-xs font-medium text-purple-100 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-300 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400"></span>
              </span>
              IT Services & Distance Learning Division
            </div>
            
            <h1 className="mb-4 text-3xl font-black leading-tight sm:mb-6 sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Broadway Intelligence</span>
              <span className="block bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Digital Infrastructure
              </span>
            </h1>
            
            <p className="mb-8 text-base leading-relaxed text-purple-50 sm:mb-10 sm:text-lg lg:text-xl">
              Powering Africa's digital transformation with enterprise IT infrastructure, secure data centers, 
              and innovative distance learning solutions for organizations and educational institutions.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-bold text-purple-700 shadow-2xl transition-all hover:bg-purple-50 sm:px-8 sm:text-base"
              >
                Get a Consultation
              </a>
              <a
                href="#services"
                className="rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-center text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 sm:px-8 sm:text-base"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-neutral-200 bg-white py-8 sm:py-12">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4 sm:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="mb-1 text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:mb-2 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-600 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <div className="mb-3 inline-block rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
              Our Solutions
            </div>
            <h2 className="mb-3 text-2xl font-black text-neutral-900 sm:mb-4 sm:text-4xl lg:text-5xl">
              Technology Excellence
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-lg">
              Comprehensive IT infrastructure and distance learning solutions
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-purple-200/50 bg-white p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl sm:rounded-3xl sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 transition-opacity group-hover:opacity-5" />
                
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-3xl shadow-lg sm:h-16 sm:w-16 sm:rounded-2xl">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">{feature.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-14 bg-gradient-to-b from-purple-50 to-white py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center sm:mb-16">
              <h2 className="mb-3 text-2xl font-black text-neutral-900 sm:mb-4 sm:text-4xl lg:text-5xl">
                What We Offer
              </h2>
              <p className="text-sm text-neutral-600 sm:text-lg">
                End-to-end IT and digital learning solutions
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-purple-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:gap-4 sm:p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 sm:h-10 sm:w-10">
                    <svg className="h-4 w-4 text-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-neutral-800 sm:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="scroll-mt-14 bg-gradient-to-br from-purple-600 to-pink-700 py-16 text-white sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-black sm:mb-6 sm:text-4xl lg:text-5xl">
              Ready to Go Digital?
            </h2>
            <p className="mb-8 text-base text-purple-50 sm:mb-10 sm:text-lg">
              Transform your organization with cutting-edge IT infrastructure and distance learning solutions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/#contact"
                className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-bold text-purple-700 shadow-2xl transition-all hover:bg-purple-50 sm:px-8 sm:text-base"
              >
                Contact Us Today
              </Link>
              <Link
                href="/"
                className="rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-center text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 sm:px-8 sm:text-base"
              >
                Explore Other Divisions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8 sm:py-12">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-neutral-600">
            <p className="mb-2 font-semibold text-neutral-900">Broadway Intelligence</p>
            <p>Part of Broadway Corporation — Systems That Power Africa's Future</p>
            <p className="mt-4">&copy; {new Date().getFullYear()} Broadway Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
