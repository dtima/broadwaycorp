'use client';
import HeroSimple from '@/components/sections/HeroSimple';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ResortsPage() {
  const { locale } = useParams<{ locale: string }>();
  const withLocale = (p: string) => `/${locale}${p}`;

  return (
    <main className="overflow-hidden">
      <HeroSimple
        eyebrow="🏞️ Broadway Resorts"
        title="Eco-Tourism, Agro-Tourism & Culinary Excellence"
        subtitle="We craft unforgettable experiences that celebrate Africa's landscapes, cultures, and flavors. Our destinations invite guests to reconnect with nature, explore sustainable living, and immerse themselves in the stories of the land."
        actions={
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href={withLocale('/contact')}
              className="w-full sm:w-auto rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 text-center"
              data-analytics="cta_plan_visit"
              data-analytics-meta="resorts"
            >
              Plan Your Visit
            </Link>
            <Link
              href={withLocale('/resorts/roadhouse')}
              className="w-full sm:w-auto rounded-md border border-emerald-600 px-6 py-3 text-sm font-medium text-emerald-600 hover:bg-emerald-50 transition-all duration-200 transform hover:scale-105 text-center"
            >
              Explore Roadhouse
            </Link>
          </div>
        }
      />

      {/* Hero Image Section - Resort Landscape */}
      <section className="relative py-16 bg-gradient-to-b from-emerald-50 to-teal-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/divisions/Resort.jpg"
              alt="Broadway Resort Landscape - Eco-Tourism Destination"
              className="w-full h-96 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Nature Meets Luxury</h2>
              <p className="text-lg md:text-xl text-emerald-100 max-w-2xl">
                Each resort is designed as a living classroom and sanctuary, where leisure meets
                learning and every moment deepens connection to the land.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eco-Tourism Adventures */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-4xl mb-4">🌿</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Eco-Tourism & Agro-Tourism Adventures
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guests journey through nature trails, wildlife encounters, and cultural experiences that
            highlight biodiversity and conservation.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: '🦁',
              title: 'Nature Trails & Wildlife',
              description: 'Biodiversity and conservation encounters',
              bgColor: 'bg-emerald-100',
            },
            {
              icon: '🏹',
              title: 'Outdoor Sports & Games',
              description: 'Ethical practices and local traditions',
              bgColor: 'bg-teal-100',
            },
            {
              icon: '🌱',
              title: 'Farm-to-Table Tours',
              description: 'Smart farming, aquaculture, and crop science',
              bgColor: 'bg-green-100',
            },
            {
              icon: '🎭',
              title: 'Cultural Immersion',
              description: 'Music, storytelling, and artisanal workshops',
              bgColor: 'bg-blue-100',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`${item.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Broadway Roadhouse Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-4xl mb-4">🍽️</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Broadway Roadhouse
            </h2>
            <p className="text-xl text-gray-700 mb-2 font-semibold">
              Grilled to Perfection. Rooted in Africa. Served with Heart.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This isn&apos;t just dining—it&apos;s culinary storytelling. Guests won&apos;t just
              taste the land—they&apos;ll experience its transformation, from soil to plate,
              tradition to innovation.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-amber-600">🔥 Grill Specialties</h3>
              <div className="space-y-4">
                {[
                  {
                    emoji: '🐟',
                    name: 'Grilled Catfish Fillet',
                    description:
                      'Fresh from our aquaculture ponds, marinated in citrus herbs and flame-grilled. Served with baked potatoes and garden greens.',
                  },
                  {
                    emoji: '🍗',
                    name: 'Grilled Chicken Quarter',
                    description:
                      'Farm-raised, seasoned with moringa and garlic, grilled to a smoky crisp. Served with fried plantains and spiced veggie mix.',
                  },
                  {
                    emoji: '🍤',
                    name: 'Grilled Prawns & Shrimps',
                    description:
                      'Char-grilled seafood with Broadway&apos;s signature spice blend. Served with cassava wedges and pepper sauce.',
                  },
                  {
                    emoji: '🐇',
                    name: 'Grilled Rabbit Cutlets',
                    description:
                      'Tender, lean rabbit meat from our livestock program, grilled with rosemary and bush pepper. Served with yam mash and sautéed greens.',
                  },
                ].map((dish, index) => (
                  <div key={index} className="border-l-4 border-amber-200 pl-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{dish.emoji}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{dish.name}</h4>
                        <p className="text-sm text-gray-600">{dish.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-green-600">🥗 Farm-Fresh Sides</h3>
              <div className="space-y-4">
                {[
                  'Baked Potatoes with herb butter or chili oil',
                  'Fried Plantains with honey glaze or savory spice',
                  'Seasonal Veggie Medley – okra, bell peppers, carrots, and leafy greens',
                  'Tropical Fruit Bowl – mango, papaya, pineapple, watermelon',
                ].map((side, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-700">{side}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-xl">
                <h4 className="font-semibold text-amber-800 mb-2">🤝 Hospitality Promise</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Friendly, energetic service</li>
                  <li>• Family-style dining with generous portions</li>
                  <li>• Live music and storytelling nights</li>
                  <li>• Staff trained in Broadway&apos;s hospitality academy</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resort Room Showcase */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Luxury Accommodations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of modern comfort and natural beauty in our thoughtfully
            designed resort rooms.
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img
            src="/images/divisions/resort-room.jpeg"
            alt="Luxury Resort Room - Modern Comfort in Nature"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Modern Sanctuary in Nature</h3>
            <p className="text-lg text-gray-100 max-w-2xl">
              Floor-to-ceiling glass doors blur the lines between indoor and outdoor living,
              creating an immersive connection with the surrounding landscape.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Hospitality Features */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="text-4xl mb-4">🌍</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hospitality That Honors Culture and Sustainability
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every Broadway resort is designed to reflect local architecture, language, and customs
              while maintaining the highest standards of comfort and service.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '♻️',
                title: 'Eco-Conscious',
                description: 'Built with sustainable materials and powered by renewable energy',
                color: 'text-green-600',
                bgColor: 'bg-green-100',
              },
              {
                icon: '🏛️',
                title: 'Culturally Resonant',
                description: 'Designed to reflect local architecture, language, and customs',
                color: 'text-blue-600',
                bgColor: 'bg-blue-100',
              },
              {
                icon: '📚',
                title: 'Educational',
                description: 'Offering workshops on composting, aquaponics, and culinary science',
                color: 'text-purple-600',
                bgColor: 'bg-purple-100',
              },
              {
                icon: '🤝',
                title: 'Inclusive',
                description: 'Welcoming guests from all backgrounds with multilingual staff',
                color: 'text-teal-600',
                bgColor: 'bg-teal-100',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`${item.bgColor} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className={`text-lg font-semibold text-center mb-3 ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm-to-Flame Philosophy */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="text-4xl mb-6">🧑‍🌾</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Farm-to-Flame Philosophy
          </h2>
          <p className="text-lg md:text-xl mb-8 text-amber-100 max-w-3xl mx-auto">
            Every dish tells a story of the land, the farmer, and the future of sustainable
            agriculture in Africa.
          </p>
          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div>
              <div className="text-2xl mb-2">🌱</div>
              <p className="font-semibold">Sourced from Broadway Farmhouse</p>
            </div>
            <div>
              <div className="text-2xl mb-2">👨‍🍳</div>
              <p className="font-semibold">Chefs trained in African and global techniques</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📖</div>
              <p className="font-semibold">Stories of the land, farmer, and future</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Africa&apos;s Future?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Whether you&apos;re a traveler, a chef, a student, or a curious explorer—Broadway
              Resorts offer a gateway to Africa&apos;s future through its land, people, and flavors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={withLocale('/contact')}
                className="w-full sm:w-auto rounded-md bg-white px-8 py-4 text-sm font-medium text-emerald-600 hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                data-analytics="cta_contact_resorts"
                data-analytics-meta="resorts"
              >
                Book Your Stay
              </Link>
              <Link
                href={withLocale('/resorts/roadhouse')}
                className="w-full sm:w-auto rounded-md border border-white px-8 py-4 text-sm font-medium text-white hover:bg-white hover:text-emerald-600 transition-all duration-200 transform hover:scale-105"
              >
                Explore Roadhouse Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
