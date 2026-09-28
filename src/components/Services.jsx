import './Services.css'

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 9h17" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    name: 'Landing Page',
    description:
      'Satu halaman fokus untuk menjelaskan produk atau layanan dan mengarahkan pengunjung untuk menghubungi Anda.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 10h16M10 10v10" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    name: 'Company Profile',
    description:
      'Beberapa halaman untuk memperkenalkan bisnis secara lebih lengkap — tentang usaha, layanan, dan kontak.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 17l4-9 4 6 3-4 5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: 'Custom Website',
    description:
      'Struktur dan fitur disesuaikan dengan kebutuhan spesifik bisnis Anda di luar dua jenis di atas.',
  },
]

function Services() {
  return (
    <section className="services" id="layanan">
      <div className="services__inner">
        <div className="services__head">
          <h2 className="services__heading">Layanan</h2>
          <p className="services__subheading">Solusi website yang sesuai dengan kebutuhan bisnismu.</p>
        </div>

        <div className="services__list">
          {services.map((service, index) => (
            <div className="services__row" key={service.name}>
              <span className="services__index">0{index + 1}</span>
              <span className="services__icon icon-badge">{service.icon}</span>
              <div className="services__row-text">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services