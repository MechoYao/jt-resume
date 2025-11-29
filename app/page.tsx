import { Nav } from "@/components/ui/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Works } from "@/components/sections/works";
import { CV } from "@/components/sections/cv";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      {/* <About /> */}
      {/* <Works /> */}
      <CV />
      <Footer />
    </main>
  );
}
