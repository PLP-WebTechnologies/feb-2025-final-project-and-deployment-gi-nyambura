
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Package } from "lucide-react";
import { Order } from "@/types";

// Mock orders data
const orders: Order[] = [
  {
    id: "ord-001",
    user_id: "user-001",
    items: [
      {
        product_id: "prod-001",
        product: {
          id: "prod-001",
          name: "Fresh Tomatoes",
          description: "Juicy, ripe tomatoes harvested this morning from our local farm.",
          price: 120,
          unit: "kg",
          stock: 50,
          image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfad?auto=format&fit=crop&q=80&w=500",
          category: "vegetables",
          seller_id: "seller-001",
          seller_name: "Green Farms",
          eco_badges: ["fresh", "local"],
          organic: false,
          created_at: "2023-05-01",
          location: "Nairobi, Kenya"
        },
        quantity: 2,
        price: 240
      },
      {
        product_id: "prod-002",
        product: {
          id: "prod-002",
          name: "Organic Spinach",
          description: "Fresh, nutritious spinach grown without pesticides.",
          price: 80,
          unit: "bunch",
          stock: 30,
          image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=500",
          category: "vegetables",
          seller_id: "seller-001",
          seller_name: "Green Farms",
          eco_badges: ["organic"],
          organic: true,
          created_at: "2023-05-01",
          location: "Nairobi, Kenya"
        },
        quantity: 1,
        price: 80
      }
    ],
    total: 320,
    status: "delivered",
    payment_status: "paid",
    payment_method: "mpesa",
    created_at: "2023-09-15",
    address: "123 Moi Avenue, Nairobi"
  },
  {
    id: "ord-002",
    user_id: "user-001",
    items: [
      {
        product_id: "prod-003",
        product: {
          id: "prod-003",
          name: "Fresh Oranges",
          description: "Sweet and juicy oranges from local farms.",
          price: 150,
          unit: "kg",
          stock: 40,
          image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=500",
          category: "fruits",
          seller_id: "seller-002",
          seller_name: "Citrus Grove",
          eco_badges: ["fresh", "local"],
          organic: false,
          created_at: "2023-05-02",
          location: "Mombasa, Kenya"
        },
        quantity: 3,
        price: 450
      }
    ],
    total: 450,
    status: "shipping",
    payment_status: "paid",
    payment_method: "flutterwave",
    created_at: "2023-10-05",
    address: "456 Uhuru Highway, Nairobi"
  },
  {
    id: "ord-003",
    user_id: "user-001",
    items: [
      {
        product_id: "prod-004",
        product: {
          id: "prod-004",
          name: "Organic Potatoes",
          description: "Locally grown organic potatoes, perfect for all your cooking needs.",
          price: 100,
          unit: "kg",
          stock: 60,
          image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=500",
          category: "vegetables",
          seller_id: "seller-003",
          seller_name: "Potato King",
          eco_badges: ["organic", "local"],
          organic: true,
          created_at: "2023-05-03",
          location: "Nakuru, Kenya"
        },
        quantity: 5,
        price: 500
      }
    ],
    total: 500,
    status: "pending",
    payment_status: "pending",
    payment_method: "mpesa",
    created_at: "2023-10-10",
    address: "789 Kimathi Street, Nairobi"
  }
];

const OrderStatusBadge = ({ status }: { status: Order["status"] }) => {
  const statusColors = {
    pending: "bg-amber-100 text-amber-800",
    confirmed: "bg-blue-100 text-blue-800",
    preparing: "bg-purple-100 text-purple-800",
    shipping: "bg-indigo-100 text-indigo-800",
    delivered: "bg-emerald-100 text-emerald-800"
  };

  return (
    <Badge className={`${statusColors[status]} hover:${statusColors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

const Orders = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredOrders = activeTab === "all" 
    ? orders 
    : orders.filter(order => order.status === activeTab);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-emerald-600 mb-6 hover:text-emerald-800 transition-colors">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to home
      </Link>

      <h1 className="text-3xl font-poppins font-bold text-gray-800 mb-6">
        My Orders
      </h1>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="preparing">Preparing</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="space-y-4">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <Card key={order.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50 px-6">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                      <OrderStatusBadge status={order.status} />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground pt-1">
                      <span>Placed on {new Date(order.created_at).toLocaleDateString()}</span>
                      <span>Total: KSh {order.total.toLocaleString()}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 py-4">
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.product_id} className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{item.product.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.quantity} × KSh {item.product.price}/{item.product.unit}
                            </p>
                          </div>
                          <div className="font-medium">
                            KSh {(item.quantity * item.product.price).toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/orders/${order.id}`}>
                          View Order Details
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="mb-4 flex justify-center">
                  <Package className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700">No orders found</h3>
                <p className="mt-2 text-gray-500">You don't have any {activeTab !== "all" ? activeTab : ""} orders yet</p>
                <Button className="mt-6" asChild>
                  <Link to="/">Continue Shopping</Link>
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Orders;
