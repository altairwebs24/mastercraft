import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { assets, Footer, ProjectFigure, SiteHeader } from "../components/mastercraft";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "MasterCraft Projects | Bespoke Interiors & Renovations" },
    { name: "description", content: "MasterCraft Projects creates bespoke kitchens, media walls, interiors and residential renovations across South Africa." },
    { property: "og:title", content: "MasterCraft Projects | Bespoke Interiors & Renovations" },
    { property: "og:description", content: "Crafted spaces, considered down to the last detail." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div className="site">
      <SiteHeader light />
      <main>
        <section className="hero">
          <video src={assets.heroFilm} autoPlay muted loop playsInline aria-label="A completed MasterCraft kitchen" />
          <div className="hero-copy">
            <h1>Architecture for the <em>sentient home.</em></h1>
            <p className="hero-meta">Renovations · Interiors · Furniture</p>
          </div>
        </section>
        <section className="home-intro">
          <div><p className="eyebrow">MasterCraft Projects / South Africa</p><h2>Spaces shaped<br />with <em>intention.</em></h2></div>
          <p>We design and deliver refined residential spaces where craftsmanship, function and atmosphere work as one—from architectural kitchens to complete interiors.</p>
        </section>
        <section className="project-preview">
          <ProjectFigure src={assets.darkKitchen} number="01" title="Obsidian Kitchen" category="Bespoke kitchen · Stone · Joinery" />
          <ProjectFigure src={assets.mediaWall} number="02" title="Illuminated Living" category="Media wall · Integrated lighting" />
        </section>
        <section className="dark-band">
          <p className="eyebrow">Our practice</p>
          <blockquote>“Luxury is not added. It is <em>resolved</em> in every line, joint and finish.”</blockquote>
          <Link to="/studio" className="text-link">Discover the studio <ArrowUpRight /></Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
