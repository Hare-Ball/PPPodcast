import React from 'react';
// import './AboutMe.css'
import ytbanner from '../../assets/images/Alt YT Banner.png'


function AboutUs() {
    return(
        <div class="container col-12 justify-content-center" id= "AboutMe">
           <section class="card">
           <img class="container col-9 justify-content-center" alt= "Video Banner" src={ytbanner}></img>
                    <div class="container col-7 justify-content-center" id= "AboutMeText" >
                        <p>Watch Episodes here or on YouTube</p>               
                    </div>
            </section>
        </div>
    )
}

export default AboutUs;