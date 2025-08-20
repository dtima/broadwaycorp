'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BroadwayFarmhouseOpenHousePage() {
  const { locale } = useParams<{ locale: string }>();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: 'Teacher',
    activities: [] as string[],
    language: 'English',
    comments: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (activity: string) => {
    setFormData((prev) => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter((a) => a !== activity)
        : [...prev.activities, activity],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your registration! We will contact you soon with more details.');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-4xl mb-4">🌟</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">You&apos;re Invited!</h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Broadway Farmhouse Open House 2025
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-8">
              Theme: Innovation, Intelligence & Impact
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl mb-2">📅</div>
                <p className="font-semibold">Saturday, 11th October 2025</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl mb-2">🕗</div>
                <p className="font-semibold">8:00 AM – 5:00 PM</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl mb-2">📍</div>
                <p className="font-semibold">
                  Broadway Corporation Head Office
                  <br />
                  Simbock, Yaoundé
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Event Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Who Should Attend */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🎯</span>
                  Who Should Attend?
                </h3>
                <p className="text-gray-700 mb-4">We warmly welcome:</p>
                <ul className="space-y-3">
                  {[
                    '👩‍🏫 Teachers & Educators',
                    '🏫 School Owners & Administrators',
                    '🔬 Science Enthusiasts & Innovators',
                    '🌱 Sustainable Agriculture Advocates',
                    '🧑‍🎓 Students & Lifelong Learners',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Expect */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔍</span>
                  What to Expect
                </h3>
                <p className="text-gray-700 mb-4">
                  A full-day experience of discovery, dialogue, and demonstration:
                </p>
                <ul className="space-y-3">
                  {[
                    '🐛 BSF Protein Systems – Turning waste into wealth',
                    '🐟 Modular Fish Ponds – Affordable aquaculture in action',
                    '🧠 Smart Classrooms & Monitoring Systems – The future of learning',
                    '🧪 Scientific Equipment Showcase & Sale – Up to 40% discounts on essential tools for schools, farms, and labs',
                    '🤝 Networking Sessions – Build partnerships and share ideas',
                    '🎲 Student Scrabble Challenge – Win trophies and prizes',
                    '⚽ Soccer Match – Science & Teachers vs. Broadway Corporation',
                    '🍢 Broadway Roadhouse Refreshments – BBQ, cocktails, wines & more (light fare only)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="mr-3 mt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special Highlights */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🎁</span>
                  Special Highlights
                </h3>
                <ul className="space-y-3">
                  {[
                    '🏅 Trophies for student winners',
                    '🎁 Gifts for attendees',
                    '🎓 Recognition for educators and partners',
                    '💸 Exclusive Equipment Discounts – One-day-only deals up to 40% off',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why It Matters */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">💡</span>
                  Why It Matters
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This Open House is more than an event—it&apos;s a movement. Join us to explore how
                  science, sustainability, and education can transform communities and empower the
                  next generation of African innovators.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Join Us at the Broadway Corporation Open House!
                  </h3>
                  <p className="text-gray-600">
                    Explore science, sustainability, and innovation on October 11th, 2025 in
                    Simbock, Yaoundé.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Organization / School Name
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your organization or school name"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Role / Title
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="Teacher">Teacher</option>
                      <option value="School Owner">School Owner</option>
                      <option value="Educator">Educator</option>
                      <option value="Student">Student</option>
                      <option value="Science Enthusiast">Science Enthusiast</option>
                      <option value="Sustainable Agriculture Advocate">
                        Sustainable Agriculture Advocate
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Activities */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Will you participate in any of the following? (Check all that apply)
                    </label>
                    <div className="space-y-3">
                      {[
                        'Scrabble Challenge (Students)',
                        'Soccer Match (Teachers vs Broadway)',
                        'Scientific Equipment Purchase',
                        'Networking Session',
                      ].map((activity) => (
                        <label key={activity} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.activities.includes(activity)}
                            onChange={() => handleCheckboxChange(activity)}
                            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                          />
                          <span className="ml-3 text-gray-700">{activity}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Language Preference */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Preferred Language
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="language"
                          value="English"
                          checked={formData.language === 'English'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                        />
                        <span className="ml-3 text-gray-700">English</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="language"
                          value="French"
                          checked={formData.language === 'French'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                        />
                        <span className="ml-3 text-gray-700">French</span>
                      </label>
                    </div>
                  </div>

                  {/* Comments */}
                  <div>
                    <label
                      htmlFor="comments"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Additional Comments or Questions
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows={4}
                      value={formData.comments}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Any additional comments or questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-emerald-700 hover:to-teal-700 focus:ring-4 focus:ring-emerald-300 transition-all duration-200 transform hover:scale-105"
                  >
                    Confirm My Attendance
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
