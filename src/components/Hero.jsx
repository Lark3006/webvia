import { WHATSAPP_LINK_GENERAL } from '../constants'
import VideoFrame from './VideoFrame'
import heroPoster from '../assets/images/hero-poster.png'
import heroMp4 from '../assets/videos/hero-video.mp4'
import './Hero.css'

function Hero() {
  return (
    <header className="hero">
      <div className="hero__visual" aria-hidden="true">
        <VideoFrame poster={heroPoster} fill />
        <div className="hero__fade"></div>
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <span className="hero__eyebrow">Website & Digital Solution</span>
          <h1>
            Website yang membuat bisnis Anda <span className="hero__accent">terlihat siap dipercaya</span> pelanggan.
          </h1>
          <p className="hero__lede">
            Webvia membuatkan website untuk UMKM, bisnis lokal, dan personal brand — rapi,
            cepat diakses, dan jelas isinya, tanpa Anda perlu mengurus sisi teknisnya sendiri.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={WHATSAPP_LINK_GENERAL} target="_blank" rel="noopener noreferrer">
              Mulai Konsultasi
            </a>
            <a className="btn btn--secondary" href="#portfolio">
              Lihat Portfolio
            </a>
          </div>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <VideoFrame mp4={heroMp4} poster={heroPoster} fill />
        <div className="hero__fade"></div>
      </div>
    </header>
  )
}

export default Hero