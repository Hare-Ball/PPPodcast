import React from 'react';
// import './Artwork.css'
import opportunity1 from '../../assets/images/Season 1 Art/Opportunity- Edward R. Sill 1.png';
import opportunity2 from '../../assets/images/Season 1 Art/Opportunity- Edward R. Sill 2.png';
import opportunity3 from '../../assets/images/Season 1 Art/Opportunity- Edward R. Sill 3.png';


function Artwork() {
    return(
        <div class="container col-12 justify-content-center" id= "Artwork">
           <section class="card">
                    <br />
                <img class="container col-9 justify-content-center" alt= "Opportunity Artwork 1" src={opportunity1}></img>
                     <br />
                    <div class="container col-9 justify-content-center" id= "Episode" >
                        <p>"Opportunity" by Edward R. Sill 1.1</p>
                    </div>
                    <br />
                 <img class="container col-9 justify-content-center" alt= "Opportunity Artwork 2" src={opportunity2}></img>
                    <br />
                    <div class="container col-9 justify-content-center" id= "Episode" >
                        <p>"Opportunity" by Edward R. Sill 1.2</p>
                    </div>
                    <br />
                 <img class="container col-9 justify-content-center" alt= "Opportunity Artwork 2" src={opportunity3}></img>
                    <br />
                    <div class="container col-9 justify-content-center" id= "Episode" >
                        <p>"Opportunity" by Edward R. Sill 1.3</p>
                    </div>
            </section>
        </div>
    )
}

export default Artwork;