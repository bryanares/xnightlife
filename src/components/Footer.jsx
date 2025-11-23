import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-2">X-Nightlife</h3>
            <p className="text-gray-400 text-sm">Est. 2023</p>
          </div>
          
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              <Twitter size={24} />
            </a>
          </div>

          <div className="text-center md:text-right text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} X-Nightlife. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
