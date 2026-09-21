import { Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import mediaWall from "../assets/Screenshot_20260921_093357_com.whatsapp.w4b.jpg.asset.json";
import whiteKitchen from "../assets/Screenshot_20260921_093434_com.whatsapp.w4b.jpg.asset.json";
import whiteKitchenDetail from "../assets/Screenshot_20260921_093457_com.whatsapp.w4b.jpg.asset.json";
import darkKitchenDetail from "../assets/Screenshot_20260921_093535.jpg.asset.json";
import darkKitchen from "../assets/Screenshot_20260921_093544.jpg.asset.json";
import livingRoom from "../assets/Screenshot_20260921_093620.jpg.asset.json";
import heroFilm from "../assets/mastercraft-hero.mp4.asset.json";
import projectFilm from "../assets/mastercraft-project-film.mp4.asset.json";

export const assets = {
  mediaWall: mediaWall.url,
  whiteKitchen: whiteKitchen.url,
  whiteKitchenDetail: whiteKitchenDetail.url,
  darkKitchenDetail: darkKitchenDetail.url,
  darkKitchen: darkKitchen.url,
  livingRoom: livingRoom.url,
  heroFilm: heroFilm.url,
  projectFilm: projectFilm.url,
};

const nav = [
  ["Projects", "/projects"],
  ["Services", "/services"],
  ["Studio", "/studio"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className={`site-header ${light ? "site-header-light" : ""}`}>
        <Link to="/" className="brand-mark" aria-label="MasterCraft Projects home">
          <span>MasterCraft</span><small>Projects</small>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}
        </nav>
        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
      </header>
      {open && (
        <div className="menu-panel">
          <button className="menu-button menu-close" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
          <p className="eyebrow">Navigation</p>
          <nav aria-label="Mobile navigation">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            {nav.map(([label, href], index) => (
              <Link key={href} to={href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{label}</Link>
            ))}
          </nav>
          <a className="menu-contact" href="https://wa.me/27673620496">WhatsApp · +27 67 362 0496</a>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">Begin a project</p>
        <h2>Let’s make space<br />for something <em>remarkable.</em></h2>
      </div>
      <div className="footer-contact">
        <a href="mailto:mastercraftprojectsquotes@gmail.com">mastercraftprojectsquotes@gmail.com <ArrowUpRight /></a>
        <a href="https://wa.me/27673620496">+27 67 362 0496 <ArrowUpRight /></a>
      </div>
      <div className="footer-base"><span>MasterCraft Projects</span><span>South Africa · © 2026</span></div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="site"><SiteHeader />{children}<Footer /><a className="whatsapp-float" href="https://wa.me/27673620496" aria-label="Message MasterCraft Projects on WhatsApp"><MessageCircle /></a></div>;
}

export function PageIntro({ index, title, italic, copy }: { index: string; title: string; italic?: string; copy: string }) {
  return (
    <section className="page-intro">
      <div className="eyebrow">{index} / 05</div>
      <h1>{title}<br />{italic && <em>{italic}</em>}</h1>
      <p>{copy}</p>
      <ArrowDownRight className="intro-arrow" />
    </section>
  );
}

export function ProjectFigure({ src, number, title, category, landscape = false }: { src: string; number: string; title: string; category: string; landscape?: boolean }) {
  return (
    <figure className={`project-figure ${landscape ? "landscape" : ""}`}>
      <div className="image-frame"><img src={src} alt={title} /></div>
      <figcaption><span className="project-no">{number}</span><div><h3>{title}</h3><p>{category}</p></div><ArrowUpRight /></figcaption>
    </figure>
  );
}