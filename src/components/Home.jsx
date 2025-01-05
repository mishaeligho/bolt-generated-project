import React from 'react'
import { Link } from 'react-router-dom'
import NewsletterSignup from './NewsletterSignup'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Help Those Affected by Crisis: Be a Lifeline in Times of Need
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your compassion and generosity can transform lives. Millions of people around the world face the devastating effects of natural disasters, conflicts, and other humanitarian crises every year. With your support, we can bring immediate relief and long-term hope to those in desperate need.
            </p>
            <Link 
              to="/donate" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Donate Now: Turn Kindness into Action
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Message */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xl text-gray-700">
              Your donation is more than a contribution—it's a lifeline that helps us provide essential aid to those who need it most. By supporting our efforts, you enable us to act swiftly and effectively in the face of crises, ensuring help reaches the most vulnerable when every second counts.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">
            Ways Your Donation Makes an Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Emergency Relief Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Emergency Relief: Immediate Assistance When It's Needed Most</h3>
              <p className="text-gray-600 mb-4">
                In the aftermath of disasters, people often lack basic necessities for survival. Your donation helps us:
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Distribute life-saving food packages to prevent hunger and malnutrition</li>
                <li>• Provide clean water and water purification supplies</li>
                <li>• Deliver emergency medical supplies and first-aid kits</li>
              </ul>
              <p className="text-blue-600 font-medium">
                Every meal, every sip of clean water, and every bandage provided can save a life.
              </p>
            </div>

            {/* Medical Aid Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Medical Aid: Saving Lives and Providing Care</h3>
              <p className="text-gray-600 mb-4">
                Crises often overwhelm local healthcare systems, leaving many without access to critical care. Your generosity enables us to:
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Support medical facilities with supplies and equipment</li>
                <li>• Deploy mobile clinics to reach remote areas</li>
                <li>• Deliver vaccinations and medications</li>
              </ul>
              <p className="text-blue-600 font-medium">
                By donating, you ensure that no one is left without the care they urgently need.
              </p>
            </div>

            {/* Children's Support Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Children's Support: Securing a Future for the Most Vulnerable</h3>
              <p className="text-gray-600 mb-4">
                Children are often the most affected in times of crisis, losing their homes, schools, and sense of security. With your help, we can:
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Provide safe shelters and nutritious meals</li>
                <li>• Distribute educational supplies</li>
                <li>• Offer counseling and emotional support</li>
              </ul>
              <p className="text-blue-600 font-medium">
                Your support gives children the chance to reclaim their childhood and build a brighter future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <NewsletterSignup />
    </>
  )
}
