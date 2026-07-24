import { useEffect, useState, type ReactNode } from "react";
import { createBrowserRouter, Link, NavLink, Outlet, useLocation, useParams } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  Code2,
  Dribbble,
  Facebook,
  Github,
  House,
  Instagram,
  Layers2,
  Linkedin,
  Menu,
  MessageCircle,
  MoonStar,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  SunMedium,
  Target,
  X,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import devTorkStudioLogo from "../imports/image.png";

const services = [
  { icon: Layers2, title: "UI/UX Design", summary: "Clean, user-friendly interfaces and product flows.", outcome: "A clear digital experience that feels easy to understand and use.", items: ["User flows", "Wireframes", "High-fidelity UI design"], audience: "Startups, businesses, and product teams" },
  { icon: Code2, title: "Web Development", summary: "Modern, responsive websites built for performance.", outcome: "A polished website that loads fast and supports your business goals.", items: ["Responsive website", "Frontend development", "Launch support"], audience: "Brands, service businesses, and online companies" },
  { icon: Smartphone, title: "App Development", summary: "Smart and easy-to-use mobile applications.", outcome: "A practical app experience ready for real users and business growth.", items: ["App screens", "Core features", "Development-ready structure"], audience: "Teams building customer-facing mobile apps" },
  { icon: Palette, title: "Graphic Design", summary: "Creative design for your brand and business, campaigns, and social media.", outcome: "A stronger visual presence across your marketing and brand touchpoints.", items: ["Brand graphics", "Social media designs", "Marketing assets"], audience: "Businesses that need consistent visual content" },
  { icon: Search, title: "SEO and Content Writing", summary: "Search-friendly content that helps people find you.", outcome: "Clear content that improves visibility and explains your offer better.", items: ["SEO content", "Website copy", "Content planning"], audience: "Websites that need traffic, clarity, and trust" },
  { icon: Bot, title: "AI Automation", summary: "Smart automation that saves time and improves your workflow.", outcome: "A smoother process where repetitive tasks run faster and cleaner.", items: ["Workflow automation", "AI tools setup", "Process optimization"], audience: "Businesses with repeatable manual tasks" },
];

const projects = [
  { slug: "metric", name: "Metric", tag: "B2B SaaS", result: "+30% signup rate", description: "A reporting platform redesigned around faster decisions.", tone: "bg-[#321449]", challenge: "People could find data, but struggled to find a decision.", solution: "We restructured core workflows around priority signals and next actions.", results: ["30% more qualified signups", "21% faster first-report creation"] },
  { slug: "arc", name: "Arc", tag: "Mobile app", result: "+22% retention", description: "A calmer daily-planning product for distributed teams.", tone: "bg-[#f0dcf6]", challenge: "A crowded experience was creating friction in a daily ritual.", solution: "We introduced a single, focused planning flow and quiet visual rhythm.", results: ["22% lift in week-four retention", "18% more completed routines"] },
  { slug: "verve", name: "Verve", tag: "Wellness", result: "+41% activation", description: "A clearer launch experience for employee wellbeing.", tone: "bg-[#e8edf8]", challenge: "New employees were not finding value early enough.", solution: "We designed a guided onboarding journey around personal relevance.", results: ["41% higher activation", "2.4x more first-week actions"] },
];

const team = [
  { name: "Maya Chen", role: "Creative director", note: "Specialized in product brands.", image: "https://images.unsplash.com/photo-1632870209717-799d91072b60?w=600&h=600&fit=crop&auto=format" },
  { name: "Noah Bennett", role: "Product strategy", note: "Specialized in SaaS dashboards.", image: "https://images.unsplash.com/photo-1583599447822-ca2605ad6d34?w=600&h=600&fit=crop&auto=format" },
  { name: "Elena Park", role: "Design director", note: "Specialized in design systems.", image: "https://images.unsplash.com/photo-1612991237158-7edd0a803d22?w=600&h=600&fit=crop&auto=format" },
];

const socialLinks = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/8801570297669" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591844288765" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/devtork?igsh=OXBkc3I3YXEyeXM2" },
  { icon: Github, label: "GitHub", href: "https://github.com/devtorkstudio" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/devtork-studio/" },
];

const studioStats = [
  { value: "35+", label: "Clients handled", detail: "Across startups, local businesses, and digital teams" },
  { value: "60+", label: "Projects delivered", detail: "Websites, apps, SEO content, brand assets, and automation" },
  { value: "96%", label: "Success rate", detail: "Projects completed with clear goals and happy handoff" },
  { value: "6", label: "Core services", detail: "Everything needed for a stronger digital presence" },
];

const professionalHighlights = [
  { icon: Target, title: "Strategy first", text: "We clarify the goal before design, development, or automation starts." },
  { icon: ShieldCheck, title: "Reliable delivery", text: "Clear scope, clean handoff, and support through launch." },
  { icon: Zap, title: "Fast execution", text: "Small team speed with professional process and communication." },
];

const growthAreas = ["Website design", "Web development", "App experience", "SEO content", "Brand graphics", "AI workflow"];

function Logo() {
  return <ImageWithFallback src={devTorkStudioLogo} alt="DevTork Studio" className="h-9 w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(22%)_sepia(91%)_saturate(2814%)_hue-rotate(269deg)_brightness(91%)_contrast(95%)]" />;
}

function PageIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: ReactNode }) {
  return (
    <section className="border-b border-border bg-[#f9eafd]">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-[DM_Sans] text-[clamp(3rem,5.3vw,5.3rem)] font-bold leading-[1.04] tracking-[-.035em]">{title}</h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-7 text-muted-foreground">{body}</p>
      </div>
    </section>
  );
}

function ProjectVisual({ project, tall = false }: { project: typeof projects[number]; tall?: boolean }) {
  return (
    <div className={`relative grid ${tall ? "h-72" : "h-52"} place-items-center overflow-hidden ${project.tone}`}>
      <span className="absolute size-48 rotate-45 rounded-[1.5rem] border border-white/25 bg-white/10" />
      <div className="relative w-48 rounded-xl bg-white/90 p-4 shadow-xl">
        <div className="flex gap-1.5"><i className="size-2 rounded-full bg-primary" /><i className="size-2 rounded-full bg-[#ebc2f4]" /></div>
        <div className="mt-5 h-2 w-20 rounded-full bg-[#2c2430]" />
        <div className="mt-3 h-12 rounded-lg bg-[#f7eafa]" />
        <div className="mt-3 flex gap-2"><i className="h-7 flex-1 rounded-md bg-[#efcff7]" /><i className="h-7 flex-1 rounded-md bg-[#f7eafa]" /></div>
      </div>
      <span className="absolute bottom-5 left-6 font-[DM_Sans] text-2xl font-bold tracking-[-.06em] text-white/85">{project.name}</span>
    </div>
  );
}

function SocialIconList({ className = "mt-7" }: { className?: string }) {
  return (
    <div className={`${className} flex flex-wrap gap-3`}>
      {socialLinks.map(({ icon: SocialIcon, label, href }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full border border-[#ddd7e0] bg-white text-[#6f6872] shadow-sm transition hover:-translate-y-0.5 hover:border-[#d66aee]/50 hover:bg-[#9822c8]/20 hover:text-white dark:border-white/15 dark:bg-white/[.035] dark:text-[#b7b1bb]">
          <SocialIcon size={18} />
        </a>
      ))}
    </div>
  );
}

function ProfessionalProof() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">Why DevTork</p>
          <h2 className="mt-3 font-[DM_Sans] text-4xl font-bold tracking-[-.02em] sm:text-5xl">Built to look sharp and work hard.</h2>
          <p className="mt-5 text-[15px] leading-7 text-muted-foreground">A professional website needs more than nice screens. We combine clear strategy, polished design, reliable development, and measurable growth work.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {professionalHighlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-xl border border-border bg-white p-6 shadow-[0_16px_40px_rgba(80,25,99,.06)]">
              <Icon className="text-primary" size={22} />
              <h3 className="mt-7 font-[DM_Sans] text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        {growthAreas.map((area) => (
          <span key={area} className="rounded-full border border-[#AF2DDC]/20 bg-[#f9eafd] px-4 py-2 text-sm font-bold text-[#65147f] dark:text-[#f0c0fa]">{area}</span>
        ))}
      </div>
    </section>
  );
}

function Layout() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("devtork-theme") === "dark");
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("devtork-theme", dark ? "dark" : "light");
  }, [dark]);

  const links = [["Home", "/"], ["Services", "/services"], ["Work", "/work"], ["About", "/about"], ["Team", "/team"], ["Contact", "/contact"]];
  const navLinks = links.filter(([label]) => label !== "Team");

  return (
    <div className={dark ? "dark min-h-screen" : "min-h-screen"}>
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-6">
          <Link to="/" className="flex h-10 items-center"><Logo /></Link>
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.slice(0, 5).map(([label, to]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `text-sm font-semibold transition ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>{label}</NavLink>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button type="button" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="group flex items-center gap-2 rounded-full border border-[#AF2DDC]/20 bg-[#f9eafd] p-1 pr-3 text-xs font-bold text-[#5e236d] shadow-[0_4px_12px_rgba(175,45,220,.1)] transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_18px_rgba(175,45,220,.16)]">
              <span className="grid size-8 place-items-center rounded-full bg-primary text-white shadow-sm transition-transform duration-300 group-hover:rotate-12">{dark ? <SunMedium size={15} /> : <MoonStar size={15} />}</span>
              <span>{dark ? "Light" : "Dark"}</span>
              <Sparkles size={12} className="text-primary/70" />
            </button>
            <a href="#footer" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#8a16b2]">Contact us</a>
          </div>
          <button onClick={() => setOpen(!open)} aria-label="Open navigation menu" className="grid size-11 place-items-center rounded-lg border border-border lg:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </nav>
        {open && (
          <div className="border-t border-border bg-white px-6 py-3 lg:hidden">
            {navLinks.map(([label, to]) => <NavLink onClick={() => setOpen(false)} key={to} to={to} className="block py-3 text-base font-semibold">{label}</NavLink>)}
            <button type="button" onClick={() => setDark(!dark)} className="mt-2 flex w-full items-center justify-between rounded-lg border border-border px-4 py-3 text-sm font-bold">
              <span className="flex items-center gap-2">{dark ? "Light mode" : "Dark mode"}<Sparkles size={13} className="text-primary" /></span>
              {dark ? <SunMedium size={17} className="text-primary" /> : <MoonStar size={17} className="text-primary" />}
            </button>
          </div>
        )}
      </header>
      <main key={location.pathname} className="animate-[devtork-page-in_360ms_cubic-bezier(0.16,1,0.3,1)_both]"><Outlet /></main>
      {location.pathname !== "/" && <Link to="/" aria-label="Return to homepage" className="group fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full border border-primary/25 bg-white/90 text-primary shadow-[0_12px_30px_rgba(80,25,99,.16)] backdrop-blur transition hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-[0_16px_34px_rgba(175,45,220,.3)] dark:bg-[#211727]/90 dark:text-[#efb4fa] dark:hover:bg-primary dark:hover:text-white"><House size={19} strokeWidth={2} /><span className="pointer-events-none absolute right-[calc(100%+10px)] whitespace-nowrap rounded-md bg-[#29202d] px-2.5 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:opacity-100">Home</span></Link>}
      <footer id="footer" className="relative overflow-hidden border-t border-[#e9e4eb] bg-[#f7f7fa] text-[#29202d] dark:border-white/10 dark:bg-[#080a0d] dark:text-white">
        <div className="pointer-events-none absolute bottom-[-20%] left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px] dark:bg-[#8d1fc1]/20" />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-7 pt-16 lg:pt-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.55fr_.72fr_.9fr]">
            <div>
              <Link to="/" className="flex h-10 items-center"><Logo /></Link>
              <p className="mt-6 max-w-sm text-[15px] leading-6 text-[#6f6872] dark:text-[#b7b1bb]">We help businesses grow with smart technology and effective digital solutions</p>
              <SocialIconList />
            </div>
            <div>
              <p className="text-sm font-bold text-[#29202d] dark:text-white">Company</p>
              <div className="mt-6 grid gap-4 text-sm text-[#6f6872] dark:text-[#b7b1bb]">
                <Link to="/work" className="hover:text-primary dark:hover:text-white">Work</Link>
                <Link to="/services" className="hover:text-primary dark:hover:text-white">Services</Link>
                <Link to="/about" className="hover:text-primary dark:hover:text-white">Studio</Link>
                <Link to="/work" className="hover:text-primary dark:hover:text-white">Insights</Link>
                <Link to="/services" className="hover:text-primary dark:hover:text-white">FAQ</Link>
                <Link to="/contact" className="hover:text-primary dark:hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-[#29202d] dark:text-white">Get in touch</p>
              <div className="mt-6 grid gap-5 text-sm text-[#6f6872] dark:text-[#b7b1bb]">
                <div><p>WhatsApp:</p><a href="https://wa.me/8801570297669" className="mt-2 inline-block font-bold text-[#29202d] hover:text-primary dark:text-white">+8801570297669</a></div>
                <div><p>Email:</p><a href="mailto:hello@devtork.com" className="mt-2 inline-block font-bold text-[#29202d] hover:text-primary dark:text-white">hello@devtork.com</a></div>
                <div><p>Location:</p><p className="mt-2 font-bold text-[#29202d] dark:text-white">Dhaka, Bangladesh</p></div>
              </div>
            </div>
          </div>
          <div className="relative mt-16 flex flex-col gap-4 border-t border-[#e3dde5] pt-6 text-sm text-[#6f6872] dark:border-white/10 dark:text-[#9e98a1] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 DevTork Studio. All rights reserved.</p>
            <div className="flex gap-6"><a href="/contact" className="hover:text-primary dark:hover:text-white">Privacy</a><a href="/contact" className="hover:text-primary dark:hover:text-white">Terms</a></div>
          </div>
          <div aria-hidden="true" className="pointer-events-none mt-10 select-none text-center font-[DM_Sans] text-[16vw] font-semibold leading-none tracking-[.015em] text-[#AF2DDC]/[.09] drop-shadow-[0_0_30px_rgba(175,45,220,.1)] dark:text-[#edb5fa]/[.11] dark:drop-shadow-[0_0_48px_rgba(175,45,220,.2)] sm:text-[11vw]">DEVTORK</div>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  const [budget, setBudget] = useState("$500-1000");
  const [chosen, setChosen] = useState<string[]>(["Web Development"]);
  const toggle = (title: string) => setChosen((items) => items.includes(title) ? items.filter((item) => item !== title) : [...items, title]);

  return (
    <>
      <section className="devtork-opening relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-[48%] bg-[radial-gradient(ellipse_at_62%_34%,#f3d5fa_0%,#fbf6fc_42%,transparent_72%)]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div className="devtork-hero-copy">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[.16em] text-primary">UI/UX design agency</p>
            <h1 className="max-w-2xl font-[DM_Sans] text-[clamp(3.4rem,6vw,5.9rem)] font-bold leading-[1.02] tracking-[-.035em]">Digital Solutions for Your Business Growth.</h1>
            <p className="mt-7 max-w-xl text-[17px] leading-7 text-muted-foreground">We provide modern digital solutions, from websites and software to AI automation and SEO, helping businesses grow and succeed.</p>
            <div className="devtork-hero-actions mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-lg bg-primary px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(175,45,220,.2)] transition hover:-translate-y-0.5 hover:bg-[#8a16b2]">Start a project <ArrowRight size={17} /></Link>
              <Link to="/work" className="inline-flex items-center gap-2 rounded-lg border border-[#731694]/40 px-5 py-3.5 text-sm font-bold text-[#731694] hover:bg-[#fbf1fd]">View portfolio <ArrowRight size={16} /></Link>
            </div>
            <div className="devtork-hero-stats mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {studioStats.map((stat) => (
                <div key={stat.label} className="devtork-stat-card rounded-xl border border-[#AF2DDC]/15 bg-white/85 p-4 shadow-[0_10px_28px_rgba(80,25,99,.08)]">
                  <p className="font-[DM_Sans] text-2xl font-bold tracking-[-.03em] text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold leading-4 text-[#5f5862] dark:text-[#c8c0cb]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="devtork-hero-visual relative mx-auto h-[350px] w-full max-w-[460px] sm:h-[420px]">
            <div className="absolute left-[4%] top-[15%] h-[65%] w-[68%] -rotate-6 animate-[devtork-float_6.5s_ease-in-out_infinite] rounded-[2rem] bg-[#f6e4fa]" />
            <div className="absolute right-[4%] top-[7%] h-[75%] w-[70%] rotate-6 animate-[devtork-float-soft_7s_ease-in-out_infinite] rounded-[2rem] border border-[#AF2DDC]/15 bg-white p-7 shadow-[0_25px_55px_rgba(92,33,105,.12)]">
              <div className="flex items-center justify-between">
                <div className="h-2 w-16 rounded-full bg-primary" />
                <span className="rounded-full bg-[#f9eafd] px-3 py-1 text-[10px] font-bold text-primary">LIVE</span>
              </div>
              <div className="mt-7 h-28 rounded-2xl bg-primary" />
              <div className="mt-5 flex gap-3"><i className="h-12 flex-1 rounded-xl bg-[#f9eafd]" /><i className="h-12 flex-1 rounded-xl bg-[#f3d5fa]" /></div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <i className="h-2 rounded-full bg-[#AF2DDC]/25" /><i className="h-2 rounded-full bg-[#AF2DDC]/45" /><i className="h-2 rounded-full bg-[#AF2DDC]/20" />
              </div>
            </div>
            <div className="absolute bottom-[7%] left-0 animate-[devtork-float-card_5.5s_ease-in-out_infinite] rounded-xl border border-[#AF2DDC]/15 bg-white px-5 py-4 shadow-lg">
              <p className="font-mono text-[10px] uppercase tracking-[.14em] text-primary">Design clarity</p>
              <p className="mt-1 text-sm font-bold">Made to convert</p>
            </div>
            <div className="absolute right-0 bottom-[2%] rounded-xl border border-[#AF2DDC]/15 bg-white px-4 py-3 shadow-lg">
              <p className="font-mono text-[10px] uppercase tracking-[.14em] text-primary">Success rate</p>
              <p className="mt-1 font-[DM_Sans] text-xl font-bold">96%</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-[#F4F4F6]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">What we do</p>
              <h2 className="mt-3 font-[DM_Sans] text-4xl font-bold tracking-[-.02em] sm:text-5xl">Your Digital Growth Partner.</h2>
            </div>
            <Link to="/services" className="text-sm font-bold text-primary">All services →</Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link to="/services" key={service.title} className="group rounded-xl border border-border bg-white p-6 shadow-[0_12px_32px_rgba(80,25,99,.05)] transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg">
                  <Icon className="text-primary transition group-hover:scale-110" size={21} />
                  <h3 className="mt-8 font-[DM_Sans] text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.summary}</p>
                  <span className="mt-5 inline-flex text-sm font-bold text-primary">View details →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <ProfessionalProof />
      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
        <div className="overflow-hidden rounded-2xl border border-[#AF2DDC]/15 bg-[#fdf9fe] p-6 text-[#29202d] shadow-[0_22px_70px_rgba(80,25,99,.08)] dark:border-[#e58af5]/25 dark:bg-[#1d151f] dark:text-[#fbf6fc] sm:p-9 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">Build your engagement</p>
              <h2 className="mt-3 font-[DM_Sans] text-4xl font-bold tracking-[-.02em]">Choose the services you need.</h2>
              <p className="mt-5 text-[15px] leading-7 text-muted-foreground">Select the services and budget range that feel right. We will shape a focused proposal around your goals.</p>
              <div className="mt-7 rounded-xl border border-[#AF2DDC]/15 bg-white p-5 dark:border-white/15 dark:bg-[#181219]">
                <p className="text-xs font-bold uppercase tracking-[.1em] text-muted-foreground">Your starting point</p>
                <p className="mt-2 font-[DM_Sans] text-xl font-bold tracking-[-.018em]">{chosen.length ? chosen.join(" + ") : "Choose one or more services"}</p>
                <p className="mt-2 text-sm text-primary">Budget range: {budget}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Request a Proposal<ArrowRight size={16} /></Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">1. What do you need?</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((service) => {
                  const active = chosen.includes(service.title);
                  return (
                    <button type="button" onClick={() => toggle(service.title)} key={service.title} className={`flex items-center justify-between rounded-xl border p-4 text-left transition ${active ? "border-primary bg-[#f9eafd] dark:border-[#e58af5] dark:bg-[#3c2045]" : "border-border bg-white hover:border-primary/30 dark:border-white/15 dark:bg-[#181219] dark:hover:border-[#e58af5]/50"}`}>
                      <span><span className="block text-sm font-bold">{service.title}</span><span className="mt-1 block text-xs text-muted-foreground">{service.summary}</span></span>
                      {active ? <CheckCircle2 className="ml-3 shrink-0 text-primary" size={19} /> : <span className="ml-3 size-5 shrink-0 rounded-full border border-border" />}
                    </button>
                  );
                })}
              </div>
              <p className="mt-7 text-sm font-bold">2. What is your budget range?</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Under $500", "$500-1000", "$1000-2000", "$10k+"].map((range) => (
                  <button type="button" onClick={() => setBudget(range)} key={range} className={`rounded-lg border px-3 py-3 text-sm font-bold transition ${budget === range ? "border-primary bg-primary text-white" : "border-border bg-white text-muted-foreground hover:border-primary/35 dark:border-white/15 dark:bg-[#181219] dark:text-[#d7ccd9] dark:hover:border-[#e58af5]/50"}`}>{range}</button>
                ))}
              </div>
              <p className="mt-5 flex gap-2 text-xs leading-5 text-muted-foreground"><Check className="shrink-0 text-primary" size={15} /> A starting point only—we will recommend the clearest scope for your goals.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
        <div className="flex items-end justify-between">
          <div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">Featured work</p><h2 className="mt-3 font-[DM_Sans] text-4xl font-bold tracking-[-.02em] sm:text-5xl">Proof in the product.</h2></div>
          <Link to="/work" className="text-sm font-bold text-primary">View portfolio →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link to={`/work/${project.slug}`} key={project.slug} className="overflow-hidden rounded-xl border border-border transition hover:-translate-y-1 hover:shadow-xl">
              <ProjectVisual project={project} />
              <div className="p-5">
                <div className="flex justify-between gap-3"><h3 className="font-[DM_Sans] text-xl font-bold">{project.name}</h3><span className="text-sm font-bold text-primary">{project.result}</span></div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#3a243f] dark:text-[#f2c8fa]">Read case study <ArrowRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-[#F4F4F6]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">Who we work with</p>
              <h2 className="mt-3 font-[DM_Sans] text-4xl font-bold tracking-[-.02em]">Helping Businesses Grow With Digital Solutions.</h2>
              <p className="mt-5 text-[15px] leading-7 text-muted-foreground">We work with startups, businesses, and teams that want to build better digital experiences.</p>
              <Link to="/about" className="mt-6 inline-flex font-bold text-primary">More about DevTork →</Link>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {[["05", "Startups", "Helping new businesses launch and grow online."], ["03", "Businesses", "Building digital solutions that support business growth."], ["03", "Agencies", "Providing reliable digital support for growing teams."]].map(([number, title, text]) => (
                <div key={title} className="bg-white p-6"><p className="text-2xl font-bold text-primary">{number}</p><h3 className="mt-7 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>
              ))}
            </div>
          </div>
          <div className="mt-16 border-t border-border pt-12">
            <p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">How we work</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[["Discover", "Align on the problem and success criteria."], ["Design", "Explore the clearest route to the interface."], ["Deliver", "Hand off a system your team can use."], ["Support", "Stay close as the product evolves."]].map(([step, copy], i) => (
                <div key={step}><span className="font-mono text-xs text-primary">0{i + 1}</span><h3 className="mt-3 font-[DM_Sans] text-xl font-bold">{step}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <section className="bg-[#f9eafd]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:py-20">
          <div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">Start something clear</p><h2 className="mt-3 font-[DM_Sans] text-4xl font-bold tracking-[-.02em]">Ready to launch your next product?</h2><p className="mt-4 text-[15px] text-muted-foreground">Bring us the ambition. We will bring the focus and the good questions.</p></div>
          <div className="flex flex-wrap items-center gap-5"><Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-bold text-white hover:bg-[#8a16b2]">Start a project <ArrowRight size={17} /></Link></div>
        </div>
      </section>
    </>
  );
}

function Services() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Practical design support for pivotal product moments." body="Choose a focused engagement or combine capabilities around the outcome you need." />
      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-xl border border-border bg-white p-7 shadow-[0_12px_34px_rgba(80,25,99,.05)]">
                <Icon className="text-primary" size={24} />
                <h2 className="mt-7 font-[DM_Sans] text-2xl font-bold">{service.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{service.outcome}</p>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div><p className="text-xs font-bold uppercase tracking-[.1em] text-primary">You get</p><ul className="mt-3 space-y-2 text-sm text-muted-foreground">{service.items.map((item) => <li key={item} className="flex gap-2"><Check size={16} className="text-primary" />{item}</li>)}</ul></div>
                  <div><p className="text-xs font-bold uppercase tracking-[.1em] text-primary">Best for</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.audience}</p></div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <ProfessionalProof />
      <FAQ />
    </>
  );
}

function Work() {
  return (
    <>
      <PageIntro eyebrow="Portfolio" title="Explore Our Work" body="Explore some of the digital projects we have designed and built." />
      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
        <div className="grid gap-7 md:grid-cols-3">
          {projects.map((project) => (
            <Link to={`/work/${project.slug}`} key={project.slug} className="group overflow-hidden rounded-xl border border-border transition hover:-translate-y-1 hover:shadow-xl">
              <ProjectVisual project={project} tall />
              <div className="p-6">
                <div className="flex justify-between gap-3"><h2 className="font-[DM_Sans] text-2xl font-bold">{project.name}</h2><span className="inline-flex shrink-0 items-center justify-center self-start rounded-full bg-[#f9eafd] px-2.5 py-1 text-[10px] font-bold leading-none text-primary dark:bg-[#3c2045]">{project.tag}</span></div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                <p className="mt-5 text-sm font-bold text-primary">{project.result}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3a243f] dark:text-[#f2c8fa]">View case study <ArrowRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug) ?? projects[0];
  return (
    <>
      <section className="mx-auto max-w-[1000px] px-6 py-14">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft size={16} /> All work</Link>
        <div className="mt-10"><p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">{project.tag}</p><h1 className="mt-3 font-[DM_Sans] text-6xl font-bold tracking-[-.06em]">{project.name}</h1><p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{project.description}</p></div>
        <div className="mt-12 overflow-hidden rounded-2xl"><ProjectVisual project={project} tall /></div>
      </section>
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1000px] gap-10 px-6 py-16 md:grid-cols-3">
          <div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">Challenge</p><p className="mt-3 text-sm leading-7 text-muted-foreground">{project.challenge}</p></div>
          <div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">Solution</p><p className="mt-3 text-sm leading-7 text-muted-foreground">{project.solution}</p></div>
          <div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">Results</p>{project.results.map((result) => <p key={result} className="mt-3 font-[DM_Sans] text-xl font-bold">{result}</p>)}</div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageIntro eyebrow="About DevTork" title="Your Digital Partner for Growth." body="We are a multi-service digital agency helping businesses build, improve, and grow in the digital world." />
      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div><h2 className="font-[DM_Sans] text-4xl font-bold tracking-[-.02em]">Simple Ideas. Smart Process</h2><p className="mt-5 text-[15px] leading-7 text-muted-foreground">Our job is to make a complex product feel easier to choose, understand, and use. We stay close from the first workshop to the final handoff.</p></div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {[["Discover", "Align on the problem, audience, and definition of success."], ["Design", "Turn useful insight into clear, testable product direction."], ["Deliver", "Create detailed systems your development team can trust."], ["Support", "Stay involved through launch and the next set of decisions."]].map(([step, text], i) => (
              <div key={step} className="bg-white p-7"><span className="font-mono text-xs text-primary">0{i + 1}</span><h3 className="mt-6 font-[DM_Sans] text-2xl font-bold">{step}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F6]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">Why clients choose us</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Senior thinking without layers of handoff", "Clear progress and direct communication", "Systems that make development easier"].map((text) => (
              <div key={text} className="flex gap-3 rounded-xl bg-white p-6 text-sm font-bold text-[#29202d] dark:text-[#fbf6fc]"><CheckCircle2 className="shrink-0 text-primary" size={20} />{text}</div>
            ))}
          </div>
        </div>
      </section>
      <ProfessionalProof />
    </>
  );
}

function Team() {
  return (
    <>
      <PageIntro eyebrow="Team" title="Senior people, close to the work." body="A compact, collaborative team with complementary skills and no unnecessary layers." />
      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((person) => (
            <article key={person.name} className="overflow-hidden rounded-xl border border-border bg-white">
              <div className="aspect-[1.15] overflow-hidden bg-[#f5e9f8]"><ImageWithFallback src={person.image} alt={`${person.name}, ${person.role}`} className="size-full object-cover grayscale" /></div>
              <div className="p-6"><h2 className="font-[DM_Sans] text-xl font-bold">{person.name}</h2><p className="mt-1 text-xs font-bold uppercase tracking-[.09em] text-primary">{person.role}</p><p className="mt-4 text-sm text-muted-foreground">{person.note}</p><div className="mt-6 flex gap-4"><Instagram size={17} className="text-muted-foreground" /><Dribbble size={17} className="text-muted-foreground" /></div></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function FAQ() {
  return (
    <section className="bg-[#F4F4F6]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 lg:grid-cols-[.52fr_1fr] lg:gap-20 lg:py-24">
        <div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">FAQ</p><h2 className="mt-4 font-[DM_Sans] text-4xl font-bold tracking-[-.025em] sm:text-5xl">Useful details, upfront.</h2></div>
        <div className="border-t border-border">
          {[["How long does a project take?", "Most focused projects run from four to eight weeks."], ["How do you approach pricing?", "We price around an agreed scope and the outcome you need."], ["What do you need from our team?", "A decision-maker, good product context, and timely feedback."]].map(([q, a]) => (
            <details key={q} className="group grid grid-rows-[auto_0fr] border-b border-border transition-[grid-template-rows,background-color] duration-500 ease-[cubic-bezier(.16,1,.3,1)] open:grid-rows-[auto_1fr]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 text-[17px] font-bold tracking-[-.005em] text-[#29202d] transition-colors duration-300 group-hover:text-primary group-open:text-primary dark:text-[#fbf8fc]"><span>{q}</span><span className="shrink-0 text-lg font-medium leading-none text-primary transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-open:rotate-[135deg]">+</span></summary>
              <div className="overflow-hidden"><p className="max-w-xl translate-y-[-8px] pb-7 text-[15px] leading-7 text-muted-foreground opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-open:translate-y-0 group-open:opacity-100">{a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageIntro eyebrow="Contact" title="Tell us what you are building." body="Share the essentials and we will reply within 24 hours with the next best step." />
      <section className="mx-auto grid max-w-[1000px] gap-10 px-6 py-20 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <h2 className="font-[DM_Sans] text-3xl font-bold tracking-[-.02em]">A short brief is enough.</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">We will help you identify the clearest first engagement—whether that is a website, product, or design system.</p>
          <a href="mailto:hello@devtork.com" className="mt-6 inline-block font-bold text-primary">hello@devtork.com</a>
          <SocialIconList className="mt-6" />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-xl border border-border p-6 shadow-[0_18px_50px_rgba(80,25,99,.07)] sm:p-8">
          {sent ? (
            <div className="grid min-h-72 place-items-center text-center">
              <div><CheckCircle2 className="mx-auto text-primary" size={40} /><h2 className="mt-5 font-[DM_Sans] text-2xl font-bold">Brief received.</h2><p className="mt-2 text-sm text-muted-foreground">We will be in touch within 24 hours.</p></div>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold">Name<input required className="h-11 rounded-lg border border-border px-3 font-normal" /></label><label className="grid gap-2 text-sm font-bold">Email<input type="email" required className="h-11 rounded-lg border border-border px-3 font-normal" /></label></div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold">Company <span className="font-normal text-muted-foreground">(optional)</span><input className="h-11 rounded-lg border border-border px-3 font-normal" /></label><label className="grid gap-2 text-sm font-bold">Project type<select required defaultValue="" className="h-11 rounded-lg border border-border bg-white px-3 font-normal"><option value="" disabled>Select one</option>{services.map((item) => <option key={item.title}>{item.title}</option>)}</select></label></div>
              <label className="mt-5 grid gap-2 text-sm font-bold">A few project details<textarea required rows={4} className="resize-none rounded-lg border border-border p-3 font-normal" /></label>
              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-bold text-white hover:bg-[#8a16b2]">Send project brief <ArrowRight size={17} /></button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "work", Component: Work },
      { path: "work/:slug", Component: CaseStudy },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
    ],
  },
]);
