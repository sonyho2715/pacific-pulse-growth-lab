"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CoffeeMenuPage() {
  const [activeCategory, setActiveCategory] = useState("espresso");

  const categories = [
    { id: "espresso", name: "Espresso", icon: "☕" },
    { id: "brewed", name: "Brewed Coffee", icon: "🫖" },
    { id: "cold", name: "Cold Drinks", icon: "🧊" },
    { id: "tea", name: "Tea & More", icon: "🍵" },
    { id: "food", name: "Food", icon: "🥐" },
    { id: "beans", name: "Retail Beans", icon: "📦" },
  ];

  const menuItems: Record<string, Array<{ name: string; description: string; price: string; popular?: boolean; vegan?: boolean; new?: boolean }>> = {
    espresso: [
      { name: "Espresso", description: "Single or double shot of our signature blend", price: "$3.50 / $4.50" },
      { name: "Americano", description: "Espresso with hot water", price: "$4.00" },
      { name: "Latte", description: "Espresso with steamed milk", price: "$5.50", popular: true },
      { name: "Kona Sunrise Latte", description: "Vanilla, macadamia, 100% Kona espresso", price: "$6.50", popular: true },
      { name: "Cappuccino", description: "Equal parts espresso, steamed milk, and foam", price: "$5.25" },
      { name: "Flat White", description: "Double shot with velvety microfoam", price: "$5.50" },
      { name: "Mocha", description: "Espresso, chocolate, steamed milk, whipped cream", price: "$6.00" },
      { name: "Macchiato", description: "Espresso marked with a dollop of foam", price: "$4.00" },
      { name: "Cortado", description: "Equal parts espresso and steamed milk", price: "$4.50" },
      { name: "Honey Lavender Latte", description: "Lavender syrup, local honey, espresso", price: "$6.25", new: true },
    ],
    brewed: [
      { name: "Drip Coffee", description: "Our daily rotating single-origin", price: "$3.50 / $4.50" },
      { name: "Pour Over", description: "Hand-crafted, made to order", price: "$5.00", popular: true },
      { name: "French Press", description: "Full-bodied immersion brew (serves 2)", price: "$8.00" },
      { name: "Chemex", description: "Clean, bright, and smooth (serves 2)", price: "$9.00" },
      { name: "100% Kona", description: "Premium single-origin from Big Island farms", price: "$7.00", popular: true },
      { name: "Café au Lait", description: "Half drip coffee, half steamed milk", price: "$4.50" },
    ],
    cold: [
      { name: "Cold Brew", description: "20-hour steeped, smooth and bold", price: "$5.00", popular: true },
      { name: "Cold Brew Flight", description: "Sample three single-origin cold brews", price: "$9.00", popular: true },
      { name: "Iced Latte", description: "Espresso over ice with cold milk", price: "$5.75" },
      { name: "Iced Americano", description: "Espresso over ice with cold water", price: "$4.50" },
      { name: "Nitro Cold Brew", description: "Creamy, cascading cold brew on tap", price: "$6.00", popular: true },
      { name: "Iced Mocha", description: "Espresso, chocolate, milk, over ice", price: "$6.25" },
      { name: "Vietnamese Iced Coffee", description: "Dark roast with sweetened condensed milk", price: "$5.50" },
      { name: "Shakerato", description: "Espresso shaken with ice and simple syrup", price: "$5.00", new: true },
    ],
    tea: [
      { name: "Matcha Latte", description: "Ceremonial grade matcha with steamed milk", price: "$5.75", popular: true },
      { name: "Matcha Paradise", description: "Matcha, oat milk, honey, over ice", price: "$6.25", popular: true },
      { name: "Chai Latte", description: "House-made spiced chai with steamed milk", price: "$5.50" },
      { name: "Hot Tea", description: "Selection of premium loose-leaf teas", price: "$3.50" },
      { name: "Iced Tea", description: "House-made hibiscus or green tea", price: "$4.00" },
      { name: "Golden Milk", description: "Turmeric, ginger, cinnamon, steamed milk", price: "$5.50", vegan: true },
      { name: "Hot Chocolate", description: "Rich chocolate with steamed milk", price: "$4.50" },
      { name: "Steamer", description: "Steamed milk with your choice of flavor", price: "$4.00" },
    ],
    food: [
      { name: "Butter Croissant", description: "Flaky, buttery, baked fresh daily", price: "$4.50", popular: true },
      { name: "Almond Croissant", description: "Filled with almond cream, topped with sliced almonds", price: "$5.50" },
      { name: "Banana Bread", description: "Moist, made with local bananas", price: "$4.00", popular: true },
      { name: "Acai Bowl", description: "Acai, granola, fresh fruit, honey", price: "$12.00", vegan: true },
      { name: "Avocado Toast", description: "Smashed avo, everything seasoning, sourdough", price: "$10.00" },
      { name: "Breakfast Burrito", description: "Eggs, cheese, potatoes, salsa verde", price: "$11.00" },
      { name: "Lox Bagel", description: "Cream cheese, smoked salmon, capers, red onion", price: "$14.00" },
      { name: "Malasada", description: "Portuguese donut with haupia or lilikoi filling", price: "$4.00", popular: true },
      { name: "Fruit & Yogurt Parfait", description: "Greek yogurt, granola, seasonal fruit", price: "$8.00" },
    ],
    beans: [
      { name: "House Blend", description: "Balanced, chocolatey, crowd-pleaser", price: "$18 / 12oz", popular: true },
      { name: "100% Kona", description: "Single-origin from Hualalai slopes", price: "$48 / 12oz", popular: true },
      { name: "Maui Mokka", description: "Rare, wine-like, small-batch", price: "$42 / 8oz" },
      { name: "Ka'u Reserve", description: "Smooth, fruity, limited availability", price: "$38 / 12oz" },
      { name: "Espresso Blend", description: "Bold, caramel, perfect for espresso", price: "$20 / 12oz" },
      { name: "Decaf", description: "Swiss Water Process, full flavor", price: "$19 / 12oz" },
    ],
  };

  const currentItems = menuItems[activeCategory] || [];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-xl border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/coffee-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 21v-2h18v2H2zm2-4v-3q0-1.525.713-2.863T6.7 8.65V6q0-.825.588-1.413Q7.875 4 8.7 4h6.6q.825 0 1.413.587Q17.3 5.175 17.3 6v2.65q1.275 1.15 1.988 2.487Q20 12.475 20 14v3H4zm2-2h12v-1q0-1.875-1.062-3.438Q15.875 9 14.1 8.2V6H9.9v2.2q-1.775.8-2.838 2.362Q6 12.125 6 14v1z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-amber-900">KONA BREW</span>
                <span className="text-xs text-amber-700 block -mt-1 tracking-widest">COFFEE CO.</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/coffee-demo" className="text-stone-600 font-medium hover:text-amber-900 transition">Home</Link>
              <Link href="/coffee-demo/menu" className="text-amber-900 font-medium">Menu</Link>
              <Link href="/coffee-demo/locations" className="text-stone-600 font-medium hover:text-amber-900 transition">Locations</Link>
              <Link href="/coffee-demo/about" className="text-stone-600 font-medium hover:text-amber-900 transition">Our Story</Link>
              <Link href="/coffee-demo/contact" className="text-stone-600 font-medium hover:text-amber-900 transition">Contact</Link>
            </div>

            <Link
              href="/coffee-demo/menu"
              className="bg-amber-900 text-amber-50 px-6 py-2.5 rounded-full font-semibold hover:bg-amber-800 transition"
            >
              Order Online
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-amber-100 to-[#faf8f5]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Our Menu</span>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mt-2 mb-4">Crafted With Care</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From classic espresso drinks to Hawaiian specialties. Every cup made fresh, just for you.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto gap-2 justify-start md:justify-center scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition ${
                  activeCategory === category.id
                    ? "bg-amber-900 text-amber-50"
                    : "bg-amber-50 text-amber-900 hover:bg-amber-100"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 px-4 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-amber-900 flex items-center gap-3">
              <span className="text-3xl">{categories.find(c => c.id === activeCategory)?.icon}</span>
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>
          </div>

          <div className="space-y-4">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                      {item.popular && (
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                          Popular
                        </span>
                      )}
                      {item.new && (
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
                          New
                        </span>
                      )}
                      {item.vegan && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Vegan
                        </span>
                      )}
                    </div>
                    <p className="text-stone-600 text-sm">{item.description}</p>
                  </div>
                  <span className="text-amber-900 font-bold whitespace-nowrap">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Milk Options */}
          <div className="mt-12 p-6 bg-amber-50 rounded-xl">
            <h3 className="font-bold text-amber-900 mb-3">Milk Options</h3>
            <div className="flex flex-wrap gap-3 text-sm text-stone-600">
              <span className="px-3 py-1 bg-white rounded-full">Whole</span>
              <span className="px-3 py-1 bg-white rounded-full">Skim</span>
              <span className="px-3 py-1 bg-white rounded-full">Oat +$0.75</span>
              <span className="px-3 py-1 bg-white rounded-full">Almond +$0.75</span>
              <span className="px-3 py-1 bg-white rounded-full">Coconut +$0.75</span>
              <span className="px-3 py-1 bg-white rounded-full">Macadamia +$1.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 px-4 bg-amber-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Skip the Line</h2>
          <p className="text-amber-200 mb-8">
            Order ahead and pick up at your favorite location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/coffee-demo/locations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-amber-950 font-bold rounded-full hover:bg-amber-400 transition"
            >
              Order for Pickup
            </Link>
            <Link
              href="/coffee-demo/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              Join Rewards
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-amber-400/60 text-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21v-2h18v2H2zm2-4v-3q0-1.525.713-2.863T6.7 8.65V6q0-.825.588-1.413Q7.875 4 8.7 4h6.6q.825 0 1.413.587Q17.3 5.175 17.3 6v2.65q1.275 1.15 1.988 2.487Q20 12.475 20 14v3H4zm2-2h12v-1q0-1.875-1.062-3.438Q15.875 9 14.1 8.2V6H9.9v2.2q-1.775.8-2.838 2.362Q6 12.125 6 14v1z"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-amber-100">KONA BREW COFFEE CO.</span>
          </div>
          <p>&copy; 2026 Kona Brew Coffee Co. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
