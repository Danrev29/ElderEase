'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthYear: ''
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isLoading, setIsLoading] = useState(false)

  const currentYear = new Date().getFullYear()
  const birthYears = Array.from({ length: 80 }, (_, i) => currentYear - i - 10)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) newErrors.name = 'Please enter your full name'

    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address'

    if (!formData.password) newErrors.password = 'Please create a password'
    else if (formData.password.length < 6) newErrors.password = 'Password should be at least 6 characters long'

    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'

    if (!formData.birthYear) newErrors.birthYear = 'Please select your birth year'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsLoading(true)

      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (response.ok) {
          // Save user info locally
          localStorage.setItem('elderease_user', JSON.stringify(data.user))
          localStorage.setItem('elderease_user_id', data.user.email)
          localStorage.setItem('elderease_is_logged_in', 'true')

          // Redirect to homepage
          router.push('/login')
        } else {
          setErrors({ email: data.error || 'Registration failed' })
        }
      } catch {
        setErrors({ email: 'Network error. Please try again.' })
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let value = e.target.value

    if (e.target.name === 'name') {
      value = value.replace(/[0-9]/g, '')
    }

    if (e.target.name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 11)
    }

    setFormData({ ...formData, [e.target.name]: value })

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-700 text-white p-6 text-center">
          <h2 className="text-3xl font-bold">Join ElderEase</h2>
          <p className="text-blue-100 mt-2">Create your free account to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Full Name */}
          <InputField
            label="Full Name *"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          {/* Email */}
          <InputField
            label="Email Address *"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          {/* Birth Year */}
          <div>
            <label htmlFor="birthYear" className="block text-lg font-medium text-gray-700 mb-2">
              Year of Birth *
            </label>
            <select
              id="birthYear"
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 placeholder-gray-800 ${
                errors.birthYear
                  ? 'border-red-500 focus:ring-red-300'
                  : 'border-gray-300 focus:ring-blue-300 focus:border-blue-500'
              }`}
            >
              <option value="">Select your birth year</option>
              {birthYears.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.birthYear && <p className="mt-2 text-red-600 text-sm ">{errors.birthYear}</p>}
          </div>

          {/* Phone */}
          <InputField
            label="Phone Number (Optional)"
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Password */}
          <InputField
            label="Create Password *"
            name="password"
            type="password"
            placeholder="At least 6 characters"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          {/* Confirm Password */}
          <InputField
            label="Confirm Password *"
            name="confirmPassword"
            type="password"
            placeholder="Enter your password again"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white text-lg py-4 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 transition font-semibold shadow-lg"
          >
            {isLoading ? 'Creating Account...' : 'Create My Account'}
          </button>
        </form>

        <div className="px-6 pb-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-green-600 hover:text-green-700 px-2 py-1 rounded font-semibold text-lg"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

/** Reusable Input Field Component */
function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  error?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-lg font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 placeholder-gray-600 ${
          error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-300 focus:ring-blue-300 focus:border-blue-500'
        }`}
      />
      {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
    </div>
  )
}
