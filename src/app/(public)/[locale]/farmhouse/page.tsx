'use client';
import HeroSimple from '@/components/sections/HeroSimple';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FarmhousePage() {
  const { locale } = useParams<{ locale: string }>();
  const withLocale = (p: string) => `/${locale}${p}`;

  return (
    <main>
      <HeroSimple
        eyebrow="🌾 Farmhouse"
        title="Innovation, Empowerment & Agricultural Resilience"
        subtitle="At Broadway Farmhouse, we lead the charge in agricultural innovation—merging tradition with technology to build smarter, more sustainable food systems."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href={withLocale('/contact')}
              className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
            >
              Talk to our team
            </Link>
            <Link
              href={withLocale('/farmhouse/bsf')}
              className="rounded-md border border-green-600 px-5 py-2.5 text-sm font-medium text-green-600 hover:bg-green-50 transition-colors"
            >
              Explore BSF Systems
            </Link>
          </div>
        }
      />

      {/* Mission Statement */}
      <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Beyond Innovation: Rooted in Empowerment
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            But our mission goes beyond innovation—it&apos;s rooted in empowerment. We host
            community training programs that open doors for aspiring farmers, students, and
            underprivileged individuals working to overcome economic hardship.
          </p>
        </div>
      </section>

      {/* Core Technologies Grid */}
      <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="rounded-2xl border bg-white p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-lg font-semibold mb-3">Smart Farming</h3>
            <p className="text-gray-600 text-sm">
              Advanced agricultural technologies and data-driven farming practices
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border bg-white p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-4xl mb-4">🐄</div>
            <h3 className="text-lg font-semibold mb-3">Livestock Breeding</h3>
            <p className="text-gray-600 text-sm">
              Sustainable breeding programs for improved animal genetics and health
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border bg-white p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl mb-4">🐟</div>
            <h3 className="text-lg font-semibold mb-3">Aquaculture</h3>
            <p className="text-gray-600 text-sm">
              Fish farming systems with water-quality controls and sustainable practices
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border bg-white p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="text-lg font-semibold mb-3">Crop Science</h3>
            <p className="text-gray-600 text-sm">
              Research-driven crop development and sustainable farming techniques
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cutting-Edge Solutions */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cutting-Edge Agricultural Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each farm is a living laboratory, designed to foster resilience, food security, and
              scalable impact
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-4">🪰</div>
              <h3 className="text-xl font-semibold mb-4">Black Soldier Fly Protein Systems</h3>
              <p className="text-gray-600 mb-4">
                Sustainable protein production through innovative insect farming technology,
                providing high-quality feed for livestock and aquaculture.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Design and larvae production</li>
                <li>• Drying and packaging systems</li>
                <li>• Traceable SOPs and quality control</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-4">Greenhouse Automation</h3>
              <p className="text-gray-600 mb-4">
                Smart climate control, irrigation systems, and monitoring technologies for
                year-round crop production and optimal growing conditions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Climate control automation</li>
                <li>• Smart irrigation systems</li>
                <li>• Real-time monitoring & alerts</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Opening Doors for Every Aspiring Farmer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Through forums, workshops, and interactive sessions, we teach accessible agricultural
            practices that uplift communities and create pathways out of poverty and food scarcity.
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
            <div className="text-3xl mb-3">👨‍🌾</div>
            <h3 className="text-lg font-semibold mb-2">Aspiring Farmers</h3>
            <p className="text-gray-600 text-sm">
              Agriculture enthusiasts seeking practical knowledge and hands-on experience
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-md text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-lg font-semibold mb-2">Students & Educators</h3>
            <p className="text-gray-600 text-sm">
              Seeking practical experience and real-world agricultural applications
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-md text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-lg font-semibold mb-2">Underprivileged Individuals</h3>
            <p className="text-gray-600 text-sm">
              Working to overcome economic hardship through sustainable agriculture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="bg-gradient-to-r from-emerald-50 to-green-50 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Training Modules
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every Broadway farm is a learning ground, every session a step toward self-reliance,
              and every participant a potential changemaker in Africa&apos;s agricultural future.
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
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏙️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Urban & Rural Farming</h3>
              <p className="text-gray-600 text-sm">Techniques for different environments</p>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Soil Health & Composting</h3>
              <p className="text-gray-600 text-sm">Regenerative farming methods</p>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🐄</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Livestock & Aquaculture</h3>
              <p className="text-gray-600 text-sm">Affordable farming systems</p>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-lime-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Market Readiness</h3>
              <p className="text-gray-600 text-sm">Sustainable crop cycles & strategies</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Agriculture in Africa?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join us in creating sustainable food systems and empowering communities through
            agricultural innovation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={withLocale('/contact')}
              className="rounded-md bg-white px-6 py-3 text-sm font-medium text-green-600 hover:bg-gray-100 transition-colors"
              data-analytics="cta_contact_farmhouse"
              data-analytics-meta="farmhouse"
            >
              Get Started Today
            </Link>
            <Link
              href={withLocale('/farmhouse/bsf')}
              className="rounded-md border border-white px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-green-600 transition-colors"
              data-analytics="cta_bsf_farmhouse"
              data-analytics-meta="farmhouse"
            >
              Explore BSF Systems
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
