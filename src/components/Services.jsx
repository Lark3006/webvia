import './Services.css'

const services = [
  {
    name: 'Landing Page',
    description:
      'Satu halaman fokus untuk menjelaskan produk atau layanan dan mengarahkan pengunjung untuk menghubungi Anda.',
  },
  {
    name: 'Company Profile',
    description:
      'Beberapa halaman untuk memperkenalkan bisnis secara lebih lengkap — tentang usaha, layanan, dan kontak.',
  },
  {
    name: 'Custom Website',
    description:
      'Struktur dan fitur disesuaikan dengan kebutuhan spesifik bisnis Anda di luar dua jenis di atas.',
  },
]

function Services() {
  return (
    <section className="services" id="layanan">
      <div className="services__inner">
        <h2 className="services__heading">Layanan</h2>
        <div className="services__list">
          {services.map((service) => (
            <div className="services__row" key={service.name}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services