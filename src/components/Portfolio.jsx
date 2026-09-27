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

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <h2 className="portfolio__heading">Portfolio</h2>
        <p className="portfolio__note">
          Berikut contoh konsep yang mewakili jenis pekerjaan Webvia. Ditandai sebagai Demo/Concept karena belum diambil dari klien nyata.
        </p>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <div className="portfolio__card" key={project.name}>
              <div className="portfolio__thumb">
                <span className="portfolio__badge">Demo/Concept</span>
              </div>
              <div className="portfolio__meta">
                <h3>{project.name}</h3>
                <span className="portfolio__type">{project.type}</span>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio