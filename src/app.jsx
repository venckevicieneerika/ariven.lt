/* global React, ReactDOM, ArivenDesignSystem_60e2d1 */
const { useState, useEffect, useRef } = React;
const DS = window.ArivenDesignSystem_60e2d1;
const { Button, Tag, ServiceCard, Card, Field, Input, Textarea } = DS;

/* ----------------------------- icons (Lucide-style outline) ----------------------------- */
const Icon = {
  arrow: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>,
  arrowUR: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>,
  phone: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>,
  chat: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  sun: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>,
  eye: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>,
  shield: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>,
  award: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="6" /><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" /></svg>,
  zap: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>,
  sparkle: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" /><path d="M5 3v4M3 5h4M19 17v4M17 19h4" /></svg>,
  pen: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
  search: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>,
  check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5" /></svg>,
  star: (p) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}><path d="m12 2 2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 7.1-1.01z" /></svg>,
  menu: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>,
  plus: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 5v14M5 12h14" /></svg>,
  x: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>,
  upload: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M17 8l-5-5-5 5M12 3v12" /></svg>,
  facebook: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M14 9h3V5.5h-2.6C11.9 5.5 10.6 7 10.6 9.3V11H8.5v3.5h2.1V22h3.6v-7.5H17l.5-3.5H14.2V9.7c0-.5.3-.7.8-.7Z" /></svg>,
  instagram: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" /></svg>,
  scissors: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" /></svg>,
  ruler: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z" /><path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2" /></svg>,
  brush: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9.06 11.9 16.5 4.5a2.12 2.12 0 0 1 3 3l-7.4 7.44" /><path d="M7 14a3 3 0 0 0-3 3c0 1.3-1 2-2 2 1 1.3 2.5 2 4 2a4 4 0 0 0 4-4 3 3 0 0 0-3-3Z" /></svg>,
  layers: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></svg>,
  droplet: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2.7 6.3 8.4a8 8 0 1 0 11.4 0Z" /></svg>,
  layout: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>,
  palette: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22a10 10 0 1 1 10-10c0 2.2-1.8 4-4 4h-1.5a2 2 0 0 0-1.5 3.3 2 2 0 0 1-1.5 3.3Z" /><circle cx="7.5" cy="10.5" r="1" /><circle cx="12" cy="7.5" r="1" /><circle cx="16.5" cy="10.5" r="1" /></svg>
};

const ASSET = 'img/';
const UNS = (id, w) => `https://images.unsplash.com/photo-${id}?w=${w || 900}&q=80&auto=format&fit=crop`;
// Resource resolver: uses inlined blobs in the standalone bundle, real URLs in dev.
const R = (id, fallback) => typeof window !== 'undefined' && window.__resources && window.__resources[id] || fallback;

/* ----------------------------- data ----------------------------- */
const TRUST = ['Matinė plėvelė', 'Veidrodinė plėvelė', 'Apsauginė plėvelė', 'Automobilių apklijavimas', 'Reklaminiai lipdukai', 'Plėvelės klijavimas', 'Dirbame Kaune'];

const ADV = [
{ ico: <Icon.shield />, t: 'Rūpinamės visu procesu', d: 'Konsultuojame, kuriame dizainą, gaminame, ir klijuojame – pasirūpiname visu procesu, kad Jūms nereikėtų rūpintis detalėmis.' },
{ ico: <Icon.sun />, t: 'Apsauga nuo karščio', d: 'Veidrodinė plėvelė atspindi saulės spindulius ir žymiai sumažina temperatūrą patalpose vasarą.' },
{ ico: <Icon.eye />, t: 'Daugiau privatumo', d: 'Matinė plėvelė suteikia privatumą dieną ir naktį – tinkamas sprendimas biurams ir namams.' },
{ ico: <Icon.sparkle />, t: 'Estetiškas rezultatas', d: 'Kuriame individualius dizaino sprendimus pagal Jūsų erdvę, poreikius ir stilių.' }];


const NAMAMS = [
{ title: 'Matinė plėvelė langams', alt: 'Matinė plėvelė langams – privatumas išlaikant dienos šviesą', img: R('namams1', ASSET + 'namams-1.webp'),
  tags: [{ label: 'Privatumas', tone: 'solid' }],
  desc: 'Daugiau privatumo langams, durims ar vonios kambariui, išlaikant natūralią dienos šviesą.' },
{ title: 'Veidrodinė plėvelė langams', alt: 'Veidrodinė plėvelė langams – apsauga nuo saulės kaitros', img: R('namams2', ASSET + 'namams-2.webp'), href: '#kontaktai',
  tags: [{ label: 'Vėsa', tone: 'cool', icon: <Icon.sun /> }],
  desc: 'Apsauga nuo saulės kaitros ir privatumas dieną – plėvelė atspindinti saulės spindulius ir mažinanti temperatūrą.' },
{ title: 'Individualus dizainas', alt: 'Dekoratyvinė individualaus dizaino plėvelė ant stiklo', img: R('namams3', ASSET + 'namams-3.webp'),
  tags: [{ label: 'Dizainas', tone: 'accent', icon: <Icon.sparkle /> }],
  desc: 'Turite idėją? Paversime ją sprendimu, sukurtu būtent jūsų erdvei.' }];


const VERSLUI = [
{ title: 'Matinė plėvelė stiklo pertvaroms', alt: 'Matinė plėvelė biuro stiklo pertvaroms', img: R('verslui1', ASSET + 'verslui-1.webp'),
  tags: [{ label: 'Privatumas', tone: 'solid', icon: <Icon.eye /> }],
  desc: 'Matinė plėvelė stiklinėms pertvaroms, durims ir langams. Suteikia daugiau privatumo ir padeda atskirti darbo erdves.' },
{ title: 'Veidrodinė plėvelė', alt: 'Veidrodinė saulės kontrolės plėvelė biuro langams', img: R('verslui2', ASSET + 'verslui-2.webp'), href: '#kontaktai',
  tags: [{ label: 'Mažiau kaitros', tone: 'cool', icon: <Icon.sun /> }],
  desc: 'Šilumos kontrolė patalpose – mažiau kaitros ir akinimo bei daugiau privatumo dienos metu.' },
{ title: 'Reklaminiai lipdukai vitrinoms', alt: 'Reklaminiai lipdukai ir vitrinos apipavidalinimas', img: R('verslui3', ASSET + 'verslui-3.webp'),
  tags: [{ label: 'Matomumas', tone: 'accent', icon: <Icon.sparkle /> }],
  desc: 'Reklama ant vitrinų, pertvarų ar fasadų – pagal Jums individualiai paruoštą dizainą.' },
{ title: 'Lipdukų gamyba', alt: 'Reklaminių lipdukų gamyba ir spauda', img: R('verslui4', ASSET + 'verslui-4.webp'),
  tags: [{ label: 'Pagal užsakymą', tone: 'accent', icon: <Icon.scissors /> }],
  desc: 'Spausdiname įvairius lipdukus – nuo mažo formato iki didelių vitrinų.' },
{ title: 'Automobilių apklijavimas reklama', alt: 'Automobilio apklijavimas reklama', img: R('verslui5', ASSET + 'verslui-5.webp'),
  tags: [{ label: 'Nuo dizaino iki klijavimo', tone: 'soft', icon: <Icon.pen /> }],
  desc: 'Projektuojame ir apklijuojame automobilius – nuo dizaino sukūrimo iki profesionalaus apklijavimo.' },
{ title: 'Dizaino kūrimas', alt: 'Reklamos ir plėvelių dizaino kūrimas', img: R('verslui6', ASSET + 'verslui-6.webp'),
  tags: [{ label: 'Individualus dizainas', tone: 'accent', icon: <Icon.sparkle /> }],
  desc: 'Nuo idėjos iki užklijuoto lipduko – padedame sukurti dizainą ir jį profesionaliai įgyvendiname.' }];


const PROCESS = [
{ n: '01', ico: <Icon.chat />, t: 'Susisiekite su mumis', d: 'Aptarsime poreikius ir pasiūlysime tinkamiausią sprendimą Jūsų namams ar verslo erdvei.' },
{ n: '02', ico: <Icon.search />, t: 'Pateiksime pasiūlymą', d: 'Įvertinsime Jūsų poreikius, apskaičiuosime kainą ir pateiksime pasiūlymą Jūsų erdvei.' },
{ n: '03', ico: <Icon.pen />, t: 'Sukursime dizainą', d: 'Jei reikalingas individualus sprendimas, paruošime dizainą ir maketus pagal Jūsų viziją.' },
{ n: '04', ico: <Icon.check />, t: 'Įgyvendinsime projektą', d: 'Pasirūpinsime gamyba ir klijavimu iš anksto suderintu, Jūms patogiu metu.' }];


const TESTIMONIALS = [
{ text: 'Puikiai atliktas darbas! Dėka užklijuotų veidrodinių plėvelių ant langų - patalpose gerokai vėsiau. Rekomenduoju!', name: 'Agnė Kisielienė' },
{ text: 'Kreipiausi su rekomendacijom, kurios pasiteisino. Greitas darbų atlikimas, bet kas labiausiai patiko tai sklandus bendravimas, iškilusių klausimų sprendimas ir ypatingas dėmesys klientui.', name: 'Karolina Baniulienė' },
{ text: 'Labai kruopščiai ir gražiai atliktas durų lango klijavimas. Dizainas puikiai suderintas pagal mūsų asmeninius norus, o rezultatas ne tik estetiškas, bet ir suteikia daugiau privatumo. Malonus bendravimas ir profesionalus darbas – rekomenduoju!', name: 'Laura Vitkauskienė' }];


const GALLERY = [
  { img: R('darbaiPetbarber', ASSET + 'darbai-petbarber.webp'), cap: 'Vitrinos apklijavimas, Pet Barber', cls: 'g-big' },
  { img: R('darbaiNorgile', ASSET + 'darbai-norgile.webp'), cap: 'Mikroautobuso apklijavimas, Norgilė', cls: 'g-big' },
  { img: R('darbaiKavavire', ASSET + 'darbai-kavavire.webp'), cap: 'Automobilio apklijavimas, Kava virė', cls: 'g-tall' },
  { img: R('darbaiDurysLinijos', ASSET + 'darbai-durys-linijos.webp'), cap: 'Lauko durys, linijų raštas', cls: 'g-tall' },
  { img: R('darbaiMedis', ASSET + 'darbai-medis.webp'), cap: 'Įėjimo durys, medžio motyvas', cls: 'g-big' },
  { img: R('darbaiHolas', ASSET + 'darbai-holas.webp'), cap: 'Namo holas, matinė plėvelė', cls: 'g-big' },
  { img: R('darbaiBaltosDurys', ASSET + 'darbai-baltos-durys.webp'), cap: 'Įėjimo durys, matinė plėvelė', cls: 'g-tall' },
  { img: R('darbaiJuostos', ASSET + 'darbai-juostos.webp'), cap: 'Lauko durys, skaidrios juostos', cls: 'g-tall' },
];

const DESIGN_FEATURES = [
  { ico: <Icon.shield />, t: 'Aukšta kokybė', d: 'Patvarios, ilgaamžės plėvelės.' },
  { ico: <Icon.ruler />, t: 'Pritaikome Jums', d: 'Kiekvienas dizainas pritaikomas pagal Jūsų langus.' },
  { ico: <Icon.brush />, t: 'Profesionalus klijavimas', d: 'Greitai ir švariai, Jūsų erdvėje.' },
];

const DESIGN_TABS = [
  { key: 'visi', label: 'Visi' },
  { key: 'namams', label: 'Namams' },
  { key: 'ofisams', label: 'Ofisams' },
  { key: 'privatumas', label: 'Privatumas' },
  { key: 'minimal', label: 'Minimalistiniai' },
  { key: 'organic', label: 'Organiniai raštai' },
];

const DESIGNS = [
  { id: 'smilgos', name: 'Smilgos', tagline: 'Lengvas augalinis raštas', popular: true,
    long: 'Subtilus augalinis motyvas, įkvėptas smilgų ir natūralių formų. Suteikia daugiau privatumo, tačiau išlaiko lengvą, dekoratyvų ir jaukų vaizdą. Puikiai tinka namų erdvėms.',
    priv: 3, tinka: 'Lauko durims, langams, vonios kambariui', spalva: 'Matinė',
    koreguoti: 'Dizaino mąstelį pritaikome pagal Jūsų lango matmenis',
    cats: ['namams', 'organic'], img: R('dizGeometrija', ASSET + 'dizainas-geometrija.webp') },
  { id: 'ritmas', name: 'Ritmas', tagline: 'Subtilus vertikalių linijų raštas',
    long: 'Lengvas vertikalių linijų raštas, suteikiantis stiklui daugiau struktūros ir privatumo. Tvarkingas, modernus sprendimas, tinkantis tiek namams, tiek verslo erdvėms.',
    priv: 3, tinka: 'Lauko durims, langams, biuro pertvaroms', spalva: 'Matinė',
    koreguoti: 'Dizaino mąstelį pritaikome pagal Jūsų lango matmenis',
    cats: ['namams', 'minimal'], img: R('dizSakos', ASSET + 'dizainas-sakos.webp') },
  { id: 'minimal', name: 'Minimalistinės juostelės', tagline: 'Vientisas matinio stiklo efektas',
    long: 'Švarus ir vientisas matinio stiklo efektas, suteikiantis daugiau privatumo ir kartu išlaikantis natūralią šviesą. Universalus sprendimas ieškantiems minimalistinio vaizdo.',
    priv: 5, tinka: 'Lauko durims, biuro pertvaroms', spalva: 'Matinė',
    koreguoti: 'Dizaino mąstelį pritaikome pagal Jūsų lango matmenis',
    cats: ['namams', 'minimal'], img: R('dizRitmas', ASSET + 'dizainas-ritmas.webp') },
  { id: 'geometrija', name: 'Geometrija', tagline: 'Modernus geometrinių linijų raštas',
    long: 'Modernus geometrinių linijų raštas, suteikiantis langui daugiau privatumo ir išskirtinumo. Tvarkingas, šiuolaikiškas sprendimas namams ir verslo erdvėms.',
    priv: 3, tinka: 'Lauko durims, langams, biuro pertvaroms', spalva: 'Matinė',
    koreguoti: 'Dizaino mąstelį pritaikome pagal Jūsų lango matmenis',
    cats: ['ofisams', 'minimal'], img: R('dizSmilgos', ASSET + 'dizainas-smilgos.webp') },
];

const HOWTO = [
  { n: '01', ico: <Icon.layers />, t: 'Išsirinkite dizainą', d: 'Peržiūrėkite galeriją ir pasirinkite labiausiai tinkantį variantą.' },
  { n: '02', ico: <Icon.ruler />, t: 'Pritaikome dizainą Jūsų erdvei', d: 'Pritaikome dizainą pagal langų dydį ir paruošiame vizualizaciją.' },
  { n: '03', ico: <Icon.brush />, t: 'Pagaminsime ir užklijuosime', d: 'Pagaminame plėvelę ir profesionaliai ją užklijuojame vietoje.' },
];

const FAQ = [
  { q: 'Kuo skiriasi matinė ir veidrodinė plėvelė?', a: 'Matinė plėvelė išsklaido vaizdą ir veikia visą parą – tinka, kai svarbiausia privatumas. Veidrodinė plėvelė atspindi saulės šilumą ir žvilgsnius iš lauko dieną, todėl ji pirmiausia skirta kaitrai ir akinimui mažinti.' },
  { q: 'Kiek sumažėja šiluma ir ar tamsu patalpoje?', a: 'Priklausomai nuo pasirinktos plėvelės, ji atspindi 40–80% saulės šilumos. Šviesos pralaidumą parenkame pagal Jūsų poreikį – galima išlaikyti šviesų vidų arba labiau tamsinti.' },
  { q: 'Ar vakare per veidrodinę plėvelę matysis vidus?', a: 'Taip, vakare, kai patalpoje šviesiau nei lauke, veidrodinis efektas sumažėja. Jei privatumo reikia ir vakare, rekomenduojame rinktis matinę plėvelę.' },
  { q: 'Ar plėvelę vėliau galima nuimti? Ar nepasižeis stiklas?', a: 'Taip, plėvelę galima nuimti bet kada. Nuimta tvarkingai ji nepalieka žymių ir stiklo nepažeidžia – jei reikia, klijų likučius nuvalome ir stiklas atrodo kaip anksčiau.' },
  { q: 'Kiek laiko tarnauja langų plėvelė?', a: 'Tarnavimo laikas priklauso nuo plėvelės tipo, lango vietos, saulės poveikio ir priežiūros. Kokybiškai sumontuota plėvelė gali tarnauti daugelį metų.' },
  { q: 'Kaip prižiūrėti ir valyti langą su plėvele?', a: 'Pirmas kelias dienas plėvelės geriau neliesti. Vėliau langą valykite įprastai – minkšta šluoste ir neagresyviu valikliu, vengti šiurkščių kempinių, grandiklių. Jokios kitos priežiūros nereikia.' },
];

/* ----------------------------- sections ----------------------------- */
function Nav({ open, setOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={'nav' + (scrolled ? ' is-scrolled' : '')}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top"><img src={R('logoNavy', ASSET + 'logo-ariven-navy.png')} alt="Ariven — plėvelės klijavimas" /></a>
        <nav className={'nav__links' + (open ? ' is-open' : '')}>
          <a className="nav__link" href="#namams" onClick={() => setOpen(false)}>Namams</a>
          <a className="nav__link" href="#verslui" onClick={() => setOpen(false)}>Verslui</a>
          <a className="nav__link" href="#darbai" onClick={() => setOpen(false)}>Atlikti darbai</a>
          <a className="nav__link" href="#kaip" onClick={() => setOpen(false)}>Kaip dirbame</a>
          <a className="nav__link" href="#atsiliepimai" onClick={() => setOpen(false)}>Atsiliepimai</a>
          <a className="nav__link" href="#duk" onClick={() => setOpen(false)}>DUK</a>
          <a className="nav__link" href="#kontaktai" onClick={() => setOpen(false)}>Kontaktai</a>
        </nav>
        <div className="nav__cta">
          <Button variant="secondary" size="sm" iconLeft={<Icon.phone />} href="tel:+37065030672">+37065030672</Button>
          <Button size="sm" href="#kontaktai">Gauti pasiūlymą</Button>
        </div>
        <button className="nav__burger" aria-label="Meniu" onClick={() => setOpen((o) => !o)}><Icon.menu /></button>
      </div>
      <div className="nav__progress" aria-hidden="true"><i></i></div>
    </header>);

}

function Hero() {
  return (
    <section className="container hero" id="top">
      <div className="hero__copy">
        <span className="eyebrow reveal">DIRBAME KAUNE</span>
        <h1 className="hero__title reveal rd1" style={{ fontSize: "clamp(2.25rem, 9vw, 65px)", fontWeight: 500 }}>Plėvelės klijavimo sprendimai{" "}<br />Jūsų <span className="squig squig--citron">namams<svg viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9c16-3 28 1 44 2s34-4 48-3 18 2 24 1" /></svg></span>{" "}<br />ir <span className="squig squig--steel">verslui<svg viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9c16-3 28 1 44 2s34-4 48-3 18 2 24 1" /></svg></span></h1>
        <p className="hero__lead reveal rd2" style={{ fontSize: "16px" }}>Skirtingos erdvės – skirtingi poreikiai. Nuo subtilių matinių plėvelių, suteikiančių privatumą biuruose, iki sprendimų, kurie namuose išlaiko vėsą ir šviesą.</p>
        <div className="pill-nav reveal rd4">
          <a className="pill pill--citron" href="#namams"><span className="pill__label">Namams</span><span className="pill__ico"><Icon.arrowUR /></span></a>
          <a className="pill pill--steel" href="#verslui"><span className="pill__label">Verslui</span><span className="pill__ico"><Icon.arrowUR /></span></a>
        </div>
      </div>
      <div className="hero__media reveal rd2">
        <BeforeAfter />
      </div>
    </section>);

}

function Trust() {
  return (
    <div className="trust">
      <div className="trust__track">
        {[0, 1].map((rep) =>
        <div className="trust__inner" key={rep} aria-hidden={rep === 1}>
            {TRUST.map((t, i) =>
          <span className="trust__item" key={i}>
                {t}
                <span className="trust__dot"></span>
              </span>
          )}
          </div>
        )}
      </div>
    </div>);

}

function Advantages() {
  return (
    <section className="container section">
      <div className="section-head section-head--center reveal">
        <span className="eyebrow eyebrow--center eyebrow--accent">SPRENDIMAI NAMAMS IR VERSLUI</span>
        <h2 className="section-title" style={{ marginInline: 'auto' }}>Sprendimai, kurie ne tik atrodo gerai, bet ir veikia kasdien</h2>
      </div>
      <div className="values-grid">
        {ADV.map((a, i) =>
        <div className={'value reveal rd' + (i + 1)} key={i}>
            <div className="value__ico">{a.ico}</div>
            <h3 className="value__t">{a.t}</h3>
            <p className="value__d">{a.d}</p>
          </div>
        )}
      </div>
    </section>);

}

function ServiceGrid({ list }) {
  return (
    <div className="services__grid services__grid--4">
      {list.map((s, i) =>
      <div className={'reveal rd' + (i % 3 + 1)} key={s.title}>
          <ServiceCard title={s.title} description={s.desc} image={s.img} imageAlt={s.alt || s.title} href={s.href || '#kontaktai'}
        tags={s.tags} />
        </div>
      )}
    </div>);

}

function Stat({ num, suffix, label, dark }) {
  return (
    <div className={'stat reveal' + (dark ? ' stat--dark' : '')} data-anim="scale">
      <div className="big"><span data-count={String(num).replace(/\D/g, '')} data-suffix="">{num}</span><i>{suffix}</i></div>
      <div className="lbl">{label}</div>
    </div>);

}

function Process() {
  return (
    <section className="process" id="kaip">
      <div className="process__inner">
        <div className="process__intro reveal">
          <span className="eyebrow eyebrow--center eyebrow--light">Kaip dirbame</span>
          <h2 className="section-title section-title--inv" style={{ marginInline: 'auto', maxWidth: '20ch' }}>Nuo pirmosios idėjos iki galutinio rezultato</h2>
        </div>
        <ol className="process__steps">
          {PROCESS.map((s, i) =>
          <li className={'step reveal rd' + (i + 1)} key={s.n}>
              <div className="step__ico">{s.ico}</div>
              <span className="step__n">{s.n}</span>
              <div className="step__t">{s.t}</div>
              <p className="step__d">{s.d}</p>
            </li>
          )}
        </ol>
      </div>
    </section>);

}

function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const ref = React.useRef(null);
  const drag = React.useRef(false);
  const touched = React.useRef(false);
  const move = (clientX) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  React.useEffect(() => {
    const up = () => { drag.current = false; };
    const mv = (e) => { if (drag.current) move(e.touches ? e.touches[0].clientX : e.clientX); };
    window.addEventListener('pointerup', up);
    window.addEventListener('pointermove', mv);
    return () => { window.removeEventListener('pointerup', up); window.removeEventListener('pointermove', mv); };
  }, []);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf, t0, done = false;
    const dur = 4200;
    const step = (t) => {
      if (touched.current || done) return;
      if (!t0) t0 = t;
      const p = (t - t0) / dur;
      if (p >= 1) { setPos(52); done = true; return; }
      const e = Math.sin(p * Math.PI * 2);
      setPos(52 + e * 30);
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting && !touched.current && !raf) raf = requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="ba hero__frame" ref={ref}
      onPointerDown={(e) => { touched.current = true; drag.current = true; move(e.clientX); }}>
      <img className="ba__after" src={R('baAfter', 'img/po.webp')} alt="Po plėvelės klijavimo" />
      <img className="ba__before" src={R('baBefore', 'img/pries.webp')} alt="Prieš plėvelės klijavimą"
        style={{ clipPath: 'inset(0 ' + (100 - pos) + '% 0 0)' }} />
      <span className="ba__tag ba__tag--l">Prieš</span>
      <span className="ba__tag ba__tag--r">Po</span>
      <div className="ba__handle" style={{ left: pos + '%' }}>
        <span className="ba__grip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l-4 6 4 6M15 6l4 6-4 6" /></svg></span>
      </div>
    </div>);

}

function Testimonials() {
  return (
    <section className="container section" id="atsiliepimai">
      <div className="section-head section-head--center reveal">
        <span className="eyebrow eyebrow--center eyebrow--accent">KLIENTAI KALBA</span>
        <h2 className="section-title" style={{ marginInline: 'auto' }}>Atsiliepimai</h2>
      </div>
      <div className="tst-grid">
        {TESTIMONIALS.map((t, i) =>
        <Card key={i} padding="lg" className={'tst reveal rd' + (i + 1)}>
            <div className="tst__quote">&ldquo;</div>
            <p className="tst__text">{t.text}</p>
            <div className="tst__foot">
              <div className="tst__stars">{[0, 1, 2, 3, 4].map((n) => <Icon.star key={n} />)}</div>
              <div className="tst__name">{t.name}</div>
            </div>
          </Card>
        )}
      </div>
    </section>);

}

function CTA() {
  return (
    <div className="cta-wrap" id="kontaktai">
      <div className="cta reveal" data-anim="scale">
        <div>
          <span className="eyebrow eyebrow--light">SUSISIEKIME</span>
          <h2 className="cta__h">Užpildykite šią formą<br />ir mes su Jumis susieksime</h2>
          <p className="cta__note" style={{ fontSize: '16px' }}>Jeigu Jums patogiau pasikalbėti gyvai, drąsiai skambinkite telefonu apačioje.</p>
          <ul className="cta__list">
            <li><span className="cta__ico"><Icon.phone /></span><a href="tel:+37065030672">+370 650 30672</a></li>
            <li><span className="cta__ico"><Icon.mail /></span><a href="mailto:info@ariven.lt">info@ariven.lt</a></li>
          </ul>
        </div>
        <div className="cta__form">
          <CtaForm />
        </div>
      </div>
    </div>);

}

/* Formspree galinis adresas. Užsiregistravus formspree.io čia įrašomas
   Jūsų formos ID (pvz. 'xldeqwba'). Kol jo nėra, forma atidaro el. pašto programą. */
const FORMSPREE_ID = 'mrpbqadb';

function CtaForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [files, setFiles] = useState([]);
  const pick = (e) => setFiles(Array.from(e.target.files || []));

  const mailtoFallback = (fd) => {
    const name = (fd.get('vardas') || '').toString().trim();
    const phone = (fd.get('tel') || '').toString().trim();
    const email = (fd.get('el') || '').toString().trim();
    const msg = (fd.get('zinute') || '').toString().trim();
    const fileLine = files.length
      ? '\n\nPridėti failai (prašome prisegti prie šio laiško):\n' + files.map((f) => '– ' + f.name).join('\n')
      : '';
    const subject = encodeURIComponent('Užklausa iš svetainės' + (name ? ' – ' + name : ''));
    const body = encodeURIComponent(
      'Vardas: ' + name + '\nTelefonas: ' + phone + '\nEl. paštas: ' + email + '\n\nŽinutė:\n' + msg + fileLine
    );
    window.location.href = 'mailto:info@ariven.lt?subject=' + subject + '&body=' + body;
  };

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (!FORMSPREE_ID) { mailtoFallback(fd); setSent(true); return; }

    setSending(true); setError('');
    fd.delete('failas');
    if (files.length) fd.set('Pridėti failai', files.map((f) => f.name).join(', ') + ' (klientas atsiųs atskirai)');
    fd.set('_subject', 'Užklausa iš ariven.lt – ' + ((fd.get('vardas') || '').toString().trim() || 'be vardo'));
    const custEmail = (fd.get('el') || '').toString().trim();
    if (custEmail) fd.set('email', custEmail);
    try {
      const res = await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
        method: 'POST', body: fd, headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error('status ' + res.status);
      form.reset(); setFiles([]); setSent(true);
    } catch (err) {
      setError('Nepavyko išsiųsti. Pabandykite dar kartą arba parašykite info@ariven.lt');
    } finally {
      setSending(false);
    }
  };
  if (sent) {
    return (
      <div className="form-card">
        <div className="form-success">
          <div className="form-success__ico"><Icon.check /></div>
          <h3>Dėkojame, Jūsų užklausa išsiųsta.</h3>
          <p>{FORMSPREE_ID
            ? 'Gavome Jūsų užklausą ir atsakysime per 1 darbo dieną.'
            : 'Atsidarė Jūsų el. pašto programa su laišku, adresuotu info@ariven.lt – paspauskite „Siųsti“.'}</p>
        </div>
      </div>);

  }
  return (
    <div className="form-card">
      <form onSubmit={submit}>
        <div className="form-row">
          <Field label={<React.Fragment>Vardas <span className="req-mark">*</span></React.Fragment>} htmlFor="cta-vardas"><Input id="cta-vardas" name="vardas" placeholder="Jūsų vardas" required /></Field>
          <Field label={<React.Fragment>Telefonas <span className="req-mark">*</span></React.Fragment>} htmlFor="cta-tel"><Input id="cta-tel" name="tel" type="tel" placeholder="0 6__ _____" required /></Field>
        </div>
        <div className="form-single">
          <Field label="El. paštas" htmlFor="cta-el"><Input id="cta-el" name="el" type="email" placeholder="vardas@pastas.lt" /></Field>
        </div>
        <div className="form-single">
          <Field label="Jūsų žinutė" htmlFor="cta-zinute">
            <Textarea id="cta-zinute" name="zinute" rows={3} placeholder="Trumpai aprašykite, ko norėtumėte, ir pridėkite preliminarius matmenis. Jei turite galite pridėti pavyzdžio nuorodą." />
          </Field>
        </div>
        <div className="form-actions">
          <Button type="submit" variant="accent" size="lg" iconRight={<Icon.arrow />} disabled={sending}>{sending ? 'Siunčiama…' : 'Siųsti užklausą'}</Button>
        </div>
        {error && <p className="form-error">{error}</p>}
        <p className="req-legend"><span className="req-mark">*</span> Privalomi laukai</p>
      </form>
    </div>);
}

function Gallery() {
  const [idx, setIdx] = useState(-1);
  const open = idx >= 0;
  const step = (d) => setIdx((i) => (i + d + GALLERY.length) % GALLERY.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIdx(-1);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <section className="container section" id="darbai">
      <div className="section-head reveal" data-anim="left">
        <span className="eyebrow">Darbų pavyzdžiai</span>
        <h2 className="section-title">Mūsų darbai</h2>
      </div>
      <div className="gallery reveal rd1">
        {GALLERY.map((g, i) => (
          <figure className={g.cls} key={i} onClick={() => setIdx(i)}>
            <img className="cool-img" src={g.img} alt={g.cap} loading="lazy" decoding="async" />
            <figcaption>{g.cap}</figcaption>
          </figure>
        ))}
      </div>

      {open && (
        <div className="lb" onClick={() => setIdx(-1)}>
          <button className="lb__x" aria-label="Uždaryti" onClick={() => setIdx(-1)}><Icon.x /></button>
          <button className="lb__nav lb__nav--prev" aria-label="Ankstesnė" onClick={(e) => { e.stopPropagation(); step(-1); }}><Icon.arrow /></button>
          <figure className="lb__fig" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[idx].img} alt={GALLERY[idx].cap} />
            <figcaption>{GALLERY[idx].cap}<span className="lb__count">{idx + 1} / {GALLERY.length}</span></figcaption>
          </figure>
          <button className="lb__nav lb__nav--next" aria-label="Kita" onClick={(e) => { e.stopPropagation(); step(1); }}><Icon.arrow /></button>
        </div>
      )}
    </section>
  );
}

function Dots({ level, max = 5, className = '' }) {
  return (
    <div className={'dots ' + className}>
      {Array.from({ length: max }).map((_, i) => (
        <span className={'dot' + (i < level ? ' on' : '')} key={i}></span>
      ))}
    </div>
  );
}

function DesignModal({ design, onClose }) {
  useEffect(() => {
    if (!design) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [design, onClose]);
  if (!design) return null;
  return (
    <div className="design-modal" role="dialog" aria-modal="true" aria-label={design.name}>
      <div className="design-modal__overlay" onClick={onClose}></div>
      <div className="design-modal__panel">
        <div className="design-modal__media">
          <img className="cool-img" src={design.img} alt={design.name + ' – dekoratyvinė matinė plėvelė langams'} />
        </div>
        <button className="design-modal__close" aria-label="Uždaryti" onClick={onClose}><Icon.x /></button>
        <div className="design-modal__body">
          <span className="design-modal__eyebrow">{design.name}</span>
          <h3 className="design-modal__name">{design.name}</h3>
          <p className="design-modal__desc">{design.long}</p>
          <div className="design-attrs">
            <div className="attr">
              <span className="attr__ico"><Icon.droplet /></span>
              <div><p className="attr__t">Privatumo lygis</p><Dots level={design.priv} className="attr__dots" /></div>
            </div>
            <div className="attr">
              <span className="attr__ico"><Icon.layout /></span>
              <div><p className="attr__t">Tinka</p><p className="attr__v">{design.tinka}</p></div>
            </div>
            <div className="attr">
              <span className="attr__ico"><Icon.palette /></span>
              <div><p className="attr__t">Plėvelė</p><p className="attr__v">{design.spalva}</p></div>
            </div>
            <div className="attr">
              <span className="attr__ico"><Icon.brush /></span>
              <div><p className="attr__t">Galima koreguoti</p><p className="attr__v">{design.koreguoti}</p></div>
            </div>
          </div>
          <div className="design-modal__actions">
            <Button variant="accent" size="lg" href="#kontaktai" onClick={onClose} iconRight={<Icon.arrow />}>Noriu šio dizaino</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignCollection() {
  const [cat, setCat] = useState('visi');
  const [selected, setSelected] = useState(null);
  const filtered = cat === 'visi' ? DESIGNS : DESIGNS.filter((d) => d.cats.includes(cat));
  return (
    <section className="designs" id="dizainai">
      <div className="designs__inner">
        <div className="designs__top reveal">
          <div>
            <span className="eyebrow eyebrow--light">DIZAINŲ GALERIJA</span>
            <h2 className="designs__title">Atraskite jau sukurtus langų <span className="hl">dizainus</span></h2>
            <p className="designs__lead" style={{ fontSize: '16px' }}>Rinkitės iš jau sukurtų dizainų, o mes jį pritaikysime Jūsų langams.</p>
          </div>
          <div className="designs-howto reveal" style={{ width: '100%', maxWidth: '530px' }}>
            <h3 className="designs-howto__head">Kaip tai veikia?</h3>
            <div className="howto-steps">
              {HOWTO.map((s) => (
                <div className="howto-step" key={s.n}>
                  <span className="howto-step__n">{s.n}</span>
                  <span className="howto-step__ico">{s.ico}</span>
                  <div>
                    <p className="howto-step__t">{s.t}</p>
                    <p className="howto-step__d">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="design-grid reveal rd1">
          {filtered.map((d) => (
            <button className="design-card" key={d.id} onClick={() => setSelected(d)}>
              <div className="design-card__media">
                {d.popular && <span className="design-pop">Populiaru</span>}
                <img className="cool-img" src={d.img} alt={d.name + ' – dekoratyvinė matinė plėvelė langams'} loading="lazy" />
              </div>
              <div className="design-card__body">
                <h3 className="design-card__name">{d.name}</h3>
                <p className="design-card__desc">{d.tagline}</p>
                <div className="design-card__foot">
                  <span className="design-card__link">Peržiūrėti <Icon.arrow /></span>
                </div>
              </div>
            </button>
          ))}
          {filtered.length === 0 && <p className="design-empty">Šioje kategorijoje dizainų kol kas nėra – parašykite ir sukursime pagal Jūsų idėją.</p>}
        </div>

      </div>
      <DesignModal design={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function CustomDesign() {
  return (
    <section className="custom" id="individualus">
      <div className="custom__inner">
        <div className="custom__card reveal" data-anim="scale">
          <div className="custom__body">
            <span className="eyebrow eyebrow--accent">INDIVIDUALŪS SPRENDIMAI</span>
            <h2 className="custom__h">Neradote tinkamo <span className="hl">dizaino?</span></h2>
            <p className="custom__lead" style={{ fontSize: '16px' }}>Sukursime individualų sprendimą Jūsų erdvei. Atsiųskite savo viziją, pavyzdį ar interjero nuotrauką – paruošime dizainą specialiai Jūsų langams.</p>
            <div className="custom__actions">
              <Button variant="secondary" size="lg" href="#kontaktai" iconLeft={<Icon.upload />}>Atsiųsti savo viziją</Button>
            </div>
          </div>
          <div className="custom__media">
            <img className="cool-img" src={R('customDizainas', ASSET + 'custom-dizainas.webp')} alt="Individualaus dizaino plėvelė ant stiklo" loading="lazy" />
            <div className="custom__chips">
              <Tag tone="accent" icon={<Icon.brush />}>Individualus dizainas</Tag>
              <Tag tone="soft" dot>Pagal Jūsų viziją</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="container section" id="duk">
      <div className="faq-wrap">
        <div className="faq-intro reveal" data-anim="left">
          <span className="eyebrow eyebrow--accent">D.U.K.</span>
          <h2 className="section-title" style={{ maxWidth: '12ch' }}>Dažnai užduodami klausimai</h2>
          <p className="faq-note" style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', marginTop: '18px', maxWidth: '34ch' }}>
            Neradote atsakymo? Parašykite – mielai pakonsultuosime ir parinksime tinkamą sprendimą Jūsų erdvei.
          </p>
          <div className="faq-cta" style={{ marginTop: '22px' }}>
            <Button href="#kontaktai" iconRight={<Icon.arrow />} className="btn-navy">Užduoti klausimą</Button>
          </div>
        </div>
        <div className="faq-list reveal rd1">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={'faq-item' + (isOpen ? ' is-open' : '')} key={i}>
                <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq-ico"><Icon.plus /></span>
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? '320px' : '0' }}>
                  <div className="faq-a__inner">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <span className="eyebrow eyebrow--light">DIRBAME KAUNE</span>
        <p className="footer__say">Plėvelės sprendimai Jūsų <span className="squig squig--citron">namams<svg viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9c16-3 28 1 44 2s34-4 48-3 18 2 24 1" /></svg></span> ir <span className="squig squig--steel">verslui<svg viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9c16-3 28 1 44 2s34-4 48-3 18 2 24 1" /></svg></span> vienoje vietoje</p>
        <div className="footer__reach">
          <a className="footer__big" href="tel:+37065030672">+370 650 30672</a>
          <a className="footer__big footer__big--sm" href="mailto:info@ariven.lt">info@ariven.lt</a>
          <div className="footer__social">
            <a className="footer__soc" href="https://www.facebook.com/p/Ariven-Pl%C4%97vel%C4%97s-Klijavimas-61563822585427/" target="_blank" rel="noopener" aria-label="Ariven Facebook"><Icon.facebook /></a>
            <a className="footer__soc" href="https://www.instagram.com/ariven_pleveles_klijavimas/" target="_blank" rel="noopener" aria-label="Ariven Instagram"><Icon.instagram /></a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <div>
          <img className="footer__mark" src={R('logoWhite', ASSET + 'logo-ariven-white.png')} alt="Ariven" loading="lazy" />
          <span></span>
          <span className="footer__cr">© 2026 Ariven</span>
        </div>
      </div>
    </footer>);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Arm only below-the-fold elements: above-fold content renders immediately and
    // stays visible even where CSS animations are frozen (offscreen iframes).
    if (!reduce) {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top > window.innerHeight - 60) el.classList.add('is-armed');
      });
    }
    const frame = document.querySelector('.hero__frame');
    const counters = Array.from(document.querySelectorAll('[data-count]'));

    const countUp = (el) => {
      if (el.dataset.counted) return;
      el.dataset.counted = '1';
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      if (reduce || !isFinite(target)) { el.textContent = target + suffix; return; }
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / 1100);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', max > 0 ? (window.scrollY / max).toFixed(4) : '0');
      document.querySelectorAll('.reveal.is-armed:not(.is-visible)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
          el.classList.add('is-visible');
          // Drop the armed state once the transition has played: restores hover
          // effects and guarantees visibility even if transitions never ran.
          setTimeout(() => el.classList.remove('is-armed'), 1600);
        }
      });
      counters.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight - 40) countUp(el); });
      if (frame && !reduce) {
        const r = frame.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          const off = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
          frame.style.setProperty('--par', (off * -28).toFixed(1) + 'px');
        }
      }
    };

    // Throttled synchronously — correctness must never depend on animation frames,
    // which do not run while the document is hidden.
    let last = 0, timer = null;
    const onScroll = () => {
      const now = Date.now();
      if (now - last >= 60) { last = now; update(); return; }
      clearTimeout(timer);
      timer = setTimeout(() => { last = Date.now(); update(); }, 60);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    document.addEventListener('visibilitychange', onScroll);
    // Safety net: if animation frames never run (hidden or offscreen document) nothing
    // can transition, so disarm everything rather than leave content invisible.
    let framed = false;
    requestAnimationFrame(() => { framed = true; });
    const fallback = setTimeout(() => {
      // Hidden tab/pane: keep the animation armed — it plays once the page becomes visible.
      if (document.visibilityState === 'hidden') return;
      const dead = !framed;
      document.querySelectorAll('.reveal.is-armed').forEach((el) => {
        if (dead || el.getBoundingClientRect().top < window.innerHeight) el.classList.remove('is-armed');
      });
    }, 1800);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('visibilitychange', onScroll);
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, []);
  return (
    <div className="site">
      <Nav open={menuOpen} setOpen={setMenuOpen} />
      <main>
        <Hero />
        <Trust />
        <div className="namams-band">
          <section className="container section" id="namams" style={{ paddingBottom: "clamp(1.75rem, 3vw, 2.75rem)" }}>
            <div className="sec-lead reveal" data-anim="left">
              <div className="sec-lead__title">
                <span className="sec-lead__disc"><Icon.arrowUR /></span>
                <h2 className="sec-lead__h">Namams</h2>
              </div>
              <p className="sec-lead__text">Siūlome plėvelių sprendimus, kurie suteikia namams daugiau privatumo, apsaugo nuo saulės kaitros ir padeda išlaikyti malonią šviesą namuose. Nuo matinių plėvelių iki veidrodinių plėvelių – pasirūpinsime, kad Jūsų namai būtų tokie, kokių norisi Jums.</p>
            </div>
            <ServiceGrid list={NAMAMS} />
            <div className="sec-cta reveal"><Button size="lg" href="#kontaktai" iconRight={<Icon.arrow />}>Gaukite pasiūlymą</Button></div>
          </section>
        </div>
        <section className="verslui" id="verslui">
          <div className="container section">
            <div className="sec-lead sec-lead--inv reveal" data-anim="left">
              <div className="sec-lead__title">
                <span className="sec-lead__disc"><Icon.arrowUR /></span>
                <h2 className="sec-lead__h">Verslui</h2>
              </div>
              <p className="sec-lead__text">Skirtingos erdvės – skirtingi poreikiai. Nuo subtilių matinių plėvelių, suteikiančių privatumą biuruose, iki reklaminių sprendimų ant vitrinų ir fasadų. Pasirūpiname visu procesu – nuo dizaino iki tvarkingo rezultato Jūsų darbo vietoje.</p>
            </div>
            <ServiceGrid list={VERSLUI} />
            <div className="sec-cta reveal"><Button variant="accent" size="lg" href="#kontaktai" iconRight={<Icon.arrow />}>Gaukite pasiūlymą</Button></div>
          </div>
        </section>
        <Gallery />
        <DesignCollection />
        <CustomDesign />
        <Process />
        <Testimonials />
        <Faq />
        <CTA />
      </main>
      <Footer />
      <a className="to-top" href="#top" aria-label="Grįžti į viršų"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M6 11l6-6 6 6" /></svg></a>
    </div>);

}

ReactDOM.createRoot(document.getElementById('ariven-root')).render(<App />);