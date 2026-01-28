import React, { useState, useRef } from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';
import axios from 'axios';

// Formspree Form ID - Replace with your form ID from https://formspree.io
const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_ID'; // e.g., f/abc123xyz

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to Formspree
      await axios.post(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      console.error('Formspree error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-white/80">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-forest mb-4">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-forest mb-3">Let's Connect</h3>
              <p className="text-sm text-gray-900 mb-4">
                I'm always interested in collaborating on:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-900">
                <li>Environmental and Agricultural Research</li>
                <li>GIS and Remote Sensing Consultancy</li>
                <li>Environmental Advocacy</li>
                <li>Volunteering Opportunities</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-900">
                <MapPin className="h-5 w-5 mr-3 text-moss" />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center text-gray-900">
                <Mail className="h-5 w-5 mr-3 text-moss" />
                <a href="mailto:ndera0021@gmail.com" className="hover:text-forest transition-colors duration-150">
                  ndera0021@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-900">
                <Phone className="h-5 w-5 mr-3 text-moss" />
                <a href="tel:+250787475900" className="hover:text-forest transition-colors duration-150">
                  +250 787 475 900
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mucyo-ndera-tuyizere-3a7968229" aria-label="LinkedIn" className="text-moss hover:text-forest transform transition-transform duration-150 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/nderamucyo" aria-label="Twitter" className="text-moss hover:text-forest transform transition-transform duration-150 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/MucyoNdera" aria-label="GitHub" className="text-moss hover:text-forest transform transition-transform duration-150 hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="bg-white/90 rounded-xl p-6 shadow-lg">
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-fog border border-sand rounded-md">
                <p className="text-sm font-medium text-forest">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm font-medium text-red-800">Error: {errorMessage}</p>
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-900">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-0.5 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm shadow-sm focus:border-[#4c7a5a] focus:ring focus:ring-[#4c7a5a] focus:ring-opacity-50 transition-colors duration-150"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="mt-0.5 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm shadow-sm focus:border-[#4c7a5a] focus:ring focus:ring-[#4c7a5a] focus:ring-opacity-50 transition-colors duration-150"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-900">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Your message here..."
                  className="mt-0.5 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm shadow-sm focus:border-[#4c7a5a] focus:ring focus:ring-[#4c7a5a] focus:ring-opacity-50 transition-colors duration-150"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-forest text-white py-1.5 px-4 rounded-md text-sm hover:bg-pine disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-150 transform hover:scale-[1.01] active:scale-[0.99]"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
