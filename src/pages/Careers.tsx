import React, { useState, useEffect } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import { User, Mail, Phone, FileText, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import ContactModal from '../components/ContactModal';

const experienceLevels = [
  'Entry Level (0-2 years)',
  'Mid Level (3-5 years)',
  'Senior Level (6-10 years)',
  'Expert Level (10+ years)'
];

const positionTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Apprenticeship'
];

const availabilityOptions = [
  'Immediate',
  'Within 2 weeks',
  'Within 1 month',
  'Within 3 months',
  'Other'
];

const Careers: React.FC = () => {
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
    formData.append("subject", "New Job Application");
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
              <span className="text-white">Join Our </span>
              <span className="text-primary-500">Team</span>
            </h1>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Skilled plumber seeking a team that values quality craftsmanship and growth? We're always looking for dedicated professionals to join our family.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="metallic-card p-6 text-center">
                <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Professional Growth</h3>
                <p className="text-gray-300">Advance your skills and career in a supportive environment.</p>
              </div>
              
              <div className="metallic-card p-6 text-center">
                <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Continuous Learning</h3>
                <p className="text-gray-300">Stay current with latest plumbing technologies and techniques.</p>
              </div>
              
              <div className="metallic-card p-6 text-center">
                <div className="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Team Environment</h3>
                <p className="text-gray-300">Work with experienced professionals in a collaborative setting.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto">
            <div className="metallic-card p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 font-heading">Job Application</h2>
              
              {result && (
                <div className={`rounded-md p-4 mb-6 ${
                  result === "Form Submitted Successfully" 
                    ? "bg-green-800/30 border border-green-700 text-green-100"
                    : result === "Sending...."
                    ? "bg-blue-800/30 border border-blue-700 text-blue-100"
                    : "bg-primary-900/30 border border-primary-700 text-primary-100"
                }`}>
                  {result === "Form Submitted Successfully" 
                    ? "Thank you for your application! We'll review your information and contact you if there's a good fit for our team."
                    ? "Thank you! We'll review your application and contact you if there's a good fit."
                    : result}
                </div>
              )}
              
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-300 mb-1">
                      First Name*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="first_name"
                        className="input-field pl-10"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-300 mb-1">
                      Last Name*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="last_name"
                        className="input-field pl-10"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                        placeholder="john.smith@email.com"
                        required
                      />
                    </div>
                  </div>
                  
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
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-300 mb-1">
                    Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="input-field pl-10"
                      placeholder="123 Main St, Fort Worth, TX 76179"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="position" className="block text-gray-300 mb-1">
                      Position of Interest
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="position"
                        name="position_interest"
                        className="input-field pl-10"
                        placeholder="Plumber, Apprentice, etc."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="positionType" className="block text-gray-300 mb-1">
                      Position Type
                    </label>
                    <select
                      id="positionType"
                      name="position_type"
                      className="input-field"
                    >
                      <option value="">Select position type</option>
                      {positionTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="experience" className="block text-gray-300 mb-1">
                      Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience_level"
                      className="input-field"
                    >
                      <option value="">Select experience level</option>
                      {experienceLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="availability" className="block text-gray-300 mb-1">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      className="input-field"
                    >
                      <option value="">Select availability</option>
                      {availabilityOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="licenses" className="block text-gray-300 mb-1">
                    Licenses & Certifications
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="licenses"
                      name="licenses_certifications"
                      className="input-field pl-10"
                      placeholder="Master Plumber License, Journeyman License, etc."
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="experience_details" className="block text-gray-300 mb-1">
                    Work Experience & Skills
                  </label>
                  <textarea
                    id="experience_details"
                    name="work_experience"
                    rows={4}
                    className="input-field"
                    placeholder="Please describe your relevant work experience, skills, and any specializations..."
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="additional_info" className="block text-gray-300 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="additional_info"
                    name="additional_info"
                    rows={3}
                    className="input-field"
                    placeholder="Tell us why you'd like to join our team, salary expectations, or any other relevant information..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-md transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4 font-heading">Questions About Employment?</h3>
            <p className="text-gray-300 mb-6">
              Have questions about working with us? Give us a call to learn more about opportunities.
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

export default Careers;