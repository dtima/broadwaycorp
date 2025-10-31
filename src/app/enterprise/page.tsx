'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function EnterprisePage() {
  const features = [
    {
      title: 'Scientific Equipment Catalog',
      description: 'Modern, durable laboratory tools and reagents with competitive pricing and bulk discounts.',
      icon: '⚗️',
    },
    {
      title: 'Custom Laboratory Designs',
      description: 'Immersive, branded educational environments tailored for schools and research institutions.',
      icon: '🏗️',
    },
    {
      title: 'STEM Education Programs',
      description: 'Hands-on learning experiences with cognitive development games and interactive workshops.',
      icon: '🔬',
    },
    {
      title: 'Community Science Labs',
      description: 'Open-access facilities for evening students and science enthusiasts to pursue their passion.',
      icon: '🧬',
    },
  ];

  const services = [
    'Laboratory Equipment & Reagents',
    'Custom Lab Design & Setup',
    'STEM Workshop Programs',
    'Science Fair Consulting',
    'Equipment Maintenance & Calibration',
    'Educational Material Development',
  ];

  const specialEvents = [
    {
      title: 'Equipment Sales Events',
      description: 'Up to 40% discount on select scientific equipment',
      icon: '🏷️',
    },
    {
      title: 'Cognitive Development Tournaments',
      description: 'Chess & Scrabble competitions for students',
      icon: '♟️',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-3 sm:h-16 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white sm:h-10 sm:w-10">
              <Image
                src="/images/logos/Broadway-Enterprise.jpg"
                alt="Broadway Enterprise"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent sm:text-2xl">Enterprise</span>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 py-16 text-white sm:py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/Enterprise/lab.jpg"
            alt="Broadway Enterprise"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-cyan-900/80" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1.5 text-xs font-medium text-blue-100 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400"></span>
              </span>
              Laboratory Solutions & STEM Division
            </div>
            
            <h1 className="mb-4 text-3xl font-black leading-tight sm:mb-6 sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Broadway Enterprise</span>
              <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Empowering STEM Excellence
              </span>
            </h1>
            
            <p className="mb-8 text-base leading-relaxed text-blue-50 sm:mb-10 sm:text-lg lg:text-xl">
              Transforming science education through custom laboratory solutions, cutting-edge equipment, 
              and immersive STEM programs designed for schools and research institutions.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-bold text-blue-700 shadow-2xl transition-all hover:bg-blue-50 sm:px-8 sm:text-base"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-center text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 sm:px-8 sm:text-base"
              >
                Our Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <div className="mb-3 inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
              Our Solutions
            </div>
            <h2 className="mb-3 text-2xl font-black text-neutral-900 sm:mb-4 sm:text-4xl lg:text-5xl">
              Scientific Excellence
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-lg">
              Comprehensive laboratory solutions for education and research
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-blue-200/50 bg-white p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl sm:rounded-3xl sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 opacity-0 transition-opacity group-hover:opacity-5" />
                
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-3xl shadow-lg sm:h-16 sm:w-16 sm:rounded-2xl">
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

      {/* Special Events */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-20">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-2xl font-black text-neutral-900 sm:mb-4 sm:text-4xl">
              Special Events
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-6">
            {specialEvents.map((event, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg sm:p-8"
              >
                <div className="mb-4 text-4xl">{event.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:text-xl">{event.title}</h3>
                <p className="text-sm text-neutral-600 sm:text-base">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-14 py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center sm:mb-16">
              <h2 className="mb-3 text-2xl font-black text-neutral-900 sm:mb-4 sm:text-4xl lg:text-5xl">
                What We Offer
              </h2>
              <p className="text-sm text-neutral-600 sm:text-lg">
                Complete laboratory and educational solutions
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-blue-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:gap-4 sm:p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 sm:h-10 sm:w-10">
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
      <section id="contact" className="scroll-mt-14 bg-gradient-to-br from-blue-600 to-cyan-700 py-16 text-white sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-black sm:mb-6 sm:text-4xl lg:text-5xl">
              Ready to Elevate Your Lab?
            </h2>
            <p className="mb-8 text-base text-blue-50 sm:mb-10 sm:text-lg">
              Partner with us to build world-class laboratory facilities and STEM programs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/#contact"
                className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-bold text-blue-700 shadow-2xl transition-all hover:bg-blue-50 sm:px-8 sm:text-base"
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
            <p className="mb-2 font-semibold text-neutral-900">Broadway Enterprise</p>
            <p>Part of Broadway Corporation — Systems That Power Africa's Future</p>
            <p className="mt-4">&copy; {new Date().getFullYear()} Broadway Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
