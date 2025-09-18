import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, User } from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';

const RequestForm: React.FC = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "7e3895d2-0351-47c8-96dd-33c91b541ee5");
    formData.append("access_key", "861b8109-5f8f-4215-b9e8-97cfe06ac1b4");
    formData.append("subject", "New Service Request");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e as React.FormEvent<HTMLFormElement>);
  };

  return (
    <section id="request" className="py-8 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="container-custom relative z-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-0">
          <ScrollReveal>
            <div className="backdrop-blur-sm bg-dark-900/40 p-4 md:p-6 rounded-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3 font-['Dancing_Script']">
                <span className="text-white">Request a </span>
                <span className="text-primary-500">Service</span>
              </h2>
              <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
                Schedule service or request a quote. Our team will contact you promptly.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-primary-600 rounded-full p-2 md:p-3 text-white flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 font-heading">Areas of Service/Repair</h3>
                    <div className="text-gray-300 text-sm md:text-base space-y-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs sm:text-sm">
                        <div><strong>76034</strong> - Colleyville</div>
                        <div><strong>76052</strong> - Haslet</div>
                        <div><strong>76092</strong> - Southlake</div>
                        <div><strong>76131</strong> - Fort Worth</div>
                        <div><strong>76137</strong> - Fort Worth</div>
                        <div><strong>76148</strong> - Watauga</div>
                        <div><strong>76179</strong> - Fort Worth</div>
                        <div><strong>76180</strong> - N. Richland Hills</div>
                        <div><strong>76182</strong> - N. Richland Hills</div>
                        <div><strong>76226</strong> - Argyle</div>
                        <div><strong>76244</strong> - Fort Worth</div>
                        <div><strong>76247</strong> - Justin</div>
                        <div><strong>76248</strong> - Keller</div>
                        <div><strong>76262</strong> - Roanoke/Westlake</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-primary-600 rounded-full p-2 md:p-3 text-white flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 font-heading">Phone</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      <a href="tel:+18174392488" className="hover:text-primary-500 transition-colors">
                        Office – (817) 439-2488
                      </a><br />
                      <span className="text-xs md:text-sm text-gray-400">Fax – (817) 439-2489</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-primary-600 rounded-full p-2 md:p-3 text-white flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 font-heading">Email</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      <a href="mailto:schedule@diversifiedplumbingservices.com" className="hover:text-primary-500 transition-colors break-all">
                        schedule@diversifiedplumbingservices.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-primary-600 rounded-full p-2 md:p-3 text-white flex-shrink-0">
                    <Clock className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 font-heading">Business Hours</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Monday - Friday: 7:30 AM - 4:30 PM<br />
                      Saturday: Closed<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="metallic-card p-4 md:p-6 lg:p-8 backdrop-blur-sm bg-dark-900/40">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4 font-heading">Request Service</h3>
              
              {result && (
                <div className={`rounded-md p-3 md:p-4 mb-4 md:mb-6 text-sm md:text-base ${
                  result === "Form Submitted Successfully" 
                    ? "bg-green-800/30 border border-green-700 text-green-100"
                    : result === "Sending...."
                    ? "bg-blue-800/30 border border-blue-700 text-blue-100"
                    : "bg-primary-900/30 border border-primary-700 text-primary-100"
                }`}>
                  {result === "Form Submitted Successfully" 
                    ? "Thank you for your request! We'll contact you shortly to confirm your appointment."
                    : result}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-1 text-sm md:text-base">
                      Full Name*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="full_name"
                        className="input-field pl-8 md:pl-10 py-2 md:py-3 text-sm md:text-base"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-1 text-sm md:text-base">
                      Email Address*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email_address"
                        className="input-field pl-8 md:pl-10 py-2 md:py-3 text-sm md:text-base"
                        placeholder="johndoe@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-1 text-sm md:text-base">
                      Phone Number*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone_number"
                        className="input-field pl-8 md:pl-10 py-2 md:py-3 text-sm md:text-base"
                        placeholder="(817) 439-2488"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-gray-300 mb-1 text-sm md:text-base">
                      Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="address"
                        name="service_address"
                        className="input-field pl-8 md:pl-10 py-2 md:py-3 text-sm md:text-base"
                        placeholder="123 Main St, Haslet, TX"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-3 md:mb-4">
                  <label htmlFor="service" className="block text-gray-300 mb-1 text-sm md:text-base">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="input-field py-2 md:py-3 text-sm md:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Plumbing</option>
                    <option value="commercial">Small Commercial Plumbing</option>
                    <option value="repairs">Repairs & Maintenance</option>
                    <option value="installation">New Installation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-300 mb-1 text-sm md:text-base">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="preferred_date"
                        className="input-field pl-8 md:pl-10 py-2 md:py-3 text-sm md:text-base"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-gray-300 mb-1 text-sm md:text-base">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                      </div>
                      <select
                        id="time"
                        name="time"
                        name="preferred_time"
                        className="input-field pl-8 md:pl-10 py-2 md:py-3 text-sm md:text-base"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (7AM - 10AM)</option>
                        <option value="midday">Midday (10AM - 1PM)</option>
                        <option value="afternoon">Afternoon (1PM - 4PM)</option>
                        <option value="evening">Evening (4PM - 6PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 md:mb-4">
                  <label htmlFor="message" className="block text-gray-300 mb-1 text-sm md:text-base">
                    Message / Description of Issue
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="input-field py-2 md:py-3 text-sm md:text-base"
                    placeholder="Please describe your plumbing issue or service needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 md:py-3 px-4 rounded-md transition-colors shadow-lg hover:shadow-xl text-sm md:text-base"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;