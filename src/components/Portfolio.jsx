import './Portfolio.css'

const projects = [
  {
    name: 'Toko Kopi Lokal',
    type: 'Landing Page',
    description: 'Konsep website untuk usaha kopi rumahan — menu, lokasi, dan kontak dalam satu halaman.',
  },
  {
    name: 'Klinik Kecantikan',
    type: 'Company Profile',
    description: 'Konsep profil usaha untuk klinik kecantikan lokal — layanan, tim, dan jadwal konsultasi.',
  },
  {
    name: 'Studio Fotografi',
    type: 'Custom Website',
    description: 'Konsep website portfolio untuk fotografer personal brand — galeri karya dan paket foto.',
  },
]

function PortfolioCard({ project, size, imageSize }) {
  return (
    <div className={`portfolio__card portfolio__card--${size}`}>
      <div className="portfolio__thumb">
        <img
          className="portfolio__thumb-img"
          src={`https://picsum.photos/seed/${project.name}/${imageSize}`}
          alt=""
        />
        <span className="portfolio__badge">Demo/Concept</span>
      </div>
      <div className="portfolio__meta">
        <span className="portfolio__type">{project.type}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

function Portfolio() {
  const [main, ...rest] = projects

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <div className="portfolio__head">
          <h2 className="portfolio__heading">Portfolio</h2>
          <p className="portfolio__note">
            Contoh konsep yang mewakili jenis pekerjaan Webvia — ditandai Demo/Concept karena belum diambil dari klien nyata.
          </p>
        </div>

        <div className="portfolio__grid">
          <PortfolioCard project={main} size="main" imageSize="900/600" />

          <div className="portfolio__side">
            {rest.map((project) => (
              <PortfolioCard key={project.name} project={project} size="side" imageSize="480/320" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio