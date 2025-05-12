
import { useState } from "react";
import { products, categories } from "@/data/mockData";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = products.filter((product) => {
    // First filter by category
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    
    // Then filter by search query
    const searchMatch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.seller_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.location.toLowerCase().includes(searchQuery.toLowerCase());
      
    return categoryMatch && searchMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative mb-12 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/90 to-emerald-900/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
          alt="Fresh produce at a market"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4">
            Fresh Farm Produce <br />At Your Doorstep
          </h1>
          <p className="text-emerald-50 text-lg md:text-xl max-w-2xl mb-8">
            Direct from local farmers and green grocers. Quality, fresh, and affordable.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg">
            <Input 
              type="text" 
              placeholder="Search for fruits, vegetables..."
              className="bg-white/90 border-0 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="h-12 px-6 bg-clay-500 hover:bg-clay-600 text-white">
              <Search className="mr-2 h-5 w-5" /> Search
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="w-full justify-start overflow-x-auto flex-nowrap">
            <TabsTrigger value="all" className="px-6">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="px-6"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-2xl font-medium text-gray-700">No products found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search or category filter</p>
        </div>
      )}
      
      {/* Features Section */}
      <div className="mt-16 mb-8">
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-gray-800 mb-8 text-center">
          Why Choose Mama Mboga?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-emerald-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="text-xl font-poppins font-medium text-emerald-800 mb-2">Fresh from Farms</h3>
            <p className="text-gray-600">Direct from local farmers to ensure the freshest produce at your table.</p>
          </div>
          <div className="bg-cream-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🚚</span>
            </div>
            <h3 className="text-xl font-poppins font-medium text-clay-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Same-day delivery to ensure your produce arrives fresh at your doorstep.</p>
          </div>
          <div className="bg-clay-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-clay-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-xl font-poppins font-medium text-clay-800 mb-2">Fair Prices</h3>
            <p className="text-gray-600">Eliminating middlemen means better prices for you and better returns for farmers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
