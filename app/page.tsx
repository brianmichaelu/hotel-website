  "use client";

import Image from "next/image";
import { useState } from "react";
import {
  Wifi,
  Snowflake,
  Coffee,
  Car,
  Utensils,
  Bell,
  Plane,
  BriefcaseBusiness,
} from "lucide-react";
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
  name: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomType: "",
  guests: "",
  message: "",
});

const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const message = `
Hello ${hotelName}, I would like to make a booking request.

Name: ${bookingForm.name}
Phone: ${bookingForm.phone}
Check-in: ${bookingForm.checkIn}
Check-out: ${bookingForm.checkOut}
Room Type: ${bookingForm.roomType}
Guests: ${bookingForm.guests}
Message: ${bookingForm.message}
  `;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/255689824682?text=${encodedMessage}`, "_blank");
  setBookingForm({
  name: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomType: "",
  guests: "",
  message: "",
});
};
  // ===== REPLACE THESE CLIENT DETAILS =====
  const hotelName = "Tegeta Palm Hotel"; // Replace with real hotel name if needed
  const phoneNumber = "+255 689 824 682"; // Replace with real hotel phone number
  const email = "lubrun.enterprises@gmail.com"; // Replace with real hotel email
  const whatsappLink =
  "https://wa.me/255689824682?text=Hello%20Tegeta%20Palm%20Hotel%2C%20I%20would%20like%20to%20make%20a%20booking%20request.";

  const rooms = [
    {
      name: "Standard Room",
      image: "/standard.png", // Replace image in public folder
      price: "TZS 75,000 / night", // Replace with real Standard Room price
      description: "A clean and comfortable room for solo travelers and short stays.",
      amenities: ["Queen bed", "Air conditioning", "Free Wi-Fi", "Private bathroom"],
    },
    {
      name: "Deluxe Room",
      image: "/deluxe.png", // Replace image in public folder
      price: "TZS 110,000 / night", // Replace with real Deluxe Room price
      description: "More space and comfort for business guests and couples.",
      amenities: ["King bed", "Work desk", "Breakfast option", "Smart TV"],
    },
    {
      name: "Family Room",
      image: "/family.png", // Replace image in public folder
      price: "TZS 160,000 / night", // Replace with real Family Room price
      description: "A spacious room designed for families and group visitors.",
      amenities: ["Multiple beds", "Extra space", "Secure parking", "Room service"],
    },
  ];

 const amenities = [
  { name: "Free Wi-Fi", icon: Wifi },
  { name: "Air conditioning", icon: Snowflake },
  { name: "Breakfast", icon: Coffee },
  { name: "Secure parking", icon: Car },
  { name: "Restaurant", icon: Utensils },
  { name: "24/7 reception", icon: Bell },
  { name: "Airport transfer on request", icon: Plane },
  { name: "Conference / meeting space", icon: BriefcaseBusiness },
];

  const galleryImages = [
    { title: "Rooms", src: "/rooms.png" },
    { title: "Restaurant", src: "/restaurant.png" },
    { title: "Reception", src: "/reception.png" },
    { title: "Outside View", src: "/outside.png" },
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#0B1F3A]">
      {/* HEADER */}
<header className="sticky top-0 z-50 border-b border-[#E8DDC8] bg-white/95 shadow-sm backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
    <a href="#home" className="flex items-center rounded-2xl bg-[#0B1F3A] px-3 py-2 shadow-md">
      <Image
        src="/homelogo.png"
        alt="Tegeta Palm Hotel logo"
        width={360}
        height={140}
        className="h-16 w-auto object-contain md:h-20"
        priority
      />
    </a>

    <nav className="hidden items-center rounded-full bg-[#FAF7F0] px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm md:flex md:gap-7">
      <a href="#home" className="transition hover:text-[#B8892D]">Home</a>
      <a href="#about" className="transition hover:text-[#B8892D]">About</a>
      <a href="#rooms" className="transition hover:text-[#B8892D]">Rooms</a>
      <a href="#amenities" className="transition hover:text-[#B8892D]">Amenities</a>
      <a href="#contact" className="transition hover:text-[#B8892D]">Contact</a>
    </nav>

    <div className="flex items-center gap-3">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden rounded-full bg-[#B8892D] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#9f7626] sm:inline-flex"
      >
        Book Now
      </a>

      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="rounded-xl border border-[#E8DDC8] bg-[#FAF7F0] px-3 py-2 text-2xl leading-none text-[#0B1F3A] shadow-sm md:hidden"
        aria-label="Open mobile menu"
      >
        ☰
      </button>
    </div>
  </div>

  {mobileMenuOpen && (
    <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">      
      <div className="flex flex-col gap-4 text-sm font-medium text-slate-700">
        <a onClick={() => setMobileMenuOpen(false)} href="#home">Home</a>
        <a onClick={() => setMobileMenuOpen(false)} href="#about">About</a>
        <a onClick={() => setMobileMenuOpen(false)} href="#rooms">Rooms</a>
        <a onClick={() => setMobileMenuOpen(false)} href="#amenities">Amenities</a>
        <a onClick={() => setMobileMenuOpen(false)} href="#contact">Contact</a>
        <a
          onClick={() => setMobileMenuOpen(false)}
          href={whatsappLink}
          className="rounded-full bg-[#B8892D] px-5 py-3 text-center font-bold text-white"
        >
          Book via WhatsApp
        </a>
      </div>
    </div>
  )}
</header>
      
  {/* HERO */}
      
<section id="home" className="bg-white">
  <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-8 pb-14 md:grid-cols-2 md:items-center md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
    <div>
      <p className="mb-4 inline-flex rounded-full bg-[#FAF7F0] px-4 py-2 text-sm font-semibold text-[#B8892D]">
        Local comfort near Bagamoyo Road
      </p>

      <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[#0B1F3A] sm:text-5xl lg:text-[56px]">
        Comfortable Stays in Tegeta, Dar es Salaam
      </h1>

      <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
        Clean rooms, calm surroundings, and friendly local service with easy access to
        Mbezi Beach, Bagamoyo Road, White Sands, and central Dar es Salaam.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappLink}
          className="rounded-full bg-[#0B1F3A] px-7 py-3 text-center text-sm font-bold text-white shadow-lg transition hover:bg-[#132f55]"
        >
          Book via WhatsApp
        </a>

        <a
          href="#rooms"
          className="rounded-full border border-[#B8892D] bg-white px-7 py-3 text-center text-sm font-bold text-[#0B1F3A] transition hover:bg-[#FAF7F0]"
        >
          View Rooms
        </a>
      </div>
    </div>

    <div className="overflow-hidden rounded-[2rem] bg-[#FAF7F0] shadow-2xl">
      <Image
        src="/exterior.png"
        alt="Tegeta Palm Hotel exterior"
        width={1200}
        height={800}
        priority
        className="h-[360px] w-full object-cover sm:h-[430px] md:h-[500px]"
      />
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="reveal mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B8892D]">About us</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A calm local hotel for easy stays in Tegeta.</h2>
          </div>
          <p className="text-base leading-8 text-slate-700 md:text-lg">
            {hotelName} serves travelers, business guests, families, and weekend visitors looking
            for a clean, convenient, and affordable stay in Tegeta. Our location offers a peaceful
            environment with quick access to Mbezi Beach, Bagamoyo Road, White Sands area, and central Dar es Salaam.
          </p>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms"  className="reveal mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B8892D]">Rooms</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Choose a room that fits your stay.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Simple, clean, and comfortable rooms for business, family, and weekend guests.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {rooms.map((room) => (
              <article key={room.name} className="reveal overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                 <Image
                    src={room.image}
                    alt={room.name}
                    width={800}
                    height={600}
                  className="h-56 w-full object-cover"
              
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold">{room.name}</h3>
                    <p className="text-right text-sm font-bold text-[#B8892D]">{room.price}</p>
                  </div>
                  <p className="mt-3 leading-7 text-slate-600">{room.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {room.amenities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[#B8892D]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink}
                    className="mt-6 block rounded-full bg-[#0B1F3A] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#132f55]"
                  >
                    Book Room
                  </a>
                </div>
              </article>
            ))}
             
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="reveal mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B8892D]">Amenities</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Everything guests need for a smooth stay.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => {
  const Icon = item.icon;

  return (
    <div
      key={item.name}
      className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF7F0] text-[#B8892D]">
        <Icon size={24} strokeWidth={2.2} />
      </div>
      <p className="font-semibold">{item.name}</p>
    </div>
  );
})}
        </div>
      </section>

      {/* GALLERY */}
      <section className="reveal mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B8892D]">Gallery</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A quick look inside the hotel.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <div key={image.title} className="group overflow-hidden rounded-3xl bg-[#FAF7F0] shadow-lg">
                 <Image
                    src={image.src}
                    alt={image.title}
                    width={800}
                    height={600}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
/>
                <div className="p-4 font-semibold">{image.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY */}
      <section id="about" className="reveal mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-2xl md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D6B56D]">Nearby places</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Well placed for beach, business, and city movement.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {["Mbezi Beach", "Tegeta Nyuki Market", "Bagamoyo Road", "White Sands area", "Central Dar access"].map((place) => (
              <div key={place} className="rounded-2xl bg-white/10 p-4 text-sm font-semibold ring-1 ring-white/10">
                {place}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reveal mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B8892D]">Guest reviews</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Trusted by local and visiting guests.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Clean rooms and friendly staff. The location was perfect for my work around Tegeta.", "Business Guest"],
              ["A calm place for a weekend stay. Booking through WhatsApp was very easy.", "Weekend Visitor"],
              ["Good value for money and close to the beach areas. I would stay again.", "Family Guest"],
            ].map(([quote, name]) => (
              <div key={name} className="rounded-3xl bg-[#FAF7F0] p-6 shadow-md">
                <p className="leading-8 text-slate-700">“{quote}”</p>
                <p className="mt-5 font-bold text-[#0B1F3A]">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="reveal mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B8892D]">Contact & booking</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Book your stay in Tegeta today.</h2>
            <p className="mt-4 leading-8 text-slate-600">
             Need a room or have a question? Contact us directly through WhatsApp or phone and we’ll assist you shortly.
            </p>
            
            <p className="mt-3 font-semibold text-[#0B1F3A]">
                  Direct booking is available through WhatsApp, phone, or email.
            </p>
            
            
            <div className="mt-8 space-y-4 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5">
              <a href={whatsappLink} className="block rounded-full bg-[#25D366] px-6 py-3 text-center font-bold text-white">
                Book via WhatsApp
              </a>
              <p><span className="font-bold">Phone:</span> {phoneNumber}</p>
              <p><span className="font-bold">Email:</span> {email}</p>
              <p><span className="font-bold">Location:</span> Tegeta, Dar es Salaam, Tanzania</p>
            </div>

            <div className="mt-6 h-72 rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15851.723688936343!2d39.1855733!3d-6.65548415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2stz!4v1779224426122!5m2!1sen!2stz"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="h-full w-full rounded-2xl"
  />
</div>
          </div>

           <form
              onSubmit={handleBookingSubmit}
  
            className="rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-black/5 md:p-8">
            <h3 className="text-2xl font-bold">Request a Booking</h3>
            <p className="mt-2 text-sm text-slate-500">
               Fill in your stay details, then continue through WhatsApp for quick confirmation.
            </p>
            <div className="mt-6 grid gap-4">
  <input
  value={bookingForm.name}
  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]"
  placeholder="Full name"
/>

  <input
  value={bookingForm.phone}
  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]"
  placeholder="Phone number"
/>

  <div className="grid gap-4 sm:grid-cols-2">
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Check-in
      </label>
     <input
  type="date"
  value={bookingForm.checkIn}
  onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]"
/>
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Check-out
      </label>
      <input
  type="date"
  value={bookingForm.checkOut}
  onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]"
/>
    </div>
  </div>

  <div className="grid gap-4 sm:grid-cols-2">
  <select
    value={bookingForm.roomType}
    onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}
    className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]"
  >
    <option value="">Select room type</option>
    <option value="Standard Room">Standard Room</option>
    <option value="Deluxe Room">Deluxe Room</option>
    <option value="Family Room">Family Room</option>
  </select>

  <select
    value={bookingForm.guests}
    onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
    className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]"
  >
    <option value="">Guests</option>
    <option value="1 Guest">1 Guest</option>
    <option value="2 Guests">2 Guests</option>
    <option value="3 Guests">3 Guests</option>
    <option value="4+ Guests">4+ Guests</option>
  </select>
</div>

<textarea
  value={bookingForm.message}
  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
  className="min-h-28 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]"
  placeholder="Special request or message"
/>

<button
  type="submit"
  className="cursor-pointer rounded-full bg-[#0B1F3A] px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-[#132f55]"
>
  Send Booking Request
</button>

<p className="text-center text-xs text-slate-500">
  Your request will open in WhatsApp for quick confirmation.
</p>
</div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1F3A] px-5 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">{hotelName}</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
              Comfortable local hotel stays in Tegeta, Dar es Salaam.
            </p>
          </div>
          <div>
            <h4 className="font-bold">Navigation</h4>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#rooms">Rooms</a>
              <a href="#amenities">Amenities</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold">Contact</h4>
            <div className="mt-3 space-y-2 text-sm text-white/70">
              <p>{phoneNumber}</p>
              <p>{email}</p>
              <p>Tegeta, Dar es Salaam</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} {hotelName}. All rights reserved.
        </div>
      </footer>

        <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-2xl transition hover:scale-105"
>
  WhatsApp Booking
</a>
      
    </main>
  );
}
