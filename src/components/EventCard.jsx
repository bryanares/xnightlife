import { Calendar, Clock, Music } from 'lucide-react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-secondary border border-gray-800 flex flex-col md:flex-row overflow-hidden group hover:border-accent transition-colors duration-300">
      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
        <div className="absolute inset-0 bg-accent/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Placeholder image if source is missing or invalid, but we use the provided path */}
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${event.image})`, backgroundColor: '#333' }}
        ></div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider mb-2">
          <Music size={16} />
          <span>{event.genre}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{event.bandName}</h3>
        <p className="text-gray-400 mb-6 line-clamp-2">{event.description}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-accent" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-accent" />
            <span>{event.time}</span>
          </div>
        </div>
      </div>

      <div className="p-6 flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-800 bg-black/20">
        <div className="text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Tickets</p>
          <p className="text-3xl font-bold text-white mb-3">${event.price}</p>
          <button className="btn-primary text-xs py-2 px-4">
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
