import React, { useState, useEffect } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import { User, Mail, Phone, Building2, MapPin, Calendar, FileText, Users } from 'lucide-react';
import ContactModal from '../components/ContactModal';

const projectTypes = [
  'Custom Homes',
  'Production Homes',
  'Semi Custom Homes',
  'Townhomes/Condos',
  'Other'
];

const projectSizes = [
  '1-5 units',
  '6-20 units',
  '21-50 units',
  '51-100 units',
  '100+ units'
];

const timelines = [
  'Immediate (within 30 days)',
  '1-3 months',
  '3-6 months',
  '6-12 months',
  'Planning phase (12+ months)'
];

const Partners: React.FC = () => {
  const [result, setResult] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "7e3895d2-0351-47c8-96dd-33c91b541ee5");
    formData.append("access_key", "861b8109-5f8f-4215-b9e8-97cfe06ac1b4");
    formData.append("subject", "New Builder Partnership Inquiry");
    formData.append("from_name", "Company Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-dark-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-8 font-['Dancing_Script']">
              <span className="text-white">Builder </span>
              <span className="text-primary-500">Partnership</span>
            </h1>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Partner with us for residential construction projects. We specialize in working with builders to deliver quality solutions on time and within budget.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="metallic-card p-6 text-center">
                <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Custom & Production Homes</h3>
                <p className="text-gray-300">Expert in custom builds and production housing developments.</p>
              </div>
              
              <div className="metallic-card p-6 text-center">
                <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Reliable Scheduling</h3>
                <p className="text-gray-300">Dependable timelines that keep builds on track.</p>
              </div>
              
              <div className="metallic-card p-6 text-center">
                <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Dedicated Support</h3>
                <p className="text-gray-300">Direct communication and project management for seamless collaboration.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto">
            <div className="metallic-card p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 font-heading">Builder Partnership Inquiry</h2>
              
              {result && (
                <div className={`rounded-md p-4 mb-6 ${
                  result === "Form Submitted Successfully" 
                    ? "bg-green-800/30 border border-green-700 text-green-100"
                    : result === "Sending...."
                    ? "bg-blue-800/30 border border-blue-700 text-blue-100"
                    : "bg-primary-900/30 border border-primary-700 text-primary-100"
                }`}>
                  {result === "Form Submitted Successfully" 
                    ? "Thank you for your inquiry! We'll review your information and contact you within 24 hours to discuss partnership opportunities."
                    ? "Thank you! We'll review your information and contact you within 24 hours about partnership opportunities."
                    : result}
                </div>
              )}
              
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="companyName" className="block text-gray-300 mb-1">
                      Company Name*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building2 className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="companyName"
                        name="company_name"
                        className="input-field pl-10"
                        placeholder="Smith Builders"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="contactName" className="block text-gray-300 mb-1">
                      Contact Name*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="contactName"
                        name="contact_name"
                        className="input-field pl-10"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="title" className="block text-gray-300 mb-1">
                      Title
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FileText className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="title"
                        name="job_title"
                        className="input-field pl-10"
                        placeholder="Vice President"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-1">
                      Email Address*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="input-field pl-10"
                        placeholder="john@smithbuilders.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-1">
                      Phone Number*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone_number"
                        className="input-field pl-10"
                        placeholder="(817) 555-0123"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-gray-300 mb-1">
                      Company Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="address"
                        name="company_address"
                        className="input-field pl-10"
                        placeholder="456 Builder Lane, Plano, TX"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="projectType" className="block text-gray-300 mb-1">
                      Primary Project Type
                    </label>
                    <select
                      id="projectType"
                      name="project_type"
                      className="input-field"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="projectSize" className="block text-gray-300 mb-1">
                      Typical Project Size
                    </label>
                    <select
                      id="projectSize"
                      name="project_size"
                      className="input-field"
                    >
                      <option value="">Select project size</option>
                      {projectSizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="timeline" className="block text-gray-300 mb-1">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="project_timeline"
                      className="input-field"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-1">
                    Project Details & Partnership Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input-field"
                    placeholder="Tell us about your upcoming projects, partnership expectations, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-md transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Partnership Inquiry
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4 font-heading">Ready to Partner?</h3>
            <p className="text-gray-300 mb-6">
              Call us to discuss upcoming projects and partnership opportunities.
            </p>
            <p className="text-gray-300 mb-6">
              Ask to speak with Ashley Collins or Chris Cyphers.
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (817) 439-2488
            </button>
          </div>
        </ScrollReveal>
        
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default Partners;