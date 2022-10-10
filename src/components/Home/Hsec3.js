import React from 'react';
import image1 from '../../assets/images/black-rat-rattus-rattus-front-white-background.jpg'
import image2 from '../../assets/images/Tanglad_(lemongrass,_Cymbopogon_citratus)_-_Philippines.jpeg'

export default function Hsec3() {
  return (
    <section className='mt-2 mb-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='img-fluid rounded' src={image1} alt="left_home_body_image"></img>
                </div>

                <div className='col-md-6'>
                    <img className='img-fluid rounded' src={image2} alt="right_home_body_image"></img>
                </div>
                <div className='col-12'>
                    <div>
                        <h3 className='mt-3'>Why is the Issue of Invasive Alien Species (IAS) important?</h3>
                        <p>Impacts from invasive alien species can negatively affect multiple aspects ofAntigua and Barbuda society, both directly and indirectly. Invasive species negatively affect the health of forests, biodiversity, food gardens,commercial agriculture, food security, tourism, the wider economy and community health. Invasive species compete with (and often out compete)and/or directly harm the natural resources. These impacts are significant, real and costly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
