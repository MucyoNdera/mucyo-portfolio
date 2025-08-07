import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">Let's Connect</h3>
              <p className="text-gray-900 mb-6">
                I'm always interested in collaborating on:
              </p>
              <ul className="space-y-2 text-gray-900">
                <li>• Environmental and Agricultural Research</li>
                <li>• GIS and Remote Sensing Consultancy</li>
                <li>• Environmental Advocacy</li>
                <li>• Volunteering Opportunities</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-900">
                <MapPin className="h-5 w-5 mr-3 text-green-700" />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center text-gray-900">
                <Mail className="h-5 w-5 mr-3 text-green-700" />
                <a href="mailto:ndera0021@gmail.com" className="hover:text-green-700 transition-colors duration-150">
                  ndera0021@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-900">
                <Phone className="h-5 w-5 mr-3 text-green-700" />
                <a href="tel:+250787475900" className="hover:text-green-700 transition-colors duration-150">
                  +250 787 475 900
                </a>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/mucyo-ndera-tuyizere-3a7968229" className="text-green-700 hover:text-green-800 transform transition-transform duration-150 hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/nderamucyo" className="text-green-700 hover:text-green-800 transform transition-transform duration-150 hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://github.com/MucyoNdera" className="text-green-700 hover:text-green-800 transform transition-transform duration-150 hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="bg-white/90 rounded-xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-150"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-150"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-150"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors duration-150 transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}