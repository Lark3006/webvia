import './WhyWebsite.css'

const reasons = [
  {
    title: 'Terlihat profesional',
    description:
      'Calon pelanggan menilai bisnis Anda dalam beberapa detik. Website yang rapi membangun kepercayaan sebelum mereka menghubungi Anda.',
  },
  {
    title: 'Informasi tersedia 24/7',
    description:
      'Produk, layanan, dan cara menghubungi bisnis Anda tetap bisa diakses kapan saja, bahkan saat Anda sedang tidak online.',
  },
  {
    title: 'Lebih mudah dihubungi',
    description:
      'Satu link jelas mengarahkan calon pelanggan langsung ke WhatsApp Anda, tanpa harus bertanya-tanya ke mana harus menghubungi.',
  },
]

function WhyWebsite() {
  return (
    <section className="why" id="alasan">
      <div className="why__inner">
        <h2 className="why__heading">Kenapa bisnis Anda butuh website</h2>
        <div className="why__grid">
          {reasons.map((reason) => (
            <div className="why__item" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWebsite