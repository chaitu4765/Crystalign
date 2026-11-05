import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, ChevronDown, Menu, ScanLine, ShieldCheck, Sparkles, X } from 'lucide-react'
import Hero from '../components/ui/hero-with-pixelbackground'
import InteractiveHoverButton from '../components/ui/interactive-hover-button'

const steps = [
  ['01', 'A conversation', 'Share what you’re hoping to change. A dental professional can help you understand the next steps.'],
  ['02', 'A closer look', 'Your provider reviews your teeth, bite and dental history to assess what care may suit you.'],
  ['03', 'A digital scan', 'A digital scan captures the shape of your teeth for a detailed planning process.'],
  ['04', 'Your treatment plan', 'Your provider walks you through the proposed tooth movements and answers your questions.'],
  ['05', 'Made for your smile', 'If aligners are right for you, custom trays are prepared according to your approved plan.'],
  ['06', 'Guided follow-up', 'Your dental professional checks progress and advises when to move to the next aligner.'],
]

const concerns = [
  { name: 'Crowding', kicker: 'When teeth overlap', text: 'Crowding can make some areas harder to clean and may affect how your teeth fit together. A dental professional can assess your individual bite and discuss suitable options.', mark: '↗' },
  { name: 'Spacing', kicker: 'When gaps appear', text: 'Spaces between teeth can occur for many reasons. Your provider can look at your tooth positions and gum health before recommending an approach.', mark: '⋯' },
  { name: 'Overjet', kicker: 'When upper teeth sit forward', text: 'An increased horizontal distance between the upper and lower front teeth is sometimes called overjet. A clinical assessment helps clarify what treatment may be appropriate.', mark: '⌁' },
  { name: 'Crossbite', kicker: 'When the bite sits differently', text: 'A crossbite describes a relationship between upper and lower teeth. Your provider can assess how your bite works and explain possible care paths.', mark: '⌖' },
  { name: 'Open bite', kicker: 'When front teeth don’t meet', text: 'An open bite is one of several bite patterns a dental professional can evaluate. Suitability for aligners varies from person to person.', mark: '◡' },
]

const questions = [
  ['How do clear aligners work?', 'Clear aligners are a series of custom trays designed to fit over your teeth. A dental professional assesses your needs and guides your treatment plan and follow-up.'],
  ['Will clear aligners be right for me?', 'It depends on your teeth, bite and dental health. A qualified dental professional can assess your individual situation and discuss suitable options.'],
  ['Can I remove the aligners?', 'Aligners are designed to be removable. Your provider will explain when to wear them and when to take them out during your care.'],
  ['What happens at the first appointment?', 'You can talk about your goals, ask questions and learn whether further records or a clinical assessment are appropriate.'],
]

const features = [
  { icon: ScanLine, title: 'Thoughtful digital planning', text: 'A digital view of your teeth supports a clear conversation about the care ahead.' },
  { icon: Sparkles, title: 'Designed around your routine', text: 'Removable trays offer flexibility around meals and your daily oral hygiene.' },
  { icon: ShieldCheck, title: 'Professional guidance', text: 'Your dental provider assesses suitability and follows your care along the way.' },
]

function Wordmark({ light = false }: { light?: boolean }) {
  return <a className={`wordmark${light ? ' wordmark--light' : ''}`} href="#home" aria-label="Crystalign home"><span className="brand-gem"><span /></span><span>crystalign<small>ALIGNERS</small></span></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['The approach', '#approach'], ['How it works', '#journey'], ['Common concerns', '#concerns'], ['FAQs', '#faq']]
  return <><div className="announcement"><span>Crystalign Aligners</span><span>A clear way to explore your smile journey</span><span>Care guided by dental professionals</span></div><header className="site-header"><div className="nav-shell"><Wordmark /><nav className={open ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<InteractiveHoverButton className="nav-cta" href="#contact" text="Start a conversation" onClick={() => setOpen(false)} /></nav><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header></>
}

function Approach() {
  return <section className="approach section-pad" id="approach"><div className="section-shell"><div className="section-heading"><span className="eyebrow">A thoughtful approach</span><h2>Care that starts<br />with a conversation.</h2><p>Every smile is different. Crystalign brings together clear aligner technology and professional guidance to help make your next step feel easier to understand.</p><InteractiveHoverButton href="#contact" text="Get to know the process" /></div><div className="feature-stack">{features.map(({ icon: Icon, title, text }, i) => <article className="feature-row" key={title}><span className="feature-index">0{i + 1}</span><span className="feature-icon"><Icon size={19} strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="feature-arrow" size={19} /></article>)}</div></div></section>
}

function Journey() {
  const [selected, setSelected] = useState(0)
  return <section className="journey section-pad" id="journey"><div className="section-shell"><div className="journey-heading"><div><span className="eyebrow">A path with purpose</span><h2>One step at<br />a time.</h2></div><p>From your first conversation to ongoing check-ins, your dental professional helps you understand the journey as it unfolds.</p></div><div className="journey-layout"><div className="step-list" role="tablist" aria-label="Steps in the aligner journey">{steps.map(([number, name], i) => <button className={`step-tab${selected === i ? ' is-selected' : ''}`} role="tab" aria-selected={selected === i} aria-controls="step-panel" key={number} onClick={() => setSelected(i)}><span>{number}</span><strong>{name}</strong><ArrowUpRight size={16} /></button>)}</div><div className="step-panel" id="step-panel" role="tabpanel"><div className="step-panel-top"><span>STEP {steps[selected][0]}</span><span className="panel-orb"><Sparkles size={19} /></span></div><div><span className="eyebrow">{steps[selected][1]}</span><h3>Your next step,<br />made clearer.</h3><p>{steps[selected][2]}</p></div><div className="panel-bottom"><span>GUIDED BY YOUR DENTAL PROFESSIONAL</span><span className="panel-line" /></div></div></div></div></section>
}

function Concerns() {
  const [selected, setSelected] = useState(0)
  const current = concerns[selected]
  return <section className="concerns section-pad" id="concerns"><div className="section-shell"><div className="concerns-top"><div><span className="eyebrow">Different smiles, different needs</span><h2>Let’s talk about<br />what’s on your mind.</h2></div><p>Explore a few common alignment concerns. A dental professional can assess your individual smile and advise you on suitable care.</p></div><div className="concerns-card"><div className="concern-selector" role="tablist" aria-label="Common alignment concerns">{concerns.map((concern, i) => <button role="tab" aria-selected={selected === i} className={selected === i ? 'concern-tab is-selected' : 'concern-tab'} key={concern.name} onClick={() => setSelected(i)}><span>0{i + 1}</span>{concern.name}<ArrowUpRight size={15} /></button>)}</div><div className="concern-detail" role="tabpanel"><div className="concern-illustration" aria-hidden="true"><div className="illustration-halo" /><div className="illustration-ring illustration-ring--one" /><div className="illustration-ring illustration-ring--two" /><span className="tooth-mark">{current.mark}</span><span className="illustration-index">0{selected + 1} / 05</span></div><div className="concern-copy"><span className="eyebrow">{current.name}</span><h3>{current.kicker}.</h3><p>{current.text}</p><div className="clinical-note"><ShieldCheck size={17} /><span>Suitability is individual. An assessment by a dental professional is needed to understand your options.</span></div><InteractiveHoverButton href="#contact" text="Ask us a question" /></div></div></div></div></section>
}

function Product() {
  return <section className="product section-pad"><div className="section-shell product-layout"><div className="product-copy"><span className="eyebrow">Meet your aligner</span><h2>Clear by design.<br />Made for your<br />care plan.</h2><p>Lightweight, transparent trays are created according to your treatment plan. Your provider will guide you on fit, wear and looking after your aligners.</p><InteractiveHoverButton href="#contact" text="Talk to our team" wide /><span className="product-caption">CRYSTALIGN CLEAR ALIGNERS <span>—</span> YOUR SMILE, CONSIDERED</span></div><div className="product-art"><img src="/crystalign-smile.png" loading="lazy" alt="Detailed view of a clear removable aligner and teeth" /><div className="product-art-label"><span className="chip-dot" /> A considered fit</div><span className="product-art-number">01 — 06</span></div></div></section>
}

function FAQ() {
  const [active, setActive] = useState<number | null>(0)
  return <section className="faq section-pad" id="faq"><div className="section-shell faq-layout"><div className="faq-intro"><span className="eyebrow">Good to know</span><h2>Questions are<br />a good place<br />to start.</h2><p>Here are a few things people often want to know. Your own dental professional can give guidance for your situation.</p><InteractiveHoverButton href="#contact" text="Ask us something else" /></div><div className="faq-list">{questions.map(([question, answer], i) => <article className={`faq-item${active === i ? ' is-open' : ''}`} key={question}><button aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)}><span>{question}</span><ChevronDown size={19} /></button>{active === i && <p>{answer}</p>}</article>)}</div></div></section>
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (!String(data.get('name') ?? '').trim() || !String(data.get('phone') ?? '').trim() || !data.get('consent')) {
      setError('Please add your name and mobile number, then confirm your consent.')
      return
    }
    setError('')
    setSubmitted(true)
  }
  return <section className="contact section-pad" id="contact"><div className="section-shell contact-shell"><div className="contact-copy"><span className="eyebrow">Your next step</span><h2>Let’s make it<br />a conversation.</h2><p>Tell us what you’d like to know. The Crystalign team can help you understand your options and connect with a dental professional.</p><div className="contact-promise"><span><Check size={15} /></span> No pressure. Just a helpful place to begin.</div><div className="contact-asterisk">✳</div></div><form className="contact-form" onSubmit={handleSubmit} noValidate>{submitted ? <div className="success-panel" role="status"><span className="success-icon"><Check size={22} /></span><span className="eyebrow">Thank you</span><h3>We’ve got your details.</h3><p>Your enquiry has been recorded in this preview. An approved lead destination will need to be connected before launch.</p><InteractiveHoverButton text="Send another enquiry" onClick={() => setSubmitted(false)} /></div> : <><div className="form-top"><span className="eyebrow">Leave us a note</span><span>Fields with * are required</span></div><div className="form-row"><label>Your name *<input autoComplete="name" name="name" placeholder="Full name" /></label><label>Mobile number *<input autoComplete="tel" name="phone" type="tel" placeholder="+91 98765 43210" /></label></div><label>Email address <span className="optional">OPTIONAL</span><input autoComplete="email" name="email" type="email" placeholder="you@example.com" /></label><label>What would you like to know?<select name="interest" defaultValue=""><option value="" disabled>Select a topic (optional)</option><option>Personal treatment</option><option>Aligner process</option><option>Dental professional / clinic</option><option>Something else</option></select></label><label className="consent"><input type="checkbox" name="consent" /><span>I agree Crystalign may contact me about my enquiry. *</span></label><p className="form-error" aria-live="polite">{error}</p><InteractiveHoverButton type="submit" text="Request a conversation" wide /><span className="privacy-note"><ShieldCheck size={13} /> Your details stay within the Crystalign team.</span></>}</form></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="section-shell"><div className="footer-top"><div className="footer-about"><Wordmark light /><p>A clearer, more considered way to explore your smile journey. Guided by dental professionals, designed around you.</p></div><div className="footer-nav"><span>EXPLORE</span><a href="#approach">Our approach</a><a href="#journey">How it works</a><a href="#concerns">Common concerns</a><a href="#faq">FAQs</a></div><div className="footer-nav"><span>TAKE THE NEXT STEP</span><InteractiveHoverButton href="#contact" text="Start a conversation" /><span className="footer-note">Get in touch with a Crystalign representative for more information.</span></div></div><div className="footer-bottom"><span>© 2026 Crystalign Aligners. All rights reserved.</span><span>Individual results and treatment suitability vary. Consult a dental professional.</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>
}

export default function App() {
  return <><Header /><main><Hero /><div className="ticker" aria-label="Crystalign Aligners"><div className="ticker-track"><span>YOUR SMILE, CONSIDERED <i>✳</i> GUIDED BY PROFESSIONALS <i>✳</i> A CLEARER WAY FORWARD <i>✳</i> YOUR SMILE, CONSIDERED <i>✳</i> GUIDED BY PROFESSIONALS <i>✳</i> A CLEARER WAY FORWARD <i>✳</i></span></div></div><Approach /><Journey /><Concerns /><Product /><FAQ /><Contact /></main><Footer /></>
}

