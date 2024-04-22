
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import pers1 from '../assets/pers1.jpg'
import pers2 from '../assets/pers2.jpg'
import pers3 from '../assets/pers3.jpg'
import pers4 from '../assets/pers4.jpg'


const Testimonlial = () => {
  return (
    <div className='container testImonial-fluids' style={{ marginBottom: '-50px' }}>
      <h1 style={{ fontSize: '50px', marginTop: '30px', fontWeight: '600', textAlign: 'center' }}>What They Says About Us </h1>
      <div className="testImonial-fluid" style={{ padding: "50px", marginTop: '20px' }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="row">
              <div className="col">
                <div className="col_img">
                  <img src={pers4} alt="" width={"250px"} style={{ borderRadius: '10px' }} />
                </div>
              </div>

              <div className="col">
                <div className="col_text">
                  <h2 style={{ fontWeight: '700', fontSize: '30px' }}>Noah Baker</h2>
                  <p style={{ width: '70%' }}>L'équipe était très professionnelle et réactive,Je recommande vivement cette entreprise </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col">
                <div className="col_img">
                  <img src={pers1} alt="" width={"250px"} style={{ borderRadius: '10px' }} />
                </div>
              </div>

              <div className="col">
                <div className="col_text">
                  <h2 style={{ fontWeight: '700', fontSize: '30px' }}>Noah Baker</h2>
                  <p style={{ width: '70%' }}>L'équipe était très professionnelle et réactive,Je recommande vivement cette entreprise </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col">
                <div className="col_img">
                  <img src={pers2} alt="" width={"250px"} style={{ borderRadius: '10px' }} />
                </div>
              </div>

              <div className="col">
                <div className="col_text">
                  <h2 style={{ fontWeight: '700', fontSize: '30px' }}>Noah Baker</h2>
                  <p style={{ width: '70%' }}>L'équipe était très professionnelle et réactive,Je recommande vivement cette entreprise </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col">
                <div className="col_img">
                  <img src={pers3} alt="" width={"250px"} style={{ borderRadius: '10px' }} />
                </div>
              </div>

              <div className="col">
                <div className="col_text">
                  <h2 style={{ fontWeight: '700', fontSize: '30px' }}>Noah Baker</h2>
                  <p style={{ width: '70%' }}>L'équipe était très professionnelle et réactive,Je recommande vivement cette entreprise </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col">
                <div className="col_img">
                  <img src={pers4} alt="" width={"250px"} style={{ borderRadius: '10px' }} />
                </div>
              </div>

              <div className="col">
                <div className="col_text">
                  <h2 style={{ fontWeight: '700', fontSize: '30px' }}>Noah Baker</h2>
                  <p style={{ width: '70%' }}>L'équipe était très professionnelle et réactive,Je recommande vivement cette entreprise </p>
                </div>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
  )
}

export default Testimonlial
