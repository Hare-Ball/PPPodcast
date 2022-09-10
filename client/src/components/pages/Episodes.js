import React from 'react';
import './Episodes.css'
// import ytbanner from '../../assets/images/Alt YT Banner.png'
import ReactPlayer from 'react-player/youtube'


function AboutUs() {
    return(
        <div class="container col-12 justify-content-center" id= "AboutMe">
           <section class="card container col-12 justify-content-center">
           {/* <img class="container col-12 justify-content-center" alt= "Video Banner" src={ytbanner}></img> */}
                    <div class="container col-9 justify-content-center" id= "AboutMeText" >
                        <br></br>
                        <h3>Subscribe to the podcast to listen to the episodes, or you can listen to them here on YouTube</h3> 
                        <br></br>              
                    </div>
            </section>
            <br></br>
            <center>
                <section class="container col-12 justify-content-center" alt="Youtube Playlist" id="videoPlayer">
                    <ReactPlayer url="https://www.youtube.com/watch?v=-R0Z3BoGvPg&list=PL5jaVg6C7wiZ0UDGwE1ouxr7eqRGO5iJU" />
                </section>
            </center>
            <br></br>    
        </div>
    )
}

export default AboutUs;