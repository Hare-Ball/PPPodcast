import React from 'react';
import './Footer.css'
import AppleButton from '../assets/badges/US_UK_Apple_Podcasts_Listen_Badge_RGB.svg';
import SpotifyButton from '../assets/badges/spotify-podcast-badge-blk-grn-165x40.svg';
import YoutubeButton from '../assets/badges/YouTube_full-color_icon_(2017).svg';
import InstagramThumbnail from '../assets/badges/Instagram_thumbnail_logo_2016.svg'

function Footer() {
    return(
        <div class= "container col-6 justify-content-center" id="Footer">
            <br></br>
            <a href="https://podcasts.apple.com/us/podcast/the-preaching-poetry-podcast/id1521373232">
            <img alt="Apple Podcasts" src={AppleButton} class= "Badges"></img></a>
            <a href="https://open.spotify.com/show/41L9EyVv1NzHsA4g8zPw7h">
            <img alt="Spotify" src={SpotifyButton} class="Badges"></img></a>
            <a href="https://www.instagram.com/preachingpoetry/">
            <img alt="Instgram" src={InstagramThumbnail} class="Badges"></img></a>
            <a href="https://www.youtube.com/channel/UCZ9isz1ktAInXZxTTc0sJXQ">
            <img alt="Youtube" src={YoutubeButton} class="Badges"></img></a>

    </div>        
        )
}

export default Footer;





