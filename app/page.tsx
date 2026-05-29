"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const phoneDisplay = "07496 481951";
const phoneHref = "tel:07496481951";
const whatsappHref = "https://wa.me/447496481951";

const navItems = ["Home", "Services", "Before & After", "Areas", "Contact"];

const services = [
  ["Household Rubbish", "General junk, clutter, bagged waste and unwanted household items cleared quickly."],
  ["Sofas & Furniture", "Old sofas, wardrobes, beds, mattresses, tables, chairs and bulky items removed."],
  ["Garden Waste", "Branches, hedge cuttings, green waste, old garden furniture and more."],
  ["DIY & Renovation Waste", "Builders waste, bathroom rip-outs, kitchen waste, tiles, timber and mixed renovation waste."],
  ["Sheds, Garages & Lofts", "Clearances for packed garages, tired sheds, loft spaces and outbuildings."],
  ["House Clearances", "Full and part house clearances handled with care, speed and responsible disposal."],
  ["Electrical Items", "White goods, appliances, office equipment and mixed electrical items collected."],
];

const areas = [
  "Stockport",
  "Bredbury",
  "Romiley",
  "Woodley",
  "Marple",
  "Brinnington",
  "Reddish",
  "Hazel Grove",
  "Offerton",
  "Edgeley",
  "Cheadle",
  "Davenport",
];

const galleryImages = [
  "/images/job1.png",
  "/images/job2.png",
  "/images/job3.png",
  "/images/job4.png",
  "/images/job5.png",
  "/images/job6.png",
];

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-[#7ed321]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9 10.59a16 16 0 0 0 4.41 4.41l1.26-1.26a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.53 0 .2 5.33.2 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.28-1.65a11.86 11.86 0 0 0 5.82 1.48h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.48-8.45ZM12.1 21.82a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.43-9.89 9.88-9.89 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.43 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-[#7ed321]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt="Stockport Rubbish Rescue"
      width={260}
      height={90}
      className="h-auto w-[150px] object-contain"
      priority
    />
  );
}

function StickyLogo() {
  return (
    <Image
      src="/images/logo.png"
      alt="Stockport Rubbish Rescue"
      width={190}
      height={66}
      className="h-auto w-[80px] object-contain"
      priority
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryStart, setGalleryStart] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(true);
  const [galleryPaused, setGalleryPaused] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50);
  const beforeAfterRef = useRef<HTMLDivElement | null>(null);
  const [beforeAfterDragging, setBeforeAfterDragging] = useState(false);
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteJobType, setQuoteJobType] = useState("");
  const [quoteDetails, setQuoteDetails] = useState("");

  const quoteMessage = encodeURIComponent(
    `Hi, I'd like a rubbish removal quote.\n\nName: ${quoteName || "Not provided"}\nPhone: ${quotePhone || "Not provided"}\nJob type: ${quoteJobType || "Not selected"}\nDetails: ${quoteDetails || "Not provided"}`
  );

  const quoteWhatsappHref = `${whatsappHref}?text=${quoteMessage}`;

  const updateBeforeAfterPosition = (clientX: number) => {
    const container = beforeAfterRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setBeforeAfterPosition(Math.min(92, Math.max(8, nextPosition)));
  };

  useEffect(() => {
    const leaveTimer = setTimeout(() => setIntroLeaving(true), 900);
    const removeTimer = setTimeout(() => setIntroVisible(false), 1500);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (galleryPaused) return;

    const timer = setInterval(() => {
      setGalleryVisible(false);
      setTimeout(() => {
        setGalleryStart((current) => (current + 1) % galleryImages.length);
        setGalleryVisible(true);
      }, 450);
    }, 4500);

    return () => clearInterval(timer);
  }, [galleryPaused]);

  const visibleGallery = Array.from(
    { length: 6 },
    (_, i) => galleryImages[(galleryStart + i) % galleryImages.length]
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4f6f1] text-[#071007]">
      {introVisible && (
        <div
          className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#071007] transition-all duration-700 ease-out ${
            introLeaving ? "pointer-events-none opacity-0 blur-md" : "opacity-100 blur-0"
          }`}
        >
          <div
            className={`transition-all duration-700 ease-out ${
              introLeaving ? "scale-[1.35] opacity-0 blur-md" : "scale-100 opacity-100 blur-0"
            }`}
          >
            <Logo />
          </div>
        </div>
      )}

      <header className="fixed top-0 z-50 w-full md:pointer-events-none">
        <div
          className={`hidden transition-all duration-500 md:block ${
            scrolled ? "mt-0 w-full max-w-none px-0" : "mx-auto mt-5 max-w-7xl px-6"
          }`}
        >
          {!scrolled ? (
            <div className="pointer-events-auto grid h-[162px] grid-cols-[320px_1fr_220px] grid-rows-[66px_96px] overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-black/5">
             
             <a href="#" className="row-span-2 flex items-center justify-center bg-white px-7">
  <Logo />
</a>

              <div className="col-span-1 flex h-full items-center justify-end gap-8 rounded-bl-[2rem] bg-[#071007] px-9 text-sm font-black text-white">
                <a href={phoneHref} className="flex items-center gap-2 hover:text-[#7ed321]">
                  <PhoneIcon />
                  {phoneDisplay}
                </a>

                <a href={whatsappHref} className="flex items-center gap-2 hover:text-[#7ed321]">
                  <WhatsAppIcon className="h-5 w-5 text-[#7ed321]" />
                  WhatsApp Us
                </a>

                <span className="flex items-center gap-2 text-white/90">
                  <ClockIcon />
                  Same-day & next-day slots
                </span>
              </div>

              <a
                href={phoneHref}
                className="flex h-full items-center justify-center bg-[#7ed321] px-6 text-[1.25rem] font-black uppercase tracking-[0.08em] text-black transition hover:bg-black hover:text-white"
              >
                Call Now
              </a>

              <nav className="flex items-center justify-center gap-9 text-xs font-black uppercase tracking-[0.16em]">
                {navItems.map((item) => (
                  <a key={item} href="#" className="transition hover:text-[#4c9f10]">
                    {item}
                  </a>
                ))}
              </nav>

              <div className="bg-white" />
            </div>
          ) : (
            <div className="pointer-events-auto flex h-[88px] w-full items-center justify-between bg-white px-10 shadow-md ring-1 ring-black/5">
              <a href="#" className="flex items-center">
                <StickyLogo />
              </a>

              <nav className="flex items-center gap-9 text-xs font-black uppercase tracking-[0.16em]">
                {navItems.map((item) => (
                  <a key={item} href="#" className="transition hover:text-[#4c9f10]">
                    {item}
                  </a>
                ))}
              </nav>

              <a
                href={whatsappHref}
                className="rounded-full bg-[#7ed321] px-8 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-black hover:text-white"
              >
                WhatsApp Quote
              </a>
            </div>
          )}
        </div>

        <div className="bg-white shadow-sm md:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-[92px_1fr_auto] items-center gap-3 px-4 py-3">
            <a href="#" className="flex items-center justify-start">
              <Image
                src="/images/logo.png"
                alt="Stockport Rubbish Rescue"
                width={150}
                height={52}
                className="h-auto w-[92px] object-contain"
                priority
              />
            </a>

            <a
              href={phoneHref}
              className="mobile-call-wobble rounded-full bg-[#7ed321] px-3 py-3 text-center text-xs font-black uppercase tracking-[0.08em] text-black transition hover:bg-black hover:text-white"
            >
              Call Now
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-black"
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-black" />
                <span className="block h-0.5 w-5 rounded-full bg-black" />
                <span className="block h-0.5 w-5 rounded-full bg-black" />
              </span>
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-black/10 bg-white px-5 py-5">
              <div className="flex flex-col gap-4 text-center text-lg font-black text-black">
                {navItems.map((item) => (
                  <a key={item} href="#" onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="relative h-[100svh] overflow-hidden md:h-screen">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/25 via-black/58 to-black/88 md:bg-gradient-to-r md:from-black/86 md:via-black/48 md:to-black/10" />

        <Image
          src="/images/hero.png"
          alt="Rubbish removal in Stockport"
          fill
          sizes="100vw"
          className="object-cover saturate-[0.95] contrast-[1.03] brightness-[0.95]"
          style={{ objectPosition: "center center" }}
          priority
        />

        <div className="absolute right-[-80px] top-[18%] z-10 hidden h-[420px] w-[420px] rounded-full bg-[#7ed321]/20 blur-3xl md:block" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl px-4 pt-[80px] md:px-6 md:pb-8 md:pt-[205px] lg:pt-[205px]">
          <div className="flex h-[calc(100svh-80px)] w-full items-center md:h-[calc(100vh-230px)]">
            <div className="w-full animate-fade-up text-white">
              <h1 className="max-w-[11ch] text-[3rem] font-black uppercase leading-[0.86] tracking-tight sm:text-[3.8rem] md:max-w-[13ch] md:text-[3.95rem] lg:text-[4.55rem] xl:text-[4.9rem]">
                Need rubbish gone?
              </h1>

              <p className="mt-3 max-w-xl text-base font-bold leading-7 text-white/90 md:text-lg md:leading-7">
                Friendly, fully licensed waste removal across Stockport. Send a few photos and we’ll do the rest.
              </p>

              <div className="mt-4 grid gap-3 text-sm font-bold leading-5 text-white/90 sm:grid-cols-2 md:max-w-xl">
                {[
                  "Household rubbish",
                  "Garden waste",
                  "Furniture & sofas",
                  "Builders waste",
                  "Garage & shed clearances",
                  "Full & part house clearances",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7ed321] text-[12px] font-black leading-none text-black">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid w-full max-w-[320px] grid-cols-1 gap-4 sm:max-w-[520px] sm:grid-cols-2">
                <a
                  href={whatsappHref}
                  className="hidden rounded-full bg-[#7ed321] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-white sm:block"
                >
                  WhatsApp
                </a>
                <a
                  href={phoneHref}
                  className="rounded-full border border-white/60 bg-white/10 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white backdrop-blur transition hover:bg-white hover:text-black"
                >
                  Call {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f1] px-4 pb-12 pt-14 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#4c9f10]">
                What We Remove
              </p>
              <h2 className="mt-3 max-w-4xl text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
                From single items to full clearances.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/65 md:ml-auto md:text-base">
              Whether it’s a sofa, garden clear-out, DIY waste or a full house clearance, Stockport Rubbish Rescue make it simple.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div
              ref={beforeAfterRef}
              className="relative min-h-[430px] cursor-ew-resize touch-none overflow-hidden rounded-[2rem] bg-[#071007] shadow-2xl ring-1 ring-black/10 select-none sm:min-h-[560px] lg:min-h-0"
              onPointerDown={(event) => {
                setBeforeAfterDragging(true);
                updateBeforeAfterPosition(event.clientX);
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                if (!beforeAfterDragging) return;
                updateBeforeAfterPosition(event.clientX);
              }}
              onPointerUp={(event) => {
                setBeforeAfterDragging(false);
                event.currentTarget.releasePointerCapture(event.pointerId);
              }}
              onPointerCancel={() => setBeforeAfterDragging(false)}
            >
              <Image
                src="/images/after-garden-1.png"
                alt="Garden after Stockport Rubbish Rescue clearance"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="pointer-events-none object-cover"
                priority
              />

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - beforeAfterPosition}% 0 0)` }}
              >
                <Image
                  src="/images/before-garden1.png"
                  alt="Garden before Stockport Rubbish Rescue clearance"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="pointer-events-none object-cover"
                  priority
                />
              </div>

              <div
                className="absolute inset-y-0 z-20 w-1 -translate-x-1/2 bg-white shadow-[0_0_18px_rgba(0,0,0,0.45)]"
                style={{ left: `${beforeAfterPosition}%` }}
              >
                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#7ed321] text-xl font-black text-black shadow-xl ring-4 ring-white">
                  ↔
                </div>
              </div>

              <div className="absolute left-5 top-5 z-30 rounded-full bg-black/75 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur">
                Before
              </div>
              <div className="absolute right-5 top-5 z-30 rounded-full bg-[#7ed321] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-black">
                After
              </div>

              <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur">
                Drag to compare
              </div>
            </div>

            <div className="grid gap-3">
              {services.map(([title, copy], index) => (
                <div
                  key={title}
                  className="group rounded-[1.25rem] bg-[#071007] p-5 text-white shadow-sm ring-1 ring-white/10 transition duration-500 hover:-translate-y-0.5 hover:bg-[#101a10] hover:shadow-xl"
                >
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <div className="h-1.5 w-10 rounded-full bg-[#7ed321]" />
                    <span className="text-[10px] font-black tracking-[0.25em] text-white/30">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-black tracking-tight md:text-xl">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071007] px-4 py-16 text-white md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-5 md:mb-10 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#7ed321]">
                Before & After
              </p>
              <h2 className="mt-3 max-w-3xl text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
                We clear it. You relax.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/65 md:ml-auto md:text-base">
              From single items to full house clearances, we rescue all kinds of rubbish across Stockport. Here’s a small selection of our recent jobs.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 gap-4 transition-opacity duration-700 ease-out sm:grid-cols-2 lg:grid-cols-3 ${
              galleryVisible ? "opacity-100" : "opacity-0"
            }`}
            onMouseEnter={() => setGalleryPaused(true)}
            onMouseLeave={() => setGalleryPaused(false)}
          >
            {visibleGallery.map((src, index) => (
              <div
                key={`${src}-${index}-${galleryStart}`}
                className="group relative h-[260px] overflow-hidden rounded-[1.5rem] bg-black shadow-sm ring-1 ring-white/10 transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl sm:h-[300px]"
              >
                <Image
                  src={src}
                  alt={`Stockport Rubbish Rescue job photo ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover saturate-[0.96] contrast-[1.02] brightness-[0.95] transition-all duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#7ed321] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-black">
                  RUBBISH RESCUED
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#4c9f10]">
              Why Choose Us
            </p>
            <h2 className="mt-3 max-w-3xl text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
              Licensed, reliable and easy to book.
            </h2>

          <Image
  src="/images/van.png"
  alt="Stockport Rubbish Rescue van"
  width={900}
  height={650}
  className="mt-8 h-auto w-full"
/>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Fully Licensed", "Upper Tier Waste Carrier for responsible waste disposal."],
              ["Fast Response", "Same-day and next-day slots available when possible."],
              ["Simple Quotes", "Send photos by WhatsApp and get a quick no-obligation quote."],
              ["Local Team", "Covering Stockport and surrounding neighbourhoods."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.4rem] bg-[#f4f6f1] p-6 ring-1 ring-black/5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#7ed321] font-black text-black">
                  ✓
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f1] px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-[2rem] bg-[#071007] p-6 text-white shadow-2xl md:grid-cols-[0.8fr_1fr] md:p-10">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#7ed321]">
                Areas Covered
              </p>
              <h2 className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
                Rubbish removal across Stockport.
              </h2>
              <p className="mt-5 leading-7 text-white/65">
                Local waste collection and clearances across Stockport and nearby areas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-center text-sm font-black"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quote-form" className="bg-[#071007] px-4 py-16 text-white md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-black uppercase tracking-[0.25em] text-[#7ed321]">
              Get A Fast Quote
            </p>
            <h2 className="mt-3 text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
              Send photos. We’ll do the rest.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/65">
              Tell us what needs clearing and we’ll come back with a fast, no-obligation quote.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-white shadow-2xl md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="field"
                placeholder="Your name"
                value={quoteName}
                onChange={(event) => setQuoteName(event.target.value)}
              />

              <input
                className="field"
                placeholder="Phone number"
                value={quotePhone}
                onChange={(event) => setQuotePhone(event.target.value)}
              />

              <select
                className="field md:col-span-2"
                value={quoteJobType}
                onChange={(event) => setQuoteJobType(event.target.value)}
              >
                <option value="">What needs clearing?</option>
                <option>Household rubbish</option>
                <option>Furniture / sofas</option>
                <option>Garden waste</option>
                <option>Builders / renovation waste</option>
                <option>Garage / shed clearance</option>
                <option>Full or part house clearance</option>
              </select>

              <textarea
                className="field min-h-[160px] md:col-span-2"
                placeholder="Briefly tell us what needs removing..."
                value={quoteDetails}
                onChange={(event) => setQuoteDetails(event.target.value)}
              />

              <a
                href={quoteWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#7ed321] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-white md:col-span-2"
              >
                Start Quote On WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href={whatsappHref}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl ring-4 ring-white/30 transition hover:scale-105"
        aria-label="Message Stockport Rubbish Rescue on WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>

      <footer id="contact" className="bg-black px-4 py-12 text-white md:px-5">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
            <div className="inline-flex overflow-hidden rounded-2xl bg-white">
              <Logo />
            </div>
            <p className="mt-5 max-w-md leading-7 text-white/55">
              Fast, friendly and fully licensed rubbish removal across Stockport.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#7ed321]">
              Services
            </p>
            <div className="space-y-2 text-white/65">
              <p>Household Rubbish</p>
              <p>Sofas & Furniture</p>
              <p>Garden Waste</p>
              <p>DIY & Renovation Waste</p>
              <p>Garage & Shed Clearances</p>
              <p>House Clearances</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#7ed321]">
              Contact
            </p>
            <div className="space-y-3 text-white/65">
              <p className="font-bold text-white">Stockport Rubbish Rescue</p>
              <p>Covering Stockport</p>
              <a href={phoneHref} className="block hover:text-[#7ed321]">
                {phoneDisplay}
              </a>
              <a href={whatsappHref} className="flex items-center gap-3 hover:text-[#7ed321]">
                <WhatsAppIcon className="h-5 w-5 text-[#7ed321]" />
                WhatsApp us for a quote
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/35 md:flex-row">
          <p>© Stockport Rubbish Rescue. All rights reserved.</p>
          <p>Fast • Friendly • Licensed Waste Removal</p>
        </div>
      </footer>
    </main>
  );
}
