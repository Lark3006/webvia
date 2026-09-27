import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Konsultasi',
    description: 'Diskusi kebutuhan bisnis Anda — jenis website, tujuan, dan konten yang ingin ditampilkan.',
  },
  {
    number: '02',
    title: 'Struktur',
    description: 'Menentukan halaman dan alur informasi yang paling masuk akal untuk pengunjung website Anda.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Website dirancang dan dibangun sesuai struktur yang sudah disepakati.',
  },
  {
    number: '04',
    title: 'Revisi',
    description: 'Anda meninjau hasilnya, dan penyesuaian dilakukan sesuai masukan.',
  },
  {
    number: '05',
    title: 'Online',
    description: 'Website dipublikasikan dan siap diakses oleh calon pelanggan Anda.',
  },
]

function Process() {
  return (
    <section className="process" id="proses">
      <div className="process__inner">
        <h2 className="process__heading">Proses Kerja</h2>

        <div className="process__list">
          {steps.map((step) => (
            <div className="process__item" key={step.number}>
              <span className="process__number">{step.number}</span>
              <div className="process__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process