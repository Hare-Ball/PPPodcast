import React from 'react';
import './Episodes.css'
import ytbanner from '../../assets/images/Alt YT Banner.png'
import ReactPlayer from 'react-player/youtube'


function AboutUs() {
    return(
        <div class="container col-12 justify-content-center" id= "AboutMe">
           <section class="card">
           <img class="container col-9 justify-content-center" alt= "Video Banner" src={ytbanner}></img>
                    <div class="container col-7 justify-content-center" id= "AboutMeText" >
                        <p>You can subscribe to the podcast to listen to the episodes, or you can listen to them here on YouTube</p>               
                    </div>
            </section>
            <br></br>
            <section class="container col-12 justify-content-center" alt="Youtube Playlist">
                <ReactPlayer url="https://www.youtube.com/watch?v=-R0Z3BoGvPg&list=PL5jaVg6C7wiZ0UDGwE1ouxr7eqRGO5iJU" />
            </section>
            <br></br>    
        </div>
    )
}

export default AboutUs;