import React from 'react'
import Layout from '../layout/Layout'
import movie1 from '../assets/movies/jjk0.mp4'
import movie2 from '../assets/movies/blackmovie.mp4'
import movie3 from '../assets/movies/dragonballBroly.mp4'
import movie4 from '../assets/movies/opred.mp4'
import movie5 from '../assets/movies/silentvoice.mp4'
import img1 from '../assets/image/jjk0.webp'
import img2 from '../assets/image/blackclovermovie.jpg'
import img3 from '../assets/image/dragonballbroly.jpg'
import img4 from '../assets/image/opred.webp'
import img5 from '../assets/image/silentvoice.webp'

const Movie = () => {
  return (
    <Layout>

<h1> Movies </h1>
    <div className="movie-container">

        <div className="movie-box"><video  id="first" src={movie1} controls muted  controlsList="nodownload" poster={img1} className="movies" onmouseout="pausevideo(this)" onmouseover="playvideo(this)"></video>
        <a href={movie1}><button>Watch Now</button></a>
        </div>
        <div className="movie-box"><video  id="first" src={movie2} controls muted  controlsList="nodownload" poster={img2} className="movies" onmouseout="pausevideo(this)" onmouseover="playvideo(this)"></video>
        <a href={movie1}><button>Watch Now</button></a>
        </div>
        <div className="movie-box"><video  id="first" src={movie3} controls muted  controlsList="nodownload" poster={img3} className="movies" onmouseout="pausevideo(this)" onmouseover="playvideo(this)"></video>
        <a href={movie1}><button>Watch Now</button></a>
        </div>
        <div className="movie-box"><video  id="first" src={movie4} controls muted  controlsList="nodownload" poster={img4} className="movies" onmouseout="pausevideo(this)" onmouseover="playvideo(this)"></video>
        <a href={movie1}><button>Watch Now</button></a>
        </div>
        <div className="movie-box"><video  id="first" src={movie5} controls muted  controlsList="nodownload" poster={img5} className="movies" onmouseout="pausevideo(this)" onmouseover="playvideo(this)"></video>
        <a href={movie1}><button>Watch Now</button></a>
        </div>
      
        
    </div>
    </Layout>
  )
}

export default Movie
