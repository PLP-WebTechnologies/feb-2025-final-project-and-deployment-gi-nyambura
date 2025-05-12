
import { useState } from "react";
import { Link } from "react-router-dom";
import { cartItems as initialCartItems } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft,
  ShoppingBag
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleRemoveItem = (itemId: string) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    });
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const item = cartItems.find(item => item.id === itemId);
    if (!item) return;
    
    if (newQuantity > item.product.stock) {
      toast({
        title: "Maximum stock reached",
        description: `Only ${item.product.stock} items available`,
        variant: "destructive",
      });
      return;
    }
    
    setCartItems(
      cartItems.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    // In a real app, this would redirect to checkout or payment page
    setCheckoutOpen(true);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = 150; // Fixed delivery fee in KSh
  const total = subtotal + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-poppins font-bold text-gray-800 mb-6">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-medium text-gray-700 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center text-emerald-600 mb-6 hover:text-emerald-800 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Continue shopping
            </Link>

            {cartItems.map((item) => (
              <Card key={item.id} className="mb-4">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row items-start">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1 sm:ml-4 mt-4 sm:mt-0">
                      <div className="flex justify-between">
                        <Link to={`/product/${item.product.id}`} className="text-lg font-medium text-gray-800 hover:text-emerald-600">
                          {item.product.name}
                        </Link>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-gray-400 hover:text-red-500"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {item.product.seller_name} • {item.product.location}
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                          <button 
                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button 
                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="font-bold text-emerald-700">
                          KSh {item.product.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-poppins font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">KSh {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">KSh {deliveryFee}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-emerald-700">KSh {total}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Checkout Dialog */}
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Order</DialogTitle>
            <DialogDescription>
              This is a demo application. In a real app, this would connect to M-Pesa or Flutterwave for payment.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-3">
              <div className="flex justify-between font-medium">
                <span>Total Amount</span>
                <span className="text-emerald-700">KSh {total}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              className="w-full bg-emerald-500 hover:bg-emerald-600"
              onClick={() => {
                setCheckoutOpen(false);
                toast({
                  title: "Order placed",
                  description: "Thank you for your order! It's being processed.",
                });
                setCartItems([]);
              }}
            >
              Simulate Payment & Place Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cart;
