import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    /* 
    =============================================================================
    EMAILJS CONFIGURATION - FOLLOW THESE STEPS:
    =============================================================================
    
    Step 1: Create EmailJS Account
    - Go to https://www.emailjs.com/ and sign up for free
    
    Step 2: Add Email Service
    - Click "Add New Service" in your EmailJS dashboard
    - Select Gmail (or your preferred email provider)
    - Connect your email account (chris@harborviewimaging.com recommended)
    - Copy the SERVICE ID (looks like: service_abc123)
    
    Step 3: Create Email Template
    - Click "Email Templates" → "Create New Template"
    - Use this template content:
    
      Subject: New Contact Form Submission from {{from_name}}
      
      You have a new message from your website contact form:
      
      Name: {{from_name}}
      Email: {{from_email}}
      Company: {{company}}
      
      Message:
      {{message}}
      
      ---
      Sent via Harborview Imaging Co. Contact Form
    
    - Save the template and copy the TEMPLATE ID (looks like: template_xyz789)
    
    Step 4: Get Public Key
    - Go to "Account" → "General"
    - Copy your PUBLIC KEY (looks like: aBcD123EfGh456)
    
    Step 5: Add Credentials Below
    - Replace the placeholder values with your actual credentials
    
    =============================================================================
    */

    // EmailJS Configuration
    const SERVICE_ID = 'service_rbx7i9b';
    const TEMPLATE_ID = 'template_ez1sitj';
    const PUBLIC_KEY = 'dBYeVdhDSqey8irgU';

    // Check if credentials are configured
    const isConfigured = 
      SERVICE_ID !== 'YOUR_SERVICE_ID' && 
      TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' && 
      PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

    if (!isConfigured) {
      console.error('⚠️ EmailJS Configuration Required!');
      console.log('📧 Follow the instructions in ContactSection.jsx (lines 20-62)');
      console.log('📝 Form data that would be sent:', formData);
      
      await Swal.fire({
        icon: 'info',
        title: 'EmailJS Setup Required',
        html: `
          <div style="text-align: left;">
            <p>To enable the contact form:</p>
            <ol style="margin-left: 20px;">
              <li>Create account at <a href="https://www.emailjs.com/" target="_blank">EmailJS.com</a></li>
              <li>Add email service and get Service ID</li>
              <li>Create template and get Template ID</li>
              <li>Copy your Public Key</li>
              <li>Update credentials in ContactSection.jsx</li>
            </ol>
            <p><small>Full instructions are in the code file (lines 20-62)</small></p>
          </div>
        `,
        confirmButtonColor: '#505081',
        confirmButtonText: 'Got it!'
      });
      setIsSubmitting(false);
      return;
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      message: formData.message,
      to_email: 'chris@harborviewimaging.com'
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('✅ Email sent successfully to chris@harborviewimaging.com!', response);

      // Show success message
      await Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for reaching out. I will get back to you within 24 hours.',
        confirmButtonColor: '#505081',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });

    } catch (error) {
      console.error('❌ Failed to send email:', error);
      // Show error message
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again or email us directly at chris@harborviewimaging.com',
        confirmButtonColor: '#505081',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Ready to Elevate Your Products?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Let's discuss your project and how we can transform your product photos into hyper-realistic lifestyle imagery that captures attention, builds trust, and increases sales.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/20 text-primary-400 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Me</h4>
                  <a href="mailto:chris@harborviewimaging.com" className="text-neutral-300 hover:text-primary-300 transition-colors">
                    chris@harborviewimaging.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/20 text-primary-400 flex-shrink-0">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Quick Response</h4>
                  <p className="text-neutral-300">I typically respond within 24 hours during business days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-none transition-colors"
                  placeholder="Tell me about your project and what you would like to achieve..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="h-5 w-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
