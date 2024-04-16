import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Layout from '../layout/Layout'
import img1 from '../assets/image/narutobanner2.jpg'
import img2 from '../assets/image/jjk2banner.jpg'
import img3 from '../assets/image/drstonebanner.jpg'
import img4 from '../assets/image/dbzbanner.jpg'
import img5 from '../assets/image/demonbanner.jpg'
import img6 from '../assets/image/opmbanner.png'
import img7 from '../assets/image/bleachbanner.jpg'
import card1 from '../assets/card/dbz.jpg'
import card2 from '../assets/card/gintama.jpg'
import card3 from '../assets/card/hunter.jpg'
import card4 from '../assets/card/noragami.jpg'
import card5 from '../assets/card/naruto.jpg'
import card6 from '../assets/card/promise.jpg'
import card7 from '../assets/card/erased.jpg'
import card8 from '../assets/card/solo.jpg'
import card9 from '../assets/card/op.jpeg'
import { useNavigate } from 'react-router-dom';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", marginRight: "10rem" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Home = () => {
  const navigate = useNavigate()
  const [data,setData] = useState(localStorage.getItem('user'))
  useEffect(()=>{
     (()=>{
      if(!data)
      {
        navigate('/')
      }
     })()

     console.log(data)
  },[data])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
    { url: img6 },
    { url: img7 },
  ];


  return (

    <Layout>
      {/* <NavBar/> */}
      <div className="home-container">
        <div className="carousal">
          <SimpleImageSlider
            width={1900}
            height={600}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={1}
            autoPlay={true}
          />

        </div>
        <h2 style={{ color: "white", fontWeight: "bolder", marginTop: '2rem', marginLeft: '2rem' }}>Trending</h2>
        <div className="anime-slider">
          <Slider {...settings}>
            <div>
              <div className="card-box">
                <img src={card1} alt="" />
              </div>
            </div>


            <div>
              <div className="card-box">
                <img src={card2} alt="" />

              </div>
            </div>

            <div>
              <div className="card-box">
                <img src={card3} alt="" />
              </div>
            </div>

            <div>
              <div className="card-box">
                <img src={card4} alt="" />

              </div>
            </div>

            <div>
              <div className="card-box">
                <img src={card5} alt="" />

              </div>
            </div>
            <div>
              <div className="card-box">
                <img src={card6} alt="" />

              </div>
            </div>
            <div>
              <div className="card-box">
                <img src={card7} alt="" />

              </div>
            </div>
            <div>
              <div className="card-box">
                <img src={card8} alt="" />

              </div>
            </div>
            <div>
              <div className="card-box">
                <img src={card9} alt="" />

              </div>
            </div>



          </Slider>
        </div>
      </div>

    </Layout>
  )
}

export default Home
