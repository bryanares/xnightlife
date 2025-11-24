import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Reservation Request:', data);
    alert('Reservation request sent! We will confirm shortly.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary py-20 px-4 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">Contact & Reserve</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Book your table or get in touch with us.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-gray-400">Mukuyu, Opposite Hotel Nokras<br />Murang'a, 10200</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-gray-400">+254 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm mt-1">Available 12pm - 10pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-gray-400">reservations@x-nightlife.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Hours</h4>
                  <div className="text-gray-400 grid grid-cols-2 gap-x-8">
                    <span>Mon - Wed</span>
                    <span>4pm - 12am</span>
                    <span>Thu - Sat</span>
                    <span>4pm - 3am</span>
                    <span>Sun</span>
                    <span>4pm - 11pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-secondary border border-gray-800 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
               <span className="relative z-10 text-white font-bold uppercase tracking-widest bg-black/50 px-4 py-2">Map View</span>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-secondary p-8 md:p-12 border border-gray-800">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-2">Make a Reservation</h2>
            <p className="text-gray-400 mb-8">Secure your spot for an unforgettable night.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="+254 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    required
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Guests</label>
                  <select 
                    id="guests" 
                    name="guests" 
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  >
                    {[2, 3, 4, 5, 6, 8, 10, '10+'].map(num => (
                      <option key={num} value={num}>{num} People</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Special Requests</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Birthday, Anniversary, VIP..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary mt-4">
                Confirm Booking
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
