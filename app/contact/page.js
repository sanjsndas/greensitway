import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="relative bg-green-800">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-green-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-6 sm:py-32 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-6 text-xl leading-8 text-green-100 max-w-3xl mx-auto">
            We'd love to hear about your gardening dreams and answer any questions you may have.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-green-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-green-800">Contact Information</h2>
              <div className="mt-6 space-y-4">
                <div className="flex">
                  <PhoneIcon className="h-6 w-6 text-green-600" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-sm text-gray-600">+1 (555) 123-4567</p>
                    <p className="mt-1 text-sm text