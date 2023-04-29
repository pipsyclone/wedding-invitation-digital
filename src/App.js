import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TopBar from "./components/topBar";

import FotoDummy from './assets/img/fotosize_default.png';

const App = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  console.log(visible)
  window.addEventListener('scroll', toggleVisible);

  return (
    <>

      <Helmet>
        <title>Wedding Invitation Digital</title>
      </Helmet>

      <TopBar classCustom={visible ? "topbar-scrolled-background" : ""} />

      <section className="hero d-flex" id="beranda">
        <div className="align-self-center mx-auto text-center">
          <p className="hero-nama-mempelai">Adam & Hawa</p>
          <span className="hero-text">Akan segera melakukan pernikahan suci</span>
          <br />
          <span className="hero-text text-warning fw-bold">Kamis, 22 Juni 2023</span>
        </div>
      </section>

      <section className="mempelai" id="mempelai">
        <div className="mempelai-header">
          <span className="mempelai-salam">Assalammu'alaikum Waramatullah</span>
          <br />
          <br />
          <span className="mempelai-text fs-5">Dengan Rahmat Allah yang Maha Kuasa InsyaAllah kami akan melangsungkan pernikahan pada:</span>
          <br />
          <span className="mempelai-text fs-1 text-dark fw-bold">Kamis, 22 Juni 2023</span>
          <br />
          <span className="mempelai-text fs-5">di Aula Masjid ABRI Cimahi - Jalan Gatot Subroto Kota Cimahi</span>
          
          <div className="width-dekstop">
            <div className="d-flex justify-content-center mt-5">
              <div className="d-flex me-3">
                <div className="mempelai-identitas-pria align-self-center">
                  <span className="mempelai-nama fs-1">Adam</span>
                  <br />
                  <span className="mempelai-text">Putra dari <br /> Kosim & Tatun</span>
                </div>
                <img src={FotoDummy} className="img-fluid rounded-circle" width={300} />
              </div>
              <div className="mempelai-heart align-self-center rounded-circle">
                <i className="fa-solid fa-heart fs-3 animate__animated animate__heartBeat animate__infinite"></i>
              </div>
              <div className="d-flex ms-3">
                <img src={FotoDummy} className="img-fluid rounded-circle" width={300} />
                <div className="mempelai-identitas-wanita align-self-center">
                  <span className="mempelai-nama fs-1">Hawa</span>
                  <br />
                  <span className="mempelai-text">Putra dari <br /> Winanta & Cicih</span>
                </div>
              </div>
            </div>
          </div>
        
          <div className="width-mobile mt-5">
            <div className="d-flex justify-content-center">
              <img src={FotoDummy} className="img-fluid rounded-circle me-3" width={200} />
              <div className="align-self-center rounded-circle bg-white position-absolute p-3" style={{color: '#f14e95'}}>
                <i className="fa-solid fa-heart fs-3 animate__animated animate__heartBeat animate__infinite"></i>
              </div>
              <img src={FotoDummy} className="img-fluid rounded-circle ms-3" width={200} />
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div className="me-3 mempelai-identitas-pria">
                <span className="mempelai-nama">Adam</span>
                <br />
                <span className="mempelai-text">Putra dari <br /> Kosim & Tatun</span>
              </div>
              <div className="ms-3 mempelai-identitas-wanita">
                <span className="mempelai-nama">Hawa</span>
                <br />
                <span className="mempelai-text">Putri dari <br /> Winanta & Cicih</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alamat d-flex flex-column justify-content-center" id="alamat">
        <a href="https://goo.gl/maps/nqgxQrY58JhLaUhN8" target="_blank" className="btn btn-danger rounded-5 col-sm-2 mx-auto m-5">
          Buka Google Maps
        </a>
        <iframe className="mapframe align-self-center" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1981.0212479444397!2d108.27320057790969!3d-6.764673237565544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1682782528297!5m2!1sid!2sid" loading="lazy"></iframe>
      </section>

      <section className="ucapan d-flex flex-column justify-content-center" id="ucapanundangan">
        <p className="ucapan-title">Ucapan Undangan</p>
        <figure class="text-center align-self-center col-sm-5">
          <blockquote class="blockquote">
            <p>"  Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
                  blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique
                  volutpat consectetur congue lorem pharetra habitant. Sodales gravida egestas venenatis dignissim
                  molestie cursus porta. Massa lacus pulvinar aliquam mi tristique. "</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </section>

      <section className="footer">
        <span>Terima Kasih <br /> Adam & Hawa</span>
      </section>
    </>
  )
}

export default App;