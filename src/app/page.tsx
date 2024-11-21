import React from "react";
import Cards from "./Cards/page";
import Footer from "@/components/Footer";
import Brand from "@/components/Brand";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div>
{/* hero section */}
  <Hero />

{/* brand section */}
    <Brand />

{/* Cards Section */}
    <Cards />

{/* Footer */}
    <Footer />
    </div>
  );
}
