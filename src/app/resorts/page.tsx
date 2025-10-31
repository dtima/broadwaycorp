'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ResortsPage() {
  const features = [
    {
      title: 'Agro-Tourism Experiences',
      description: 'Immersive farm tours, nature trails, and wildlife encounters in authentic African settings.',
      icon: '🦒',
    },
    {
      title: 'Broadway Roadhouse',
      description: 'Farm-to-table dining featuring grilled specialties and locally sourced organic produce.',
      icon: '🍖',
    },
    {
      title: 'Animal Sanctuary Tours',
      description: 'Conservation exhibits, educational programs, and donation-supported wildlife protection.',
      icon: '🦁',
    },
    {
      title: 'Hospitality & Events',
      description: 'Lodging, outdoor recreation, corporate retreats, and seasonal holiday packages.',
      icon: '🏕️',
    },
  ];

  const services = [
    'Resort Bookings & Accommodation',
    'Farm-to-Table Restaurant',
    'Agro-Tourism Packages',
    'Corporate Retreats & Team Building',
    'Wedding & Event Hosting',
    'Nature Walks & Safari Tours',
    'Camping & Outdoor Activities',
    'Seasonal Holiday Packages',
  ];

  const highlights = [
    {
      title: 'Eco-Friendly Lodging',
      description: 'Sustainable accommodations in harmony with nature',
      icon: '🌿',
    },
    {
      title: 'Organic Farm Tours',
      description: 'See where your food comes from, from farm to fork',
      icon: '🌾',
    },
    {
      title: 'Wildlife Conservation',
      description: 'Support local conservation through your visit',
      icon: '🦋',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-3 sm:h-16 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white sm:h-10 sm:w-10">
              <Image
                src="/images/logos/Broadway-Resort.jpg"
                alt="Broadway Resorts"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent sm:text-2xl">Resorts</span>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 py-16 text-white sm:py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/resorts/resort1.jpg"
            alt="Broadway Resorts"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-orange-800/70 to-red-900/80" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/20 px-3 py-1.5 text-xs font-medium text-orange-100 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-300 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400"></span>
              </span>
              Eco-Tourism & Hospitality Division
            </div>
            
            <h1 className="mb-4 text-3xl font-black leading-tight sm:mb-6 sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Broadway Resorts</span>
              <span className="block bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
                Nature & Hospitality
              </span>
            </h1>
            
            <p className="mb-8 text-base leading-relaxed text-orange-50 sm:mb-10 sm:text-lg lg:text-xl">
              Experience authentic African eco-tourism with farm-to-table dining, agro-tourism adventures, 
              and nature-based hospitality in the heart of Central Africa.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-bold text-orange-700 shadow-2xl transition-all hover:bg-orange-50 sm:px-8 sm:text-base"
              >
                Book Your Stay
              </a>
              <a
                href="#services"
                className="rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-center text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 sm:px-8 sm:text-base"
              >
                Explore Experiences
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-neutral-200 bg-white py-12 sm:py-16">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-3 text-4xl sm:mb-4 sm:text-5xl">{highlight.icon}</div>
                <h3 className="mb-2 text-base font-bold text-neutral-900 sm:text-lg">{highlight.title}</h3>
                <p className="text-xs text-neutral-600 sm:text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <div className="mb-3 inline-block rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
              Our Experiences
            </div>
            <h2 className="mb-3 text-2xl font-black text-neutral-900 sm:mb-4 sm:text-4xl lg:text-5xl">
              Nature & Adventure
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-lg">
              Authentic African eco-tourism and hospitality experiences
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-orange-200/50 bg-white p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl sm:rounded-3xl sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-0 transition-opacity group-hover:opacity-5" />
                
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-3xl shadow-lg sm:h-16 sm:w-16 sm:rounded-2xl">
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
      <section id="services" className="scroll-mt-14 bg-gradient-to-b from-orange-50 to-white py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center sm:mb-16">
              <h2 className="mb-3 text-2xl font-black text-neutral-900 sm:mb-4 sm:text-4xl lg:text-5xl">
                What We Offer
              </h2>
              <p className="text-sm text-neutral-600 sm:text-lg">
                Complete hospitality and eco-tourism services
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-orange-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:gap-4 sm:p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 sm:h-10 sm:w-10">
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
      <section id="contact" className="scroll-mt-14 bg-gradient-to-br from-orange-600 to-red-700 py-16 text-white sm:py-20 lg:py-28">
        <div className="container mx-auto px-3 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-black sm:mb-6 sm:text-4xl lg:text-5xl">
              Ready for an Adventure?
            </h2>
            <p className="mb-8 text-base text-orange-50 sm:mb-10 sm:text-lg">
              Book your eco-tourism experience today and discover the beauty of Central African nature.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/#contact"
                className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-bold text-orange-700 shadow-2xl transition-all hover:bg-orange-50 sm:px-8 sm:text-base"
              >
                Book Now
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
            <p className="mb-2 font-semibold text-neutral-900">Broadway Resorts</p>
            <p>Part of Broadway Corporation — Systems That Power Africa's Future</p>
            <p className="mt-4">&copy; {new Date().getFullYear()} Broadway Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
