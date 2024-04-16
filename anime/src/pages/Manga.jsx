import React from 'react'
import Layout from '../layout/Layout'
import { NavLink } from 'react-router-dom'
import aot from '../assets/manga/aot.pdf'
import black from '../assets/manga/blackclover.pdf'
import bleach from '../assets/manga/bleach.pdf'
import demon from '../assets/manga/demon.pdf'
import dragonballsuper from '../assets/manga/dragonballsuper.pdf'
import hunter from '../assets/manga/hunter.pdf'
import jjk from '../assets/manga/jjk.pdf'
import naruto from '../assets/manga/naruto.pdf'
import onepiece from '../assets/manga/onepiece.pdf'
import onepunchman from '../assets/manga/onepunchman.pdf'
import img2 from '../assets/image/naruto.webp'
import img3 from '../assets/image/onepunchman.avif'
import img4 from '../assets/image/onepiece.jpg'
import img5 from '../assets/image/jjk.jpg'
import img6 from '../assets/image/aot.jpg'
import img7 from '../assets/image/bleach.avif'
import img8 from '../assets/image/demon.avif'
import img9 from '../assets/image/aot.jpg'
import img10 from '../assets/image/aot.jpg'

const Manga = () => {
    return (
        <Layout>
            <h1> Manga </h1>
            <div className="manga-container">
                <div className="manga-box"><img src={img2} alt="" /><p>Dragon ball super</p><a href={dragonballsuper}><button>Read now</button></a></div>           
                <div className="manga-box"><img src={img3} alt="" /><p>One punch man</p><a href={onepunchman}><button>Read now</button></a></div>
                <div className="manga-box"><img src={img4} alt="" /><p>one piece</p><a href={onepiece}><button>Read now</button></a></div>
                <div className="manga-box"><img src={img5} alt="" /><p>Jujitsu kaisen</p><a href={jjk}><button>Read now</button></a></div>
                <div className="manga-box"><img src={img6} alt="" /><p>Black clover</p><a href={black}><button>Read now</button></a></div>
                <div className="manga-box"><img src={img7} alt="" /><p>Bleach</p><a href={bleach}><button>Read now</button></a></div>
                <div className="manga-box"><img src={img8} alt="" /><p>Demoan Slayer</p><a href={demon}><button>Read now</button></a></div>
                <div className="manga-box"><img src={img9} alt="" /><p>Attack on titan</p><a href={aot}><button>Read now</button></a></div>
                <div className="manga-box"><img src={img10} alt="" /><p>Hunter x Hunter</p><a href={hunter}><button>Read now</button></a></div>
              
            </div>
        </Layout>
    )
}

export default Manga
