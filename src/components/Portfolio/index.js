import React from 'react';
//package used for image gallery: react-image-gallery
import ImageGallery from 'react-image-gallery';
import photo1 from '../../images/0.jpg';
import photo2 from '../../images/1.png';
import photo3 from '../../images/2.png';
import photo4 from '../../images/3.png';
import photo5 from '../../images/4.png';
import photo6 from '../../images/6.jpg';
import photo7 from '../../images/7.jpg';


function Portfolio(){
    const images = [
        {
          original: photo1,
          thumbnail: photo1,
        },
        {
          original: photo2,
          thumbnail: photo2
        },
        {
          original: photo3,
          thumbnail: photo3
        },
        {
            original: photo4,
            thumbnail: photo4
          },
          {
            original: photo5,
            thumbnail: photo5
          },
          {
            original: photo6,
            thumbnail: photo6
          },
          {
            original: photo7,
            thumbnail: photo7
          }
          
      ]
    return (
        <>
          <ImageGallery items={images} />
        </>
     
    )
}

export default Portfolio;

