'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const t = useTranslations();
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sent');
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-4xl mb-4">📞</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto">
              Ready to transform your vision into reality? Let&apos;s start a conversation about
              innovation, sustainability, and building the future together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📍</span>
                Visit Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">🏢</div>
                  <div>
                    <p className="font-semibold text-gray-900">Broadway Corporation</p>
                    <p className="text-gray-700">No 225 Batibo St, Simbock</p>
                    <p className="text-gray-700">Yaoundé, Cameroon</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-green-600 mr-3">📞</div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:+237677181487"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      +237 677 181 487
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Contacts */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">✉️</span>
                Email Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-blue-600 mr-3">💼</div>
                  <div>
                    <p className="font-semibold text-gray-900">General Inquiries</p>
                    <a
                      href="mailto:enquiries@broadway-corp.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      enquiries@broadway-corp.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-green-600 mr-3">🚀</div>
                  <div>
                    <p className="font-semibold text-gray-900">Career Opportunities</p>
                    <a
                      href="mailto:careers@broadway-corp.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      careers@broadway-corp.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-purple-600 mr-3">🛠️</div>
                  <div>
                    <p className="font-semibold text-gray-900">Technical Support</p>
                    <a
                      href="mailto:support@broadway-corp.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      support@broadway-corp.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🗺️</span>
                Find Us
              </h2>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.app.goo.gl/XpHutDENAEoZzqf76?g_st=com.google.maps.preview.copy"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Broadway Corporation Location - Simbock, Yaoundé, Cameroon"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.app.goo.gl/XpHutDENAEoZzqf76?g_st=com.google.maps.preview.copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span className="mr-2">🗺️</span>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">
                  Have a question or want to discuss a project? We&apos;d love to hear from you.
                </p>
              </div>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 text-center border border-green-200"
                >
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="c-name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="c-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-msg" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="c-msg"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
