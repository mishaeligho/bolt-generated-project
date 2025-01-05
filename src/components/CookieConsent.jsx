import React, { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4 px-4 md:px-6 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm sm:text-base">
          <p>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <a 
              href="/privacy-policy" 
              className="underline hover:text-blue-300"
              onClick={(e) => e.preventDefault()}
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-white text-gray-900 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Accept
          </button>
          <button
            onClick={acceptCookies}
            className="border border-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
