import './Humansection.css'
import humanImage from '../assets/images/Human.png'

function HumanSection() {
  return (
    <section className="human" id="tentang">
      <div className="human__inner">
        <div className="human__text">
          <span className="human__eyebrow">Tentang Webvia</span>
          <h2 className="human__heading">Dikerjakan oleh tim kecil, bukan mesin otomatis</h2>
          <p>
            Webvia dijalankan oleh tim kecil yang mengerjakan setiap website secara langsung —
            bukan template yang tinggal diisi otomatis. Setiap project dimulai dari memahami
            bisnis Anda dulu, baru masuk ke desain dan pengembangan.
          </p>
          <p>
            Kami percaya website yang baik tidak harus rumit. Yang penting jelas, cepat diakses,
            dan memudahkan calon pelanggan Anda mengambil langkah berikutnya.
          </p>
        </div>
        <div className="human__photo">
            <img src={humanImage} alt="Tim Webvia sedang bekerja di meja kerja" />
          <div className="human__photo-overlay"></div>
        </div>
      </div>
    </section>
  )
}

export default HumanSection