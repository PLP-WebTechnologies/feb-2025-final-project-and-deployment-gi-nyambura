
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
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  User, 
  Package, 
  CreditCard, 
  MapPin, 
  Settings 
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { User as UserType } from "@/types";

// Mock user data
const user: UserType = {
  id: "user-001",
  name: "Jane Wambui",
  email: "jane.wambui@example.com",
  phone: "+254712345678",
  role: "buyer",
  location: "Nairobi, Kenya",
  created_at: "2023-01-15"
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState<string>("personal");
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone || "",
    location: user.location || ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the user profile
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-emerald-600 mb-6 hover:text-emerald-800 transition-colors">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to home
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <User className="h-8 w-8 text-emerald-600" />
              </div>
              <div>
                <CardTitle>{user.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs orientation="vertical" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="flex flex-col h-auto space-y-1">
                  <TabsTrigger value="personal" className="justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger value="orders" className="justify-start">
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </TabsTrigger>
                  <TabsTrigger value="addresses" className="justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Addresses
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
          <div className="mt-4">
            <Button variant="outline" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50">
              Sign Out
            </Button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          <Card>
            <TabsContent value="personal" className="m-0">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      name="location" 
                      value={formData.location} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button type="submit">Save Changes</Button>
                </form>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="orders" className="m-0">
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Button asChild>
                    <Link to="/orders">View All Orders</Link>
                  </Button>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="payment" className="m-0">
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">You haven't added any payment methods yet.</p>
                  <Button>Add Payment Method</Button>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="addresses" className="m-0">
              <CardHeader>
                <CardTitle>Saved Addresses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">You haven't added any addresses yet.</p>
                  <Button>Add New Address</Button>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="settings" className="m-0">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive emails about your orders and account</p>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Change Password</h3>
                      <p className="text-sm text-muted-foreground">Update your password for security</p>
                    </div>
                    <Button variant="outline" size="sm">Change</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Delete Account</h3>
                      <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
                    </div>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </div>
              </CardContent>
            </TabsContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
