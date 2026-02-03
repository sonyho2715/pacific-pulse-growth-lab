"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RestaurantMenuPage() {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  const categories = [
    { id: "appetizers", name: "Appetizers" },
    { id: "salads", name: "Salads & Soups" },
    { id: "mains", name: "Main Courses" },
    { id: "seafood", name: "Fresh Seafood" },
    { id: "sides", name: "Sides" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks & Cocktails" },
  ];

  const menuItems: Record<string, Array<{
    name: string;
    description: string;
    price: string;
    image: string;
    tags?: string[];
    dietary?: string[];
  }>> = {
    appetizers: [
      {
        name: "Ahi Tuna Tartare",
        description: "Sushi-grade ahi, avocado, sesame-ginger dressing, wonton crisps",
        price: "$18",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        tags: ["Chef's Pick"],
        dietary: ["GF"],
      },
      {
        name: "Coconut Shrimp",
        description: "Crispy coconut-crusted shrimp, sweet chili dipping sauce, mango slaw",
        price: "$16",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        tags: ["Popular"],
      },
      {
        name: "Kalua Pork Sliders",
        description: "Three mini brioche buns, slow-roasted pork, pineapple slaw, chipotle aioli",
        price: "$14",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
      },
      {
        name: "Island Bruschetta",
        description: "Grilled sourdough, macadamia nut pesto, heirloom tomatoes, fresh basil",
        price: "$12",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
        dietary: ["V"],
      },
      {
        name: "Calamari Fritti",
        description: "Crispy fried calamari, lemon aioli, marinara sauce, fresh herbs",
        price: "$15",
        image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&h=300&fit=crop",
      },
      {
        name: "Poke Nachos",
        description: "Wonton chips, ahi poke, seaweed salad, wasabi cream, tobiko",
        price: "$19",
        image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&h=300&fit=crop",
        tags: ["Signature"],
      },
    ],
    salads: [
      {
        name: "Hawaiian Caesar",
        description: "Romaine hearts, macadamia parmesan, crispy taro croutons, house caesar dressing",
        price: "$14",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop",
        dietary: ["GF option"],
      },
      {
        name: "Tropical Cobb",
        description: "Mixed greens, grilled chicken, avocado, bacon, mango, blue cheese, papaya seed dressing",
        price: "$18",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        dietary: ["GF"],
      },
      {
        name: "Kale & Quinoa Bowl",
        description: "Massaged kale, quinoa, roasted vegetables, macadamia nuts, lemon tahini",
        price: "$16",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
        dietary: ["V", "GF"],
      },
      {
        name: "Seafood Chowder",
        description: "Creamy Hawaiian-style chowder with shrimp, fish, clams, fresh herbs",
        price: "$12",
        image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=400&h=300&fit=crop",
      },
      {
        name: "Miso Soup",
        description: "Traditional dashi broth, silken tofu, wakame seaweed, green onions",
        price: "$8",
        image: "https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=400&h=300&fit=crop",
        dietary: ["V", "GF"],
      },
    ],
    mains: [
      {
        name: "Grilled Ribeye",
        description: "14oz prime ribeye, garlic herb butter, truffle mashed potatoes, grilled asparagus",
        price: "$52",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop",
        tags: ["Premium"],
        dietary: ["GF"],
      },
      {
        name: "Macadamia Crusted Chicken",
        description: "Airline chicken breast, macadamia crust, tropical fruit salsa, coconut rice",
        price: "$32",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop",
      },
      {
        name: "Kalua Pork Plate",
        description: "Traditional slow-roasted pork, cabbage, steamed rice, macaroni salad",
        price: "$26",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        tags: ["Local Favorite"],
        dietary: ["GF"],
      },
      {
        name: "Island Burger",
        description: "Angus beef, teriyaki glaze, grilled pineapple, bacon, brioche bun, sweet potato fries",
        price: "$22",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        tags: ["Popular"],
      },
      {
        name: "Vegetable Curry",
        description: "Thai-inspired coconut curry, seasonal vegetables, jasmine rice, naan bread",
        price: "$24",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
        dietary: ["V", "GF option"],
      },
    ],
    seafood: [
      {
        name: "Grilled Mahi Mahi",
        description: "Fresh catch, mango salsa, coconut rice, grilled seasonal vegetables",
        price: "$34",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
        tags: ["Chef's Pick"],
        dietary: ["GF"],
      },
      {
        name: "Ahi Poke Bowl",
        description: "Sushi-grade ahi, avocado, edamame, seaweed salad, spicy mayo, sushi rice",
        price: "$28",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
        tags: ["Signature"],
        dietary: ["GF"],
      },
      {
        name: "Garlic Butter Lobster Tail",
        description: "8oz cold water lobster tail, drawn butter, lemon, roasted fingerling potatoes",
        price: "$58",
        image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&h=300&fit=crop",
        tags: ["Premium"],
        dietary: ["GF"],
      },
      {
        name: "Sesame Crusted Salmon",
        description: "Atlantic salmon, black and white sesame crust, teriyaki glaze, bok choy",
        price: "$36",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      },
      {
        name: "Seafood Platter",
        description: "Lobster tail, jumbo shrimp, scallops, mahi mahi, drawn butter, grilled lemon",
        price: "$78",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop",
        tags: ["For Two"],
        dietary: ["GF"],
      },
      {
        name: "Fish Tacos",
        description: "Three soft tacos, beer-battered fish, cabbage slaw, chipotle crema, pico de gallo",
        price: "$22",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
        tags: ["Popular"],
      },
    ],
    sides: [
      {
        name: "Coconut Rice",
        description: "Jasmine rice cooked in coconut milk, toasted coconut flakes",
        price: "$6",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop",
        dietary: ["V", "GF"],
      },
      {
        name: "Truffle Mashed Potatoes",
        description: "Yukon gold potatoes, truffle oil, chives, parmesan",
        price: "$8",
        image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop",
        dietary: ["V", "GF"],
      },
      {
        name: "Grilled Asparagus",
        description: "Fresh asparagus, lemon zest, parmesan shavings, balsamic glaze",
        price: "$9",
        image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=400&h=300&fit=crop",
        dietary: ["V", "GF"],
      },
      {
        name: "Sweet Potato Fries",
        description: "Crispy sweet potato fries, chipotle aioli",
        price: "$7",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
        dietary: ["V"],
      },
      {
        name: "Mac & Cheese",
        description: "Four-cheese blend, crispy panko topping, truffle oil drizzle",
        price: "$10",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&h=300&fit=crop",
        dietary: ["V"],
      },
    ],
    desserts: [
      {
        name: "Haupia Cheesecake",
        description: "Creamy coconut cheesecake, macadamia crust, toasted coconut, mango coulis",
        price: "$12",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop",
        tags: ["Signature"],
      },
      {
        name: "Chocolate Lava Cake",
        description: "Warm molten chocolate cake, vanilla bean ice cream, fresh berries",
        price: "$14",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
        tags: ["Popular"],
      },
      {
        name: "Tropical Fruit Sorbet",
        description: "Three scoops: mango, passionfruit, lilikoi, fresh mint",
        price: "$10",
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",
        dietary: ["V", "GF"],
      },
      {
        name: "Macadamia Nut Pie",
        description: "Buttery macadamia filling, flaky crust, whipped cream, caramel drizzle",
        price: "$11",
        image: "https://images.unsplash.com/photo-1621955511667-e2c316e4575d?w=400&h=300&fit=crop",
      },
      {
        name: "Pineapple Upside Down Cake",
        description: "Classic Hawaiian cake, caramelized pineapple, vanilla ice cream",
        price: "$12",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&h=300&fit=crop",
      },
    ],
    drinks: [
      {
        name: "Mai Tai",
        description: "House rum blend, orange curaçao, orgeat, fresh lime, dark rum float",
        price: "$14",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=300&fit=crop",
        tags: ["Signature"],
      },
      {
        name: "Blue Hawaii",
        description: "White rum, blue curaçao, pineapple juice, coconut cream",
        price: "$13",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop",
        tags: ["Classic"],
      },
      {
        name: "Lilikoi Margarita",
        description: "Tequila, passionfruit, fresh lime, tajín rim",
        price: "$13",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        tags: ["Popular"],
      },
      {
        name: "Tropical Sangria",
        description: "White wine, brandy, mango, pineapple, passionfruit",
        price: "$12",
        image: "https://images.unsplash.com/photo-1560963689-b5682b6440f8?w=400&h=300&fit=crop",
      },
      {
        name: "Fresh Coconut Water",
        description: "Served in a young coconut, fresh lime",
        price: "$8",
        image: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=400&h=300&fit=crop",
        dietary: ["V", "GF"],
      },
      {
        name: "Local Craft Beer Flight",
        description: "Four 5oz pours of Hawaii's finest craft beers",
        price: "$16",
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/restaurant-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-white tracking-wide">SUNSET SHORES</span>
                <span className="block text-xs text-amber-400 tracking-widest">ISLAND KITCHEN</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/restaurant-demo" className="text-stone-300 font-medium hover:text-amber-400 transition">Home</Link>
              <Link href="/restaurant-demo/menu" className="text-amber-400 font-medium">Menu</Link>
              <Link href="/restaurant-demo/about" className="text-stone-300 font-medium hover:text-amber-400 transition">About</Link>
              <Link href="/restaurant-demo/contact" className="text-stone-300 font-medium hover:text-amber-400 transition">Contact</Link>
            </div>

            <Link
              href="/restaurant-demo/reservations"
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-amber-500/25 transition"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Our Menu</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-6">
            A Taste of Paradise
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Fresh, locally-sourced ingredients crafted into dishes that celebrate Hawaiian tradition and culinary innovation.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="sticky top-20 z-40 bg-stone-100 border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  activeCategory === category.id
                    ? "bg-amber-500 text-white"
                    : "bg-white text-stone-600 hover:bg-stone-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 capitalize">
            {categories.find(c => c.id === activeCategory)?.name}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory]?.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex gap-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-amber-400 text-stone-900 text-xs font-bold rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <span className="text-amber-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-stone-600 text-sm mb-3">{item.description}</p>
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex gap-2">
                      {item.dietary.map((diet, i) => (
                        <span key={i} className="px-2 py-0.5 bg-stone-100 text-stone-500 text-xs font-medium rounded">
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Legend */}
      <section className="py-8 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-600">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-stone-200 rounded text-xs font-medium">V</span>
              <span>Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-stone-200 rounded text-xs font-medium">GF</span>
              <span>Gluten-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-stone-200 rounded text-xs font-medium">GF option</span>
              <span>Gluten-Free Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Ready to Dine With Us?</h2>
          <p className="text-amber-100 mb-8">
            Reserve your table and experience these incredible dishes with stunning ocean views.
          </p>
          <Link
            href="/restaurant-demo/reservations"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition"
          >
            Make a Reservation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-8 px-4 border-t border-stone-800">
        <div className="max-w-7xl mx-auto text-center text-stone-500">
          <p>&copy; 2026 Sunset Shores Island Kitchen. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
