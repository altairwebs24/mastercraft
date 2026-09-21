import { createFileRoute } from "@tanstack/react-router";
import { assets, PageIntro, PageShell } from "../components/mastercraft";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact | MasterCraft Projects" }, { name: "description", content: "Contact MasterCraft Projects for renovation, interior design and bespoke furniture enquiries." },
    { property: "og:title", content: "Contact | MasterCraft Projects" }, { property: "og:description", content: "Start a conversation about your space." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Contact,
});

function Contact() { return <PageShell><main>
  <PageIntro index="04" title="Start a" italic="conversation." copy="Tell us what you are imagining, where the project is based and how you would like the space to feel." />
  <section className="contact-main">
    <div className="contact-line"><span>Email</span><a href="mailto:mastercraftprojectsquotes@gmail.com">mastercraftprojectsquotes@gmail.com</a></div>
    <div className="contact-line"><span>Call / WhatsApp</span><a href="https://wa.me/27673620496">+27 67 362 0496</a></div>
    <div className="contact-line"><span>Expertise</span><a href="/services">Renovations · Interior design · Furniture</a></div>
  </section>
  <div className="studio-story"><img src={assets.livingRoom} alt="A finished MasterCraft living room" /><div><p className="eyebrow">South Africa</p><h2>Your next space begins with a <em>conversation.</em></h2><p>Share your inspiration, measurements or a short description. We will respond directly to discuss the right next step.</p></div></div>
</main></PageShell>; }