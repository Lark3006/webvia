import './HumanSection.css'

function HumanSection() {
  return (
    <section className="human" id="tentang">
      <div className="human__inner">
        <h2 className="human__heading">Dikerjakan oleh tim kecil, bukan mesin otomatis</h2>
        <p className="human__text">
          Webvia dijalankan oleh tim kecil yang mengerjakan setiap website secara langsung —
          bukan template yang tinggal diisi otomatis. Setiap project dimulai dari memahami
          bisnis Anda dulu, baru masuk ke desain dan pengembangan.
        </p>
        <p className="human__text">
          Kami percaya website yang baik tidak harus rumit. Yang penting jelas, cepat diakses,
          dan memudahkan calon pelanggan Anda mengambil langkah berikutnya.
        </p>
      </div>
    </section>
  )
}

export default HumanSection