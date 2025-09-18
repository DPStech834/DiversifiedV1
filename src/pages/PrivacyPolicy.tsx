import React, { useEffect } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import { Shield, Eye, Lock, FileText, Mail, Phone } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-dark-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-8 font-['Dancing_Script'] text-center">
              <span className="text-white">Privacy </span>
              <span className="text-primary-500">Policy</span>
            </h1>
            
            <div className="metallic-card p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary-500" />
                <p className="text-gray-300 text-sm">
                  <strong>Effective Date:</strong> January 1, 2025 | <strong>Last Updated:</strong> September 9, 2025
                </p>
              </div>
              
              <p className="text-gray-300 text-lg mb-6">
                We're committed to protecting your privacy and securing your personal information. This policy explains how we collect, use, and safeguard your information.
              </p>
            </div>

            <div className="space-y-8">
              {/* Information We Collect */}
              <div className="metallic-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-primary-500" />
                  <h2 className="text-2xl font-bold font-heading">Information We Collect</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                    <p>When you request services or contact us, we may collect:</p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Name and contact information (phone number, email address, mailing address)</li>
                      <li>Service address and property details</li>
                      <li>Service preferences and scheduling information</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                      <li>Communication records and service history</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                    <p>When you visit our website, we automatically collect:</p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>IP address and browser information</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Device type and operating system</li>
                      <li>Referring website information</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="metallic-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary-500" />
                  <h2 className="text-2xl font-bold font-heading">How We Use Your Information</h2>
                </div>
                
                <div className="text-gray-300 space-y-3">
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Provide and improve our plumbing services</li>
                    <li>Schedule appointments and communicate about service visits</li>
                    <li>Process payments and maintain service records</li>
                    <li>Send service reminders and maintenance notifications</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Comply with legal obligations and industry regulations</li>
                    <li>Improve our website and service offerings</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="metallic-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-primary-500" />
                  <h2 className="text-2xl font-bold font-heading">Information Sharing and Disclosure</h2>
                </div>
                
                <div className="text-gray-300 space-y-4">
                  <p>We don't sell, trade, or rent your personal information. We may share information only in these circumstances:</p>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Service Providers</h3>
                    <p>We may share information with trusted service providers who help operate our business. These providers are contractually obligated to protect your information.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Legal Requirements</h3>
                    <p>We may disclose information when required by law or to protect rights, property, or safety.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Business Transfers</h3>
                    <p>In mergers, acquisitions, or asset sales, customer information may be transferred as part of the transaction.</p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="metallic-card p-6 md:p-8">
                <h2 className="text-2xl font-bold font-heading mb-4">Data Security</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We implement security measures to protect your information against unauthorized access, alteration, disclosure, or destruction:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Secure data transmission using SSL encryption</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure storage of physical and electronic records</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="metallic-card p-6 md:p-8">
                <h2 className="text-2xl font-bold font-heading mb-4">Your Rights and Choices</h2>
                <div className="text-gray-300 space-y-3">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Access and review the personal information we have about you</li>
                    <li>Request corrections to inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information (subject to legal and business requirements)</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request information about how your data is used and shared</li>
                  </ul>
                  <p className="mt-3">To exercise these rights, please contact us using the information provided below.</p>
                  <p className="mt-3">To exercise these rights, contact us using the information below.</p>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div className="metallic-card p-6 md:p-8">
                <h2 className="text-2xl font-bold font-heading mb-4">Cookies and Website Analytics</h2>
                <div className="text-gray-300 space-y-3">
                  <p>Our website may use cookies to enhance browsing and analyze traffic. Control cookie settings through your browser.</p>
                  <p>We use analytics to understand visitor interactions, helping improve our services and user experience.</p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div className="metallic-card p-6 md:p-8">
                <h2 className="text-2xl font-bold font-heading mb-4">Third-Party Links</h2>
                <p className="text-gray-300">
                  Our website may contain third-party links. We're not responsible for external site privacy practices. Review their privacy policies before visiting.
                </p>
              </div>

              {/* Policy Updates */}
              <div className="metallic-card p-6 md:p-8">
                <h2 className="text-2xl font-bold font-heading mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-300">
                  We may update this policy to reflect practice or law changes. We'll notify you of material changes by posting updates with new effective dates. Continued service use indicates acceptance.
                </p>
              </div>

              {/* Contact Information */}
              <div className="metallic-card p-6 md:p-8 bg-primary-900/20 border-primary-600/30">
                <h2 className="text-2xl font-bold font-heading mb-4">Contact Us</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Questions about this Privacy Policy or our privacy practices? Contact us:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <p>Office: (817) 439-2488</p>
                        <p>Fax: (817) 439-2489</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <p>schedule@diversifiedplumbingservices.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-dark-700">
                    <p className="font-semibold text-white mb-2">Mailing Address:</p>
                    <p>
                      Diversified Plumbing Services<br />
                      3160 Rockwell Lane<br />
                      Fort Worth, TX 76179
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PrivacyPolicy;