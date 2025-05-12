
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  ShoppingCart, 
  Minus, 
  Plus, 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  User,
  Sprout,
  Info
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = () => {
    // In a real app, this would add the product to the cart
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity === 1 ? 'item' : 'items'} of ${product.name} added to your cart`,
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    } else {
      toast({
        title: "Maximum stock reached",
        description: `Only ${product.stock} items available`,
        variant: "destructive",
      });
    }
  };

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <Link to="/" className="inline-flex items-center text-emerald-600 mb-6 hover:text-emerald-800 transition-colors">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-auto object-cover rounded-xl"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-1">
            {product.eco_badges.map((badge) => (
              <span 
                key={badge} 
                className={`eco-badge-${badge}`}
              >
                {badge === "organic" ? "🌱 Organic" : 
                 badge === "fresh" ? "✨ Fresh Today" : "🏡 Local Farm"}
              </span>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-poppins font-bold text-gray-800">
            {product.name}
          </h1>

          <div className="flex items-center mt-2">
            <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </div>
            <div className="mx-2 text-gray-300">•</div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              {product.location}
            </div>
          </div>

          <div className="flex items-center mt-6">
            <div className="text-2xl font-bold text-emerald-700">
              KSh {product.price}/{product.unit}
            </div>
            <div className="ml-4 text-sm text-gray-500">
              {product.stock} {product.unit} available
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">Description</h3>
            <p className="mt-2 text-gray-600">
              {product.description}
            </p>
          </div>

          {/* Fertilizer Information */}
          {product.fertilizer && (
            <div className="mt-6">
              <div className="flex items-center">
                <Sprout className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="text-lg font-medium text-gray-800">Fertilizer Information</h3>
              </div>
              <Card className="mt-2 bg-emerald-50 border-emerald-100">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Type</p>
                      <p className="text-gray-800">{product.fertilizer.type}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Last Applied</p>
                      <p className="text-gray-800">
                        {new Date(product.fertilizer.last_applied).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Application Method</p>
                      <p className="text-gray-800">{product.fertilizer.method}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Batch Number</p>
                      <div className="flex items-center">
                        <p className="text-gray-800 font-mono">{product.fertilizer.batch_number}</p>
                        <Info className="h-4 w-4 text-gray-500 ml-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">Seller Information</h3>
            <div className="mt-2 flex items-center">
              <div className="bg-clay-100 h-12 w-12 rounded-full flex items-center justify-center text-clay-800">
                <User className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <div className="font-medium text-gray-800">{product.seller_name}</div>
                <div className="text-sm text-gray-500">
                  <Calendar className="inline h-3.5 w-3.5 mr-1" />
                  Joined May 2023
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button 
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={decreaseQuantity}
              >
                <Minus className="h-5 w-5 text-gray-600" />
              </button>
              <div className="px-6 py-2 font-medium">
                {quantity}
              </div>
              <button 
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={increaseQuantity}
              >
                <Plus className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <Button 
              className="ml-4 px-8 py-6 bg-emerald-500 hover:bg-emerald-600 flex-grow"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-poppins font-semibold text-gray-800 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden">
                <Link to={`/product/${relatedProduct.id}`}>
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="h-48 w-full object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-medium text-gray-800">{relatedProduct.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-emerald-700 font-bold">
                        KSh {relatedProduct.price}/{relatedProduct.unit}
                      </div>
                      <div className="text-sm text-gray-500">
                        {relatedProduct.seller_name}
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
