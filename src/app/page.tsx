"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Lab from "@/components/Lab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-1 flex-col">
      <Preloader onComplete={() => setLoading(false)} />
      <div
        style={{ opacity: loading ? 0 : 1 }}
        className="flex flex-1 flex-col transition-opacity duration-700"
      >
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Lab />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
