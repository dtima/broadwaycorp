'use client';
import HeroSimple from '@/components/sections/HeroSimple';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function IntelligencePage() {
  const { locale } = useParams<{ locale: string }>();
  const withLocale = (p: string) => `/${locale}${p}`;

  return (
    <main className="overflow-hidden">
      <HeroSimple
        eyebrow="🧠 Intelligence"
        title="Digital Empowerment & Educational Transformation"
        subtitle="At Broadway, our IT division is more than a technical backbone—it's a catalyst for digital empowerment, educational transformation, and community resilience."
        actions={
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href={withLocale('/contact')}
              className="w-full sm:w-auto rounded-md bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 text-center"
              data-analytics="cta_get_support"
              data-analytics-meta="intelligence"
            >
              Get Support
            </Link>
            <Link
              href={withLocale('/intelligence/training')}
              className="w-full sm:w-auto rounded-md border border-purple-600 px-6 py-3 text-sm font-medium text-purple-600 hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 text-center"
            >
              Explore Training
            </Link>
          </div>
        }
      />

      {/* Mission Statement */}
      <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Building Robust Digital Infrastructure for Africa&apos;s Future
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We build and maintain robust digital infrastructure for organizations, schools, and
            underserved communities, delivering systems that are modular, scalable, and locally
            adaptable.
          </p>
        </motion.div>
      </section>

      {/* Infrastructure Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-4xl mb-4">🛠️</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Infrastructure That Works for Africa
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These systems are designed to thrive in low-resource settings, with offline
              capabilities, solar integration, and multilingual interfaces that reflect
              Africa&apos;s diversity.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '☁️',
                title: 'Cloud & Servers',
                description: 'Reliable data storage and access systems',
                bgColor: 'bg-purple-100',
              },
              {
                icon: '📊',
                title: 'Custom Dashboards',
                description: 'Real-time analytics and monitoring',
                bgColor: 'bg-blue-100',
              },
              {
                icon: '⚡',
                title: 'Performance Tools',
                description: 'Uptime and operational continuity',
                bgColor: 'bg-indigo-100',
              },
              {
                icon: '🛠️',
                title: 'Field Toolkits',
                description: 'Troubleshooting and maintenance',
                bgColor: 'bg-cyan-100',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
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
        </div>
      </section>

      {/* Training Section */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-4xl mb-4">🌍</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Training the Next Generation of Tech Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe Africa&apos;s future lies in homegrown innovation. Our training programs
            blend hands-on labs, modular toolkits, and real-world simulations.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: '🎓',
              title: 'Students & Professionals',
              description: 'Practical IT systems, coding, and hardware deployment',
              color: 'text-blue-600',
              bgColor: 'bg-blue-50',
            },
            {
              icon: '👨‍🏫',
              title: 'Teachers & Administrators',
              description: 'Digital literacy and educational tech integration',
              color: 'text-green-600',
              bgColor: 'bg-green-50',
            },
            {
              icon: '👥',
              title: 'Community Leaders',
              description: 'Maintaining and scaling infrastructure locally',
              color: 'text-purple-600',
              bgColor: 'bg-purple-50',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`${item.bgColor} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6`}
              >
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className={`text-xl font-semibold text-center mb-4 ${item.color}`}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Smart Classrooms Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Classrooms for Inclusive, Data-Driven Learning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Education is evolving—and Broadway is leading the charge with smart classroom systems
              that make learning interactive, personalized, and data-informed.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                Intelligent Monitoring Systems
              </h3>
              <p className="text-gray-600 mb-4">
                Help teachers track student behavior, engagement, and performance in real time,
                identifying each learner&apos;s strengths and areas for growth.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Real-time student engagement tracking</li>
                <li>• Performance analytics and insights</li>
                <li>• Personalized learning recommendations</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">
                Behavioral Analytics Dashboards
              </h3>
              <p className="text-gray-600 mb-4">
                Support early intervention, inclusive teaching, and holistic student development
                through comprehensive behavioral insights.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Early intervention support</li>
                <li>• Inclusive teaching strategies</li>
                <li>• Holistic development tracking</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 bg-white rounded-2xl p-8 shadow-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-pink-600">Modular Classroom Kits</h3>
            <p className="text-gray-600 mb-4">
              Sensors, cameras, and adaptive software tailored for African school environments,
              empowering educators to move beyond one-size-fits-all teaching.
            </p>
            <div className="grid gap-4 md:grid-cols-3 text-sm text-gray-600">
              <div>• Environmental sensors</div>
              <div>• Smart cameras</div>
              <div>• Adaptive software</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Distance Education Section */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="text-4xl mb-4">🖥️</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Distance Education That Bridges the Gap
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For students in remote or underserved areas, Broadway&apos;s distance education systems
            offer a lifeline to quality learning.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: '📺',
              title: 'Smart Boards',
              description: 'Interactive lessons for urban and rural learning hubs',
              bgColor: 'bg-blue-100',
            },
            {
              icon: '💻',
              title: 'Virtual Classrooms',
              description: 'Multi-platform access via mobile, desktop, or centers',
              bgColor: 'bg-green-100',
            },
            {
              icon: '🔄',
              title: 'Flexible Sessions',
              description: 'Live and asynchronous learning options',
              bgColor: 'bg-purple-100',
            },
            {
              icon: '🌐',
              title: 'Localized Content',
              description: 'Multiple languages and cultural relevance',
              bgColor: 'bg-orange-100',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`${item.bgColor} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div className="text-4xl mb-4">🔧</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Modular, Scalable, and Culturally Resonant
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every Broadway IT solution is built to uplift, educate, and connect communities across
              Africa.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: '🧩',
                title: 'Modular',
                description: 'Built to grow with your needs',
                color: 'text-blue-300',
              },
              {
                icon: '📈',
                title: 'Scalable',
                description: 'Designed for expansion across regions and sectors',
                color: 'text-green-300',
              },
              {
                icon: '🌍',
                title: 'Culturally Resonant',
                description: 'Reflecting local languages, customs, and educational goals',
                color: 'text-purple-300',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`text-xl font-semibold mb-3 ${item.color}`}>{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Digital Education in Africa?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Whether we&apos;re powering a school, a farm, or a community center, our systems are
              built to uplift, educate, and connect.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={withLocale('/contact')}
                className="w-full sm:w-auto rounded-md bg-white px-8 py-4 text-sm font-medium text-purple-600 hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                data-analytics="cta_contact_intelligence"
                data-analytics-meta="intelligence"
              >
                Get Started Today
              </Link>
              <Link
                href={withLocale('/intelligence/training')}
                className="w-full sm:w-auto rounded-md border border-white px-8 py-4 text-sm font-medium text-white hover:bg-white hover:text-purple-600 transition-all duration-200 transform hover:scale-105"
              >
                Explore Training Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
