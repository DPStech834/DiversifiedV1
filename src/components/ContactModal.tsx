import React from 'react';
import { X, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[200] p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-dark-800 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold font-heading text-white">Contact Us</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary-600 rounded-full p-3 text-white flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-heading text-white">Phone</h4>
                <p className="text-gray-300">
                  <a href="tel:+18174392488" className="hover:text-primary-500 transition-colors">
                    Office – (817) 439-2488
                  </a><br />
                  <span className="text-sm text-gray-400">Fax – (817) 439-2489</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary-600 rounded-full p-3 text-white flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-heading text-white">Email</h4>
                <p className="text-gray-300">
                  <a href="mailto:schedule@diversifiedplumbingservices.com" className="hover:text-primary-500 transition-colors break-all">
                    schedule@diversifiedplumbingservices.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary-600 rounded-full p-3 text-white flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-heading text-white">Address</h4>
                <p className="text-gray-300">
                  <strong>Office:</strong><br />
                  834 Blue Mound Road West<br />
                  Haslet, Texas<br />
                  <br />
                  <strong>Mailing:</strong><br />
                  3160 Rockwell Lane<br />
                  Fort Worth, TX 76179
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary-600 rounded-full p-3 text-white flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-heading text-white">Business Hours</h4>
                <p className="text-gray-300">
                  Monday - Friday: 7:30 AM - 4:30 PM<br />
                  Saturday: Closed<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="mailto:schedule@diversifiedplumbingservices.com"
              className="w-full block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-md transition-colors text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;