import { WHATSAPP_LINK_PRICING } from '../constants'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    price: 'Hubungi kami',
    description: 'Untuk bisnis yang baru mulai butuh kehadiran online sederhana.',
    features: [
      '1 halaman (landing page)',
      'Desain responsive mobile & desktop',
      'Tombol kontak WhatsApp',
      'Revisi 1x',
    ],
    highlighted: false,
  },
  {
    name: 'Business',
    price: 'Hubungi kami',
    description: 'Untuk bisnis yang butuh profil lengkap dan lebih dari satu halaman.',
    features: [
      'Hingga 5 halaman',
      'Section Portfolio/Produk',
      'Form kontak & integrasi WhatsApp',
      'Revisi 2x',
    ],
    highlighted: true,
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
    highlighted: false,
  },
]

function Pricing() {
  return (
    <section className="pricing" id="harga">
      <div className="pricing__inner">
        <h2 className="pricing__heading">Paket Harga</h2>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div
              className={`pricing__card${plan.highlighted ? ' pricing__card--highlighted' : ''}`}
              key={plan.name}
            >
              {plan.highlighted && (
                <span className="pricing__badge">Direkomendasikan</span>
              )}
              <h3>{plan.name}</h3>
              <div className="pricing__price">{plan.price}</div>
              <p className="pricing__desc">{plan.description}</p>
              <ul className="pricing__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              
              <a
                className={`btn pricing__cta ${plan.highlighted ? 'btn--primary' : 'btn--secondary'}`}
                href={WHATSAPP_LINK_PRICING}
                target="_blank"
                rel="noopener noreferrer"
              >
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