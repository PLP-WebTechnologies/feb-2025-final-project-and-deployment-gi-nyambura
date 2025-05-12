
import { useState } from "react";
import { categories, products } from "@/data/mockData";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
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
      {/* Back button */}
      <Link to="/" className="inline-flex items-center text-emerald-600 mb-6 hover:text-emerald-800 transition-colors">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to home
      </Link>

      <h1 className="text-3xl font-poppins font-bold text-gray-800 mb-6">
        Browse Categories
      </h1>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search for fruits, vegetables..."
            className="pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button 
            size="icon" 
            variant="ghost" 
            className="absolute right-0 top-0 h-full"
          >
            <Search className="h-5 w-5" />
          </Button>
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
    </div>
  );
};

export default Categories;
