import React from 'react'
import { useState } from 'react'
import "../css/gallery.css"

const Gallery = () => {

  let gallery = {
    images: [
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
      "https://placehold.it/230x150",
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