import { createFileRoute } from "@tanstack/react-router";
import { assets, PageIntro, PageShell } from "../components/mastercraft";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services | MasterCraft Projects" }, { name: "description", content: "Bespoke kitchens, media walls, furniture, interior design and full residential renovations." },
    { property: "og:title", content: "Services | MasterCraft Projects" }, { property: "og:description", content: "From concept to final installation, one considered process." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Services,
});

const services = [
  ["01", "Bespoke kitchens", "Tailored cabinetry, integrated appliances, stone surfaces and carefully orchestrated lighting—designed around the way you cook and gather."],
  ["02", "Media walls", "Architectural entertainment walls with concealed technology, fluted timber, display shelving and layered ambient light."],
  ["03", "Interior design", "A cohesive approach to material, colour, furniture and flow, giving every room a distinct but connected point of view."],
  ["04", "Renovations", "End-to-end residential transformations, coordinating design decisions, specialist trades and the final detailing."],
  ["05", "Custom furniture", "Made-to-measure pieces and fitted joinery that answer the dimensions, function and character of your space."],
];
function Services() { return <PageShell><main>
  <PageIntro index="02" title="Considered" italic="capabilities." copy="From the first measured line to the final handle, we manage the elements that make an interior feel complete." />
  <div className="studio-story"><img src={assets.whiteKitchenDetail} alt="White bespoke kitchen by MasterCraft Projects" /><div><p className="eyebrow">One studio / One standard</p><h2>Design and execution, held to the same <em>measure.</em></h2></div></div>
  <section className="service-list">{services.map(([n,t,d]) => <article className="service-row" key={n}><span>{n}</span><h2>{t}</h2><p>{d}</p></article>)}</section>
</main></PageShell>; }