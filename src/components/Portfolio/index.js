import React from 'react';
import '../../App.css';
import PhotoList from '../photolist';

function Portfolio(){


        return(
          <>
            <h1 class="portfolioH1">Portfolio</h1>
            <div class="portfolioContainer">
            <PhotoList />
            </div>
          </>
    )
 
}

export default Portfolio;

