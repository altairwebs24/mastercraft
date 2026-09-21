import { createFileRoute } from "@tanstack/react-router";
import { assets, PageIntro, PageShell, ProjectFigure } from "../components/mastercraft";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects | MasterCraft Projects" }, { name: "description", content: "Explore completed MasterCraft kitchens, living spaces, media walls and bespoke interiors." },
    { property: "og:title", content: "Projects | MasterCraft Projects" }, { property: "og:description", content: "A portfolio of precisely crafted South African interiors." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Projects,
});

function Projects() { return <PageShell><main>
  <PageIntro index="01" title="Selected" italic="projects." copy="A study in stone, timber, light and proportion. Each project is composed around the people who will inhabit it." />
  <section className="projects-grid">
    <ProjectFigure src={assets.darkKitchen} number="01" title="Obsidian Kitchen" category="Kitchen architecture" />
    <ProjectFigure src={assets.mediaWall} number="02" title="Warm Frame" category="Media wall & custom cabinetry" />
    <ProjectFigure src={assets.whiteKitchen} number="03" title="Pearl Kitchen" category="High-gloss joinery" />
    <ProjectFigure src={assets.livingRoom} number="04" title="The Quiet Room" category="Living interior & illuminated shelving" />
  </section>
  <section className="film-feature"><video src={assets.projectFilm} autoPlay muted loop playsInline aria-label="MasterCraft completed bedroom interior" /><div className="film-caption"><p className="eyebrow">In motion / Residential interior</p><h2>Rooms made for the life lived <em>inside them.</em></h2></div></section>
</main></PageShell>; }