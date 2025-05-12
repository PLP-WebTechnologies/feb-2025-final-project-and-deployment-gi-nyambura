
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { products, orders } from "@/data/mockData";
import {
  BarChart,
  Package,
  ShoppingBag,
  TrendingUp,
  Plus
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // We'll filter only products from the first seller for demo purposes
  const sellerProducts = products.filter(product => product.seller_id === "s1");
  
  // Mock orders for this seller
  const sellerOrders = orders.filter(order => 
    order.items.some(item => 
      sellerProducts.some(product => product.id === item.product_id)
    )
  );
  
  const totalSales = sellerOrders.reduce((total, order) => {
    const orderTotal = order.items.reduce((sum, item) => {
      const isSellerProduct = sellerProducts.some(p => p.id === item.product_id);
      return isSellerProduct ? sum + (item.price * item.quantity) : sum;
    }, 0);
    
    return total + orderTotal;
  }, 0);
  
  const totalOrders = sellerOrders.length;
  const totalProducts = sellerProducts.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div>
          <h1 className="text-3xl font-poppins font-bold text-gray-800">Seller Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your products, orders, and view analytics</p>
        </div>
        <Button className="mt-4 lg:mt-0 bg-emerald-500 hover:bg-emerald-600">
          <Plus className="mr-2 h-4 w-4" /> Add New Product
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Sales</p>
                <h3 className="text-2xl font-bold text-gray-800">KSh {totalSales}</h3>
              </div>
              <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Orders</p>
                <h3 className="text-2xl font-bold text-gray-800">{totalOrders}</h3>
              </div>
              <div className="h-12 w-12 bg-cream-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-clay-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Products</p>
                <h3 className="text-2xl font-bold text-gray-800">{totalProducts}</h3>
              </div>
              <div className="h-12 w-12 bg-clay-100 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-clay-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs 
        defaultValue="overview" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="w-full max-w-md">
          <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
          <TabsTrigger value="products" className="flex-1">Products</TabsTrigger>
          <TabsTrigger value="orders" className="flex-1">Orders</TabsTrigger>
          <TabsTrigger value="analytics" className="flex-1">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>
                Your recent order activity from the past 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              {sellerOrders.length > 0 ? (
                <div className="space-y-4">
                  {sellerOrders.map((order) => (
                    <div 
                      key={order.id} 
                      className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0"
                    >
                      <div>
                        <div className="font-medium">Order #{order.id}</div>
                        <div className="text-sm text-gray-500">
                          {new Date(order.created_at).toLocaleDateString()} • {order.items.length} items
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-emerald-700">KSh {order.total}</div>
                        <div className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 inline-block">
                          {order.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No orders yet</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Your best-selling products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sellerProducts.slice(0, 3).map((product) => (
                    <div 
                      key={product.id} 
                      className="flex items-center"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md mr-4"
                      />
                      <div className="flex-1">
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500">
                          {product.stock} in stock
                        </div>
                      </div>
                      <div className="font-bold text-emerald-700">
                        KSh {product.price}/{product.unit}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sales Analytics</CardTitle>
                <CardDescription>Your sales performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60 flex items-center justify-center">
                  <BarChart className="h-16 w-16 text-gray-300" />
                  <p className="text-gray-500 ml-3">Connect to Supabase to view real-time analytics</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Your Products</CardTitle>
              <CardDescription>
                Manage your products inventory and listings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sellerProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="flex items-center border-b pb-4 last:border-b-0 last:pb-0"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-gray-500">
                        Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.eco_badges.map((badge) => (
                          <span 
                            key={badge} 
                            className={`inline-flex text-xs eco-badge-${badge}`}
                          >
                            {badge === "organic" ? "🌱 Organic" : 
                             badge === "fresh" ? "✨ Fresh Today" : "🏡 Local Farm"}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-emerald-700">
                        KSh {product.price}/{product.unit}
                      </div>
                      <div className="text-sm text-gray-500">
                        Stock: {product.stock} {product.unit}
                      </div>
                      <div className="flex space-x-2 mt-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => {
                            toast({
                              title: "Product removed",
                              description: `${product.name} has been removed from your listings`,
                            });
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order Management</CardTitle>
              <CardDescription>
                View and manage customer orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              {sellerOrders.length > 0 ? (
                <div className="divide-y">
                  {sellerOrders.map((order) => (
                    <div key={order.id} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="font-medium">Order #{order.id}</div>
                          <div className="text-sm text-gray-500">
                            {new Date(order.created_at).toLocaleDateString()} • {new Date(order.created_at).toLocaleTimeString()}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className={`px-2 py-1 rounded-full text-xs ${
                            order.status === "delivered" ? "bg-green-100 text-green-800" :
                            order.status === "shipping" ? "bg-blue-100 text-blue-800" :
                            "bg-yellow-100 text-yellow-800"
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs ${
                            order.payment_status === "paid" ? "bg-green-100 text-green-800" : 
                            "bg-red-100 text-red-800"
                          }`}>
                            {order.payment_status.charAt(0).toUpperCase() + order.payment_status.slice(1)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-md p-4 mb-4">
                        <div className="text-sm font-medium mb-2">Items</div>
                        <div className="space-y-2">
                          {order.items.filter(item => 
                            sellerProducts.some(p => p.id === item.product_id)
                          ).map((item, index) => (
                            <div key={index} className="flex justify-between">
                              <div>{item.product.name} x {item.quantity}</div>
                              <div>KSh {item.price * item.quantity}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium">Delivery Address</div>
                          <div className="text-sm text-gray-500">{order.address}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Total</div>
                          <div className="font-bold text-emerald-700">KSh {order.total}</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-4">
                        <Button className="bg-emerald-500 hover:bg-emerald-600">
                          Update Status
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No orders yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Sales Analytics</CardTitle>
              <CardDescription>
                View your performance metrics and sales data
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center flex-col">
              <BarChart className="h-24 w-24 text-gray-300 mb-4" />
              <p className="text-gray-500">Analytics will be available after connecting to Supabase</p>
              <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600">
                Connect to Supabase
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SellerDashboard;
