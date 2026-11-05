import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import PixelBackground from './pixel-background'
import InteractiveHoverButton from './interactive-hover-button'

const milestones = ['A clearer smile', 'Care that fits', 'Guided by experts']
const products = [
  { src: '/aligner-studio.png', alt: 'Generated product illustration of a transparent aligner on warm ivory stone', label: 'Clear by design' },
  { src: '/crystalign-smile.png', alt: 'Generated dental model showing a clear aligner fitted over teeth', label: 'A closer look' },
  { src: '/aligner-case.png', alt: 'Generated product concept of clear aligners with a blush storage case', label: 'Made for everyday' },
]

export default function Hero() {
  const [progress, setProgress] = useState(38)
  const reducedMotion = useReducedMotion()
  const current = Math.min(2, Math.floor(progress / 34))
  return (
    <section className="hero pixel-hero product-hero" id="home">
      <div className="hero-pixels"><PixelBackground gap={8} speed={32} colors="#bd929d,#dbc1c5,#c9a6af,#e5d5d0" opacity={0.42} /></div>
      <motion.div className="pixel-hero-content" initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="pixel-kicker"><span>CRYSTALIGN ALIGNERS</span><i /><span>YOUR SMILE, CONSIDERED</span></div>
        <h1>We Shape<br />Your Smile</h1>
        <div className="pixel-timeline">
          <span className="timeline-quote" aria-hidden="true">“</span>
          <strong>{milestones[current]}</strong>
          <input aria-label="Explore the Crystalign approach" aria-valuetext={milestones[current]} type="range" min="0" max="100" value={progress} onChange={event => setProgress(Number(event.target.value))} />
          <div className="timeline-labels">{milestones.map((milestone, i) => <button type="button" key={milestone} aria-pressed={current === i} onClick={() => setProgress([0, 50, 100][i])} className={current === i ? 'is-current' : ''}>{milestone}</button>)}</div>
        </div>
        <p>Clear aligner care, thoughtfully planned around you.</p>
        <InteractiveHoverButton href="#contact" text="Start a conversation" wide className="hero-hover-cta" />
        <div className="hero-product-gallery" aria-label="Clear aligner product illustrations">
          {products.map((product, index) => <figure className="hero-product-photo" key={product.src}>
            <img src={product.src} alt={product.alt} width="500" height="400" decoding="async" />
            <figcaption><span>0{index + 1}</span>{product.label}</figcaption>
          </figure>)}
        </div>
        <span className="hero-image-note">Illustrative product imagery</span>
      </motion.div>
      <div className="pixel-bottom"><span>CRYSTALIGN · YOUR SMILE, CONSIDERED</span><a href="#approach">DISCOVER THE APPROACH</a></div>
    </section>
  )
}
