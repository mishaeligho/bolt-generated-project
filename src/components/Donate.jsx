import React, { useState, useEffect } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { loadStripe } from '@stripe/stripe-js'

export default function Donate() {
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('stripe')
  const [donationType, setDonationType] = useState('once')
  const [stripeLoaded, setStripeLoaded] = useState(false)
  const [stripe, setStripe] = useState(null)

  useEffect(() => {
    const initStripe = async () => {
      try {
        const stripeInstance = await loadStripe('pk_test_51234567890');
        setStripe(stripeInstance);
        setStripeLoaded(true);
      } catch (error) {
        console.error('Failed to load Stripe:', error);
      }
    };

    initStripe();
  }, []);

  const handleStripePayment = async () => {
    if (!stripe) return;
    alert(`In production, this would redirect to Stripe Checkout for ${donationType === 'once' ? 'one-time' : 'monthly'} donation`);
  }

  const predefinedAmounts = {
    once: [30, 50, 100, 250, 500],
    monthly: [10, 25, 50, 100, 200]
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Make a Donation</h2>
      
      <div className="donation-card">
        {/* Donation Type Selection */}
        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setDonationType('once')}
              className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                donationType === 'once'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Give Once
            </button>
            <button
              onClick={() => setDonationType('monthly')}
              className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                donationType === 'monthly'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Give Monthly
            </button>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="mb-8">
          <label className="block text-gray-700 mb-2 font-medium">Select Amount</label>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {predefinedAmounts[donationType].map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  amount === preset 
                    ? 'border-blue-600 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-lg font-semibold">${preset}</div>
                {donationType === 'monthly' && 
                  <div className="text-xs text-gray-500">per month</div>
                }
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-4 border-2 border-gray-200 rounded-lg pl-12 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Custom amount"
              min="1"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
          </div>
        </div>

        {/* Impact Message */}
        {amount > 0 && (
          <div className="mb-8 bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              {donationType === 'monthly' 
                ? `Your monthly gift of $${amount} could provide ongoing support for ${Math.floor(amount/10)} families each month`
                : `Your one-time gift of $${amount} could provide emergency relief for ${Math.floor(amount/25)} people`
              }
            </p>
          </div>
        )}

        {/* Payment Method Selection */}
        <div className="mb-8">
          <label className="block text-gray-700 mb-2 font-medium">Payment Method</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setPaymentMethod('stripe')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
                paymentMethod === 'stripe'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <span className="font-medium">Credit Card</span>
            </button>
            <button
              onClick={() => setPaymentMethod('paypal')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
                paymentMethod === 'paypal'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <span className="font-medium">PayPal</span>
            </button>
          </div>
        </div>

        {/* Payment Buttons */}
        {paymentMethod === 'stripe' ? (
          <button
            onClick={handleStripePayment}
            disabled={!stripeLoaded || !amount}
            className={`w-full p-4 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 ${
              (!stripeLoaded || !amount) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {stripeLoaded 
              ? `${donationType === 'monthly' ? 'Start Monthly Donation' : 'Complete Donation'}`
              : 'Loading...'
            }
          </button>
        ) : (
          <PayPalButtons
            style={{ layout: "horizontal" }}
            disabled={!amount}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                    },
                  },
                ],
              })
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert('Thank you for your donation!')
              })
            }}
          />
        )}

        {/* Security Notice */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>🔒 Secure donation processed by {paymentMethod === 'stripe' ? 'Stripe' : 'PayPal'}</p>
        </div>
      </div>
    </div>
  )
}
