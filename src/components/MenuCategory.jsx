const MenuCategory = ({ category }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-accent mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">
        {category.name}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item) => (
          <div key={item.id} className="group">
            <div className="relative h-64 overflow-hidden mb-4 bg-secondary">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              {/* Placeholder image styling */}
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})`, backgroundColor: '#222' }}
              ></div>
            </div>
            
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                {item.name}
              </h3>
              <span className="text-accent font-bold text-lg">Ksh {item.price}</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
