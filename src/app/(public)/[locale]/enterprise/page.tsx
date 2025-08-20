'use client';
import HeroSimple from '@/components/sections/HeroSimple';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EnterprisePage() {
  const { locale } = useParams<{ locale: string }>();
  const withLocale = (p: string) => `/${locale}${p}`;

  return (
    <main>
      <HeroSimple
        eyebrow="🧪 Enterprise"
        title="Empowering STEM Education Through Innovation"
        subtitle="We design and equip STEM labs, supply modern scientific equipment, and create immersive learning environments that transform education across Africa and beyond."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href={withLocale('/contact')}
              className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              data-analytics="cta_request_consultation"
              data-analytics-meta="enterprise"
            >
              Request a consultation
            </Link>
            <Link
              href={withLocale('/enterprise/catalog')}
              className="rounded-md border border-blue-600 px-5 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
              data-analytics="cta_browse_catalog"
              data-analytics-meta="enterprise"
            >
              Browse Equipment Catalog
            </Link>
          </div>
        }
      />

      {/* Mission Statement */}
      <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Beyond Infrastructure: A Gateway to Scientific Discovery
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Broadway Enterprise is a gateway for aspiring scientists—especially those who face
            barriers to traditional schooling. We open our laboratories to create opportunities
            where none existed before.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="rounded-2xl border bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold mb-3">STEM Lab Design & Equipment</h3>
            <p className="text-gray-600 mb-4">
              We design and equip STEM labs with modern, durable scientific equipment and reagents.
              From smart boards in classrooms to custom-built science labs, we empower learners and
              educators.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Compliant architecture & HVAC systems</li>
              <li>• Modern scientific equipment & reagents</li>
              <li>• Smart classroom technology integration</li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl border bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-3">Community Development & Outreach</h3>
            <p className="text-gray-600 mb-4">
              We support education, community development, and champion environmental protection
              through accessible STEM programs and inclusive learning environments.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Evening school student programs</li>
              <li>• Science enthusiast outreach</li>
              <li>• Environmental protection initiatives</li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl border bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-3">Cognitive Development Programs</h3>
            <p className="text-gray-600 mb-4">
              We integrate cognitive development programs that enhance vocabulary, intuitive
              thinking, and deductive reasoning through interactive learning experiences.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Language & logic development</li>
              <li>• Strategic thinking enhancement</li>
              <li>• Pattern recognition training</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Opening Doors for Every Aspiring Scientist
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our laboratories are accessible to diverse learners who seek hands-on scientific
              experience
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-md text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl mb-3">🌙</div>
              <h3 className="text-lg font-semibold mb-2">Evening School Students</h3>
              <p className="text-gray-600 text-sm">
                Seeking hands-on experience to complement their evening studies
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-md text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-semibold mb-2">Science Enthusiasts</h3>
              <p className="text-gray-600 text-sm">
                Who lack access to formal education but have a passion for discovery
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-md text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold mb-2">Practical Learners</h3>
              <p className="text-gray-600 text-sm">
                In need of extra practical sessions through modern, interactive formats
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Games & Activities */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Learning Through Play & Discovery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We create learning environments that are not only scientifically immersive, but also
            mentally enriching. Every session is designed to spark curiosity, build confidence, and
            prepare students to thrive in a world of innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="text-center"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Scrabble</h3>
            <p className="text-gray-600 text-sm">Language and logic development</p>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">♟️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Chess</h3>
            <p className="text-gray-600 text-sm">Strategic thinking enhancement</p>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🧩</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Memory Games</h3>
            <p className="text-gray-600 text-sm">Pattern recognition training</p>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">STEM Puzzles</h3>
            <p className="text-gray-600 text-sm">Interactive simulations & challenges</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform STEM Education?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join us in creating the next generation of scientists, innovators, and problem-solvers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={withLocale('/contact')}
              className="rounded-md bg-white px-6 py-3 text-sm font-medium text-blue-600 hover:bg-gray-100 transition-colors"
              data-analytics="cta_contact_enterprise"
              data-analytics-meta="enterprise"
            >
              Get Started Today
            </Link>
            <Link
              href={withLocale('/enterprise/catalog')}
              className="rounded-md border border-white px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-blue-600 transition-colors"
              data-analytics="cta_catalog_enterprise"
              data-analytics-meta="enterprise"
            >
              View Equipment Catalog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
