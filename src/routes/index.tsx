import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Beef,
  Clock3,
  Coffee,
  HeartHandshake,
  MapPin,
  Menu,
  Navigation,
  Phone,
  Quote,
  Sparkles,
  Star,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/yufka-hero.jpg";
import boxImage from "@/assets/menu-box.jpg";
import kebabImage from "@/assets/menu-kebab.jpg";
import lavasImage from "@/assets/menu-lavas.jpg";
import pideImage from "@/assets/menu-pide.jpg";
import pizzaImage from "@/assets/menu-pizza-salad.jpg";
import { Button } from "@/components/ui/button";

const phoneHref = "tel:691313302";

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "O nas", href: "#o-nas" },
  { label: "Opinie", href: "#opinie" },
  { label: "Kontakt", href: "#kontakt" },
];

const dishes = [
  {
    name: "Lavaş (Dürüm)",
    description: "Klasyk w cienkim cieście",
    price: "od 24 zł",
    image: lavasImage,
    alt: "Lavaş z kraftową wołowiną i świeżymi warzywami",
  },
  {
    name: "Pide Turecka",
    description: "Turecka pizza z soczystymi dodatkami",
    price: "od 28 zł",
    image: pideImage,
    alt: "Tradycyjna turecka pide z mięsem i warzywami",
  },
  {
    name: "Kebab w Bułce",
    description: "Świeża pita i mnóstwo mięsa",
    price: "od 22 zł",
    image: kebabImage,
    alt: "Kebab z wołowiną w świeżo wypiekanej bułce",
  },
  {
    name: "Box Kraftowy",
    description: "Kebab box dla naprawdę głodnych",
    price: "od 27 zł",
    image: boxImage,
    alt: "Kraftowy kebab box z frytkami i świeżymi dodatkami",
  },
  {
    name: "Pizza & Sałatki",
    description: "Dla każdego coś pysznego",
    price: "od 20 zł",
    image: pizzaImage,
    alt: "Turecka pizza, sałatka, ayran i baklava",
  },
];

const reviews = [
  {
    text: "Rewelacja!!! Najlepszy kebab jaki ostatnio jadłam! Pełno mięsa, dobrze doprawione, dodatki wyważone, pita świeża trzyma wszystko.",
    author: "Stella",
  },
  {
    text: "Bardzo fajny, przytulny lokal, prowadzony przez starszego, bardzo miłego Pana z Turcji. Naprawdę smaczny kebab z wołowiny kraftowej.",
    author: "Die-Hard Metalhead",
  },
  {
    text: "Bardzo miła obsługa, jedzenie równie dobre:) Wszystko podane szybciutko, dodatkowy plus za pyszną herbatkę na poczekanie.",
    author: "Klaudia",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yufka Kebab | Restauracja Turecka w Swarzędzu" },
      {
        name: "description",
        content:
          "Autentyczny turecki kebab w Swarzędzu. Kraftowa wołowina, świeże pide, duże porcje i darmowa turecka herbata. Zadzwoń i zamów.",
      },
      { property: "og:title", content: "Yufka Kebab — prawdziwy turecki smak w Swarzędzu" },
      {
        property: "og:description",
        content: "Kraftowa wołowina, świeża pita i autentyczna turecka gościnność.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function BrandMark() {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-gold/40 bg-brand-red text-brand-cream shadow-brand sm:size-11">
      <span className="font-display text-xl font-bold leading-none">Y</span>
    </span>
  );
}

function StarRow({ size = "sm" }: { size?: "sm" | "md" }) {
  return (
    <span className="flex items-center gap-0.5 text-brand-gold" aria-label="Ocena 5 na 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={size === "md" ? "size-5 fill-current" : "size-4 fill-current"} />
      ))}
    </span>
  );
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="overflow-x-hidden bg-background pb-20 text-foreground md:pb-0">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-brand-cream/15 bg-brand-charcoal/65 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:flex lg:h-24 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3 text-brand-cream" aria-label="Yufka Kebab — strona główna">
            <BrandMark />
            <span className="min-w-0">
              <span className="block truncate font-display text-xl font-bold uppercase leading-none sm:text-2xl">Yufka Kebab</span>
              <span className="mt-1 block truncate text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-gold">Restauracja turecka</span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Główna nawigacja">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-bold text-brand-cream/80 transition-colors hover:text-brand-gold">
                {item.label}
              </a>
            ))}
            <Button asChild size="lg" className="h-12 bg-brand-red px-5 text-brand-cream shadow-brand hover:bg-brand-red-strong">
              <a href={phoneHref}><Phone /> Zadzwoń i zamów</a>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="size-11 text-brand-cream hover:bg-brand-cream/10 hover:text-brand-gold lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-navigation" className="border-t border-brand-cream/15 bg-brand-charcoal px-4 py-5 lg:hidden" aria-label="Nawigacja mobilna">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-3 text-base font-bold text-brand-cream transition-colors hover:bg-brand-cream/10 hover:text-brand-gold">
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-3 h-12 bg-brand-red text-brand-cream hover:bg-brand-red-strong">
                <a href={phoneHref}><Phone /> Zadzwoń i zamów</a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[760px] items-end bg-brand-charcoal pt-28 text-brand-cream lg:min-h-[820px] lg:items-center">
        <img src={heroImage} alt="Kraftowy kebab i tureckie pide na stole" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 size-full object-cover object-[65%_center]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-hero-vignette" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-16 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-gold sm:text-sm">
              <span className="h-px w-9 bg-brand-gold" /> Swarzędz · kuchnia turecka
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-bold uppercase leading-[0.92] sm:text-7xl lg:text-[5.75rem]">
              Prawdziwy Turecki <span className="text-brand-gold">Smak</span> w Swarzędzu
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-brand-cream/85 sm:text-lg sm:leading-8">
              Kraftowa wołowina, świeża pita i autentyczna turecka gościnność. Zamów na wynos lub z dostawą!
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <span className="hero-badge"><UtensilsCrossed /> Cena: 20–40 zł</span>
              <span className="hero-badge"><Star className="fill-brand-gold text-brand-gold" /> 4.4/5 (109 opinii)</span>
              <span className="hero-badge"><Coffee /> Darmowa turecka herbata</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 bg-brand-red px-7 text-base font-extrabold text-brand-cream shadow-brand transition-transform hover:-translate-y-0.5 hover:bg-brand-red-strong">
                <a href={phoneHref}><Phone /> Zamów dostawę</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 border-brand-cream/45 bg-brand-charcoal/25 px-7 text-base font-extrabold text-brand-cream backdrop-blur-md hover:bg-brand-cream hover:text-brand-charcoal">
                <a href={phoneHref}>Odbierz na wynos <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-4 hidden border-l border-brand-cream/20 px-6 py-5 text-right text-brand-cream xl:block">
          <span className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">Dziś otwarte</span>
          <span className="font-display text-2xl font-bold">do 23:00</span>
        </div>
      </section>

      <section id="o-nas" className="relative scroll-mt-20 bg-brand-cream py-20 sm:py-28">
        <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-turkish-pattern opacity-[0.05] lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <div>
              <p className="section-kicker">Nasz klimat</p>
              <h2 className="section-title mt-3">Poczuj się jak <span className="text-brand-red">w Stambule</span></h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                Bardzo fajny, przytulny lokal prowadzony przez miłego Pana z Turcji. Serwujemy kraftowy kebab, w którym mięsa nie brakuje, a dodatki są idealnie wyważone. Do tego szybka obsługa i pyszna, darmowa turecka herbatka na czas oczekiwania!
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Beef, title: "Kraftowa wołowina", text: "Soczysta, dobrze doprawiona i przygotowana z sercem." },
                  { icon: HeartHandshake, title: "Turecka gościnność", text: "Ciepłe przyjęcie i darmowa herbata na czas oczekiwania." },
                  { icon: UtensilsCrossed, title: "Duże porcje", text: "Solidnie, świeżo i sycąco — tak jak powinno być." },
                ].map(({ icon: Icon, title, text }) => (
                  <article key={title} className="group border-t-2 border-brand-gold pt-5">
                    <Icon className="size-7 text-brand-red transition-transform duration-300 group-hover:-translate-y-1" />
                    <h3 className="mt-4 font-display text-xl font-bold uppercase text-brand-charcoal">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="scroll-mt-20 bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <p className="section-kicker">Prosto z naszej kuchni</p>
              <h2 className="section-title mt-3">Polecane z <span className="text-brand-red">menu</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">Wybierz swój ulubiony smak. Ceny są orientacyjne — zadzwoń, aby poznać aktualną ofertę.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {dishes.map((dish, index) => (
              <article key={dish.name} className={`group relative min-h-[390px] overflow-hidden rounded-md bg-card shadow-card ${index < 2 ? "lg:col-span-6 lg:min-h-[480px]" : "lg:col-span-4"}`}>
                <img src={dish.image} alt={dish.alt} width={1024} height={1024} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-food-card" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-brand-cream sm:p-7">
                  <span className="inline-flex rounded-sm bg-brand-gold px-2.5 py-1 text-xs font-extrabold uppercase tracking-[0.1em] text-brand-charcoal">{dish.price}</span>
                  <h3 className="mt-3 font-display text-3xl font-bold uppercase">{dish.name}</h3>
                  <p className="mt-1 text-sm text-brand-cream/75">{dish.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-md border border-border bg-card px-5 py-4 text-sm font-bold text-muted-foreground shadow-card">
            <span className="text-brand-red">Do kompletu:</span>
            <span>Napoje</span><span className="text-brand-gold">✦</span>
            <span>Tradycyjny ayran</span><span className="text-brand-gold">✦</span>
            <span>Baklava i tureckie dodatki</span>
          </div>
        </div>
      </section>

      <section id="opinie" className="relative scroll-mt-20 overflow-hidden bg-brand-charcoal py-20 text-brand-cream sm:py-28">
        <div className="absolute inset-0 bg-turkish-pattern opacity-[0.035]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="section-kicker text-brand-gold">Wasze słowa</p>
              <h2 className="section-title mt-3 text-brand-cream">Co mówią nasi goście?</h2>
            </div>
            <div className="flex items-center gap-4 border-l-2 border-brand-red pl-5">
              <span className="font-display text-5xl font-bold">4.4</span>
              <span><StarRow size="md" /><span className="mt-1 block text-sm text-brand-cream/65">109 opinii Google</span></span>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.author} className="group flex min-h-[300px] flex-col rounded-md border border-brand-cream/10 bg-brand-cream/[0.045] p-7 transition-colors hover:border-brand-gold/45 hover:bg-brand-cream/[0.07]">
                <Quote className="size-9 text-brand-red" />
                <p className="mt-6 flex-1 text-base leading-7 text-brand-cream/85">„{review.text}”</p>
                <div className="mt-7 flex items-center justify-between gap-3 border-t border-brand-cream/10 pt-5">
                  <span className="font-bold">{review.author}</span>
                  <StarRow />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-20 bg-brand-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-md bg-brand-charcoal shadow-contact lg:grid-cols-[0.82fr_1.18fr]">
            <div className="flex flex-col justify-center p-7 text-brand-cream sm:p-12 lg:p-14">
              <p className="section-kicker text-brand-gold">Kontakt & dojazd</p>
              <h2 className="mt-3 font-display text-4xl font-bold uppercase sm:text-5xl">Wpadnij na coś <span className="text-brand-gold">pysznego</span></h2>
              <div className="mt-9 space-y-6">
                <a href="https://www.google.com/maps/search/?api=1&query=Osiedle+Edwarda+Raczyńskiego+9,+Swarzędz" target="_blank" rel="noreferrer" className="contact-row group">
                  <MapPin />
                  <span><strong>Adres</strong><small>Osiedle Edwarda Raczyńskiego 9<br />62-020 Swarzędz</small></span>
                  <ArrowRight className="ml-auto size-4 opacity-60 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={phoneHref} className="contact-row group">
                  <Phone />
                  <span><strong>Telefon</strong><small>691 313 302</small></span>
                  <ArrowRight className="ml-auto size-4 opacity-60 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="contact-row">
                  <Clock3 />
                  <span><strong>Godziny otwarcia</strong><small>Codziennie do 23:00</small></span>
                </div>
              </div>
              <Button asChild size="lg" className="mt-9 h-14 w-full bg-brand-red text-base font-extrabold text-brand-cream hover:bg-brand-red-strong sm:w-fit">
                <a href={phoneHref}><Phone /> Zadzwoń i zamów</a>
              </Button>
            </div>
            <div className="relative min-h-[420px] bg-muted lg:min-h-[580px]">
              <iframe
                title="Mapa dojazdu do Yufka Kebab w Swarzędzu"
                src="https://www.google.com/maps?q=Osiedle%20Edwarda%20Raczyńskiego%209%2C%2062-020%20Swarzędz&output=embed"
                className="absolute inset-0 size-full border-0 grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a href="https://www.google.com/maps/search/?api=1&query=Osiedle+Edwarda+Raczyńskiego+9,+Swarzędz" target="_blank" rel="noreferrer" className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md bg-brand-cream px-4 py-3 text-sm font-extrabold text-brand-charcoal shadow-card transition-transform hover:-translate-y-0.5">
                <Navigation className="size-4 text-brand-red" /> Wyznacz trasę
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brand-charcoal py-8 text-brand-cream/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3"><BrandMark /><span><strong className="block font-display text-lg uppercase text-brand-cream">Yufka Kebab</strong><small>Prawdziwy turecki smak w Swarzędzu</small></span></div>
          <p className="text-xs">© 2026 Yufka Kebab Restauracja Turecka. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
        <Button asChild size="lg" className="h-14 w-full bg-brand-red text-base font-extrabold text-brand-cream shadow-floating hover:bg-brand-red-strong">
          <a href={phoneHref}><Phone className="size-5" /> Zadzwoń i zamów <span className="ml-auto text-brand-cream/70">691 313 302</span></a>
        </Button>
      </div>
    </main>
  );
}
