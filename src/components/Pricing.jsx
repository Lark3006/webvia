import './Pricing.css'

const WHATSAPP_LINK = "https://wa.me/+6285789021996?text=Halo%20Webvia%2C%20saya%20ingin%20tanya%20soal%20paket%20harga."

const plans = [
  {
    name: 'Starter',
    price: 'Rp 1.500.000',
    description: 'Untuk bisnis yang baru mulai butuh kehadiran online sederhana.',
    features: [
      '1 halaman (landing page)',
      'Desain responsive mobile & desktop',
      'Tombol kontak WhatsApp',
      'Revisi 1x',
    ],
  },
  {
    name: 'Business',
    price: 'Rp 3.500.000',
    description: 'Untuk bisnis yang butuh profil lengkap dan lebih dari satu halaman.',
    features: [
      'Hingga 5 halaman',
      'Section Portfolio/Produk',
      'Form kontak & integrasi WhatsApp',
      'Revisi 2x',
    ],
  },
  {
    name: 'Custom',
    price: 'Hubungi kami',
    description: 'Untuk kebutuhan yang tidak cocok dengan dua paket di atas.',
    features: [
      'Struktur & fitur disesuaikan',
      'Diskusi kebutuhan lebih dulu',
      'Estimasi harga setelah konsultasi',
    ],
  },
]

function Pricing() {
  return (
    <section className="pricing" id="harga">
      <div className="pricing__inner">
        <h2 className="pricing__heading">Paket Harga</h2>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div className="pricing__card" key={plan.name}>
              <h3>{plan.name}</h3>
              <div className="pricing__price">{plan.price}</div>
              <p className="pricing__desc">{plan.description}</p>
              <ul className="pricing__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="btn btn--secondary pricing__cta" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                {plan.name === 'Custom' ? 'Diskusikan Kebutuhan' : 'Pilih Paket Ini'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing