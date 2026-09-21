import { createFileRoute } from "@tanstack/react-router";
import { assets, PageIntro, PageShell } from "../components/mastercraft";

export const Route = createFileRoute("/studio")({
  head: () => ({ meta: [
    { title: "Studio | MasterCraft Projects" }, { name: "description", content: "Meet the design and build philosophy behind MasterCraft Projects." },
    { property: "og:title", content: "Studio | MasterCraft Projects" }, { property: "og:description", content: "A South African studio devoted to precise, enduring interiors." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Studio,
});

function Studio() { return <PageShell><main>
  <PageIntro index="03" title="Craft as a" italic="continuum." copy="MasterCraft Projects brings design thinking and hands-on making into one disciplined process." />
  <section className="studio-story"><img src={assets.darkKitchenDetail} alt="Stone island and dark cabinetry by MasterCraft Projects" /><div><p className="eyebrow">Built with purpose</p><h2>Honest materials. Exacting standards.</h2><p>We believe the most luxurious spaces are the ones that feel inevitable: every proportion balanced, every material in conversation, every practical need quietly resolved. Our work spans renovations, interior design and bespoke furniture throughout South Africa.</p></div></section>
  <section className="dark-band"><p className="eyebrow">Our promise</p><blockquote>We don’t decorate rooms. We compose <em>places to belong.</em></blockquote></section>
</main></PageShell>; }