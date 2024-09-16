import React from 'react'
import { useState } from 'react'
import "../css/gallery.css"

const Gallery = () => {

  let gallery = {
    images: [
      "/dynamic/IEI Gallery/interaction 1.jpg",
      "/dynamic/IEI Gallery/interaction 2.JPG",
      "/dynamic/IEI Gallery/orientation 1.JPG",
      "/dynamic/IEI Gallery/orientation 2.jpg",
      "/dynamic/IEI Gallery/teachersday 1.jpg",
      "/dynamic/IEI Gallery/teachersday 2.jpg",
      "/dynamic/IEI Gallery/teachersday 3.jpg",
      "/dynamic/IEI Gallery/teachersday 4.jpg",
      "/dynamic/IEI Gallery/teachersday 5.jpg",
      "/dynamic/IEI Gallery/ampup 1.JPG",
      "/dynamic/IEI Gallery/ampup 2.JPG",
      "/dynamic/IEI Gallery/ampup 3.JPG",
      "/dynamic/IEI Gallery/ampup 4.jpg",
      "/dynamic/IEI Gallery/executive body.jpg",
      "/dynamic/IEI Gallery/buildathon 1.png",
      "/dynamic/IEI Gallery/buildathon 2.png",
      "/dynamic/IEI Gallery/buildathon 3.png",
      "/dynamic/IEI Gallery/buildathon 4.png",
      "/dynamic/IEI Gallery/buildathon 5.png",
      "/dynamic/IEI Gallery/career vision 1.png",
      "/dynamic/IEI Gallery/career vision 2.png",
      "/dynamic/IEI Gallery/project.png",
      "/dynamic/IEI Gallery/winners.png",
      "/dynamic/IEI Gallery/audi.png",
      "/dynamic/IEI Gallery/republic day.png",
      "/dynamic/IEI Gallery/old batch 1.jpg",
      "/dynamic/IEI Gallery/old batch 2.png",
      "/dynamic/IEI Gallery/old batch 3.png",
    ],
    videos: [
      
    ]
  }

  const [showMoreImages, setShowMoreImages] = useState(false)
  const [maxImg, setmaxImg] = useState(8)
  const [maxVid, setmaxVid] = useState(5)

  const showMore = () => {
    setShowMoreImages(!showMoreImages)

    if (!showMoreImages) {
      setmaxImg(gallery.images.length)
      setmaxVid(gallery.videos.length)
    }
    else {
      setmaxImg(8)
      setmaxVid(5)
    }

    if (showMoreImages) {
      const toGallery = document.getElementById("gallery")
      toGallery.scrollIntoView({ behavior: "smooth" })
    }

  }

  const mouseIn = (e) => {
    e.target.setAttribute("controls", true)
  }
  const mouseOut = (e) => {
    e.target.removeAttribute("controls")
  }

  return (
    <main id='gallery' className='gallery'>
      <h2 className='headings'>Gallery</h2>

      <div className='collection'>

        <div className="imageAlbum">

          {
            gallery.images.slice(0, maxImg).map((isrc, index) => {
              return (
                <img key={isrc} src={isrc} alt={`image ${index}`} />
              )
            })
          }

        </div>
        {gallery.videos.length != 0 && <div className="videoAlbum">
          {
            gallery.videos.slice(0, maxVid).map((vsrc) => {
              return (
                <video controls="true" key={vsrc} src={vsrc}></video>
              )
            })
          }
        </div>}
        <button className='showBtn' onClick={showMore}>{showMoreImages ? "show less" : "show more"}</button>

      </div>

    </main>
  )
}

export default Gallery

// onMouseEnter={mouseIn} onMouseLeave={mouseOut}