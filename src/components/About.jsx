import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Mission: Making a Difference in Times of Crisis</h1>
      
      <div className="prose lg:prose-lg mx-auto">
        <p className="mb-6">
          We are unwavering in our commitment to providing immediate relief and long-term support to individuals and communities impacted by humanitarian crises worldwide. Our mission is grounded in compassion, action, and collaboration. By focusing on the most urgent needs, we aim to bring hope and healing to those in the midst of life-altering challenges.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How Your Contribution Makes a Tangible Impact</h2>
        <p className="mb-4">Your donation directly supports critical relief efforts, transforming lives when it matters most. Here's how your generosity helps:</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Emergency Medical Assistance:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Delivering essential medical supplies such as first-aid kits, antibiotics, and surgical tools.</li>
              <li>Providing on-the-ground healthcare services through mobile clinics and medical teams.</li>
              <li>Supporting immunization programs to prevent the spread of disease in crisis zones.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Food Security and Clean Water Access:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Distributing nutritious food packages to combat hunger and malnutrition.</li>
              <li>Setting up clean water stations and providing water purification solutions.</li>
              <li>Educating communities about safe water practices to reduce waterborne diseases.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Temporary Shelter and Safety:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Supplying materials for temporary shelters to protect families from harsh weather conditions.</li>
              <li>Creating safe spaces for women, children, and vulnerable groups to reduce the risk of exploitation and harm.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Psychological and Emotional Support:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Offering counseling and mental health services to help individuals cope with trauma.</li>
              <li>Establishing support groups and community-based healing initiatives.</li>
              <li>Providing resources for children to continue education and maintain a sense of normalcy.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Community Rebuilding and Resilience:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Assisting in the reconstruction of homes, schools, and vital infrastructure.</li>
              <li>Supporting vocational training and livelihood programs to restore economic stability.</li>
              <li>Collaborating with local leaders to rebuild stronger, more resilient communities.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>100% Transparency:</strong> Every penny you donate goes directly to on-the-ground relief efforts.</li>
          <li><strong>Local Partnerships:</strong> We work closely with trusted local organizations and community leaders to ensure aid reaches those who need it most efficiently and effectively.</li>
          <li><strong>Sustainable Impact:</strong> Beyond immediate relief, we focus on empowering communities with the tools and resources to recover and thrive.</li>
        </ul>

        <p className="mb-6">
          Your support is more than a donation; it is a lifeline to those in desperate need. Together, we can make a profound difference in the lives of individuals and families facing unimaginable hardships. Join us in turning compassion into action today.
        </p>

        <div className="text-center mt-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Donate Now – Every Second Counts.</h2>
          <Link 
            to="/donate" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  )
}
