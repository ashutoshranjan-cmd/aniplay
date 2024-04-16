import React, { useState } from 'react';
import '../styles/videos.css';
import video1 from '../assets/videos/bleach.mp4';
import video2 from '../assets/videos/bungou1.mp4';
import video3 from '../assets/videos/bungou2.mp4';
import video4 from '../assets/videos/bungou3.mp4';
import video5 from '../assets/videos/doctor.mp4';
import video6 from '../assets/videos/bleach.mp4';
import video7 from '../assets/videos/gokuvsjiren.mp4';
import Layout from '../layout/Layout';

const Video = () => {
    const [vid, setVid] = useState(video1);

    const changeColor = (e) => {
        const vidDivs = document.querySelectorAll('.vid');
        vidDivs.forEach(div => {
            div.classList.remove('active');
        });
        e.target.classList.add('active');
        console.log(e);
    };

    return (
        <Layout>
        <div className="container">
            <div className="mainvideo">
                <div className="video">
                    <video src={vid} controls muted autoPlay controlsList="nodownload"></video>
                    <h3 className="title">01. One piece </h3>
                </div>
            </div>

            <div className="videolist">
                <div className="vid active" onClick={(e) => (setVid(video1), changeColor(e))}>
                    <video src={video1} muted poster="/image/onepiece.jpg"></video>
                    <h3 className="title">01. One piece</h3>
                </div>
                <div className="vid" onClick={(e) => (setVid(video2), changeColor(e))}>
                    <video src={video2} muted poster="/image/straydogs.webp"></video>
                    <h3 className="title">02.Bungou stray dogs 1 </h3>
                </div>
                <div className="vid" onClick={(e) => (setVid(video3), changeColor(e))}>
                    <video src={video3} muted poster="/image/straydogs.webp"></video>
                    <h3 className="title">03. Bungou stray dogs 2</h3>
                </div>
                <div className="vid" onClick={(e) => (setVid(video4), changeColor(e))}>
                    <video src={video4} muted poster="/image/straydogs.webp"></video>
                    <h3 className="title">04. Bungou stray dogs 3</h3>
                </div>
                <div className="vid" onClick={(e) => (setVid(video5), changeColor(e))}>
                    <video src={video5} muted poster="/image/drstone.webp"></video>
                    <h3 className="title">05. Dr stone </h3>
                </div>
                <div className="vid" onClick={(e) => (setVid(video6), changeColor(e))}>
                    <video src={video6} muted poster="/image/jjk.jpg"></video>
                    <h3 className="title">06. Jujitsu kaisen</h3>
                </div>
                <div className="vid" onClick={(e) => (setVid(video7), changeColor(e))}>
                    <video src={video7} muted poster="/image/gokuvsjiren.jpg"></video>
                    <h3 className="title">07. Goku vs Jiren fight tournament of power</h3>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default Video;
