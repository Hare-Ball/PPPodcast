import React from 'react';
import './AboutUs.css'
// import profile from '../../assets/images/Palo-Duro-Profile-Pic.jpg'

function AboutUs() {
    return(
        <div class="container col-12 justify-content-center" id= "AboutMe">
           <section class="card">
           {/* <img class="container col-4 justify-content-center" alt= "Profile Pic" src={profile}></img> */}
                <br />
                <div class="container col-9 justify-content-center" id= "AboutMeText" >
                <h1>The Preaching Poetry Podcast uses poetry to inspire conversation and to rediscover the world. We use poetry to have deep discussions, to help inspire and motivate us, and to help us find tools to become the people that we want to be.</h1>
               
                    </div>
            </section>
        </div>
    )
}

export default AboutUs;