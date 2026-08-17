"use client";

import { useState } from "react";
import Link from "next/link";
import NavIsland from "@/components/NavIsland";
import {
  UtensilsCrossed,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Calendar,
  ChevronRight,
  Leaf,
  Award,
  Heart,
  Send,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const menuCategories = [
  {
    name: "Appetizers",
    icon: "🥗",
    items: [
      { name: "Burrata & Heirloom Tomato", price: 16, description: "Fresh burrata, vine-ripened tomatoes, basil oil, aged balsamic" },
      { name: "Crispy Calamari", price: 14, description: "Lightly dusted, lemon aioli, marinara, fresh parsley" },
      { name: "Wild Mushroom Bruschetta", price: 13, description: "Sautéed chanterelles, truffle cream, microgreens, sourdough" },
      { name: "Tuna Tartare", price: 18, description: "Sushi-grade ahi, avocado mousse, sesame, wonton crisps" },
    ],
  },
  {
    name: "Entrees",
    icon: "🥩",
    items: [
      { name: "Pan-Seared Salmon", price: 32, description: "Atlantic salmon, lemon beurre blanc, roasted asparagus, fingerling potatoes" },
      { name: "Filet Mignon", price: 48, description: "8oz center-cut, red wine demi-glace, garlic mashed potatoes, broccolini" },
      { name: "Herb-Roasted Chicken", price: 28, description: "Free-range half chicken, rosemary jus, root vegetables, crispy skin" },
      { name: "Wild Mushroom Risotto", price: 26, description: "Arborio rice, porcini, shiitake, parmesan, white truffle oil" },
    ],
  },
  {
    name: "Desserts",
    icon: "🍰",
    items: [
      { name: "Crème Brûlée", price: 12, description: "Tahitian vanilla bean, caramelized sugar, fresh berries" },
      { name: "Chocolate Lava Cake", price: 14, description: "Valrhona dark chocolate, molten center, vanilla bean gelato" },
      { name: "Tiramisu", price: 11, description: "Espresso-soaked ladyfingers, mascarpone, cocoa, amaretto" },
      { name: "Seasonal Fruit Tart", price: 13, description: "Buttery crust, pastry cream, fresh market fruits, apricot glaze" },
    ],
  },
  {
    name: "Drinks",
    icon: "🍷",
    items: [
      { name: "House Red — Pinot Noir", price: 14, description: "Willamette Valley, cherry, earth, silky tannins" },
      { name: "Sparkling Rosé", price: 16, description: "Prosecco, strawberry, elderflower, dry finish" },
      { name: "Golden Fork Old Fashioned", price: 15, description: "Bourbon, honey syrup, Angostura, flamed orange peel" },
      { name: "Fresh Lavender Lemonade", price: 6, description: "House-made, organic lavender, Meyer lemon, sparkling" },
    ],
  },
];

const reviews = [
  {
    name: "Sarah Mitchell",
    rating: 5,
    text: "The Golden Fork completely changed my expectations for dining in this area. The pan-seared salmon was cooked to absolute perfection, and the atmosphere felt warm without being pretentious. We've been back three times now.",
    date: "2 weeks ago",
  },
  {
    name: "James Rodriguez",
    rating: 5,
    text: "We celebrated our anniversary here and it was magical. The staff knew exactly when to check in and when to give us space. The filet mignon was the best I've had outside of NYC. Worth every penny.",
    date: "1 month ago",
  },
  {
    name: "Emily Chen",
    rating: 4,
    text: "Beautiful plating, incredible flavors, and a wine list that actually makes sense. The mushroom risotto is a must-order — rich and earthy without being heavy. Only wish they had a few more vegetarian mains.",
    date: "3 weeks ago",
  },
  {
    name: "David Thompson",
    rating: 5,
    text: "From the moment we walked in, everything felt intentional. The burrata appetizer was so fresh it practically melted. Service was impeccable. This is the kind of restaurant you build your Saturday nights around.",
    date: "1 week ago",
  },
];

const hours = [
  { day: "Monday – Thursday", time: "5:00 PM – 10:00 PM" },
  { day: "Friday – Saturday", time: "5:00 PM – 11:00 PM" },
  { day: "Sunday", time: "10:00 AM – 3:00 PM (Brunch) · 5:00 PM – 9:00 PM" },
];

export default function RestaurantDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: "",
    specialRequests: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-gray-900 font-sans">
      <NavIsland />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-gray-900/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <Leaf className="w-4 h-4 text-emerald-300" />
            <span className="text-emerald-200 text-sm font-medium tracking-wide uppercase">Farm to Table</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight tracking-tight">
            The Golden Fork
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-100/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            Where locally sourced ingredients meet culinary artistry
          </p>
          <p className="text-base text-emerald-200/70 mb-10 max-w-xl mx-auto">
            Every dish tells the story of our farmers, our craft, and our commitment to extraordinary dining.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-400/30 hover:scale-105"
            >
              <UtensilsCrossed className="w-5 h-5" />
              View Our Menu
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#reservations"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              <Calendar className="w-5 h-5" />
              Reserve a Table
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 rounded-full px-4 py-1.5 mb-6">
                <Award className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 text-sm font-medium">Est. 2018</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                A Story Written in{" "}
                <span className="text-emerald-700">Every Plate</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  The Golden Fork was born from a simple belief: the best meals start
                  with the best ingredients. Chef Maria Santos spent fifteen years in
                  kitchens across Europe and the Pacific Northwest before returning to
                  her hometown with a vision — a restaurant where every vegetable comes
                  from a farm she can drive to, and every dish is crafted with the same
                  care she gives her own family.
                </p>
                <p>
                  Our partnerships with local growers, ranchers, and artisans mean our
                  menu changes with the seasons. What arrives on your plate is as fresh
                  as it can possibly be, prepared with techniques that honor the
                  ingredients and the people who grow them.
                </p>
                <p>
                  We believe dining out should be an experience that nourishes more than
                  just hunger — it should create memories, spark conversations, and
                  remind you why sharing a meal matters.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 shadow-lg shadow-gray-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Hours of Operation</h3>
                </div>
                <div className="space-y-4">
                  {hours.map((h) => (
                    <div key={h.day} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <span className="font-medium text-gray-800">{h.day}</span>
                      <span className="text-gray-500">{h.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-500">
                      Private dining and event catering available. Contact us for
                      special occasions, corporate events, and wine dinners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-emerald-100/50 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 md:py-28 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div>
              <span className="text-emerald-600 font-medium text-sm tracking-widest uppercase">Our Menu</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mt-3 mb-4">
                Crafted with Passion
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
                Seasonal selections from our kitchen. Menu items and availability may
                change based on the freshest local ingredients.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {menuCategories.map((category) => (
              <div
                key={category.name}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl font-serif text-gray-900">{category.name}</h3>
                </div>
                <div className="space-y-5">
                  {category.items.map((item) => (
                    <div key={item.name} className="group">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          {item.name}
                        </h4>
                        <div className="flex-shrink-0 border-b border-dotted border-gray-300 flex-1 min-w-4 mx-1 translate-y-[-3px]" />
                        <span className="font-semibold text-emerald-700 flex-shrink-0">
                          ${item.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section id="reservations" className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div>
              <span className="text-emerald-600 font-medium text-sm tracking-widest uppercase">Reservations</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mt-3 mb-4">
                Reserve Your Table
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-base md:text-lg">
                Secure your spot for an unforgettable evening. For parties larger
                than 8, please call us directly.
              </p>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 md:p-10 shadow-lg shadow-gray-200/50"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Party Size</label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all appearance-none"
                    required
                  >
                    <option value="" className="text-gray-400">Select guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all appearance-none"
                    required
                  >
                    <option value="" className="text-gray-400">Select time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  rows={3}
                  placeholder="Dietary restrictions, seating preferences, special occasions..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all resize-none"
                />
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg ${
                    formSubmitted
                      ? "bg-emerald-500 shadow-emerald-300/30"
                      : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20 hover:shadow-emerald-400/30"
                  }`}
                >
                  {formSubmitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Reservation Confirmed!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Reservation
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div>
              <span className="text-emerald-600 font-medium text-sm tracking-widest uppercase">Guest Reviews</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mt-3 mb-4">
                What Our Guests Say
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-base md:text-lg">
                We are grateful for every guest who walks through our doors and
                shares their experience.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-700 font-semibold text-sm">
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{review.name}</p>
                      <p className="text-gray-400 text-xs">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div>
              <span className="text-emerald-600 font-medium text-sm tracking-widest uppercase">Find Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mt-3 mb-4">
                Visit The Golden Fork
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-base md:text-lg">
                Located in the heart of downtown, steps from the waterfront park.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      247 Harborview Drive<br />
                      Suite 100<br />
                      Portland, OR 97201
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(503) 555-0187</p>
                    <p className="text-sm text-gray-400 mt-1">Reservations &amp; inquiries</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">hello@thegoldenfork.com</p>
                    <p className="text-sm text-gray-400 mt-1">Events &amp; catering inquiries</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 px-2">
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-emerald-50 rounded-full flex items-center justify-center transition-colors group">
                  <Instagram className="w-5 h-5 text-gray-500 group-hover:text-emerald-600 transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-emerald-50 rounded-full flex items-center justify-center transition-colors group">
                  <Facebook className="w-5 h-5 text-gray-500 group-hover:text-emerald-600 transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-emerald-50 rounded-full flex items-center justify-center transition-colors group">
                  <Twitter className="w-5 h-5 text-gray-500 group-hover:text-emerald-600 transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm h-full min-h-[400px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interactive Map</h4>
                  <p className="text-sm text-gray-500 max-w-xs">
                    247 Harborview Drive, Portland, OR 97201
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
                  >
                    Open in Google Maps
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-white font-serif text-xl mb-3">The Golden Fork</h3>
              <p className="text-sm leading-relaxed">
                Farm-to-table dining crafted with care. Every dish, a story.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#menu" className="hover:text-emerald-400 transition-colors">Menu</a></li>
                <li><a href="#reservations" className="hover:text-emerald-400 transition-colors">Reservations</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Private Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Hours</h4>
              <ul className="space-y-2 text-sm">
                <li>Mon–Thu: 5–10 PM</li>
                <li>Fri–Sat: 5–11 PM</li>
                <li>Sun: 10 AM–3 PM, 5–9 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>(503) 555-0187</li>
                <li>hello@thegoldenfork.com</li>
                <li className="flex items-center gap-3 pt-1">
                  <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter className="w-4 h-4" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} The Golden Fork. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Website by{" "}
              <Link
                href="/"
                className="text-emerald-500 hover:text-emerald-400 transition-colors font-medium"
              >
                Helping Hands Systems
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Demo Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="pointer-events-auto">
          <a
            href="/payment?demo=restaurant"
            className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3.5 rounded-2xl shadow-2xl shadow-gray-900/30 transition-all duration-300 hover:scale-[1.02] max-w-2xl mx-auto border border-gray-700/50"
          >
            <span className="text-emerald-400 font-medium">This is a live demo</span>
            <span className="hidden sm:inline text-gray-500">—</span>
            <span className="font-semibold underline underline-offset-2 decoration-emerald-400/50 hover:decoration-emerald-400">
              Get This For Your Business
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
