import React from 'react';
// import './AboutMe.css'
// import profile from '../../assets/images/Palo-Duro-Profile-Pic.jpg'

function AboutUs() {
    return(
        <div class="container col-12 justify-content-center" id= "AboutMe">
           <section class="card">
           {/* <img class="container col-4 justify-content-center" alt= "Profile Pic" src={profile}></img> */}
                <br />
                <div class="container col-9 justify-content-center" id= "AboutMeText" >
                <p>The Preaching Poetry Podcast uses poetry to inspire conversation and to rediscover the world. We use poetry to have deep discussions, to help motivate us, and to help us find tools to become the people that we want to be.</p>
               
                    </div>
            </section>
        </div>
    )
}

export default AboutUs;