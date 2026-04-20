import { useEffect, useState } from "react";
import {
  Phone, Mail, MapPin, Clock, ShieldCheck, Wallet, Truck, Award,
  Waves, Container, Cog, Layers, Wrench, Trees, ChevronRight, Star,
  CheckCircle2, ArrowRight, Menu, X, Factory, Hammer
} from "lucide-react";
import { CallButton, PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY } from "@/components/CallButton";
import { QuoteForm } from "@/components/QuoteForm";
import heroImg from "@/assets/hero-ecoplast.jpg";
import poolImg from "@/assets/service-pool.jpg";
import tanksImg from "@/assets/service-tanks.jpg";
import galvanicImg from "@/assets/service-galvanic.jpg";
import sheetsImg from "@/assets/service-sheets.jpg";
import woodImg from "@/assets/service-wood.jpg";
import greenhouseImg from "@/assets/service-greenhouse.jpg";

const SECONDARY_PHONE = "+77273270527";
const SECONDARY_PHONE_DISPLAY = "+7 (727) 327-05-27";

const services = [
  { icon: Waves, title: "Чаши бассейнов", desc: "Полипропилен, алькорплан. Любые формы и размеры.", price: "от 350 000 ₸", img: poolImg },
  { icon: Container, title: "Ёмкости и резервуары", desc: "Для воды, химреактивов, септики, жироуловители.", price: "от 50 000 ₸", img: tanksImg },
  { icon: Cog, title: "Гальванические ванны", desc: "Промышленные ванны и оборудование Flex Kraft.", price: "от 70 000 ₸", img: galvanicImg },
  { icon: Layers, title: "Листовой пластик", desc: "ПП, ПЭ, поликарбонат. Толщины от 4 до 40 мм.", price: "от 12 800 ₸/м²", img: sheetsImg },
  { icon: Trees, title: "Бани и беседки", desc: "Летние домики, беседки, бани из бруса под ключ.", price: "от 700 000 ₸", img: woodImg },
  { icon: Hammer, title: "Теплицы", desc: "Каркас + сотовый поликарбонат. Под заказ.", price: "от 18 000 ₸/м²", img: greenhouseImg },
];

const advantages = [
  { icon: Award, title: "19+ лет на рынке", desc: "С 2004 года. Тысячи довольных клиентов по Казахстану." },
  { icon: ShieldCheck, title: "Гарантия качества", desc: "Внешний и внутренний контроль на всех этапах." },
  { icon: Wallet, title: "Цены без посредников", desc: "Собственное производство — лучшие цены на рынке." },
  { icon: Truck, title: "Работаем по всему РК", desc: "Доставка и монтаж в любую точку Казахстана." },
];

const steps = [
  { n: "01", title: "Заявка", desc: "Оставляете заявку на сайте или звоните напрямую." },
  { n: "02", title: "Консультация", desc: "Обсуждаем детали и согласуем техзадание." },
  { n: "03", title: "Производство", desc: "Изготавливаем по утверждённому проекту." },
  { n: "04", title: "Монтаж", desc: "Доставка, установка и финальный расчёт." },
];

const reviews = [
  { name: "Ольга И.", date: "25.03.2022", rating: 5, text: "Адекватное вежливое обслуживание! Реальные сроки, качественный товар! Рекомендую." },
  { name: "Александр", date: "22.07.2020", rating: 5, text: "За 3 дня смонтировали навес 45 м². Сами привезли материал, выполнили сварочные работы. Всё качественно. Рекомендую как грамотного специалиста." },
  { name: "Анна М.", date: "11.12.2018", rating: 5, text: "Делала ремонт квартиры — всё сделали качественно, быстро и в короткие сроки. Очень помогли советом с материалами и дизайном." },
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#services", label: "Услуги" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#process", label: "Как работаем" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top contact bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground text-sm">
        <div className="container flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 opacity-90"><MapPin className="h-3.5 w-3.5" /> Алматы, ул. Нусупбекова, 11/9</span>
            <span className="flex items-center gap-2 opacity-90"><Clock className="h-3.5 w-3.5" /> Пн–Пт 09:00–17:30 · Сб 10:00–15:00</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:ecoplastkz@mail.ru`} className="flex items-center gap-2 hover:underline"><Mail className="h-3.5 w-3.5" /> ecoplastkz@mail.ru</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-40 transition-all ${scrolled ? "bg-background/95 backdrop-blur shadow-soft" : "bg-background"}`}>
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground font-display font-bold">E</span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold text-foreground">Ecoplast</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">сервисная компания</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <CallButton variant="header" />
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" aria-label="Меню">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="container py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="py-2 font-medium text-foreground/80">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-25">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        <div className="container relative py-16 md:py-24 lg:py-28 bg-border">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/20 bg-accent">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                19 лет на рынке Казахстана
              </span>
              <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
                Изделия из пластика<br />
                <span className="text-primary-glow">для бизнеса и дома</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl max-w-2xl text-secondary-foreground">
                Чаши бассейнов, ёмкости, гальванические ванны, жироуловители, нефтеотделители. Собственное производство в Алматы. Поставка оборудования <strong>Flex Kraft</strong>.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
                <a href="#quote" className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-display font-semibold hover:bg-white/20 transition">
                  Рассчитать стоимость <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                {[
                  { v: "19+", l: "лет опыта" },
                  { v: "1000+", l: "проектов" },
                  { v: "100%", l: "по РК" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-3xl md:text-4xl font-extrabold text-primary-glow">{s.v}</div>
                    <div className="text-sm text-primary-foreground/70 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div id="quote" className="lg:col-span-2">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Каталог</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Товары и услуги
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Полный цикл: от проектирования до монтажа. Изготавливаем под заказ под любые задачи.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="group bg-card rounded-2xl overflow-hidden border shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-accent">{s.price}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <a href="#quote" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Заказать расчёт <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Почему мы</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Честный и надёжный<br />партнёр с 2004 года
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Качеству нашей продукции доверяют как крупнейшие организации, так и частные лица по всему Казахстану. Мы открыты к проектам любой сложности и объёма.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Беремся за заказы любой сложности",
                  "Гибкое ценообразование под ваш бюджет",
                  "Работа в кратчайшие сроки",
                  "Собственное производство 100–300 м²",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CallButton />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((a, i) => (
                <div key={a.title} className={`p-6 rounded-2xl bg-card border shadow-soft ${i % 2 === 1 ? "sm:translate-y-8" : ""}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
                    <a.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Процесс</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Простая схема работы</h2>
            <p className="mt-4 text-lg text-muted-foreground">От заявки до монтажа — четыре прозрачных шага.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative p-6 bg-card rounded-2xl border">
                <div className="font-display text-5xl font-extrabold text-primary/15">{s.n}</div>
                <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 h-6 w-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">Готовы рассчитать ваш проект?</h2>
              <p className="mt-3 text-lg text-primary-foreground/85">Бесплатная консультация и расчёт в течение 30 минут.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${PRIMARY_PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-accent px-7 py-4 font-display font-bold text-accent-foreground shadow-cta">
                <Phone className="h-5 w-5" /> {PRIMARY_PHONE_DISPLAY}
              </a>
              <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/30 px-7 py-4 font-display font-bold hover:bg-white/20 transition">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Отзывы</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Что говорят клиенты</h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
              </div>
              <span className="font-semibold">4.9 из 5</span>
              <span className="text-muted-foreground">·  на основе отзывов клиентов</span>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="p-6 bg-card rounded-2xl border shadow-soft flex flex-col">
                <div className="flex">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <p className="mt-4 text-foreground/85 leading-relaxed flex-1">«{r.text}»</p>
                <div className="mt-5 pt-5 border-t flex items-center justify-between">
                  <span className="font-display font-semibold">{r.name}</span>
                  <span className="text-sm text-muted-foreground">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Контакты</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Свяжитесь с нами</h2>
              <p className="mt-4 text-lg text-muted-foreground">Звоните, пишите или приезжайте в офис в Алматы.</p>

              <div className="mt-8 space-y-5">
                <a href={`tel:${PRIMARY_PHONE}`} className="flex items-start gap-4 p-5 bg-card rounded-xl border hover:border-primary/40 transition">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Менеджер</div>
                    <div className="font-display text-xl font-bold text-foreground">{PRIMARY_PHONE_DISPLAY}</div>
                    <div className="text-sm text-muted-foreground mt-1 tabular-nums">{SECONDARY_PHONE_DISPLAY}</div>
                  </div>
                </a>

                <a href="mailto:ecoplastkz@mail.ru" className="flex items-start gap-4 p-5 bg-card rounded-xl border hover:border-primary/40 transition">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">E-mail</div>
                    <div className="font-display text-lg font-bold text-foreground">ecoplastkz@mail.ru</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Адрес</div>
                    <div className="font-display text-lg font-bold text-foreground">ул. Нусупбекова, 11/9 оф. 26</div>
                    <div className="text-sm text-muted-foreground">Алматы, Казахстан</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">График работы</div>
                    <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                      <span className="text-foreground/80">Пн–Пт</span><span className="font-semibold tabular-nums">09:00 – 17:30</span>
                      <span className="text-foreground/80">Суббота</span><span className="font-semibold tabular-nums">10:00 – 15:00</span>
                      <span className="text-foreground/80">Воскресенье</span><span className="font-semibold text-muted-foreground">Выходной</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 font-display font-bold">E</span>
                
              </div>
              <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
                Сервисная компания. Изделия из пластика, оборудование Flex Kraft, ремонт и строительство по всему Казахстану.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#services" className="hover:text-primary-glow">Товары и услуги</a></li>
                <li><a href="#advantages" className="hover:text-primary-glow">О нас</a></li>
                <li><a href="#reviews" className="hover:text-primary-glow">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-primary-glow">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href={`tel:${PRIMARY_PHONE}`} className="hover:text-primary-glow tabular-nums">{PRIMARY_PHONE_DISPLAY}</a></li>
                <li><a href={`tel:${SECONDARY_PHONE}`} className="hover:text-primary-glow tabular-nums">{SECONDARY_PHONE_DISPLAY}</a></li>
                <li><a href="mailto:ecoplastkz@mail.ru" className="hover:text-primary-glow">ecoplastkz@mail.ru</a></li>
                <li>ул. Нусупбекова, 11/9, Алматы</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} Ecoplast.kz — все права защищены</span>
            <span className="flex items-center gap-2"><Factory className="h-4 w-4" /> На рынке с 2004 года</span>
          </div>
        </div>
      </footer>

      <CallButton variant="floating" />
    </div>
  );
};

export default Index;
