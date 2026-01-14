"use client"

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="font-sans bg-white text-black">
      {/* HEADER */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <h1 className="font-bold tracking-widest text-lg leading-tight">
            COLTON
            <br />
            PROPERTIES
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a className="hover:opacity-70 cursor-pointer">HOME</a>
            <a className="hover:opacity-70 cursor-pointer">SALES</a>
            <a className="hover:opacity-70 cursor-pointer">RENTALS</a>
            <a className="hover:opacity-70 cursor-pointer">AGENTS</a>
            <a className="hover:opacity-70 cursor-pointer">CONTACT</a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="md:hidden border-t px-6 py-4 flex flex-col gap-4 text-sm font-semibold">
            <a onClick={() => setOpen(false)}>HOME</a>
            <a onClick={() => setOpen(false)}>SALES</a>
            <a onClick={() => setOpen(false)}>RENTALS</a>
            <a onClick={() => setOpen(false)}>AGENTS</a>
            <a onClick={() => setOpen(false)}>CONTACT</a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        className="relative text-center py-40 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10">
          <p className="tracking-widest text-sm">LUXURY VILLA</p>
          <h2 className="text-5xl font-bold mt-4 leading-tight">
            MINUTES <br /> FROM THE BAY
          </h2>
          <p className="text-xl mt-6">$3,500,000</p>
          <p className="max-w-xl mx-auto mt-6 text-gray-200">
            I'm a paragraph. Click here to add your own text and edit me.
          </p>
          <button className="mt-8 px-8 py-3 border border-white">
            READ MORE
          </button>
        </div>
      </section>

      {/* PROPERTIES FOR SALE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-12">PROPERTIES FOR SALE</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <Property
            title="ALTON AVENUE"
            beds="3 bedrooms"
            price="$500,000"
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          />
          <Property
            title="PRINCE WAY"
            beds="3 bedrooms"
            price="$450,000"
            image="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80"
          />
          <Property
            title="PIERCE CLOSE"
            beds="6 bedrooms"
            price="$790,000"
            image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </section>

      {/* RENTALS */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12">LATEST RENTAL PROPERTIES</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Property
              title="EAST DRIVE"
              beds="4 bedrooms"
              price="$790,000"
              image="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
            />
            <Property
              title="CHASE AVENUE"
              beds="3 bedrooms"
              price="$500,000"
              image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-32 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold">
            VOTED NUMBER 1 REALTOR IN THE BAY
          </h2>
          <p className="mt-6 text-xl">FREE PROPERTY VALUATION</p>
          <p className="max-w-xl mx-auto mt-4 text-gray-200">
            I'm a paragraph. Click here to add your own text and edit me.
          </p>
        </div>
      </section>

      {/* MORE PROPERTIES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <Property
            title="OSTERLEY AVENUE"
            beds="3 bedrooms"
            price="$450,000"
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          />
          <Property
            title="KINGS CLOSE"
            beds="2 bedrooms"
            price="$450,000"
            image="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-center">
          <div>
            <h3 className="text-xl font-bold">
              FREE REGISTRATION
              <br />
              NO HIDDEN FEES
            </h3>
            <p className="mt-4 text-gray-600">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">
              OFFICES IN 4<br />
              LOCATIONS
            </h3>
            <p className="mt-4 text-gray-600">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-12">WHAT OUR CLIENTS THINK</h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
          <Testimonial
            name="NINA & TOM STONE"
            image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
          />
          <Testimonial
            name="ANGELA PETERSON"
            image="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80"
          />
          <Testimonial
            name="PAUL & SUSAN TAYLOR"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-bold mb-6">
              TO CONTACT OUR RENTAL OR SALES TEAM
            </h2>
            <p>Tel: 123-456-7890</p>
            <p>Email: info@mysite.com</p>
            <p>Fax: 123-456-7890</p>
            <p className="mt-4">
              500 Terry Francine Street
              <br />
              San Francisco, CA 94158
            </p>
          </div>

          <form className="grid gap-4">
            <input className="border p-2" placeholder="First Name*" />
            <input className="border p-2" placeholder="Last Name*" />
            <input className="border p-2" placeholder="Subject" />
            <textarea className="border p-2" placeholder="Message" />
            <button className="border border-black py-2">Submit</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-gray-600">
        © 2035 by Colton Properties. Powered and secured by Wix
      </footer>
    </main>
  );
}

/* COMPONENTS */

function Property({
  title,
  beds,
  price,
  image,
}: {
  title: string;
  beds: string;
  price: string;
  image: string;
}) {
  return (
    <div className="group">
      {/* Image */}
      <div
        className="h-64 bg-cover bg-center mb-6"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Text */}
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm mt-1">{beds}</p>
      <p className="text-gray-600 my-4">
        I'm a paragraph. Click here to add your own text and edit me.
      </p>
      <p className="font-semibold">{price}</p>
    </div>
  );
}

function Testimonial({ name, image }: { name: string; image: string }) {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
      />
      <p className="italic text-gray-600">
        "I'm a paragraph. Click here to add your own text and edit me."
      </p>
      <p className="mt-4 font-semibold">{name}</p>
    </div>
  );
}
