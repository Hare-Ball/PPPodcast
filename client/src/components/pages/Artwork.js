import React from 'react';
import './Artwork.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import opportunity1 from '../../assets/images/Season 1 Art/Opportunity- Edward R. Sill 1.png';
import opportunity2 from '../../assets/images/Season 1 Art/Opportunity- Edward R. Sill 2.png';
import opportunity3 from '../../assets/images/Season 1 Art/Opportunity- Edward R. Sill 3.png';
import invictus1 from '../../assets/images/Season 1 Art/Invictus- William Ernest Henley 1.png';
import invictus2 from '../../assets/images/Season 1 Art/Invictus- William Ernest Henley 2.png';
import invictus3 from '../../assets/images/Season 1 Art/Invictus- William Ernest Henley 3.png';
import invictus4 from '../../assets/images/Season 1 Art/Invictus- William Ernest Henley 4.png';
import ode1 from '../../assets/images/Season 1 Art/Ode 1.11 - Horace 1.png';
import ode2 from '../../assets/images/Season 1 Art/Ode 1.11 - Horace 2.png';
import ode3 from '../../assets/images/Season 1 Art/Ode 1.11 - Horace 3.png';
import ode4 from '../../assets/images/Season 1 Art/Ode 1.11 - Horace 4.png';
import ozymandias1 from '../../assets/images/Season 1 Art/“Ozymandias_ by Percy Bysshe Shelley 1.png';
import ozymandias2 from '../../assets/images/Season 1 Art/“Ozymandias_ by Percy Bysshe Shelley 2.png';
import ozymandias3 from '../../assets/images/Season 1 Art/“Ozymandias_ by Percy Bysshe Shelley 3.png';
import ozymandias4 from '../../assets/images/Season 1 Art/“Ozymandias_ by Percy Bysshe Shelley 4.png';
import crumbling1 from '../../assets/images/Season 1 Art/“Crumbling is not an instants Act_ by Emily Dickinson 1.png'
import crumbling2 from '../../assets/images/Season 1 Art/“Crumbling is not an instants Act_ by Emily Dickinson 2.png'
import crumbling3 from '../../assets/images/Season 1 Art/“Crumbling is not an instants Act_ by Emily Dickinson 3.png'

function Artwork() {
  return (
    <Container>
      <Row> 
         <img id= "instagram" alt= "Opportunity Artwork 1" src={opportunity1}></img>
         <img id= "instagram" alt= "Opportunity Artwork 2" src={opportunity2}></img>
         <img id= "instagram" alt= "Opportunity Artwork 3" src={opportunity3}></img>
      </Row>
      <Row>
        <img id= "instagram" alt= "Invictus Artwork 1" src={invictus1}></img>
        <img id= "instagram" alt= "Invictus Artwork 2" src={invictus2}></img>
        <img id= "instagram" alt= "Invictus Artwork 3" src={invictus3}></img>
        <img id= "instagram" alt= "Invictus Artwork 4" src={invictus4}></img>
      </Row>
      <Row>
        <img id= "instagram" alt= "Ode 1.11 Artwork 1" src={ode1}></img>
        <img id= "instagram" alt= "Ode 1.11 Artwork 2" src={ode2}></img>
        <img id= "instagram" alt= "Ode 1.11 Artwork 3" src={ode3}></img>
        <img id= "instagram" alt= "Ode 1.11 Artwork 4" src={ode4}></img>
      </Row>
      <Row>
      <img id= "instagram" alt= "Ozymandias Artwork 1" src={ozymandias1}></img>
      <img id= "instagram" alt= "Ozymandias Artwork 2" src={ozymandias2}></img>
      <img id= "instagram" alt= "Ozymandias Artwork 3" src={ozymandias3}></img>
      <img id= "instagram" alt= "Ozymandias Artwork 4" src={ozymandias4}></img>
      </Row>
      <Row>
      <img id= "instagram" alt= "Crumbling Artwork 1" src={crumbling1}></img>
      <img id= "instagram" alt= "Crumbling Artwork 2" src={crumbling2}></img>
      <img id= "instagram" alt= "Crumbling Artwork 3" src={crumbling3}></img>
      </Row>
    </Container>
  );
}

export default Artwork;