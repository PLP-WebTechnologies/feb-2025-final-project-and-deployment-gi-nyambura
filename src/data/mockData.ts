
import { Product, CartItem, Order } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Fresh Tomatoes",
    description: "Locally grown, fresh and juicy tomatoes from Kiambu county.",
    price: 120,
    unit: "kg",
    stock: 50,
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "vegetables",
    seller_id: "s1",
    seller_name: "Wangari's Farm",
    eco_badges: ["fresh", "local"],
    organic: false,
    created_at: "2023-05-01T09:00:00Z",
    location: "Kiambu",
    fertilizer: {
      type: "NPK 17-17-17 Compound Fertilizer",
      last_applied: "2023-04-15",
      batch_number: "KFA-2023-0456",
      method: "Drip irrigation with diluted solution"
    }
  },
  {
    id: "2",
    name: "Organic Sukuma Wiki",
    description: "Nutritious, organically grown kale from Nakuru county.",
    price: 50,
    unit: "bunch",
    stock: 30,
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "vegetables",
    seller_id: "s2",
    seller_name: "Organic Valley",
    eco_badges: ["organic", "local", "fresh"],
    organic: true,
    created_at: "2023-05-02T10:15:00Z",
    location: "Nakuru",
    fertilizer: {
      type: "Organic Compost",
      last_applied: "2023-04-10",
      batch_number: "OV-COMP-2023-112",
      method: "Manual application around base of plants"
    }
  },
  {
    id: "3",
    name: "Red Onions",
    description: "Sweet red onions grown in the fertile soils of Nyeri.",
    price: 80,
    unit: "kg",
    stock: 45,
    image: "https://images.unsplash.com/photo-1681758442447-f36ed14c0a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "vegetables",
    seller_id: "s1",
    seller_name: "Wangari's Farm",
    eco_badges: ["local", "fresh"],
    organic: false,
    created_at: "2023-05-01T11:30:00Z",
    location: "Nyeri",
    fertilizer: {
      type: "DAP Fertilizer",
      last_applied: "2023-04-20",
      batch_number: "KFA-2023-0789",
      method: "Broadcasting before irrigation"
    }
  },
  {
    id: "4",
    name: "Organic Avocados",
    description: "Creamy, organically grown hass avocados from the highlands.",
    price: 180,
    unit: "kg",
    stock: 25,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    seller_id: "s3",
    seller_name: "Green Acres",
    eco_badges: ["organic", "fresh"],
    organic: true,
    created_at: "2023-05-03T08:45:00Z",
    location: "Muranga",
    fertilizer: {
      type: "Vermicompost",
      last_applied: "2023-03-25",
      batch_number: "GA-VERM-2023-045",
      method: "Mixed with soil around tree base"
    }
  },
  {
    id: "5",
    name: "Green Peppers",
    description: "Crisp green peppers, perfect for salads and cooking.",
    price: 100,
    unit: "kg",
    stock: 35,
    image: "https://images.unsplash.com/photo-1585159079680-8dec029b76ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "vegetables",
    seller_id: "s2",
    seller_name: "Organic Valley",
    eco_badges: ["local"],
    organic: false,
    created_at: "2023-05-02T14:20:00Z",
    location: "Kajiado",
    fertilizer: {
      type: "CAN Fertilizer",
      last_applied: "2023-04-18",
      batch_number: "KFA-2023-1024",
      method: "Side dressing after watering"
    }
  },
  {
    id: "6",
    name: "Fresh Mangoes",
    description: "Sweet and juicy mangoes from the coast.",
    price: 150,
    unit: "kg",
    stock: 40,
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    seller_id: "s4",
    seller_name: "Coastal Harvest",
    eco_badges: ["fresh"],
    organic: false,
    created_at: "2023-05-04T09:30:00Z",
    location: "Kilifi",
    fertilizer: {
      type: "NPK 20-10-10",
      last_applied: "2023-03-15",
      batch_number: "KFA-2023-1985",
      method: "Foliar spray during fruiting stage"
    }
  },
  {
    id: "7",
    name: "Organic Carrots",
    description: "Sweet, crunchy organically grown carrots.",
    price: 70,
    unit: "kg",
    stock: 55,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "vegetables",
    seller_id: "s3",
    seller_name: "Green Acres",
    eco_badges: ["organic", "local"],
    organic: true,
    created_at: "2023-05-03T13:15:00Z",
    location: "Nyandarua",
    fertilizer: {
      type: "Bone Meal Organic Fertilizer",
      last_applied: "2023-04-05",
      batch_number: "GA-ORG-2023-078",
      method: "Mixed with soil before planting"
    }
  },
  {
    id: "8",
    name: "Fresh Bananas",
    description: "Ripe, ready-to-eat bananas from Western Kenya.",
    price: 80,
    unit: "bunch",
    stock: 60,
    image: "https://images.unsplash.com/photo-1543218024-57a70143c369?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    seller_id: "s5",
    seller_name: "Kakamega Farms",
    eco_badges: ["fresh", "local"],
    organic: false,
    created_at: "2023-05-05T10:00:00Z",
    location: "Kakamega",
    fertilizer: {
      type: "Potassium-rich Fertilizer",
      last_applied: "2023-04-12",
      batch_number: "KFA-2023-2345",
      method: "Applied at the base with irrigation"
    }
  }
];

export const cartItems: CartItem[] = [
  {
    id: "ci1",
    product_id: "1",
    product: products[0],
    quantity: 2,
    user_id: "u1"
  },
  {
    id: "ci2",
    product_id: "4",
    product: products[3],
    quantity: 1,
    user_id: "u1"
  }
];

export const orders: Order[] = [
  {
    id: "o1",
    user_id: "u1",
    items: [
      {
        product_id: "1",
        product: products[0],
        quantity: 3,
        price: products[0].price
      },
      {
        product_id: "2",
        product: products[1],
        quantity: 2,
        price: products[1].price
      }
    ],
    total: products[0].price * 3 + products[1].price * 2,
    status: "delivered",
    payment_status: "paid",
    payment_method: "mpesa",
    created_at: "2023-05-10T14:30:00Z",
    address: "123 Moi Avenue, Nairobi"
  },
  {
    id: "o2",
    user_id: "u1",
    items: [
      {
        product_id: "4",
        product: products[3],
        quantity: 2,
        price: products[3].price
      }
    ],
    total: products[3].price * 2,
    status: "shipping",
    payment_status: "paid",
    payment_method: "flutterwave",
    created_at: "2023-05-15T09:45:00Z",
    address: "456 Kenyatta Avenue, Nairobi"
  }
];

export const categories = [
  { id: "vegetables", name: "Vegetables" },
  { id: "fruits", name: "Fruits" },
  { id: "herbs", name: "Herbs" },
  { id: "tubers", name: "Tubers & Roots" },
  { id: "grains", name: "Grains & Cereals" }
];
