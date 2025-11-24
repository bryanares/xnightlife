import gamesData from '../data/games.json';

const Games = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-secondary py-20 px-4 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">Games & Fun</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Challenge your friends. Join a tournament. Play to win.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamesData.games.map((game) => (
            <div key={game.id} className="bg-secondary border border-gray-800 group hover:border-accent transition-colors duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${game.image})`, backgroundColor: '#222' }}
                ></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
                <p className="text-gray-400 mb-6 h-12">{game.description}</p>
                
                <div className="space-y-3 border-t border-gray-800 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Cost</span>
                    <span className="text-accent font-bold">{game.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Schedule</span>
                    <span className="text-white">{game.schedule}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tournament Banner */}
        <div className="mt-20 bg-accent text-black p-12 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-4">Weekly Poker Tournament</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-medium">
            Join us every Thursday night for our Black Jack tournament. Big prizes, professional dealers, and great vibes.
          </p>
          <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;
