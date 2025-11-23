import { useState } from 'react';
import menuData from '../data/menu.json';
import MenuCategory from '../components/MenuCategory';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = menuData.categories;
  const categoryIds = ['all', ...categories.map(c => c.id)];

  const displayedCategories = activeCategory === 'all'
    ? categories
    : categories.filter(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-secondary py-20 px-4 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">Our Menu</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Curated cocktails, craft beers, and gourmet bites designed to elevate your night.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-gray-800 mb-12">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-8 py-4 min-w-max justify-center md:justify-center">
            {categoryIds.map(id => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  activeCategory === id
                    ? 'text-accent border-b-2 border-accent pb-1'
                    : 'text-gray-500 hover:text-white pb-1'
                }`}
              >
                {id === 'all' ? 'All Items' : categories.find(c => c.id === id)?.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4">
        {displayedCategories.map(category => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
