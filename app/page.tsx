  import Image from "next/image";
export default function Home() {
  // ===== REPLACE THESE CLIENT DETAILS =====
  const hotelName = "Tegeta Palm Hotel"; // Replace with real hotel name if needed
  const phoneNumber = "+255 689 824 682"; // Replace with real hotel phone number
  const email = "lubrun.enterprises@gmail.com"; // Replace with real hotel email
  const whatsappLink = "https://wa.me/255689824682"; // Replace with real WhatsApp number, no + sign or spaces

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
    "Free Wi-Fi",
    "Air conditioning",
    "Breakfast",
    "Secure parking",
    "Restaurant",
    "24/7 reception",
    "Airport transfer on request",
    "Conference / meeting space",
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
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-bold tracking-wide text-[#0B1F3A]">
            {hotelName}
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="hover:text-[#B8892D]">About</a>
            <a href="#rooms" className="hover:text-[#B8892D]">Rooms</a>
            <a href="#amenities" className="hover:text-[#B8892D]">Amenities</a>
            <a href="#contact" className="hover:text-[#B8892D]">Contact</a>
          </nav>
          <a
            href={whatsappLink}
            className="rounded-full bg-[#B8892D] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#9f7626]"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
     {/* HERO */}
<section id="home" className="bg-white">
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
    <div>
      <p className="mb-4 inline-flex rounded-full bg-[#FAF7F0] px-4 py-2 text-sm font-semibold text-[#B8892D]">
        Local comfort near Bagamoyo Road
      </p>

      <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[#0B1F3A] md:text-6xl">
        Comfortable Stays in Tegeta, Dar es Salaam
      </h1>

      <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
        Clean rooms, calm surroundings, and friendly local service with easy access to Mbezi Beach,
        Bagamoyo Road, White Sands, and central Dar es Salaam.
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
        className="h-[360px] w-full object-cover md:h-[520px]"
      />
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
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
      <section id="rooms" className="bg-white py-16 md:py-24">
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
              <article key={room.name} className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
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
      <section id="amenities" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B8892D]">Amenities</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Everything guests need for a smooth stay.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <div key={item} className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF7F0] text-[#B8892D]">
                ✓
              </div>
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-16 md:py-24">
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
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
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
      <section className="bg-white py-16 md:py-24">
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
      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B8892D]">Contact & booking</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Book your stay in Tegeta today.</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Contact us directly for room availability, weekend stays, group bookings, airport transfer,
              and meeting space inquiries.
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
              {/* Replace this box with Google Maps embed iframe */}
              <div className="flex h-full items-center justify-center rounded-2xl bg-[#FAF7F0] text-center text-slate-500">
               Tegeta, Dar es Salaam Map Location
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-black/5 md:p-8">
            <h3 className="text-2xl font-bold">Send an inquiry</h3>
            <p className="mt-2 text-sm text-slate-500">
                Send us your inquiry and our team will get back to you shortly.
            </p>
            <div className="mt-6 grid gap-4">
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]" placeholder="Full name" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]" placeholder="Phone number" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]" placeholder="Email address" />
              <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]">
                <option>Select room type</option>
                <option>Standard Room</option>
                <option>Deluxe Room</option>
                <option>Family Room</option>
              </select>
              <textarea className="min-h-32 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#B8892D]" placeholder="Message" />
              <button type="button" className="rounded-full bg-[#0B1F3A] px-6 py-3 font-bold text-white transition hover:bg-[#132f55]">
                Send Booking Request
              </button>
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
    </main>
  );
}
