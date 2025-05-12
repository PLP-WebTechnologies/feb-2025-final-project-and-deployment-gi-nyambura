
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // In a real app, this would add the product to the cart
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-48 w-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-white/80 hover:bg-white"
              onClick={handleToggleLike}
            >
              <Heart 
                className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
              />
            </Button>
          </div>
          <div className="absolute top-2 left-2 flex flex-col gap-1">
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
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-poppins font-medium text-lg text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {product.seller_name} · {product.location}
              </p>
            </div>
            <div className="text-emerald-700 font-bold">
              KSh {product.price}/{product.unit}
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full bg-emerald-500 hover:bg-emerald-600"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
