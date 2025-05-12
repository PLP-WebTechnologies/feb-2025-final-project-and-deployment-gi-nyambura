
export type UserRole = "buyer" | "seller";

export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  location?: string;
  created_at: string;
};

export type EcoBadge = "organic" | "fresh" | "local";

export type FertilizerInfo = {
  type: string;
  last_applied: string;
  batch_number: string;
  method: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  stock: number;
  image: string;
  category: string;
  seller_id: string;
  seller_name: string;
  eco_badges: EcoBadge[];
  organic: boolean;
  created_at: string;
  location: string;
  fertilizer?: FertilizerInfo;
};

export type CartItem = {
  id: string;
  product_id: string;
  product: Product;
  quantity: number;
  user_id: string;
};

export type Order = {
  id: string;
  user_id: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "confirmed" | "preparing" | "shipping" | "delivered";
  payment_status: "pending" | "paid" | "failed";
  payment_method: "mpesa" | "flutterwave" | "cash";
  created_at: string;
  address: string;
};

export type OrderItem = {
  product_id: string;
  product: Product;
  quantity: number;
  price: number;
};
