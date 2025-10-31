'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FarmhousePage() {
  const features = [
    {
      title: 'Scorpion Farm Tours',
      description: 'Educational tours showcasing medicinal scorpion breeding with hands-on learning experiences.',
      icon: '🦂',
    },
    {
      title: 'BSF Protein Systems',
      description: 'Converting organic waste into high-quality protein feed for livestock and aquaculture.',
      icon: '🐛',
    },
    {
      title: 'Aquaculture & Fish Farming',
      description: 'Modular pond systems producing fresh tilapia and catfish with sustainable practices.',
      icon: '🐟',
    },
    {
      title: 'Smart Greenhouse Technology',
      description: 'Automated climate control and hydroponic systems for year-round crop production.',
      icon: '🌱',
    },
  ];

  const services = [
    'Farm Tours & Educational Programs',
    'BSF Protein & Fertilizer Sales',
    'Fresh Produce & Aquaculture Products',
    'Agricultural Training Workshops',
    'Smart Farming Consultation',
    'Livestock Breeding Programs',
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-3 sm:h-16 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white sm:h-10 sm:w-10">
              <Image
                src="/images/logos/BRoadway-Farmhouse.jpg"
                alt="Broadway Farmhouse"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent sm:text-2xl">Farmhouse</span>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 py-16 text-white sm:py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/farmhouse/farmhouse.jpg"
            alt="Broadway Farmhouse"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/70 to-teal-900/80" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1.5 text-xs font-medium text-emerald-100 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              Sustainable Agriculture Division
            </div>
            
            <h1 className="mb-4 text-3xl font-black leading-tight sm:mb-6 sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Broadway Farmhouse</span>
              <span className="block bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Innovation & Resilience
              </span>
            </h1>
            
            <p className="mb-8 text-base leading-relaxed text-emerald-50 sm:mb-10 sm:text-lg lg:text-xl">
              Leading the future of sustainable agriculture through BSF protein systems, smart farming automation, 
              and community-driven training programs across Central Africa.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-bold text-emerald-700 shadow-2xl transition-all hover:bg-emerald-50 sm:px-8 sm:text-base"
              >
                Schedule a Tour
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

      {/* Features Grid */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <div className="mb-3 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
              Our Solutions
            </div>
            <h2 className="mb-3 text-2xl font-black text-neutral-900 sm:mb-4 sm:text-4xl lg:text-5xl">
              Agricultural Innovation
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-lg">
              Four core pillars driving sustainable farming excellence
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-emerald-200/50 bg-white p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl sm:rounded-3xl sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 transition-opacity group-hover:opacity-5" />
                
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-3xl shadow-lg sm:h-16 sm:w-16 sm:rounded-2xl">
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
      <section id="services" className="scroll-mt-14 bg-gradient-to-b from-emerald-50 to-white py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center sm:mb-16">
              <h2 className="mb-3 text-2xl font-black text-neutral-900 sm:mb-4 sm:text-4xl lg:text-5xl">
                What We Offer
              </h2>
              <p className="text-sm text-neutral-600 sm:text-lg">
                Comprehensive agricultural solutions and training programs
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:gap-4 sm:p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 sm:h-10 sm:w-10">
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
      <section id="contact" className="scroll-mt-14 bg-gradient-to-br from-emerald-600 to-teal-700 py-16 text-white sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-black sm:mb-6 sm:text-4xl lg:text-5xl">
              Ready to Transform Your Farm?
            </h2>
            <p className="mb-8 text-base text-emerald-50 sm:mb-10 sm:text-lg">
              Join hundreds of farmers who have revolutionized their operations with our sustainable solutions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/#contact"
                className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-bold text-emerald-700 shadow-2xl transition-all hover:bg-emerald-50 sm:px-8 sm:text-base"
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
            <p className="mb-2 font-semibold text-neutral-900">Broadway Farmhouse</p>
            <p>Part of Broadway Corporation — Systems That Power Africa's Future</p>
            <p className="mt-4">&copy; {new Date().getFullYear()} Broadway Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
