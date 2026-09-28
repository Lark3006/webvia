import './Whywebsite.css'
import whyImage from '../assets/images/Why.png'

const reasons = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Terlihat profesional',
    description:
      'Calon pelanggan menilai bisnis Anda dalam beberapa detik. Website yang rapi membangun kepercayaan sebelum mereka menghubungi Anda.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Informasi tersedia 24/7',
    description:
      'Produk, layanan, dan cara menghubungi bisnis Anda tetap bisa diakses kapan saja, bahkan saat Anda sedang tidak online.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 18c0-2.4 2-4 4.5-4s4.5 1.6 4.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="16" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14.5 12.2c1.8.2 3.5 1.6 3.5 3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Lebih mudah dihubungi',
    description:
      'Satu link jelas mengarahkan calon pelanggan langsung ke WhatsApp Anda, tanpa harus bertanya-tanya ke mana harus menghubungi.',
  },
]

function Whywebsite() {
  return (
    <section className="why" id="alasan">
      <div className="why__inner">
        <div className="why__top">
          <h2 className="why__heading">Kenapa bisnis Anda butuh website</h2>
          <div className="why__photo">
            <img src={whyImage} alt="Laptop menampilkan contoh tampilan website di meja kerja" />
            <div className="why__photo-overlay"></div>
          </div>
        </div>
        <div className="why__grid">
          {reasons.map((reason) => (
            <div className="why__item" key={reason.title}>
              <span className="why__icon icon-badge">{reason.icon}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Whywebsite 