import { Link } from 'react-router-dom';
import { ArrowRight, Music, Utensils, Gamepad2, Calendar } from 'lucide-react';
import homeFood from '../assets/images/foodndrinks-home.jpg'
import musicHome from '../assets/images/music-home.jpg'
import barfrontHome from '../assets/images/barfront-home.jpg'
import gamesHome from '../assets/images/games-home.jpg'

const Home = () => {
  return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative h-[80vh] flex items-center justify-center bg-black overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-10"></div>
				{/* Placeholder for Hero Image */}
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center opacity-50"></div>

				<div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter uppercase">
						X-Nightlife
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 mb-10 font-light tracking-wide">
						Elevated Entertainment. Premium Drinks. Unforgettable Nights.
					</p>
					<div className="flex flex-col md:flex-row gap-4 justify-center">
						<Link to="/contact" className="btn-primary">
							Book a Table
						</Link>
						<Link to="/events" className="btn-outline">
							See Events
						</Link>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Menu Feature */}
					<Link
						to="/menu"
						className="group relative h-80 overflow-hidden border border-gray-800"
					>
						<div
							className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
							style={{ backgroundImage: `url(${homeFood})` }}
						></div>
						<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
							<div className="flex items-center gap-3 mb-2 text-accent">
								<Utensils size={24} />
								<span className="text-sm font-bold uppercase tracking-widest">
									Taste
								</span>
							</div>
							<h3 className="text-3xl font-bold text-white mb-2">
								Signature Menu
							</h3>
							<p className="text-gray-400 flex items-center gap-2 group-hover:text-white transition-colors">
								Explore Food & Drinks <ArrowRight size={16} />
							</p>
						</div>
					</Link>

					{/* Events Feature */}
					<Link
						to="/events"
						className="group relative h-80 overflow-hidden border border-gray-800"
					>
						<div
							className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
							style={{ backgroundImage: `url(${musicHome})` }}
						></div>
						<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
							<div className="flex items-center gap-3 mb-2 text-accent">
								<Music size={24} />
								<span className="text-sm font-bold uppercase tracking-widest">
									Listen
								</span>
							</div>
							<h3 className="text-3xl font-bold text-white mb-2">
								Live Events
							</h3>
							<p className="text-gray-400 flex items-center gap-2 group-hover:text-white transition-colors">
								View Schedule <ArrowRight size={16} />
							</p>
						</div>
					</Link>

					{/* Games Feature */}
					<Link
						to="/games"
						className="group relative h-80 overflow-hidden border border-gray-800"
					>
						<div
							className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
							style={{ backgroundImage: `url(${gamesHome})` }}
						></div>
						<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
							<div className="flex items-center gap-3 mb-2 text-accent">
								<Gamepad2 size={24} />
								<span className="text-sm font-bold uppercase tracking-widest">
									Play
								</span>
							</div>
							<h3 className="text-3xl font-bold text-white mb-2">
								Games & Fun
							</h3>
							<p className="text-gray-400 flex items-center gap-2 group-hover:text-white transition-colors">
								See Games <ArrowRight size={16} />
							</p>
						</div>
					</Link>

					{/* Reservations Feature */}
					<Link
						to="/contact"
						className="group relative h-80 overflow-hidden border border-gray-800"
					>
						<div
							className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
							style={{ backgroundImage: `url(${barfrontHome})` }}
						></div>
						<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
							<div className="flex items-center gap-3 mb-2 text-accent">
								<Calendar size={24} />
								<span className="text-sm font-bold uppercase tracking-widest">
									Reserve
								</span>
							</div>
							<h3 className="text-3xl font-bold text-white mb-2">
								Book a Table
							</h3>
							<p className="text-gray-400 flex items-center gap-2 group-hover:text-white transition-colors">
								Contact Us <ArrowRight size={16} />
							</p>
						</div>
					</Link>
				</div>
			</section>

			{/* About / Info Section */}
			<section className="py-20 bg-secondary text-center px-4">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wider">
						The Ultimate Venue
					</h2>
					<p className="text-gray-400 leading-relaxed mb-8">
						Located in the heart of the city, X-Nightlife brings together
						premium cocktails, gourmet bites, and world-class entertainment.
						Whether you're here for a live band, a game of pool, or just to
						unwind, we provide the perfect atmosphere.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
						<div>
							<h4 className="text-accent text-xl font-bold mb-2">Open Late</h4>
							<p className="text-gray-500">Until 3am Fri-Sat</p>
						</div>
						<div>
							<h4 className="text-accent text-xl font-bold mb-2">Live Music</h4>
							<p className="text-gray-500">Every Weekend</p>
						</div>
						<div>
							<h4 className="text-accent text-xl font-bold mb-2">
								Premium Bar
							</h4>
							<p className="text-gray-500">Craft Cocktails</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
