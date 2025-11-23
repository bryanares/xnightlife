import { useState } from 'react';
import eventsData from '../data/events.json';
import EventCard from '../components/EventCard';

const Events = () => {
  const [filter, setFilter] = useState('all');
  
  const genres = ['all', ...new Set(eventsData.events.map(e => e.genre))];

  const filteredEvents = filter === 'all' 
    ? eventsData.events 
    : eventsData.events.filter(e => e.genre === filter);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-secondary py-20 px-4 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">Live Events</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Experience the best live music and entertainment in the city. From indie rock to deep house, we have it all.
        </p>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setFilter(genre)}
              className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === genre
                  ? 'bg-accent text-black border-accent'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-white hover:text-white'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No events found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
